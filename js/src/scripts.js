$(document).ready(function() {
    var disabled = false;

    // =============== SCROLL TO PLUGIN ==================
    $("a[rel='m_PageScroll2id']").mPageScroll2id({
        offset: 100
            //highlightClass: "active-menu"
    });

    //==========CONTACT FORM ============================
    $("#contact_form").validate({
        rules: {
            contact_name: "required",
            contact_email: "required",
            contact_phone: "required",
            contact_message: "required"
        },
        submitHandler: function() {
            if (!disabled) {
                var button = $(".btn-submit");
                button.disabled = true;
                button.val("Sending...");
                var data = $(this.currentForm).serialize();
                $.ajax('http://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    data: data
                }).done(function(success) {
                    $("#contact_name").val("");
                    $("#contact_email").val("");
                    $("#contact_phone").val(""); 
                    $("#contact_message").val("");
                    toastr.success("Success!")
                }).fail(function(error) {
                    toastr.error("An error occured.")
                }).always(function() {
                    disabled = false;
                    button.enabled = false;
                    button.val("Send");
                });
            }
        }
    });
  //==========CONTACT FORM ============================
  $("#subscribe_form").validate({
    rules: { 
        subscr_email: "required" 
    },
    submitHandler: function() {
        if (!disabled) {
            var button = $("#subscr-us-btn");
            button.disabled = true;
            button.val("Sending...");
            var data = $(this.currentForm).serialize();
            $.ajax('http://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                data: data
            }).done(function(success) { 
                $("#subscr_email").val(""); 
                toastr.success("Success!")
            }).fail(function(error) {
                toastr.error("An error occured.")
            }).always(function() {
                disabled = false;
                button.enabled = false;
                button.val("Subscribe");
            });
        }
    }
});
    // ============= MOBILE DROPDOWN =================
    $('#toggleMobileMEnu').click(function() {
        $(this).toggleClass('is-active');
        $('#overlay').toggleClass('open');
        $('.switcher1').toggleClass('hide-me');
    });

    $('.overlay-menu a').click(function() {
        $('#toggleMobileMEnu').toggleClass('is-active');
        $('#overlay').toggleClass('open');
        $('.switcher1').toggleClass('hide-me');
    });


    // ================TOASTER ==========================

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-bottom-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "30000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
});

//============ GOOGLE MAP ============

function initMap() {
    var coordinates = {
        lat: 34.150089,
        lng: -118.3882595
    };
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Carluza Hospice</h1>' +
        '<div id="bodyContent">' +
        '<p>Our headquarters are located in Studio City, CA. However, hospice care is an in-home service, and our expert staff is available in most cities in the Greater Los Angeles area. Studio City Headquarters. </p>' +
        '<p>11712 Moorpark Street Suite #202. Studio City, CA 91604. Phone: (818) 980-9770. Fax: (818) 980-9771.</a> ' 
         +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coordinates,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId],
            scrollwheel: false
        }
    });
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        //icon: 'images/pin.png'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    var customMapType = new google.maps.StyledMapType(
        [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "saturation": 36
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "visibility": "on"
                    },
                    {
                        "color": "#343031"
                    },
                    {
                        "lightness": "-44"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "30"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "visibility": "simplified"
                    },
                    {
                        "gamma": "0.00"
                    },
                    {
                        "lightness": "74"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#544e50"
                    },
                    {
                        "lightness": "-45"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{
                    "lightness": "3"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{
                        "color": "#d26829"
                    },
                    {
                        "lightness": "-16"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                        "color": "#413c3e"
                    },
                    {
                        "lightness": "-66"
                    }
                ]
            }
        ], {
            name: 'Custom Style'
        });
    var customMapTypeId = 'custom_style';


};