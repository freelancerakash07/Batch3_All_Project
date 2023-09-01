


// set alert function

const setAlert = (msg, type) => {
    return ` <p class="alert alert-${type} d-flex justify-content-between">${msg}<button class="btn-close" data-bs-dismiss="alert"></button></p>`
}


// set localstore data

const setLocalstData = (key , data) => {

    let posts = []

    if(localStorage.getItem(key)){

        posts = JSON.parse(localStorage.getItem(key))
    }

    console.log(posts.push(data));


    localStorage.setItem(key, JSON.stringify(posts))

}



// get localstorage data

const getLocalStData = (key) => {



    if(localStorage.getItem(key)){
        return JSON.parse(localStorage.getItem(key))
    } else{
        return [] ;
    }
}

const ubDataLocalStData = (key, data) => {

    localStorage.setItem(key, JSON.stringify(data))
}


const generateRandomId = () => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base 36 to make it shorter
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
  
    for (let i = 0; i < 10 ; i++) {
      const randomIndex = Math.floor(Math.random() * randomChars.length);
      randomId += randomChars[randomIndex];
    }
  
    return `${randomId}-${timestamp}`;
  }
  


  const timeAgo = (timestamp) =>  {
    const now = Date.now();
    const pastDate = new Date(timestamp);
  
    const seconds = Math.floor((now - pastDate) / 1000);
  
    // Define time intervals in seconds
    const minute = 60;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;
    const year = 12 * month;
  
    if (seconds < minute) {
      return `${seconds} seconds ago`;
    } else if (seconds < hour) {
      const minutes = Math.floor(seconds / minute);
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (seconds < day) {
      const hours = Math.floor(seconds / hour);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (seconds < month) {
      const days = Math.floor(seconds / day);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (seconds < year) {
      const months = Math.floor(seconds / month);
      return `${months} month${months > 1 ? 's' : ''} ago`;
    } else {
      const years = Math.floor(seconds / year);
      return `${years} year${years > 1 ? 's' : ''} ago`;
    }
  }
  