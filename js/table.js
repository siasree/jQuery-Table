$(document).ready(function () {
    $("button").click(function () {
        $("#task  tr:nth-child(2)").css({ "background-color": "green", "color": "yellow" });
        $("#task th:nth-child(5),th:nth-child(6),tr:nth-child(9)").css({ "background-color": "red", "color": "white" });
        $("#task tr:nth-child(21)").css({ "background-color": "black", "color": "white" });
        $("#task").css("border-collapse", "collapse");
    })
});
