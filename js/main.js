$(function () {
    'use strict';//???
    /*选中所有data-rule的input*/
    var inputs = $('[data-rule]'),
        $form = $('#signup'),
        inputs = [];

    $inputs.each(function (index, node) {
        /*解析input的验证规则*/
        var temp = inputs.push(new Inputs(node));
        inputs.push(temp);
    })

    /*解析input的验证规则*/
    
    $form.on('submit', function(e){
        e.preventDefault();//禁止浏览器的默认操作
        $inputs.trigger('blur');

        for(var i = 0; i < inputs.length; i++){
            var item = inputs[i];
            if (!item.validator.is_valid()){
                alert("invalid");
                return;
            }
        }
        alert("valid");
    })
    /*验证*/
    
})

//若不包在function内，会导致比较快的加载速度