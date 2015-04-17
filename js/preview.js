//console.log(htmlEditor.getValue());
$('#fullScreenPreview').empty();
$('#fullScreenPreview').append("<style>" + cssEditor.getValue() + "</style>");
$('#fullScreenPreview').append(htmlEditor.getValue());
$('#fullScreenPreview').append("<script>" + jsEditor.getValue() + "</script>");
