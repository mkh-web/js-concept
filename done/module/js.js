//import { pi,getarea,getnum } from "./js2.js"; هنا انت تسوي امبورت
//لحاجات معينة بس طبعا الاشياء الي تبغا تسوي لها امبورت ضروري تعطيها اكسبورت

import * as obj from "./js2.js";
//هنا انت تنقل الملف كامل ب كل الي فيه بس تعرف زي الاوبجكت عشان يوصل
//للاشياء الي ف الصفحة


console.log(obj.pi)

let area = obj.getarea(30)
console.log(area)