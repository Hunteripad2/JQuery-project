$("#newtodo_form").on("submit", function (event) {
    const newTodo = $("#newtodo_form_text").val();
    const newTodoItem = `<div class="form-check col-auto todo_item" style="margin-top: 2%"><input type="checkbox" onchange="handleChange(this)" class="form-check-input"><label class="form-check-label">${newTodo}</label></div>`;

    if ($(".todo_item").length % 2 === 0) {
        $("#todo_list").append("<div class='w-100'></div>");
    }

    $("#todo_list").append(newTodoItem);
    $("#newtodo_form_text").val("");

    event.preventDefault();
});

function handleChange(checkBox) {
    if (checkBox.checked) {
        $(checkBox.parentElement).find("label").addClass("text-decoration-line-through");
    } else {
        $(checkBox.parentElement).find("label").removeClass("text-decoration-line-through");
    }
}
