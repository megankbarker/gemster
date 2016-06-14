 
  <script src="http://code.jquery.com/jquery-latest.min.js"></script>
  <script type="text/javascript" src="javascripts/freewall.js"></script>

(function($) {

  var setting = {}, wall;


$(".free-wall .size320").each(function() {
    var backgroundColor = colour[colour.length * Math.random() << 0];
    var bricks = $(this).find(".brick");
    !bricks.length && (bricks = $(this));
    photos.scss({
        backgroundColor: backgroundColor
    });
});

animate : true, // True to make block move with animation.
block.flex : true, // True to made block can resize a bit to fit.
cell.width : number,
cell.height : number,
fillGap : true, // True will made layout without gap.
gutter : mixed, // The spacing between the blocks.
selector : string, // Get all blocks to made layout.

$(function() {
    $(".free-wall").each(function() {
        var wall = new freewall(this);
        wall.reset({
            selector: '.size320',
            cellW: function(container) {
                var cellWidth = 320;
                if (container.hasClass('size320')) {
                    cellWidth = container.width()/2;
                }
                return cellWidth;
            },
            cellH: function(container) {
                var cellHeight = 320;
                if (container.hasClass('size320')) {
                    cellHeight = container.height()/2;
                }
                return cellHeight;
            },
            fixSize: 0,
            gutterY: 20,
            gutterX: 20,
            onResize: function() {
                wall.fitWidth();
            }
        })
        wall.fitWidth();
    });
    $(window).trigger("resize");
});

})(window.Zepto || window.jQuery);
<script type="text/javascript">
var colour = [
    "rgb(142, 68, 173)",
    "rgb(243, 156, 18)",
    "rgb(211, 84, 0)",
    "rgb(0, 106, 63)",
    "rgb(41, 128, 185)",
    "rgb(192, 57, 43)",
    "rgb(135, 0, 0)",
    "rgb(39, 174, 96)"
];
</script>
