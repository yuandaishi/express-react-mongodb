interface MenuList {
    url?: string
    des: string
    icon?: string
    key: string
    children?: Array<MenuList>
}

const menuData: Array<MenuList> = [
    {
        url: '/content/public/fruits',
        des: '水果',
        icon: 'user',
        key: '001',
        children: [
            {
                url: '/content/public/banana',
                des: '香蕉',
                icon: 'shake',
                key: '0010001',
            },
            {
                url: '/content/public/apple',
                des: '苹果',
                icon: 'table',
                key: '0010002',
            }
        ]
    },
    {
        url: '/content/public/livestock',
        des: '牲畜',
        icon: 'laptop',
        key: '002',
        children: [
            {
                url: '/content/public/pig',
                des: '猪',
                icon: 'upload',
                key: '002001',
            },
            {
                url: '/content/public/cow',
                des: '牛',
                icon: 'appstore',
                key: '002002',
            }
        ]
    },
    {
        url: '/content/public/furniture',
        des: '家具',
        icon: 'gift',
        key: '003',
        children: [
            {
                url: '/content/public/desk',
                des: '桌子',
                icon: 'bar-chart',
                key: '003001',
                children: [
                    {
                        url: '/content/public/SquareDesk',
                        des: '方桌',
                        icon: 'cloud-o',
                        key: '003001001',
                    }
                ]
            }
        ]
    },
    {
        url: '/content/public/form',
        des: '表单优化',
        icon: 'user',
        key: '004',
        children: [
            {
                url: '/content/public/demo1',
                des: 'demo1',
                icon: 'shake',
                key: '0040001',
            },
        ]
    },
]
export default menuData