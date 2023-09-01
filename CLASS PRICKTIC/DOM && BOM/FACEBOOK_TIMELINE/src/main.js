
//get html emlement 

const user_post_form = document.querySelector('#user_post_form');
const msg = document.querySelector('.msg');
const post_list = document.querySelector('.post_list');
const fb_edit_form = document.querySelector('#fb_edit_form');
const fbEditPhotopv = document.querySelector('#fbEditPhotopv');







const showFbPost = () => {

    let allFbPost = getLocalStData('fb_post')

    
  
        let content = '';

    allFbPost.reverse().map((item, index) => {
        
        content += `
        <div class="card shadow-sm my-3">
        <div class="card-body">
           
            <div class="user_post m-3">
                <div class="user_post_header_left">
                    <div class="auth_info">
                        <div class="auth_img">
                            <img src="${item.userPhoto}" alt="">
                        </div>
                        <div class="auth_text">
                            <span>${item.userName} </span><br>
                            <p> ${timeAgo(item.postTime)} <i class="fa-solid fa-earth-americas"></i></p>
                        </div>
                    </div>
                    <div class="auth_icon">
                        <div class="user_post_header_right">
                        <div class="dropdown">
                        <a class=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa-solid fa-ellipsis"></i>
                        </a>
                      
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item edit_post" data-bs-target="#fb_edit_modal" data-bs-toggle="modal" onclick = "fbDataEdit('${item.id}')" >Edit</a></li>
                          <li><a class="dropdown-item delete_post" onclick="fbDataDelete('${item.id}')" >Delete</a></li>
                          
                        </ul>
                      </div>
                        </div>
                    </div>
                </div>
                <div class="user_post_body_main">
                    <div class="user_post_body_item">
                        <p>${item.postContent}</p>

                            <img  src="${item.postPhoto}" alt="">
                    </div>
                </div>
                <hr>
                <div class="like_count">
                    <ul>
                        <li><i class="fa-solid fa-thumbs-up"></i></li>
                        <li><i class="fa-solid fa-heart"></i></li>
                        <li><span>Ňîšhãt Ãhmëd Xåfãyât, Ši Yẫḿ and 23 others</span></li>
                        <li><span>2 commments</span></li>
                    </ul>
                </div>
                <hr>
                <div class="like_coment_sestem">
                    <ul>
                        <li><a href=""></a><i class="fa-regular fa-thumbs-up"></i> <span>like</span></li>
                        <li><a href=""></a><i class="fa-regular fa-comment"></i> <span>comments</span></li>
                        <li><a href=""></a><i class="fa-solid fa-share"></i> <span>shere</span></li>
                    </ul>
                </div>
                <hr>
                
            </div>
            
        </div>
        
    </div>
        `

    })

    post_list.innerHTML = content

    }
  





showFbPost()


//facebook user post delete

const fbDataDelete = (id) => {
    
    const deletePost = confirm(`are you sure ??`)


    if(deletePost){
         // get local storage Data
    const oldFbData = getLocalStData('fb_post');

    // find delete post user
    const fbUbdateData = oldFbData.filter((data) => data.id !== id)

   ubDataLocalStData('fb_post', fbUbdateData)
   
   // invoke all data show function
   showFbPost()

    } else{
        alert(`okey your data save🥰`)
    }
   

}


// facebook user post edit

const fbDataEdit = (id) => {

   // get local storage data
   const oldFbData = getLocalStData('fb_post')

    const fbEditUser = oldFbData.find((data) => data.id == id) 
    
    // html form elemnet set value
    fb_edit_form.querySelector('input[name=userName]').value = fbEditUser.userName
    fb_edit_form.querySelector('input[name=userPhoto]').value = fbEditUser.userPhoto
    fb_edit_form.querySelector('textarea[name=postContent]').value = fbEditUser.postContent
    fb_edit_form.querySelector('input[name=postPhoto]').value = fbEditUser.postPhoto
    fb_edit_form.querySelector('input[name=id]').value = fbEditUser.id
    fb_edit_form.querySelector('img#fbEditPhotopv').setAttribute('src', fbEditUser.postPhoto)
    fb_edit_form.querySelector('img#fbEditPhotopvUser').setAttribute('src', fbEditUser.userPhoto)

}


// fb_edit_form evan fire

fb_edit_form.onsubmit = (e) => {
    e.preventDefault()

    // get form data
    const form_data = new FormData(e.target);
    const data = Object.fromEntries(form_data);

    // get local storage data
    const oldFbData = getLocalStData('fb_post')

   oldFbData[oldFbData.findIndex((item) => item.id == data.id)] = {
    ...oldFbData[oldFbData.findIndex((item) => item.id == data.id)],
    ...data
   }

   // ubdat locast data
   ubDataLocalStData('fb_post', oldFbData)

   // invoke show all fb post funciton
   showFbPost()

   
}



// user_post_form evan fire

user_post_form.onsubmit = (e) => {
   e.preventDefault()

    //get form data 
    const form_data = new FormData(e.target)
    
    //form_data object convart

    const data = Object.fromEntries(form_data);

    // data distacktar

    const {userName, userPhoto, postContent, postPhoto} = data

    // condition

    if( !userName || !userPhoto || !postContent || !postPhoto){

        msg.innerHTML = setAlert('All filds are requre !', 'danger')

    } else {
        msg.innerHTML = setAlert('Data Stable', 'success')
        let postTime = new Date()
        setLocalstData('fb_post', {...data, id : generateRandomId(), postTime })
    
        e.target.reset()
        
        
    }

    showFbPost()
   
}