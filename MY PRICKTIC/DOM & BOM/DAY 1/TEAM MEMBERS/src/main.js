
const team_list = document.querySelector('.team-list')


let content = '';

teams.forEach((item, index) => {
    content += `<div class="team_member">
    <div class="row">
        <div class="col-md-6">
            <img src="https://www.lense.fr/wp-content/uploads/2019/09/100k-ai-faces-3.jpg" alt="">
        </div>
        <div class="col-md-6">
            <div class="content">
                <span>creative leader</span>
                <h2>Mary Brown</h2>
                <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet </p>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="social">
            <ul>
                <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href=""><i class="fa-brands fa-square-instagram"></i></a></li>
                <li><a href=""><i class="fa-brands fa-square-whatsapp"></i></a></li>
                <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
            </ul>
        </div>
    </div>
</div>`
})


team_list.innerHTML = content ;