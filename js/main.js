$('.add-skill').on('click', function() {
    let template = `
      <tr>
        <td><button class="btn btn-xs btn-danger">X</button>${$('.new-skill').val()}</td>
      </tr>
      `;
    $('#developerSkills tbody').append(template);
    $('.new-skill').val('');
});

$('#developerSkills tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000), function() {
        $(this).remove();
    };
});