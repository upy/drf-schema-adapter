// This base model was auto-generated by djember_model
// PLEASE DO NOT EDIT
// you can make changes in app/models/{{application_name}}/{{model_name}}.js
// or regenerate this file by running `./manage.py export_to_ember {{endpoint}}`

import Model from 'ember-data/model';
{% if fields|length > 0 %}
import attr from 'ember-data/attr';
{% endif %}
{% if rels|length > 0 %}
import { {% if belongsTo and hasMany %}belongsTo, hasMany{% else %}{%if belongsTo %}belongsTo{% else %}hasMany{% endif %}{% endif %} } from 'ember-data/relationships';
{% endif %}

export default Model.extend({
  {% for field in fields %}
    {{field.name}}: attr({% if field.type %}'{{field.type}}'{% endif %}),
  {% endfor %}
  {% for field in rels %}
    {{field.name}}: {{field.type}}('{{field.app}}/{{field.related_model}}', {
      async: true
    }),
  {% endfor %}
});
