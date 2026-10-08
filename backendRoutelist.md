GET|HEAD        / .............................................................................. frontend.game.list › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@index
  GET|HEAD        _debugbar/assets/javascript ............................................................................. debugbar.assets.js › Barryvdh\Debugbar › AssetController@js
  GET|HEAD        _debugbar/assets/stylesheets .......................................................................... debugbar.assets.css › Barryvdh\Debugbar › AssetController@css
  DELETE          _debugbar/cache/{key}/{tags?} .................................................................... debugbar.cache.delete › Barryvdh\Debugbar › CacheController@delete
  GET|HEAD        _debugbar/clockwork/{id} ................................................................... debugbar.clockwork › Barryvdh\Debugbar › OpenHandlerController@clockwork
  GET|HEAD        _debugbar/open .............................................................................. debugbar.openhandler › Barryvdh\Debugbar › OpenHandlerController@handle
  POST            _debugbar/queries/explain .................................................................. debugbar.queries.explain › Barryvdh\Debugbar › QueriesController@explain
  POST            api/V2 ...................................................................................................... VanguardLTE\Http\Controllers\Api\V2\AtmController@index
  POST            api/agent/trial .............................................................................................. VanguardLTE\Http\Controllers\Api\BasicController@agent
  GET|HEAD        api/cashier/readbalance .................................................................... VanguardLTE\Http\Controllers\Api\Player\StatusController@loadShopBalance
  GET|HEAD        api/cashier/readinamounts .................................................................... VanguardLTE\Http\Controllers\Api\Player\StatusController@loadInAmounts
  GET|HEAD        api/category ................................................................................. VanguardLTE\Http\Controllers\Api\Categories\CategoriesController@index
  GET|HEAD        api/credits .......................................................................................... VanguardLTE\Http\Controllers\Api\Player\CreditController@index
  GET|HEAD        api/credits/depositusb ...................................................................... VanguardLTE\Http\Controllers\Api\Player\CreditController@creditsDeposit
  GET|HEAD        api/credits/pending-depositusb ............................................................... VanguardLTE\Http\Controllers\Api\Player\CreditController@pendingCashIN
  POST            api/demo ..................................................................................................... VanguardLTE\Http\Controllers\Api\BasicController@index
  GET|HEAD        api/games .............................................................................................. VanguardLTE\Http\Controllers\Api\Games\GamesController@index
  GET|HEAD        api/happyhours ........................................................................................... VanguardLTE\Http\Controllers\Api\HappyHourController@index
  GET|HEAD        api/jackpots ..................................................................................... VanguardLTE\Http\Controllers\Api\Jackpots\JackpotsController@index
  POST            api/login ................................................................................................ VanguardLTE\Http\Controllers\Api\Auth\AuthController@login
  POST            api/logout .............................................................................................. VanguardLTE\Http\Controllers\Api\Auth\AuthController@logout
  GET|HEAD        api/me ............................................................................................. VanguardLTE\Http\Controllers\Api\Profile\DetailsController@index
  POST            api/me/balance ................................................................................... VanguardLTE\Http\Controllers\Api\Profile\DetailsController@balance
  PATCH           api/me/details .................................................................................... VanguardLTE\Http\Controllers\Api\Profile\DetailsController@update
  GET|HEAD        api/me/refund .................................................................................... VanguardLTE\Http\Controllers\Api\Profile\DetailsController@refunds
  GET|HEAD        api/mobile/balance/refresh ................................................................. VanguardLTE\Http\Controllers\Api\Mobile\ProfileController@balanceRefresh
  GET|HEAD        api/mobile/favorites .............................................................................. VanguardLTE\Http\Controllers\Api\Mobile\GamesController@favorites
  POST            api/mobile/favorites/add/{game} ................................................................ VanguardLTE\Http\Controllers\Api\Mobile\GamesController@favoritesAdd
  DELETE          api/mobile/favorites/remove/{game} .......................................................... VanguardLTE\Http\Controllers\Api\Mobile\GamesController@favoritesRemove
  GET|HEAD        api/mobile/games ...................................................................................... VanguardLTE\Http\Controllers\Api\Mobile\GamesController@games
  GET|HEAD        api/mobile/games/categories ...................................................................... VanguardLTE\Http\Controllers\Api\Mobile\GamesController@categories
  POST            api/mobile/login ......................................................................................... VanguardLTE\Http\Controllers\Api\Auth\AuthController@login
  POST            api/mobile/logout ....................................................................................... VanguardLTE\Http\Controllers\Api\Auth\AuthController@logout
  GET|HEAD        api/mobile/profile ................................................................................ VanguardLTE\Http\Controllers\Api\Mobile\ProfileController@profile
  GET|HEAD        api/paysystems ........................................................................................ VanguardLTE\Http\Controllers\Api\GeneralController@paysystems
  GET|HEAD        api/pincodes ............................................................................................. VanguardLTE\Http\Controllers\Api\PincodessController@index
  POST            api/pincodes/check ................................................................................. VanguardLTE\Http\Controllers\Api\Profile\DetailsController@check
  POST            api/pincodes/mass ......................................................................................... VanguardLTE\Http\Controllers\Api\PincodessController@mass
  POST            api/pincodes/store ....................................................................................... VanguardLTE\Http\Controllers\Api\PincodessController@store
  DELETE          api/pincodes/{pincode}/destroy ......................................................................... VanguardLTE\Http\Controllers\Api\PincodessController@destroy
  PUT             api/pincodes/{pincode}/update ........................................................................... VanguardLTE\Http\Controllers\Api\PincodessController@update
  GET|HEAD        api/player/apilogin/{token} ....................................................................... VanguardLTE\Http\Controllers\Api\Player\StatusController@apiLogin
  GET|HEAD        api/player/check-user-login ................................................................. VanguardLTE\Http\Controllers\Api\Player\StatusController@checkUserLogin
  GET|HEAD        api/player/getlic ........................................................................... VanguardLTE\Http\Controllers\Api\Player\LicenseController@AskForLicense
  GET|HEAD        api/player/isonline ................................................................ VanguardLTE\Http\Controllers\Api\Player\StatusController@checkUsecheckUserOnline
  POST            api/player/licsaved .............................................................................. VanguardLTE\Http\Controllers\Api\Player\LicenseController@LicSaved
  GET|HEAD        api/player/read ................................................................................ VanguardLTE\Http\Controllers\Api\Player\StatusController@getUserData
  GET|HEAD        api/player/score ............................................................................ VanguardLTE\Http\Controllers\Api\Player\StatusController@checkUserScore
  GET|HEAD        api/player/testlogin ..................................................................... VanguardLTE\Http\Controllers\Api\Player\StatusController@checkUserLoginSyn
  GET|HEAD        api/player/withdrawticket ..................................................................... VanguardLTE\Http\Controllers\Api\Player\TicketController@payoutTicket
  GET|HEAD        api/shifts/info ........................................................................................... VanguardLTE\Http\Controllers\Api\OpenShiftController@info
  PUT             api/shifts/start ................................................................................... VanguardLTE\Http\Controllers\Api\OpenShiftController@start_shift
  GET|HEAD        api/shops ..................................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@index
  POST            api/shops/admin ............................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@admin
  PUT             api/shops/block .......................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@shop_block
  POST            api/shops/create .............................................................................................. VanguardLTE\Http\Controllers\Api\ShopController@store
  GET|HEAD        api/shops/currency ......................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@currency
  PUT             api/shops/unblock ...................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@shop_unblock
  DELETE          api/shops/{id}/destroy ...................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@destroy
  GET|HEAD        api/shops/{id}/view ............................................................................................ VanguardLTE\Http\Controllers\Api\ShopController@view
  PUT             api/shops/{shop}/balance/{type} ............................................................................. VanguardLTE\Http\Controllers\Api\ShopController@balance
  PUT             api/shops/{shop}/update ...................................................................................... VanguardLTE\Http\Controllers\Api\ShopController@update
  POST            api/sms .............................................................................................. VanguardLTE\Http\Controllers\Api\Profile\DetailsController@sms
  GET|HEAD        api/stats/game .................................................................................. VanguardLTE\Http\Controllers\Api\GameStats\GameStatsController@game
  GET|HEAD        api/stats/pay .................................................................................... VanguardLTE\Http\Controllers\Api\GameStats\GameStatsController@pay
  GET|HEAD        api/stats/shift ................................................................................ VanguardLTE\Http\Controllers\Api\GameStats\GameStatsController@shift
  GET|HEAD        api/users ................................................................................ users.index › VanguardLTE\Http\Controllers\Api\Users\UsersController@index
  POST            api/users ................................................................................ users.store › VanguardLTE\Http\Controllers\Api\Users\UsersController@store
  POST            api/users/mass .......................................................................................... VanguardLTE\Http\Controllers\Api\Users\UsersController@mass
  GET|HEAD        api/users/{user} ........................................................................... users.show › VanguardLTE\Http\Controllers\Api\Users\UsersController@show
  PUT|PATCH       api/users/{user} ....................................................................... users.update › VanguardLTE\Http\Controllers\Api\Users\UsersController@update
  DELETE          api/users/{user} ..................................................................... users.destroy › VanguardLTE\Http\Controllers\Api\Users\UsersController@destroy
  PUT             api/users/{user}/balance/{type} .................................................................... VanguardLTE\Http\Controllers\Api\Users\BalanceController@balance
  GET|HEAD        api/users/{user}/edit ...................................................................... users.edit › VanguardLTE\Http\Controllers\Api\Users\UsersController@edit
  GET|HEAD        backend ...................................................................... backend.dashboard › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@index
  POST            backend/2fa ..................................................................................................................................................... 2fa
  GET|HEAD        backend/activity ......................................................... backend.activity.index › VanguardLTE\Http\Controllers\Web\Backend\ActivityController@index
  DELETE          backend/activity/clear ................................................... backend.activity.clear › VanguardLTE\Http\Controllers\Web\Backend\ActivityController@clear
  GET|HEAD        backend/activity/system ................................................ backend.activity.system › VanguardLTE\Http\Controllers\Web\Backend\ActivityController@system
  GET|HEAD        backend/activity/user ...................................................... backend.activity.user › VanguardLTE\Http\Controllers\Web\Backend\ActivityController@user
  GET|HEAD        backend/activity/user/{user}/log ............................... backend.activity.user.log › VanguardLTE\Http\Controllers\Web\Backend\ActivityController@userActivity
  GET|HEAD        backend/api ......................................................................... backend.api.list › VanguardLTE\Http\Controllers\Web\Backend\ApiController@index
  POST            backend/api/balance ............................................................ backend.api.balance › VanguardLTE\Http\Controllers\Web\Backend\ApiController@balance
  GET|HEAD        backend/api/create ............................................................... backend.api.create › VanguardLTE\Http\Controllers\Web\Backend\ApiController@create
  POST            backend/api/create ................................................................. backend.api.store › VanguardLTE\Http\Controllers\Web\Backend\ApiController@store
  GET|HEAD        backend/api/generate ......................................................... backend.api.generate › VanguardLTE\Http\Controllers\Web\Backend\ApiController@generate
  GET|HEAD        backend/api/json ..................................................................... backend.api.json › VanguardLTE\Http\Controllers\Web\Backend\ApiController@json
  DELETE          backend/api/{api}/delete ......................................................... backend.api.delete › VanguardLTE\Http\Controllers\Web\Backend\ApiController@delete
  GET|HEAD        backend/api/{api}/edit ............................................................... backend.api.edit › VanguardLTE\Http\Controllers\Web\Backend\ApiController@edit
  POST            backend/api/{api}/update ......................................................... backend.api.update › VanguardLTE\Http\Controllers\Web\Backend\ApiController@update
  GET|HEAD        backend/articles ........................................................... backend.article.list › VanguardLTE\Http\Controllers\Web\Backend\ArticlesController@index
  GET|HEAD        backend/articles/create ................................................. backend.article.create › VanguardLTE\Http\Controllers\Web\Backend\ArticlesController@create
  POST            backend/articles/create ................................................... backend.article.store › VanguardLTE\Http\Controllers\Web\Backend\ArticlesController@store
  DELETE          backend/articles/{article}/delete ....................................... backend.article.delete › VanguardLTE\Http\Controllers\Web\Backend\ArticlesController@delete
  GET|HEAD        backend/articles/{article}/edit ............................................. backend.article.edit › VanguardLTE\Http\Controllers\Web\Backend\ArticlesController@edit
  POST            backend/articles/{article}/update ....................................... backend.article.update › VanguardLTE\Http\Controllers\Web\Backend\ArticlesController@update
  GET|HEAD        backend/atm ............................................................................................ VanguardLTE\Http\Controllers\Web\Backend\AtmController@index
  GET|HEAD        backend/atm/create .............................................................................. VanguardLTE\Http\Controllers\Web\Backend\AtmController@createNewAtm
  GET|HEAD        backend/atm/delete/{id}/{api_id} ................................................................... VanguardLTE\Http\Controllers\Web\Backend\AtmController@deleteATM
  GET|HEAD        backend/atm/newkey/{api_id} ........................................................................ VanguardLTE\Http\Controllers\Web\Backend\AtmController@newApiKey
  GET|HEAD        backend/atm/reset ................................................................................... VanguardLTE\Http\Controllers\Web\Backend\AtmController@resetAtm
  GET|HEAD        backend/atm/status/{status} ..................................................................... VanguardLTE\Http\Controllers\Web\Backend\AtmController@statusUpdate
  GET|HEAD        backend/balance ................................................................ backend.balance › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@balance
  GET|HEAD        backend/banks .................................................................... backend.banks › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@banks
  POST            backend/banks ...................................................... backend.banks.update › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@banks_update
  POST            backend/banks/update ......................................... backend.banks.update.do › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@do_banks_update
  GET|HEAD        backend/category ........................................................ backend.category.list › VanguardLTE\Http\Controllers\Web\Backend\CategoriesController@index
  GET|HEAD        backend/category/create .............................................. backend.category.create › VanguardLTE\Http\Controllers\Web\Backend\CategoriesController@create
  POST            backend/category/create ................................................ backend.category.store › VanguardLTE\Http\Controllers\Web\Backend\CategoriesController@store
  DELETE          backend/category/{category}/delete ................................... backend.category.delete › VanguardLTE\Http\Controllers\Web\Backend\CategoriesController@delete
  GET|HEAD        backend/category/{category}/edit ......................................... backend.category.edit › VanguardLTE\Http\Controllers\Web\Backend\CategoriesController@edit
  POST            backend/category/{category}/update ................................... backend.category.update › VanguardLTE\Http\Controllers\Web\Backend\CategoriesController@update
  GET|HEAD        backend/credits ............................................................... backend.credit.list › VanguardLTE\Http\Controllers\Web\Backend\CreditController@index
  GET|HEAD        backend/credits/create ..................................................... backend.credit.create › VanguardLTE\Http\Controllers\Web\Backend\CreditController@create
  POST            backend/credits/create ....................................................... backend.credit.store › VanguardLTE\Http\Controllers\Web\Backend\CreditController@store
  GET|HEAD        backend/credits/{credit}/buy ..................................................... backend.credit.buy › VanguardLTE\Http\Controllers\Web\Backend\CreditController@buy
  GET|HEAD        backend/credits/{credit}/buy/{system} .................................... backend.credit.payment › VanguardLTE\Http\Controllers\Web\Backend\CreditController@payment
  DELETE          backend/credits/{credit}/delete ............................................ backend.credit.delete › VanguardLTE\Http\Controllers\Web\Backend\CreditController@delete
  GET|HEAD        backend/credits/{credit}/edit .................................................. backend.credit.edit › VanguardLTE\Http\Controllers\Web\Backend\CreditController@edit
  POST            backend/credits/{credit}/update ............................................ backend.credit.update › VanguardLTE\Http\Controllers\Web\Backend\CreditController@update
  GET|HEAD        backend/faq ........................................................................ backend.faq.list › VanguardLTE\Http\Controllers\Web\Backend\FaqsController@index
  GET|HEAD        backend/faq/create .............................................................. backend.faq.create › VanguardLTE\Http\Controllers\Web\Backend\FaqsController@create
  POST            backend/faq/create ................................................................ backend.faq.store › VanguardLTE\Http\Controllers\Web\Backend\FaqsController@store
  DELETE          backend/faq/{faq}/delete ........................................................ backend.faq.delete › VanguardLTE\Http\Controllers\Web\Backend\FaqsController@delete
  GET|HEAD        backend/faq/{faq}/edit .............................................................. backend.faq.edit › VanguardLTE\Http\Controllers\Web\Backend\FaqsController@edit
  POST            backend/faq/{faq}/update ........................................................ backend.faq.update › VanguardLTE\Http\Controllers\Web\Backend\FaqsController@update
  GET|HEAD        backend/game ..................................................................... backend.game.list › VanguardLTE\Http\Controllers\Web\Backend\GamesController@index
  POST            backend/game/categories ............................................... backend.game.categories › VanguardLTE\Http\Controllers\Web\Backend\GamesController@categories
  PUT             backend/game/clear ........................................................ backend.game.clear › VanguardLTE\Http\Controllers\Web\Backend\GamesController@clear_games
  GET|HEAD        backend/game/create ........................................................... backend.game.create › VanguardLTE\Http\Controllers\Web\Backend\GamesController@create
  POST            backend/game/create ............................................................. backend.game.store › VanguardLTE\Http\Controllers\Web\Backend\GamesController@store
  POST            backend/game/update/mass .......................................................... backend.game.mass › VanguardLTE\Http\Controllers\Web\Backend\GamesController@mass
  POST            backend/game/update/view ......................................................... backend.game.view › VanguardLTE\Http\Controllers\Web\Backend\GamesController@views
  GET|HEAD        backend/game/{game} ................................................................... backend.game.go › VanguardLTE\Http\Controllers\Web\Backend\GamesController@go
  DELETE          backend/game/{game}/delete .................................................... backend.game.delete › VanguardLTE\Http\Controllers\Web\Backend\GamesController@delete
  GET|HEAD        backend/game/{game}/edit .......................................................... backend.game.edit › VanguardLTE\Http\Controllers\Web\Backend\GamesController@edit
  POST            backend/game/{game}/server .................................................... backend.game.server › VanguardLTE\Http\Controllers\Web\Backend\GamesController@server
  GET|HEAD        backend/game/{game}/show .......................................................... backend.game.show › VanguardLTE\Http\Controllers\Web\Backend\GamesController@view
  POST            backend/game/{game}/update .................................................... backend.game.update › VanguardLTE\Http\Controllers\Web\Backend\GamesController@update
  GET|HEAD        backend/game_stat ........................................................ backend.game_stat › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@game_stat
  GET|HEAD        backend/games.json ..................................................... backend.game.list.json › VanguardLTE\Http\Controllers\Web\Backend\GamesController@index_json
  GET|HEAD        backend/generator ............................................... backend.settings.generator › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@generator
  POST            backend/generator .......................................... backend.settings.generator.post › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@generator
  GET|HEAD        backend/happyhours ...................................................... backend.happyhour.list › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@index
  GET|HEAD        backend/happyhours/create ............................................ backend.happyhour.create › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@create
  POST            backend/happyhours/create .............................................. backend.happyhour.store › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@store
  GET|HEAD        backend/happyhours/status/{status} ................................... backend.happyhour.status › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@status
  DELETE          backend/happyhours/{happyhour}/delete ................................ backend.happyhour.delete › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@delete
  GET|HEAD        backend/happyhours/{happyhour}/edit ...................................... backend.happyhour.edit › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@edit
  POST            backend/happyhours/{happyhour}/update ................................ backend.happyhour.update › VanguardLTE\Http\Controllers\Web\Backend\HappyHourController@update
  GET|HEAD        backend/info ...................................................................... backend.info.list › VanguardLTE\Http\Controllers\Web\Backend\InfoController@index
  POST            backend/info/balance ......................................................... backend.info.balance › VanguardLTE\Http\Controllers\Web\Backend\InfoController@balance
  GET|HEAD        backend/info/create ............................................................ backend.info.create › VanguardLTE\Http\Controllers\Web\Backend\InfoController@create
  POST            backend/info/create .............................................................. backend.info.store › VanguardLTE\Http\Controllers\Web\Backend\InfoController@store
  DELETE          backend/info/{info}/delete ..................................................... backend.info.delete › VanguardLTE\Http\Controllers\Web\Backend\InfoController@delete
  GET|HEAD        backend/info/{info}/edit ........................................................... backend.info.edit › VanguardLTE\Http\Controllers\Web\Backend\InfoController@edit
  POST            backend/info/{info}/update ..................................................... backend.info.update › VanguardLTE\Http\Controllers\Web\Backend\InfoController@update
  GET|HEAD        backend/invite ............................................................... backend.invites › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@invites
  POST            backend/invite .................................................. backend.invites.update › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@invite_update
  GET|HEAD        backend/invite/status/{status} ................................... backend.invite.status › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@invite_status
  GET|HEAD        backend/jpgame ................................................................... backend.jpgame.list › VanguardLTE\Http\Controllers\Web\Backend\JPGController@index
  POST            backend/jpgame/global ......................................................... backend.jpgame.global › VanguardLTE\Http\Controllers\Web\Backend\JPGController@global
  POST            backend/jpgame/global_update .................................... backend.jpgame.global_update › VanguardLTE\Http\Controllers\Web\Backend\JPGController@global_update
  GET|HEAD        backend/jpgame/{jackpot}/edit ..................................................... backend.jpgame.edit › VanguardLTE\Http\Controllers\Web\Backend\JPGController@edit
  POST            backend/jpgame/{jackpot}/update ............................................... backend.jpgame.update › VanguardLTE\Http\Controllers\Web\Backend\JPGController@update
  GET|HEAD        backend/login ............................................................ backend.auth.login › VanguardLTE\Http\Controllers\Web\Backend\Auth\AuthController@getLogin
  POST            backend/login ...................................................... backend.auth.login.post › VanguardLTE\Http\Controllers\Web\Backend\Auth\AuthController@postLogin
  GET|HEAD        backend/logout ......................................................... backend.auth.logout › VanguardLTE\Http\Controllers\Web\Backend\Auth\AuthController@getLogout
  ANY             backend/netpos ..................................................................................................... netpos › Illuminate\Routing › RedirectController
  GET|HEAD        backend/permission .................................................. backend.permission.index › VanguardLTE\Http\Controllers\Web\Backend\PermissionsController@index
  POST            backend/permission/save ................................ backend.permission.save › VanguardLTE\Http\Controllers\Web\Backend\PermissionsController@saveRolePermissions
  GET|HEAD        backend/pincodes ............................................................ backend.pincode.list › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@index
  POST            backend/pincodes/balance ............................................... backend.pincode.balance › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@balance
  GET|HEAD        backend/pincodes/create .................................................. backend.pincode.create › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@create
  POST            backend/pincodes/create .................................................... backend.pincode.store › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@store
  POST            backend/pincodes/mass/create ........................................... backend.pincode.massadd › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@massadd
  DELETE          backend/pincodes/{pincode}/delete ........................................ backend.pincode.delete › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@delete
  GET|HEAD        backend/pincodes/{pincode}/edit .............................................. backend.pincode.edit › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@edit
  POST            backend/pincodes/{pincode}/update ........................................ backend.pincode.update › VanguardLTE\Http\Controllers\Web\Backend\PincodeController@update
  GET|HEAD        backend/profile .................................................................. backend.profile › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@index
  GET|HEAD        backend/profile/activity ............................................. backend.profile.activity › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@activity
  POST            backend/profile/avatar/update ............................... backend.profile.update.avatar › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@updateAvatar
  POST            backend/profile/avatar/update/external ..... backend.profile.update.avatar-external › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@updateAvatarExternal
  POST            backend/profile/balance/update ................................. backend.user.balance.update › VanguardLTE\Http\Controllers\Web\Backend\UsersController@updateBalance
  PUT             backend/profile/details/update ............................ backend.profile.update.details › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@updateDetails
  POST            backend/profile/limit/update ....................................... backend.user.limit.update › VanguardLTE\Http\Controllers\Web\Backend\UsersController@updateLimit
  PUT             backend/profile/login-details/update ........... backend.profile.update.login-details › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@updateLoginDetails
  GET|HEAD        backend/profile/sessions ............................................. backend.profile.sessions › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@sessions
  DELETE          backend/profile/sessions/{session}/invalidate .... backend.profile.sessions.invalidate › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@invalidateSession
  GET|POST|HEAD   backend/profile/setshop ................................................ backend.profile.setshop › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@setshop
  POST            backend/profile/two-factor/disable ............. backend.profile.two-factor.disable › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@disableTwoFactorAuth
  POST            backend/profile/two-factor/enable ................ backend.profile.two-factor.enable › VanguardLTE\Http\Controllers\Web\Backend\ProfileController@enableTwoFactorAuth
  GET|HEAD        backend/progress .......................................................... backend.progress.list › VanguardLTE\Http\Controllers\Web\Backend\ProgressController@index
  GET|HEAD        backend/progress/status/{status} ....................................... backend.progress.status › VanguardLTE\Http\Controllers\Web\Backend\ProgressController@status
  GET|HEAD        backend/progress/{progress}/edit ........................................... backend.progress.edit › VanguardLTE\Http\Controllers\Web\Backend\ProgressController@edit
  POST            backend/progress/{progress}/update ..................................... backend.progress.update › VanguardLTE\Http\Controllers\Web\Backend\ProgressController@update
  GET|HEAD        backend/role .................................................................... backend.role.index › VanguardLTE\Http\Controllers\Web\Backend\RolesController@index
  GET|HEAD        backend/role/create ........................................................... backend.role.create › VanguardLTE\Http\Controllers\Web\Backend\RolesController@create
  POST            backend/role/store .............................................................. backend.role.store › VanguardLTE\Http\Controllers\Web\Backend\RolesController@store
  DELETE          backend/role/{role}/delete .................................................... backend.role.delete › VanguardLTE\Http\Controllers\Web\Backend\RolesController@delete
  GET|HEAD        backend/role/{role}/edit .......................................................... backend.role.edit › VanguardLTE\Http\Controllers\Web\Backend\RolesController@edit
  PUT             backend/role/{role}/update .................................................... backend.role.update › VanguardLTE\Http\Controllers\Web\Backend\RolesController@update
  GET|HEAD        backend/rules .................................................................... backend.rule.list › VanguardLTE\Http\Controllers\Web\Backend\RulesController@index
  GET|HEAD        backend/rules/{rule}/edit ......................................................... backend.rule.edit › VanguardLTE\Http\Controllers\Web\Backend\RulesController@edit
  POST            backend/rules/{rule}/update ................................................... backend.rule.update › VanguardLTE\Http\Controllers\Web\Backend\RulesController@update
  GET|HEAD        backend/search ................................................................. backend.search › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@search
  GET|HEAD        backend/securities ..................................................... backend.securities › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@securities
  PUT             backend/securities/{item}/block ............................ backend.securities.block › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@securities_block
  DELETE          backend/securities/{item}/delete ......................... backend.securities.delete › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@securities_delete
  PUT             backend/settings/delete/log/game ............................... backend.settings.gelete_log › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@gelete_log
  PUT             backend/settings/delete/stat/game ............................ backend.settings.gelete_stat › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@gelete_stat
  PUT             backend/settings/sync ...................................................... backend.settings.sync › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@sync
  GET|HEAD        backend/settings/{tab} .................................................. backend.settings.list › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@general
  POST            backend/settings/{tab} ............................................ backend.settings.list.update › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@update
  GET|HEAD        backend/shift_stat ..................................................... backend.shift_stat › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@shift_stat
  GET|HEAD        backend/shop-settings ................................. backend.shop-settings.overview › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@overview
  GET|HEAD        backend/shop-settings/bonus ......................... backend.shop-settings.bonus › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@bonusSettings
  POST            backend/shop-settings/bonus ............ backend.shop-settings.bonus.update › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@updateBonusSettings
  GET|HEAD        backend/shop-settings/fish ............................ backend.shop-settings.fish › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@fishSettings
  POST            backend/shop-settings/fish ............... backend.shop-settings.fish.update › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@updateFishSettings
  GET|HEAD        backend/shop-settings/game-rtp ......................... backend.shop-settings.game-rtp › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@gameRtp
  POST            backend/shop-settings/game-rtp ............ backend.shop-settings.game-rtp.update › VanguardLTE\Http\Controllers\Web\Backend\ShopGameSettingsController@updateGameRtp
  GET|HEAD        backend/shops .................................................................... backend.shop.list › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@index
  GET|HEAD        backend/shops/admin/create ........................................ backend.shop.admin_create › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@admin_create
  POST            backend/shops/admin/create .......................................... backend.shop.admin_store › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@admin_store
  POST            backend/shops/balance ....................................................... backend.shop.balance › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@balance
  PUT             backend/shops/block ............................................ backend.settings.shop_block › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@shop_block
  GET|HEAD        backend/shops/create .......................................................... backend.shop.create › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@create
  POST            backend/shops/create ............................................................ backend.shop.store › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@store
  GET|HEAD        backend/shops/fast_shop ................................................. backend.shop.fast_shop › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@fast_shop
  GET|HEAD        backend/shops/get_demo .................................................... backend.shop.get_demo › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@get_demo
  PUT             backend/shops/unblock ...................................... backend.settings.shop_unblock › VanguardLTE\Http\Controllers\Web\Backend\SettingsController@shop_unblock
  DELETE          backend/shops/{shop}/action/{action} .......................................... backend.shop.action › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@action
  DELETE          backend/shops/{shop}/delete ................................................... backend.shop.delete › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@delete
  GET|HEAD        backend/shops/{shop}/edit ......................................................... backend.shop.edit › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@edit
  DELETE          backend/shops/{shop}/hard_delete .................................... backend.shop.hard_delete › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@hard_delete
  POST            backend/shops/{shop}/update ................................................... backend.shop.update › VanguardLTE\Http\Controllers\Web\Backend\ShopsController@update
  GET|HEAD        backend/sms_mailings ................................................. backend.sms_mailing.list › VanguardLTE\Http\Controllers\Web\Backend\SMSMailingController@index
  GET|HEAD        backend/sms_mailings/create ....................................... backend.sms_mailing.create › VanguardLTE\Http\Controllers\Web\Backend\SMSMailingController@create
  POST            backend/sms_mailings/create ......................................... backend.sms_mailing.store › VanguardLTE\Http\Controllers\Web\Backend\SMSMailingController@store
  DELETE          backend/sms_mailings/{mailing}/delete ............................. backend.sms_mailing.delete › VanguardLTE\Http\Controllers\Web\Backend\SMSMailingController@delete
  GET|HEAD        backend/sms_mailings/{mailing}/edit ................................... backend.sms_mailing.edit › VanguardLTE\Http\Controllers\Web\Backend\SMSMailingController@edit
  POST            backend/sms_mailings/{mailing}/update ............................. backend.sms_mailing.update › VanguardLTE\Http\Controllers\Web\Backend\SMSMailingController@update
  GET|HEAD        backend/smsbonuses ....................................................... backend.sms_bonus.list › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@index
  GET|HEAD        backend/smsbonuses/create ............................................. backend.sms_bonus.create › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@create
  POST            backend/smsbonuses/create ............................................... backend.sms_bonus.store › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@store
  GET|HEAD        backend/smsbonuses/status/{status} .................................... backend.sms_bonus.status › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@status
  DELETE          backend/smsbonuses/{sms_bonus}/delete ................................. backend.sms_bonus.delete › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@delete
  GET|HEAD        backend/smsbonuses/{sms_bonus}/edit ....................................... backend.sms_bonus.edit › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@edit
  POST            backend/smsbonuses/{sms_bonus}/update ................................. backend.sms_bonus.update › VanguardLTE\Http\Controllers\Web\Backend\SMSBonusController@update
  GET|HEAD        backend/start_shift .................................................. backend.start_shift › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@start_shift
  GET|HEAD        backend/start_shift/print ................................ backend.start_shift.print › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@start_shift_print
  GET|HEAD        backend/support ............................................................ backend.support.index › VanguardLTE\Http\Controllers\Web\Backend\SupportController@index
  GET|HEAD        backend/support/create ................................................... backend.support.create › VanguardLTE\Http\Controllers\Web\Backend\SupportController@create
  POST            backend/support/create ..................................................... backend.support.store › VanguardLTE\Http\Controllers\Web\Backend\SupportController@store
  GET|HEAD        backend/support/{ticket} ..................................................... backend.support.view › VanguardLTE\Http\Controllers\Web\Backend\SupportController@view
  POST            backend/support/{ticket}/answer .......................................... backend.support.answer › VanguardLTE\Http\Controllers\Web\Backend\SupportController@answer
  PUT             backend/support/{ticket}/close ............................................. backend.support.close › VanguardLTE\Http\Controllers\Web\Backend\SupportController@close
  GET|HEAD        backend/terminal .................................................................................. VanguardLTE\Http\Controllers\Web\Backend\TerminalController@index
  POST            backend/terminal/ajax/pay-tickets ........................................................ VanguardLTE\Http\Controllers\Web\Backend\TerminalController@ajaxPayTickets
  POST            backend/terminal/balance/add ................................................................. VanguardLTE\Http\Controllers\Web\Backend\TerminalController@balanceAdd
  POST            backend/terminal/balance/out ................................................................. VanguardLTE\Http\Controllers\Web\Backend\TerminalController@balanceOut
  POST            backend/terminal/create .................................................................. VanguardLTE\Http\Controllers\Web\Backend\TerminalController@craeteTerminal
  GET|HEAD        backend/terminal/details/{id} ........................................................... VanguardLTE\Http\Controllers\Web\Backend\TerminalController@detailsTerminal
  POST            backend/terminal/details/{id} ............................................................ VanguardLTE\Http\Controllers\Web\Backend\TerminalController@terminalUpdate
  GET|HEAD        backend/tournaments ................................................... backend.tournament.list › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@index
  GET|HEAD        backend/tournaments/create ......................................... backend.tournament.create › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@create
  POST            backend/tournaments/create ........................................... backend.tournament.store › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@store
  GET|HEAD        backend/tournaments/games.json ....................................... backend.tournament.games › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@games
  DELETE          backend/tournaments/{tournament}/delete ............................ backend.tournament.delete › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@delete
  GET|HEAD        backend/tournaments/{tournament}/edit .................................. backend.tournament.edit › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@edit
  POST            backend/tournaments/{tournament}/update ............................ backend.tournament.update › VanguardLTE\Http\Controllers\Web\Backend\TournamentController@update
  GET|HEAD        backend/transactions ............................................... backend.transactions › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@transactions
  GET|HEAD        backend/tree ...................................................................... backend.user.tree › VanguardLTE\Http\Controllers\Web\Backend\UsersController@tree
  GET|HEAD        backend/user ..................................................................... backend.user.list › VanguardLTE\Http\Controllers\Web\Backend\UsersController@index
  DELETE          backend/user/action/{action} .................................................. backend.user.action › VanguardLTE\Http\Controllers\Web\Backend\UsersController@action
  GET|HEAD        backend/user/back_login ............................................... backend.user.back_login › VanguardLTE\Http\Controllers\Web\Backend\UsersController@back_login
  GET|HEAD        backend/user/balances ............................................... backend.user.balance.get › VanguardLTE\Http\Controllers\Web\Backend\UsersController@get_balance
  GET|HEAD        backend/user/create ........................................................... backend.user.create › VanguardLTE\Http\Controllers\Web\Backend\UsersController@create
  POST            backend/user/create ............................................................. backend.user.store › VanguardLTE\Http\Controllers\Web\Backend\UsersController@store
  POST            backend/user/mass ........................................................... backend.user.massadd › VanguardLTE\Http\Controllers\Web\Backend\UsersController@massadd
  GET|HEAD        backend/user/send_phone_code ............................. backend.profile.send_phone_code › VanguardLTE\Http\Controllers\Web\Backend\UsersController@send_phone_code
  DELETE          backend/user/{user}/delete .................................................... backend.user.delete › VanguardLTE\Http\Controllers\Web\Backend\UsersController@delete
  DELETE          backend/user/{user}/hard_delete ..................................... backend.user.hard_delete › VanguardLTE\Http\Controllers\Web\Backend\UsersController@hard_delete
  GET|HEAD        backend/user/{user}/profile ....................................................... backend.user.edit › VanguardLTE\Http\Controllers\Web\Backend\UsersController@edit
  GET|HEAD        backend/user/{user}/sessions .............................................. backend.user.sessions › VanguardLTE\Http\Controllers\Web\Backend\UsersController@sessions
  DELETE          backend/user/{user}/sessions/{session}/invalidate ..... backend.user.sessions.invalidate › VanguardLTE\Http\Controllers\Web\Backend\UsersController@invalidateSession
  GET|HEAD        backend/user/{user}/show .......................................................... backend.user.show › VanguardLTE\Http\Controllers\Web\Backend\UsersController@view
  GET|HEAD        backend/user/{user}/specauth .............................................. backend.user.specauth › VanguardLTE\Http\Controllers\Web\Backend\UsersController@specauth
  GET|HEAD        backend/user/{user}/stat .................................................... backend.user.stat › VanguardLTE\Http\Controllers\Web\Backend\UsersController@statistics
  POST            backend/user/{user}/two-factor/disable .............. backend.user.two-factor.disable › VanguardLTE\Http\Controllers\Web\Backend\UsersController@disableTwoFactorAuth
  POST            backend/user/{user}/two-factor/enable ................. backend.user.two-factor.enable › VanguardLTE\Http\Controllers\Web\Backend\UsersController@enableTwoFactorAuth
  POST            backend/user/{user}/update/avatar ................................ backend.user.update.avatar › VanguardLTE\Http\Controllers\Web\Backend\UsersController@updateAvatar
  POST            backend/user/{user}/update/avatar/external ...... backend.user.update.avatar.external › VanguardLTE\Http\Controllers\Web\Backend\UsersController@updateAvatarExternal
  PUT             backend/user/{user}/update/details ............................. backend.user.update.details › VanguardLTE\Http\Controllers\Web\Backend\UsersController@updateDetails
  PUT             backend/user/{user}/update/login-details ............ backend.user.update.login-details › VanguardLTE\Http\Controllers\Web\Backend\UsersController@updateLoginDetails
  GET|HEAD        backend/welcome_bonuses .......................................... backend.welcome_bonus.list › VanguardLTE\Http\Controllers\Web\Backend\WelcomeBonusController@index
  GET|HEAD        backend/welcome_bonuses/status/{status} ....................... backend.welcome_bonus.status › VanguardLTE\Http\Controllers\Web\Backend\WelcomeBonusController@status
  GET|HEAD        backend/welcome_bonuses/{welcome_bonus}/edit ...................... backend.welcome_bonus.edit › VanguardLTE\Http\Controllers\Web\Backend\WelcomeBonusController@edit
  POST            backend/welcome_bonuses/{welcome_bonus}/update ................ backend.welcome_bonus.update › VanguardLTE\Http\Controllers\Web\Backend\WelcomeBonusController@update
  GET|HEAD        backend/wheelfortune ............................................... backend.wheelfortune › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@wheelfortune
  POST            backend/wheelfortune ................................. backend.wheelfortune.update › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@wheelfortune_update
  GET|HEAD        backend/wheelfortune/status/{status} ................. backend.wheelfortune.status › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@wheelfortune_status
  GET|HEAD        backend/withdraw ........................................................... backend.withdraw › VanguardLTE\Http\Controllers\Web\Backend\DashboardController@withdraw
  POST            balance ................................................................ frontend.balance.post › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@balanceAdd
  GET|HEAD        bonus-conditions ............................................. frontend.bonus.conditions › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@bonus_conditions
  GET|HEAD        bonuses ........................................................................ frontend.bonuses › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@bonuses
  GET|HEAD        categories/{category1} ................................................ frontend.game.list.category › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@index
  GET|HEAD        categories/{category1}/{category2} ............................. frontend.game.list.category_level2 › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@index
  POST            coin-payment/create ............................................................................................... coin-payment.create › CoinPaymentController@store
  GET|HEAD        coin-payment/show/{transaction_id} ....................................................................................................... CoinPaymentController@show
  POST            coinpayment/ajax/create .......................................................................... coinpayment.create.transaction › AjaxController@create_transaction
  POST            coinpayment/ajax/payload ............................................................................... coinpayment.encrypt.payload › AjaxController@encrypt_payload
  GET|HEAD        coinpayment/ajax/rates/{usd} ............................................................................................... coinpayment.rates › AjaxController@rates
  POST            coinpayment/ipn ..................................................................................................................... coinpayment.ipn › IPNController
  POST            coinpayment/make ........................................................................................... coinpayment.make.store › MakeTransactionController@store
  GET|HEAD        coinpayment/make/{make} ...................................................................................... coinpayment.make.show › MakeTransactionController@show
  GET|HEAD        faq .................................................................................... frontend.faq › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@faq
  POST            favorites/add/{game} ................................................ frontend.favorites.add › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@favoritesAdd
  DELETE          favorites/remove/{game} ....................................... frontend.favorites.remove › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@favoritesRemove
  GET|HEAD        game/{game} ......................................................................... frontend.game.go › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@go
  POST            game/{game}/server .......................................................... frontend.game.server › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@server
  GET|HEAD        game/{game}/{prego} ........................................................... frontend.game.go.prego › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@go
  GET|HEAD        game_stat .................................................................. frontend.game_stat › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@game_stat
  GET|HEAD        jpstv.json ............................................................... frontend.jpstv_json › VanguardLTE\Http\Controllers\Web\Frontend\PagesController@jpstv_json
  GET|HEAD        jpstv/{id?} ........................................................................ frontend.jpstv › VanguardLTE\Http\Controllers\Web\Frontend\PagesController@jpstv
  GET|HEAD        launcher/{game}/{token} ...................................................................... VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@apiLogin
  GET|HEAD        license-error ................................................. frontend.page.error_license › VanguardLTE\Http\Controllers\Web\Frontend\PagesController@error_license
  GET|HEAD        login .................................................................. frontend.auth.login › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@getLogin
  POST            login ............................................................ frontend.auth.login.post › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@postLogin
  GET|HEAD        logout ............................................................... frontend.auth.logout › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@getLogout
  GET|HEAD        netflix ................................................................... frontend.game.netflix › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@netflix
  GET|HEAD        new-license ............................................................ frontend.new_license › VanguardLTE\Http\Controllers\Web\Frontend\PagesController@new_license
  POST            new-license .................................................. frontend.new_license.post › VanguardLTE\Http\Controllers\Web\Frontend\PagesController@new_license_post
  GET|HEAD        password/remind ......................................... frontend.password.remind › VanguardLTE\Http\Controllers\Web\Frontend\Auth\PasswordController@forgotPassword
  POST            password/remind .............................. frontend.password.remind.post › VanguardLTE\Http\Controllers\Web\Frontend\Auth\PasswordController@sendPasswordReminder
  POST            password/reset ........................................... frontend.password.reset.post › VanguardLTE\Http\Controllers\Web\Frontend\Auth\PasswordController@postReset
  GET|HEAD        password/reset/{token} ......................................... frontend.password.reset › VanguardLTE\Http\Controllers\Web\Frontend\Auth\PasswordController@getReset
  GET|HEAD        payment/btcpayserver/redirect ..................... payment.btcpayserver.redirect › VanguardLTE\Http\Controllers\Web\Frontend\Payment\BtcPayServerController@redirect
  POST            payment/btcpayserver/result ............................ payment.btcpayserver.result › VanguardLTE\Http\Controllers\Web\Frontend\Payment\BtcPayServerController@index
  GET|HEAD        payment/coinbase/fail ............................................. payment.coinbase.fail › VanguardLTE\Http\Controllers\Web\Frontend\Payment\CoinbaseController@fail
  POST            payment/coinbase/result ........................................ payment.coinbase.result › VanguardLTE\Http\Controllers\Web\Frontend\Payment\CoinbaseController@index
  GET|HEAD        payment/coinbase/success .................................... payment.coinbase.success › VanguardLTE\Http\Controllers\Web\Frontend\Payment\CoinbaseController@success
  GET|HEAD        payment/interkassa/fail ....................................... payment.interkassa.fail › VanguardLTE\Http\Controllers\Web\Frontend\Payment\InterkassaController@fail
  POST            payment/interkassa/result .................................. payment.interkassa.result › VanguardLTE\Http\Controllers\Web\Frontend\Payment\InterkassaController@index
  GET|HEAD        payment/interkassa/success .............................. payment.interkassa.success › VanguardLTE\Http\Controllers\Web\Frontend\Payment\InterkassaController@success
  GET|HEAD        payment/interkassa/wait ....................................... payment.interkassa.wait › VanguardLTE\Http\Controllers\Web\Frontend\Payment\InterkassaController@wait
  GET|HEAD        profile ........................................................................ frontend.profile › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@index
  GET|HEAD        profile/activity ................................................... frontend.profile.activity › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@activity
  GET|HEAD        profile/agree ............................................................ frontend.profile.agree › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@agree
  GET|HEAD        profile/ajax ............................................................... frontend.profile.ajax › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@ajax
  POST            profile/avatar/update ..................................... frontend.profile.update.avatar › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@updateAvatar
  POST            profile/avatar/update/external ........... frontend.profile.update.avatar-external › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@updateAvatarExternal
  GET|HEAD        profile/clear_phone .................................................. frontend.clear_phone › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@clear_phone
  GET|HEAD        profile/code ............................................................... frontend.profile.code › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@code
  POST            profile/contact ................................................. frontend.profile.contact › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@contact_form
  GET|HEAD        profile/daily_entry .......................................... frontend.profile.daily_entry › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@daily_entry
  POST            profile/details/update .................................. frontend.profile.update.details › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@updateDetails
  POST            profile/dragon_egg ............................................. frontend.profile.dragon_egg › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@dragon_egg
  PUT             profile/login-details/update ................. frontend.profile.update.login-details › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@updateLoginDetails
  GET|HEAD        profile/message ...................................................... frontend.profile.message › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@message
  POST            profile/password/update ............................... frontend.profile.update.password › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@updatePassword
  GET|HEAD        profile/phone ............................................................ frontend.profile.phone › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@phone
  GET|HEAD        profile/pincode ...................................................... frontend.profile.pincode › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@pincode
  GET|HEAD        profile/refunds ...................................................... frontend.profile.refunds › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@refunds
  GET|HEAD        profile/reward ......................................................... frontend.profile.reward › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@reward
  GET|HEAD        profile/sessions ................................................... frontend.profile.sessions › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@sessions
  DELETE          profile/sessions/{session}/invalidate .......... frontend.profile.sessions.invalidate › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@invalidateSession
  GET|HEAD        profile/sms .................................................................. frontend.profile.sms › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@sms
  POST            profile/two-factor/disable ................... frontend.profile.two-factor.disable › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@disableTwoFactorAuth
  POST            profile/two-factor/enable ...................... frontend.profile.two-factor.enable › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@enableTwoFactorAuth
  POST            profile/wheel_spin ............................................. frontend.profile.wheel_spin › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@wheel_spin
  POST            profile/withdraw ................................................... frontend.profile.withdraw › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@withdraw
  GET|HEAD        progress ..................................................................... frontend.progress › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@progress
  GET|HEAD        refresh-csrf ........................................................................................................................................................ 
  GET|HEAD        register .............................................................. frontend.register › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@getRegister
  POST            register ........................................................ frontend.register.post › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@postRegister
  GET|HEAD        register/confirmation/{token} .......................... frontend.register.confirm-email › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@confirmEmail
  GET|HEAD        sanctum/csrf-cookie ............................................................................... sanctum.csrf-cookie › Laravel\Sanctum › CsrfCookieController@show
  GET|HEAD        search ...................................................................... frontend.game.search › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@search
  GET|HEAD        search.json ............................................................ frontend.search.json › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@search_json
  GET|HEAD        setlang/{lang} ............................................................... frontend.setlang › VanguardLTE\Http\Controllers\Web\Frontend\ProfileController@setlang
  GET|HEAD        setpage.json .......................................................... frontend.category.setpage › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@setpage
  POST            sms/callback ........................................................................... sms.callback › VanguardLTE\Http\Controllers\Web\Frontend\SMSController@index
  GET|HEAD        specauth/{user} ..................................................... frontend.user.specauth › VanguardLTE\Http\Controllers\Web\Frontend\Auth\AuthController@specauth
  GET|HEAD        subsession ............................................................... frontend.subsession › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@subsession
  GET|HEAD        tournaments ............................................................ frontend.tournaments › VanguardLTE\Http\Controllers\Web\Frontend\TournamentsController@index
  GET|HEAD        tournaments/{tournament} ........................................... frontend.tournaments.view › VanguardLTE\Http\Controllers\Web\Frontend\TournamentsController@view
  GET|HEAD        user/balance .......................................................... frontend.balance.json › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@balanceJson
  GET|HEAD        user/favorites .................................................... frontend.favorites.json › VanguardLTE\Http\Controllers\Web\Frontend\GamesController@favoritesJson

                                                                                                                                                                   Showing [390] routes

root@srv1852842:/var/www/89casino/cashout-casino/casino# 

