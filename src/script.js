$("form").on("submit", function (event) {
    console.log("submit");
    const newTodo = $(".input_text").val();
    const newTodoItem = `<li><input type="checkbox" onchange='handleChange(this)'><span>${newTodo}</span></li>`;
    $(".todo_list").append(newTodoItem);
    $(".input_text").val("");

    event.preventDefault();
});

function handleChange(checkBox) {
    if (checkBox.checked) {
        $(checkBox.parentElement).find("span").addClass("checked_item");
    } else {
        $(checkBox.parentElement).find("span").removeClass("checked_item");
    }
}
