$(document).ready(function () {
  let isResizing = false;

  const $resizer = $('#resizer');
  const $leftPane = $('#left-pane');
  const $container = $('.flex'); 
  const minPercent = 30;  
  const maxPercent = 70;  

  $resizer.on('mousedown', function (e) {
    isResizing = true;
    $('body').css('cursor', 'col-resize');
    e.preventDefault();
  });

  $(document).on('mousemove', function (e) {
    if (!isResizing) return;

    const containerOffset = $container.offset().left;
    const containerWidth = $container.width();
    let newPercent = ((e.clientX - containerOffset) / containerWidth) * 100;

    newPercent = Math.max(minPercent, Math.min(maxPercent, newPercent));
    $leftPane.css('width', newPercent + '%');
  });

  $(document).on('mouseup', function () {
    isResizing = false;
    $('body').css('cursor', 'default');
  });
});
