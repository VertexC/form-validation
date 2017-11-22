/* validator 服务封装 */
$(function(){
    'use strict';
    /*
    rule = {
        max:99|min:0|maxlength:10|minlength:2|nullable:flase|numeric:false
    }
    */
    window.Validator = function(val, rule) {
        this.is_valid = function(new_val) {
            //总的验证方法
            var key;
            //若new_val没有被更新，则用val
            if(new_val !== undefined)
                val = new_val;
            /**/
            if(!rule.required && !val)
                return true;
            for(key in rule) {
                if(key === 'required')
                    continue;
                var r = this['validate_'+key]();//动态加载方法
                if(!r) return false;
            }
        }

        this.validate_max = function() {
            pre_max_min();//转换成小数
            return val <= rule.max;
        }

        this.validate_min = function() {
            pre_max_min();
            return val >= rule.min;
        }

        this.validate_maxlength = function() {
            pre_max_min_length()
            return val.length <= rule.maxlength
        }

        this.validate_minlength = function() {
            pre_max_min_length();
            return val.length >= rule.minlength;
        }

        this.validate_numeric = function() {
            return $.isNumeric(val);
        }

        this.validate_required = function() {
            var real = $.trim(val);
            if(!real && real !== 0)
                return false;
            return true;
        }

        this.validate_pattern = function() {
            var reg = new RegExp(rule.pattern)//字符串生成正则表达式
            return reg.test(val);
        }

        /*用于完成this.validate_max 
        this.validate_min*/
        function pre_max_min() {
            val = parseFloat(val);
        }
        /*用于完成this.validate_maxlength 
        this.validate_min_length*/
        function pre_max_min_length(){
            val = val.toString();
        }

    }
})

//constructor
