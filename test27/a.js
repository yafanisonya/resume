function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}

// $$('.modal .login').forEach(function(node){
//     node.onclick = function(){
//         $('.flip-modal').classList.remove('register')
//         $('.flip-modal').classList.add('login')
//     }
// })
// $$('.modal .register').forEach(function(node){
//     node.onclick = function(){
//         $('.flip-modal').classList.remove('login')
//         $('.flip-modal').classList.add('register')
//     }
// })
// $('.modal .login').onclick = function(){
//     $('.flip-modal').classList.remove('register')
//     $('.flip-modal').classList.add('login')
// }
// $('.modal .register').onclick = function(){
//     $('.flip-modal').classList.remove('login')
//     $('.flip-modal').classList.add('register')
// }
// $('header .login').onclick = function(){
//     $('.flip-modal').classList.add('show')
// }
$('header .login').onclick = function(e){
    e.stopPropagation()
    $('.flip-modal').style.display = 'block'
}
$('.flip-modal').addEventListener('click',function(e){
    e.stopPropagation()
    if(e.target.classList.contains('login')){
        $('.flip-modal').classList.remove('register')
        $('.flip-modal').classList.add('login')
    }
    if(e.target.classList.contains('register')){
        $('.flip-modal').classList.remove('login')
        $('.flip-modal').classList.add('register')
    }   
    console.log(e.target)
    console.log(this)
    window.target = e.target
    if(e.target.classList.contains('close')){
        $('.flip-modal').style.display = 'none'
    }
})
document.addEventListener('click',function(){
    $('.flip-modal').style.display = 'none'
})
$('.modal-login form').addEventListener('submit',function(e){
    e.preventDefault()
    if(!/^\w{3,8}$/.test($('.modal-login input[name=username]').value)){
        $('.modal-login .errormsg').innerText = '用户名需输入3-8个字符'
        return false
    }
    if(!/^\w{6,10}$/.test($('.modal-login input[name=password]').value)){
        $('.modal-login .errormsg').innerText = '密码需输入6-10个字符，包括数字字母下划线'
        return false
    }
    this.submit()
})
$('.modal-register form').addEventListener('submit',function(e){
    e.preventDefault()
    if(!/^\w{3,8}$/.test($('.modal-register input[name=username]').value)){
        $('.modal-register .errormsg').innerText = '用户名需输入3-8个字符'
        return false        
    }
    if(/^hunger$|^ruoyu$/.test($('.modal-register input[name=username]').value)){
        $('.modal-register .errormsg').innerText = '用户名已存在'
        return false
    }
    if(!/^\w{6,10}$/.test($('.modal-register input[name=password]').value)){
        $('.modal-register .errormsg').innerText = '密码需输入6-10个字符，包括数字字母下划线'
        return false
    }   
    if($('.modal-register input[name=password]').value !== $('.modal-register input[name=password2]').value){
        $('.modal-register .errormsg').innerText = '两次输入的密码不一致，请重新输入'
        return false       
    }
    this.submit()
})
