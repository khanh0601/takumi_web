    // Click vào tab button
    $('.home_hero_tab_button').on('click', function() {
        // Lấy data-tab của button được click
        var tabId = $(this).attr('data-tab');
        
        // Remove active class từ tất cả buttons
        $('.home_hero_tab_button').removeClass('active');
        
        // Add active class cho button được click
        $(this).addClass('active');
        
        // Remove active class từ tất cả content
        $('.home_hero_tab_content_inner').removeClass('active');
        
        // Add active class cho content tương ứng
        $('.home_hero_tab_content_inner[data-tab="' + tabId + '"]').addClass('active');
    });

// var swiper = new Swiper(".home_project_inner", {
//     slidesPerView: 3,
//       spaceBetween: parseRem(30),
//     //   effect: "fade",
//       loop: false,
//       autoplay: {
//             delay: 2500,
//             disableOnInteraction: false,
//         },
//     });

    var swiper1 = new Swiper(".home_feedback_inner", {
    slidesPerView: 'auto',
      spaceBetween: parseRem(30),
    //   effect: "fade",
      loop: true,
      speed:20000,
      autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });
    var swiper2 = new Swiper(".home_partner_inner", {
    slidesPerView: 6,
      spaceBetween: parseRem(20),
    //   effect: "fade",
      loop: true,
      speed:4000,
      autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
    });