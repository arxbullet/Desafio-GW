const routes = {
    'uidesigner' : {
        'views': [
            {
                'path': '/dashboard',
                'label': 'Dashboard',
                'icon': 'dashboard'
            },
            {
                'path': '/teamchat',
                'label': 'Team Chat',
                'icon': 'chat'
            },
            {
                'path': '/calendar',
                'label': 'Calendar',
                'icon': 'date_range'
            },
            {
                'path': '/team',
                'label': 'Team',
                'icon': 'group'
            },
            {
                'path': '/statistics',
                'label': 'Statistics',
                'icon': 'pie_chart'
            },
            {
                'path': '/setting',
                'label': 'Setting',
                'icon': 'settings'
            },
        ],
        order : 1
    },
    'default': {
        'views': [
            {
                'path': '/logout',
                'label': 'Log out',
                'icon': 'exit_to_app'
            }
        ]
    }
}
export default routes 