$(document).ready(function () {
  let isResizing = false;

  const minWidth = 500;  
  const maxWidth = 1000;  

  $('#resizer').on('mousedown', function (e) {
    isResizing = true;
    $('body').css('cursor', 'col-resize');
  });

  $(document).on('mousemove', function (e) {
    if (!isResizing) return;


    let newWidth = e.clientX;
    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));

    $('#left-pane').css('width', newWidth + 'px');
  });

  $(document).on('mouseup', function () {
    isResizing = false;
    $('body').css('cursor', 'default');
  });
});
