$("#newtodo_form").on("submit", function (event) {
    const newTodo = $("#newtodo_form_text").val();
    const newTodoItem = `<div class="col-auto d-flex flex-row mt-5 me-auto"><input type="text" class="datepicker form-control-plaintext text-end pe-1" placeholder="Введите дату... "><div class="form-check todo_item mt-2"><input type="checkbox" onchange="handleChange(this)" class="form-check-input"><label class="form-check-label">${newTodo}</label></div></div>`;
    const addTodoButton = $("#newtodo_form_button");

    if ($(".todo_item").length % 2 === 0) {
        $("#todo_list").append("<div class='w-100'></div>");
    }

    $("#todo_list").append(newTodoItem);
    $("#newtodo_form_text").val("");
    $(".datepicker").datepicker();
    addTodoButton.prop("disabled", true);

    event.preventDefault();
});

$("#newtodo_form").on("change", function () {
    const newTodo = $("#newtodo_form_text").val();
    const addTodoButton = $("#newtodo_form_button");

    if (newTodo) {
        addTodoButton.prop("disabled", false);
    } else addTodoButton.prop("disabled", true);
});

function handleChange(checkBox) {
    if (checkBox.checked) {
        $(checkBox.parentElement).find("label").addClass("text-decoration-line-through");
    } else {
        $(checkBox.parentElement).find("label").removeClass("text-decoration-line-through");
    }
}
