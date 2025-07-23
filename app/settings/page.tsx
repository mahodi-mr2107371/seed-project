'use client';
import React, { useState, useEffect } from 'react'
import {
    User,
    Bell,
    Shield,
    Palette,
    Globe,
    CreditCard,
    HelpCircle,
    ChevronRight,
    Moon,
    Sun,
    Check
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Define types for different item variations
type BaseItem = {
    label: string;
}

type ActionItem = BaseItem & {
    action: string;
    href?: string;
    value?: string;
}

type ToggleItem = BaseItem & {
    description?: string;
    toggle: boolean;
    onToggle: (value: boolean) => void;
}

type DropdownItem = BaseItem & {
    value: string;
    dropdown: string[];
    onChange: (value: string) => void;
}

type SettingsItem = ActionItem | ToggleItem | DropdownItem;

type SettingsSection = {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    items: SettingsItem[];
}

// Type guards to check item types
const isToggleItem = (item: SettingsItem): item is ToggleItem => {
    return 'toggle' in item;
}

const isDropdownItem = (item: SettingsItem): item is DropdownItem => {
    return 'dropdown' in item;
}

const isActionItem = (item: SettingsItem): item is ActionItem => {
    return 'action' in item;
}

const Settings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);
    const [marketingEmails, setMarketingEmails] = useState(true);
    const [twoFactor, setTwoFactor] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState('english');

    // Initialize dark mode from localStorage/system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

        setDarkMode(preferredTheme === 'dark');
        document.documentElement.classList.toggle('dark', preferredTheme === 'dark');
    }, []);

    // Handle dark mode toggle
    const handleDarkModeToggle = (newValue: boolean) => {
        setDarkMode(newValue);
        const newTheme = newValue ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', newValue);
        localStorage.setItem('theme', newTheme);
    };

    const settingsSections: SettingsSection[] = [
        {
            title: "Profile",
            icon: User,
            items: [
                { label: "Personal Information", action: "Edit", href: "#" },
                { label: "Email Address", value: "user@example.com", action: "Change" },
                { label: "Password", value: "••••••••", action: "Update" },
                { label: "Profile Picture", action: "Upload" },
            ]
        },
        {
            title: "Notifications",
            icon: Bell,
            items: [
                {
                    label: "Email Notifications",
                    description: "Receive course updates via email",
                    toggle: emailNotifications,
                    onToggle: setEmailNotifications
                },
                {
                    label: "Push Notifications",
                    description: "Receive push notifications",
                    toggle: pushNotifications,
                    onToggle: setPushNotifications
                },
                {
                    label: "Marketing Emails",
                    description: "Receive promotional content",
                    toggle: marketingEmails,
                    onToggle: setMarketingEmails
                },
            ]
        },
        {
            title: "Security",
            icon: Shield,
            items: [
                {
                    label: "Two-Factor Authentication",
                    description: "Add an extra layer of security",
                    toggle: twoFactor,
                    onToggle: setTwoFactor
                },
                { label: "Active Sessions", value: "3 devices", action: "Manage" },
                { label: "Login History", action: "View" },
            ]
        },
        {
            title: "Appearance",
            icon: Palette,
            items: [
                {
                    label: "Dark Mode",
                    description: "Toggle dark theme",
                    toggle: darkMode,
                    onToggle: handleDarkModeToggle
                },
            ]
        },
        {
            title: "Language & Region",
            icon: Globe,
            items: [
                {
                    label: "Language",
                    value: language,
                    dropdown: ['English', 'Spanish', 'French', 'German'],
                    onChange: setLanguage
                },
                { label: "Time Zone", value: "UTC-5 (EST)", action: "Change" },
                { label: "Date Format", value: "MM/DD/YYYY", action: "Change" },
            ]
        },
        {
            title: "Billing",
            icon: CreditCard,
            items: [
                { label: "Payment Method", value: "•••• 4242", action: "Update" },
                { label: "Billing History", action: "View" },
                { label: "Subscription", value: "Pro Plan", action: "Manage" },
            ]
        }
    ];

    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="px-6 py-4 border-b">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold">Settings</h1>
                    <p className="text-muted-foreground text-sm mt-1">Manage your account settings and preferences</p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 overflow-auto ">
                <div className="max-w-4xl mx-auto p-6 space-y-6">
                    {settingsSections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <Card key={section.title} className="hover:shadow-lg transition-shadow duration-200">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Icon className="h-5 w-5" />
                                        {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {section.items.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between py-3 border-b last:border-0"
                                        >
                                            <div className="flex-1">
                                                <div className="font-medium">{item.label}</div>
                                                {isToggleItem(item) && item.description && (
                                                    <div className="text-sm text-muted-foreground">{item.description}</div>
                                                )}
                                                {((isActionItem(item) && item.value) || (isDropdownItem(item) && !item.dropdown)) && (
                                                    <div className="text-sm text-muted-foreground">{item.value}</div>
                                                )}
                                            </div>

                                            {/* Toggle Switch */}
                                            {isToggleItem(item) && (
                                                <button
                                                    onClick={() => item.onToggle(!item.toggle)}
                                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${item.toggle ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                                                        }`}
                                                >
                                                    <span
                                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${item.toggle ? 'translate-x-6' : 'translate-x-1'
                                                            }`}
                                                    />
                                                </button>
                                            )}

                                            {/* Dropdown */}
                                            {isDropdownItem(item) && (
                                                <select
                                                    value={item.value}
                                                    onChange={(e) => item.onChange(e.target.value)}
                                                    className="px-3 py-1 border rounded-md bg-white dark:bg-gray-800"
                                                >
                                                    {item.dropdown.map((option: string) => (
                                                        <option key={option} value={option.toLowerCase()}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </select>
                                            )}

                                            {/* Action Button */}
                                            {isActionItem(item) && item.action && (
                                                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                                                    {item.action}
                                                    <ChevronRight className="h-4 w-4" />
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        );
                    })}

                    {/* Additional Actions */}
                    <Card className="border-red-200 dark:border-red-900">
                        <CardHeader>
                            <CardTitle className="text-red-600">Danger Zone</CardTitle>
                            <CardDescription>Irreversible actions</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-medium">Delete Account</div>
                                    <div className="text-sm text-muted-foreground">
                                        Permanently delete your account and all data
                                    </div>
                                </div>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                                    Delete Account
                                </button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Help Section */}
                    <div className="flex items-center justify-center py-8">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                            <HelpCircle className="h-5 w-5" />
                            Need help? Contact Support
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Settings;