import React from 'react';

<form class="p-2 application-container" action="{{ path_for('store') }}" method="post">

  <div class="row ">
      <div class="form-group col-md-5">
        <label for=""><i class="material-icons md-48">create_new_folder</i><span>Search Location:</span></label>
        <input type="text" name="Input" value="/Users/matt/Desktop" class="form-control"/>
      </div>

      <div class="form-group col-md-2">
        <i class="material-icons arrow-icn">arrow_forward</i>
      </div>

      <div class="form-group col-md-5">
        <label for=""><i class="material-icons md-48">create_new_folder</i><span>Sorting Location:</span></label>
        <input type="text" name="Output" value="/Users/matt/Public" class="form-control"/>
      </div>
  </div>

</form>
