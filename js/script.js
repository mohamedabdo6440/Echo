

/*dropdown code */
$(".navbar-nav .nav-item .dropdown-menu .tow .list-in").fadeOut();
$(".navbar-nav .nav-item .dropdown-menu .tow").on({

    mouseenter: function () {
        $(".navbar-nav .nav-item .dropdown-menu .tow .list-in").fadeIn();
    },

    mouseleave: function () {
        $(".navbar-nav .nav-item .dropdown-menu .tow .list-in").fadeOut();
    }
});

//about code ///////////////////////////////////////////////////////////

var span = $(".container-header .text h6");
var headerH1 = $(".container-header .text h1");
var divImage = $(".container-header .image");

//Features
var Features = $(".Features");

//Services
var ServicesSpan = $(".Services span");
var ServicesH1 = $(".Services h1");
var Services = $(".Services");

$(".navbar-nav li #about").click(function () {

    span.text("ABOUT");
    span.addClass("Style-span");
    headerH1.text("About Us");
    divImage.css({ "background-image": "url('/images/about_1.png.webp')", "background-position": "center", "background-size": "cover" });
    Features.css({ "display": "none" });
    Services.html(`
    
    
    <span class="mb-2  wow fadeInUp" data-wow-duration="5s">TEAM</span>
            <h1 class="mb-5 wow fadeInUp" data-wow-duration="5s">TEAM</h1>

            <div class="container">
        <div class="row">
            <div class="col-md-3 text-center wow fadeInUp" data-wow-duration=".5s">
                <img src="images/person_1.jpg.webp" alt="">
                <h3>James Watson</h3>
                <p>Co-Founder & CEO</p>
            </div>
            <div class="col-md-3 text-center wow fadeInUp" data-wow-duration="1s">
                <img src="images/person_2.jpg.webp" alt="">
                <h3>Carl Anderson</h3>
                <p>Co-Founder & CEO</p>
            </div>
            <div class="col-md-3 text-center  wow fadeInUp" data-wow-duration="1.5s">
                <img src="images/person_3.jpg.webp" alt="">
                <h3>Michelle Allison</h3>
                <p>Co-Founder & CEO</p>
            </div>
            <div class="col-md-3 text-center wow fadeInUp" data-wow-duration="2s">
                <img src="images/person_1.jpg.webp" alt="">
                <h3>James Watson</h3>
                <p>Co-Founder & CEO</p>
            </div>

        </div>
    </div>
            
    `);

});

//Services code /////////////////////////////////////////////////////////////////////////////////

var span = $(".container-header .text h6");
var headerH1 = $(".container-header .text h1");
var divImage = $(".container-header .image");

//Features
var Features = $(".Features");

//agency
var agency = $(".agency");

//Services
var ServicesSpan = $(".Services span");
var ServicesH1 = $(".Services h1");
var Services = $(".Services");

$(".navbar-nav li #services").click(function () {

    span.text("Services");
    span.addClass("Style-span");
    headerH1.text("Services");
    divImage.css({ "background-image": "url('/images/about_1.png.webp')", "background-position": "center", "background-size": "cover" });
    Features.css({ "display": "none" });
    agency.css({ "display": "none" });
    Services.html(`
    
    
    <div class="container Services text-center mt-5">
           
            <div class="row" style="justify-content: center;">

                <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="d-flex">
                        <span><i class="fa-solid fa-shield-heart fa-3x"></i></span>
                        <div>
                            <h3>Design Marketing</h3>
                            <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there
                                live
                                the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="d-flex">
                        <span><i class="fa-solid fa-rocket fa-3x"></i></span>
                        <div>
                            <h3>SEO Marketing</h3>
                            <p>
                                SEO Marketing
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>



            </div>
            <div class="row" style="justify-content: center;">

                <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="d-flex">
                        <span><i class="fa-solid fa-bullhorn fa-3x"></i></span>
                        <div>
                            <h3>Internet Marketing</h3>
                            <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="d-flex">
                        <span><i class="fa-solid fa-rocket fa-3x"></i></span>
                        <div>
                            <h3>BackLinks Marketing</h3>
                            <p>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row" style="justify-content: center;">
                <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="d-flex">
                        <span><i class="fa-solid fa-file-signature fa-3x"></i></span>
                        <div>
                            <h3>Social Marketing</h3>
                            <p> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 wow fadeInUp" data-wow-duration="1s">
                    <div class="d-flex">
                        <span><i class="fa-solid fa-trophy fa-3x"></i></span>
                        <div>
                            <h3>Design Marketing</h3>
                            <p>Design Marketing
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>


        <section class="mt-5 mb-5">
        <div class="container mt-5 text-center">
            <span class="Style-span">STATS</span>
            <h1 style="color:#081158;">STATS</h1>
            <P class="w-50 m-auto" style="color:#0000008f;">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
            </P>

            
                <div class="content d-flex">
                <div class="value" data-target="1200">3.923</div>
                <div class="value" data-target="1200">131</div>
                <div class="value" data-target="1200">962</div>
                <div class="value" data-target="1200">5.949</div>
                </div>

        </section>

    `);

});

/*
const counters = document.querySelectorAll(".value");
const speed = 200;

counters.forEach((counter) => {
    const updateCount = () => {
        const target = parseInt(+counter.getAttribute("data-target"));
        const count = parseInt(+counter.innerText);
        const increment = Math.trunc(target / speed);


        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 1);
        } else {
            count.innerText = target;
        }
    };
    updateCount();
});
*/