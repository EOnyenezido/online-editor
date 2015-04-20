//console.log(htmlEditor.getValue());
$('#fullScreenPreview').empty();
$('#fullScreenPreview').append("<style>" + cssState + "</style>");
$('#fullScreenPreview').append(htmlState);
$('#fullScreenPreview').append("<script>" + jsState + "</script>");
Materialize.toast('Use browser back button to return!', 2000)
