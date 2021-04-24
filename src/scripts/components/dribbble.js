/** =======================================================================
 * Components / Dribbble
 * ===================================================================== */

export default function dribbble() {

  /**
   * Dribbble galleries
   */

  // Check for Dribbble on page
  const dribbbles = document.querySelector('#dribbbles');

  if (!dribbbles) {
    return;
  }

  // dribbbles.classList.add('-getFaded')

  // Set the Access Token
  const accessToken   = '49a19ad15272251972056008d1f46e1be28cca04264a5ddf535cb735a2bf2ac6';
  const numberOfShots = 6;

  // Call Dribbble v2 API
  // getDribbbles: function(access_token) {
  //   $.getJSON('https://api.dribbble.com/v2/user/shots?access_token=' + access_token).success(function(data) {
  //     for (i = 0; i < 6; i++) {
  //       var shotId = data[i].id,
  //         shotImg = data[i].images.normal,
  //         shotTitle = data[i].title,
  //         shotDate = data[i].created_at,
  //         shotUrl = data[i].html_url;
  //       $('.dribbble-list').append('<li class="dribbble-list__item grid-col"><a href="' + shotUrl + '"><article class="dribbble"><header class="dribbble__detail"><h1 class="dribbble__title">' + shotTitle + '</h1></header><img class="dribbble__thumb" src="' + shotImg + '" width="320" height="240" alt="' + shotTitle + '" /></article></a></li>');
  //     }
  //   });
  // },
  $.ajax({
    url: 'https://api.dribbble.com/v2/user/shots?access_token=' + accessToken,
    dataType: 'json',
    type: 'GET',
    success: function( data ) {
      if ( 0 < data.length ) {
        $.each( data, function( i, val ) {

          let title       = val.title || '';
          let htmlUrl     = val.html_url || 'https://dribbble.com/onemohrtime';
          let teaserUrl   = val.images.teaser || null;
          let normalUrl   = val.images.normal || null;
          let hidpiUrl    = val.images.hidpi || null;
          // strip tags off to avoid front-end code breaking
          let description = val.description.replace( /(<([^>]+)>)/gi, '' ) || val.title;
          // manually truncate description
          let trimmedDesc = jQuery.trim( description ).substring( 0, 80 ).trim( this ) + '...';

          $('#dribbbles').append(`
            <figure id="shot_${val.id}" class="shot">
              <a class="shot__link" href="${hidpiUrl}" data-fancybox="dribbble" data-caption="${trimmedDesc}" title="See ${title} on Dribbble" aria-describedby="caption-${i}"></a>
              <img src="${teaserUrl}" alt="${title}" srcset="${normalUrl} 800w, ${hidpiUrl} 1600w" class="shot__image" />
              <figcaption class="shot--hover" id="caption-${i}">
                <h3 class="shot__headline _headline -underline">${title}</h3>
                <span class="shot__description">${trimmedDesc}</span>
              </figcaption>
            </figure>
            `
          );

          // limit to 6 shots
          return i < numberOfShots - 1;
        });
      } else {
        $( '#dribbbles' ).append( '<code>Error loading shots. Try <a href="javascript:history.go(0);">reloading</a> the page?</code>' );
      }
    }
  });
}
