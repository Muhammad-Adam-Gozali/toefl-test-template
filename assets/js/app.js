$(document).ready(function () {
  let isResizing = false;

  const $resizer = $('#resizer');
  const $leftPane = $('#left-pane');
  const $container = $('.flex'); // container utama dari left + resizer + right pane

  const minPercent = 30;  // minimum lebar left-pane dalam %
  const maxPercent = 70;  // maksimum lebar left-pane dalam %

  $resizer.on('mousedown', function (e) {
    isResizing = true;
    $('body').css('cursor', 'col-resize');
    e.preventDefault();
  });

  $(document).on('mousemove', function (e) {
    if (!isResizing) return;

    const containerOffset = $container.offset().left;
    const containerWidth = $container.width();
    let newWidthPx = e.clientX - containerOffset;

    let newWidthPercent = (newWidthPx / containerWidth) * 100;
    newWidthPercent = Math.max(minPercent, Math.min(maxPercent, newWidthPercent));

    $leftPane.css('width', newWidthPercent + '%');
  });

  $(document).on('mouseup', function () {
    if (isResizing) {
      isResizing = false;
      $('body').css('cursor', 'default');
    }
  });
});


$(document).ready(function () {
  const $btn = $('#fullscreenBtn');
  const elem = document.documentElement;

  $btn.on('click', function () {
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  });

  // Saat status fullscreen berubah (ESC atau programatik)
  $(document).on('fullscreenchange webkitfullscreenchange mozfullscreenchange MSFullscreenChange', function () {
    if (document.fullscreenElement) {
      $btn.hide(); 
    } else {
      $btn.show(); 
    }
  });
});

