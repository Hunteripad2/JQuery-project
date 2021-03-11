$("#newtodo_form").on("submit", function (event) {
    event.preventDefault();

    const newTodoText = $("#newtodo_form_text").val();
    const newTodoItem = `<div class="col-auto d-flex flex-row mt-5 me-auto ms-auto todo_item">
							<input type="text" class="datepicker form-control-plaintext text-end pe-1" placeholder="Введите дату... ">
							<div class="form-check mt-2"><input type="checkbox" onchange="handleChange(this)" class="form-check-input">
								<label class="form-check-label">${newTodoText}</label>
							</div>
						</div>`;
    const newTodoButton = $("#newtodo_form_button");
    const todoList = $("#todo_list");
    const todoItemList = $(".todo_item");

    if (todoItemList.length % 2 === 0) {
        todoList.append("<div class='w-100'></div>");
    }

    todoList.append(newTodoItem);
    $("#newtodo_form_text").val("");
    $(".datepicker").datepicker();
    newTodoButton.prop("disabled", true);
});

$("#newtodo_form").on("change", function () {
    const newTodoText = $("#newtodo_form_text").val();
    const newTodoButton = $("#newtodo_form_button");

    if (newTodoText) {
        newTodoButton.prop("disabled", false);
    } else newTodoButton.prop("disabled", true);
});

function handleChange(checkBox) {
    if (checkBox.checked) {
        $(checkBox.parentElement).find("label").addClass("text-decoration-line-through");
    } else {
        $(checkBox.parentElement).find("label").removeClass("text-decoration-line-through");
    }
}
