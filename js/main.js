$('.addSkill').on('click', function() {
    let template = `
      <tr>
        <td><button class="btn btn-xs btn-danger">X</button>${$('.skillField').val()}</td>
      </tr>
      `;
    $('#developerSkills tbody').append(template);
    $('.skillField').val('');
});

$('#developerSkills tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(1000), function() {
        $(this).remove();
    };
});