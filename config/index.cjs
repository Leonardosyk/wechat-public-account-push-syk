/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxa23ffdc86028b614',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '60b682f6da6643955b86eb2894819410',

  PROVINCE: '江苏省',
  CITY: '苏州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '潇颖宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owx_m6-0T3NanmceZTw3DU1xCYJI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '🗓️{{date.DATA}} 城市：{{city.DATA}} 天气☁️：{{weather.DATA}} 温度🌡️: {{min_temperature.DATA}}--{{max_temperature.DATA}} 风向：{{wind_direction.DATA}} 风级：{{wind_scale.DATA}} 温馨提示：{{notice.DATA}} 值得纪念：{{birthday_message.DATA}} 💗：{{earthy_love_words.DATA}} 每日一句😋 中文：{{note_ch.DATA}} English：{{note_en.DATA}} 和{{poetry_author.DATA}}约个会：{{poetry_content.DATA}}',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '03-25',
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-19' },
      ],
    },
  ],

  
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'AQ8PVw0Z3vP1D-9KuDzc5u1dEAeAd1tSaGH-JEPL70A',

  CALLBACK_USERS: [
    {
      name: 'syk',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'owx_m6-0T3NanmceZTw3DU1xCYJI',
    }
  ],

}

module.exports = USER_CONFIG

