/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: 'InOoXk3Tar6X-wDyrN-zq479ejia1XRVhvl87nniOMg',
    title: '早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}
      
      风级: {{wind_scale.DATA}}
      
      温馨提示: {{notice.DATA}}
      
      ---
      
      {{birthday_message.DATA}}
      
      ---
      
      {{note_en.DATA}} {{note_ch.DATA}}
      
      ---
      
      {{tian_api_earthy_love_words.DATA}}
    `
  },
  {
    id: 'jYN0yrZ6rZJICMl5FMj9najNw_exLqbxyfaux2qkLyo',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
