/**
 * Copyright (C) 2013-2015 OpenMediaVault Plugin Developers
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// require("js/omv/WorkspaceManager.js")
// require("js/omv/workspace/window/Form.js")
// require("js/omv/workspace/window/plugin/ConfigObject.js")
// require("js/omv/form/field/plugin/FieldInfo.js")


Ext.define("OMV.module.admin.service.couchpotato.Fork", {
    extend: "OMV.workspace.window.Form",
    requires: [
        "OMV.form.field.plugin.FieldInfo",
        "OMV.workspace.window.plugin.ConfigObject",
    ],

    rpcService: "Couchpotato",
    rpcGetMethod: "getFork",
    rpcSetMethod: "setFork",

    plugins: [{
        ptype: "configobject"
    }],

    getFormItems: function() {
        return [{
            xtype: "textfield",
            name: "name",
            fieldLabel: _("Name"),
            allowBlank: false
        }, {
            xtype: "textfield",
            name: "fork",
            fieldLabel: _("Fork"),
            allowBlank: false,
            plugins: [{
                ptype: "fieldinfo",
                text: _("Full fork address. Example: https://github.com/RuudBurger/CouchPotatoServer.git")
            }]
        }];
    }
});
