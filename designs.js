
var color = $("#colorPicker").val();

$("#colorPicker").change(function () {
    color = $(this).val();
});
function makeGrid() {
    const  inputHeight = $("#input_height").val();
    const  inputWidth = $("#input_width").val();
    $("#pixel_canvas").children().remove();
    for (let i = 0; i < inputHeight; i++)
    {
        var newR = $("#pixel_canvas").append("<tr id=" + [i] + "></tr>");
        for (let j = 0; j < inputWidth; j++) {
            newR.find("#" + i).append("<td class='pixel'></td>");
        }
    }
}
function pixelColor()
{
    $(".pixel").click(function ()
    {
        $(this).css("background", color);
    });
}
$("#submit-button").click(function ()
{
    makeGrid();
    pixelColor();
});