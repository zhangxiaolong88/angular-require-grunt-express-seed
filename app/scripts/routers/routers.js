'use strict';

define([], function() {
	return {
		home: {
			title: '首页',
			route: '/home',
			template: 'views/main.html',
			controller: 'appController'
		},
		worldmap: {
			title: '世界地图',
			route: '/worldmap-register',
			list: {
				active: {
					title: '在线人数',
					route: '/worldmap-active',
					template: 'views/worldMapActive.html',
					controller: 'worldMapActiveController'
				},
				money: {
					title: '充值金额',
					route: '/worldmap-money',
					template: 'views/worldMapMoney.html',
					controller: 'worldMapMoneyController'
				},
				register: {
					title: '注册人数',
					route: '/worldmap-register',
					template: 'views/worldMapRegister.html',
					controller: 'worldMapRegisterController'
				}
			}
		}

	};
})