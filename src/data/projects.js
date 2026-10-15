
export const projects = [
    {
        id: 'clothings',
        name: 'CLOthings',
        subtitle: '全端電商平台',
        description:
            '使用 Vue 3 與 ASP.NET Core 開發的電商專題，參與會員系統、身分驗證、權限管理、版本控制與雲端部署。',
        highlights: [
            'JWT 身分驗證與 RBAC 權限管理',
            'Email 驗證、2FA 與第三方登入',
            'REST API 與 SQL Server 資料存取',
            'GitHub Actions 與 Azure 部署',
        ],
        technologies: ['Vue 3', 'C#', 'ASP.NET Core', 'SQL Server', 'Azure'],
        categories: ['Full Stack', 'Backend', 'Security'],
        github: '',
        demo: '',

        image: '/images/projects/clothings-home.webp',
        role: '會員系統、版本控制與雲端部署',
        architecture: [
            'Vue 3 + Pinia + Axios',
            'ASP.NET Core Web API',
            'Entity Framework Core',
            'SQL Server / Azure SQL',
        ],
        challenges: [
            {
                title: '身分驗證與權限管理',
                detail:
                    '透過 JWT 與角色權限控制，處理不同使用者的存取需求。',
            },
            {
                title: '帳號安全機制',
                detail:
                    '整合密碼雜湊、Email 驗證與雙因素驗證流程。',
            },
            {
                title: '前後端部署',
                detail:
                    '使用 GitHub Actions 與 Azure 建立部署流程。',
            },
        ],

    },
    {
        id: 'zenfone-backup',
        name: 'Zenfone Backup Tool',
        subtitle: 'Android 自動化備份工具',
        description:
            '以 C# 與 Android Debug Bridge 開發的工具，探索 APK 資訊擷取、桌面資料夾掃描及自動化備份流程。',
        highlights: [
            'ADB 裝置連線與指令整合',
            'APK 資訊擷取與備份',
            'UIAutomator 桌面結構分析',
            '自動化流程與錯誤處理',
        ],
        technologies: ['C#', '.NET', 'ADB', 'Android', 'UIAutomator'],
        categories: ['Tools', 'System'],
        github: '',
        demo: '',

        image: '/images/projects/zenfone-backup.webp',
        role: '個人開發與自動化流程設計',
        architecture: [
            'C# / .NET',
            'Android Debug Bridge',
            'AAPT2',
            'UIAutomator',
        ],
        challenges: [
            {
                title: 'Android 系統權限限制',
                detail:
                    '研究 Launcher 資料存取限制，改用 UIAutomator 分析畫面結構。',
            },
            {
                title: 'APK 資訊擷取',
                detail:
                    '整合 ADB 與 AAPT2，取得應用程式資訊並執行備份。',
            },
            {
                title: '自動化操作',
                detail:
                    '建立畫面掃描與操作流程，減少人工整理的步驟。',
            },
        ],

    },
]
