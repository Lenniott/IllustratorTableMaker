
// Table_Maker.jsx
// Version 0.1
// Copyright 2021 Ben Mizrany
// Comments or suggestions to crocodileScissorCut@gmail.com
// 
// UI created using https://scriptui.joonas.me/




#target illustrator

#targetengine 'main'

var folder = Folder(txtFilePath()+"TableScriptPresets//default");
if(!folder.exists){
     folder.create()
}


var preset = []
var tableOptions;
var defultFile = File(folder+"/defultsPreset.txt")
if(!defultFile.exists){
     defultFile.open("w");
     defultFile.write("Table layer name\n4\n4\n#E8E8E8\n200\n5\nMedium\n20\n#828282\nBlack\n20\n#444444\nfalse\nfalse\nfalse\nfalse\nfalse\nfalse\nRoboto\nBlack");
     defultFile.close();
     
}

     defultFile.open("r");
     while(!defultFile.eof){
        preset.push(defultFile.readln().toString())
     }
     defultFile.close()

    
    tableOptions = {
    cellColor:preset[3],
    cellWidth:preset[4],
    cellGap:preset[5],
    cellFontStyle:preset[6],
    cellFontSize:preset[7],
    headerColor:preset[8],
    headerFontStyle:preset[9],
    headerFontSize:preset[10],
    titleColor:preset[11],
    rowTitle:preset[12]=="true",
    colTitle:preset[13]=="true",
    rowHeader:preset[14]=="true",
    colHeader:preset[15]=="true",
    rowGroup:preset[16]=="true",
    colGroup:preset[17]=="true",
    cellFont:preset[18],
    titleStyle:preset[19],
    }



// WINDOW
// ======
var window = new Window("dialog","Make a Table",undefined,{closeButton: true}); 
    window.text = "Make a Table"; 
    window.orientation = "row"; 
    window.alignChildren = ["left","top"]; 
    window.spacing = 10; 
    window.margins = 16; 
    

// OPTIONS
// =======
var Options = window.add("group", undefined, {name: "Options"}); 
    Options.orientation = "column"; 
    Options.alignChildren = ["fill","top"]; 
    Options.spacing = 10; 
    Options.margins = 0; 

// CSVTABLEINFO
// ============
var csvTableInfo = Options.add("group", undefined, {name: "csvTableInfo"}); 
    csvTableInfo.orientation = "column"; 
    csvTableInfo.alignChildren = ["fill","center"]; 
    csvTableInfo.spacing = 10; 
    csvTableInfo.margins = 0; 
    csvTableInfo.enabled = false;

    

// CSVTABLETITLE
// =============
var csvTableTitle = csvTableInfo.add("group", undefined, {name: "csvTableTitle"}); 
    csvTableTitle.orientation = "column"; 
    csvTableTitle.alignChildren = ["left","center"]; 
    csvTableTitle.spacing = 10; 
    csvTableTitle.margins = 0; 

var csvRowNumTitle = csvTableTitle.add("statictext", undefined, undefined, {name: "csvRowNumTitle"}); 
    csvRowNumTitle.text = "CSV Table"; 
    csvRowNumTitle.alignment = ["left","center"]; 

// CSVTABLEINFO
// ============
var divider1 = csvTableInfo.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// CSVNAMEPATHDETAILS
// ==================
var csvNamePathDetails = csvTableInfo.add("group", undefined, {name: "csvNamePathDetails"}); 
    csvNamePathDetails.orientation = "row"; 
    csvNamePathDetails.alignChildren = ["left","fill"]; 
    csvNamePathDetails.spacing = 10; 
    csvNamePathDetails.margins = 0; 

var csvTableName = csvNamePathDetails.add("statictext", undefined, undefined, {name: "csvTableName"}); 
    csvTableName.enabled = false; 
    csvTableName.text = "Table name"; 
    csvTableName.alignment = ["left","top"]; 

var divider2 = csvNamePathDetails.add("panel", undefined, undefined, {name: "divider2"}); 
    divider2.alignment = "fill"; 

var csvTablePath = csvNamePathDetails.add("statictext", undefined, undefined, {name: "csvTablePath"}); 
    csvTablePath.enabled = false; 
    csvTablePath.text = "Table Path"; 
    csvTablePath.preferredSize.width = 150
    csvTablePath.alignment = ["left","top"]; 

// CSVTABLEINFO
// ============
var divider3 = csvTableInfo.add("panel", undefined, undefined, {name: "divider3"}); 
    divider3.alignment = "fill"; 

// CSVTABLENUMS
// ============
var csvTableNums = csvTableInfo.add("group", undefined, {name: "csvTableNums"}); 
    csvTableNums.orientation = "row"; 
    csvTableNums.alignChildren = ["right","top"]; 
    csvTableNums.spacing = 10; 
    

var csvRowNumTitle1 = csvTableNums.add("statictext", undefined, undefined, {name: "csvRowNumTitle1"}); 
    csvRowNumTitle1.enabled = false; 
    csvRowNumTitle1.text = "Rows"; 

var csvRowNumValue = csvTableNums.add("statictext", undefined, undefined, {name: "csvRowNumValue"}); 
    csvRowNumValue.enabled = false; 
    csvRowNumValue.text = "0"; 
    csvRowNumValue.preferredSize.width = 30

var csvColNumTitle = csvTableNums.add("statictext", undefined, undefined, {name: "csvColNumTitle"}); 
    csvColNumTitle.enabled = false; 
    csvColNumTitle.text = "Columns"; 

var csvColNumValue = csvTableNums.add("statictext", undefined, undefined, {name: "csvColNumValue"}); 
    csvColNumValue.enabled = false; 
    csvColNumValue.text = "0"; 
    csvColNumValue.alignment = ["right","fill"]; 
    csvColNumValue.preferredSize.width = 30

// TMPTABLEINFO
// ============
var tmpTableInfo = Options.add("group", undefined, {name: "tmpTableInfo"}); 
    tmpTableInfo.orientation = "column"; 
    tmpTableInfo.alignChildren = ["fill","center"]; 
    tmpTableInfo.spacing = 10; 
    tmpTableInfo.margins = 0; 
    

// TMPTABLETITLE
// =============
var tmpTableTitle = tmpTableInfo.add("group", undefined, {name: "tmpTableTitle"}); 
    tmpTableTitle.orientation = "column"; 
    tmpTableTitle.alignChildren = ["left","center"]; 
    tmpTableTitle.spacing = 10; 
    tmpTableTitle.margins = 0; 

var tempRowNumTitle = tmpTableTitle.add("statictext", undefined, undefined, {name: "tempRowNumTitle"}); 
    tempRowNumTitle.text = "Filler Table"; 
    tempRowNumTitle.alignment = ["left","center"]; 

// TMPTABLEINFO
// ============
var divider4 = tmpTableInfo.add("panel", undefined, undefined, {name: "divider4"}); 
    divider4.alignment = "fill"; 

// TMPNAMEPATHDETAILS
// ==================
var tmpNamePathDetails = tmpTableInfo.add("group", undefined, {name: "tmpNamePathDetails"}); 
    tmpNamePathDetails.orientation = "row"; 
    tmpNamePathDetails.alignChildren = ["left","fill"]; 
    tmpNamePathDetails.spacing = 10; 
    tmpNamePathDetails.margins = 0; 
    

var tmpTableNameTitle = tmpNamePathDetails.add("statictext", undefined, undefined, {name: "tmpTableNameTitle"}); 
    tmpTableNameTitle.enabled = false; 
    tmpTableNameTitle.text = "Table name"; 

var tmpTableNameValue = tmpNamePathDetails.add('edittext {properties: {name: "tmpTableNameValue", borderless: true}}'); 
    tmpTableNameValue.text = "Enter Table Name Here"; 
    tmpTableNameValue.preferredSize.width = 150; 
    tmpTableNameValue.alignment = ["left","fill"]; 

// TMPTABLEINFO
// ============
var divider5 = tmpTableInfo.add("panel", undefined, undefined, {name: "divider5"}); 
    divider5.alignment = "fill"; 

// TMPTABLENUMS
// ============
var tmpTableNums = tmpTableInfo.add("group", undefined, {name: "tmpTableNums"}); 
    tmpTableNums.orientation = "row"; 
    tmpTableNums.alignChildren = ["right","fill"]; 
    tmpTableNums.spacing = 10; 
    tmpTableNums.margins = 0; 

var rowNumTitle = tmpTableNums.add("statictext", undefined, undefined, {name: "rowNumTitle"}); 
    rowNumTitle.enabled = false; 
    rowNumTitle.text = "Rows"; 

var rowNumValue = tmpTableNums.add('edittext {properties: {name: "rowNumValue", borderless: true}}'); 
    rowNumValue.text = "4"; 
    rowNumValue.preferredSize.width = 30; 

var colNumTitle = tmpTableNums.add("statictext", undefined, undefined, {name: "colNumTitle"}); 
    colNumTitle.enabled = false; 
    colNumTitle.text = "Columns"; 

var colNumValue = tmpTableNums.add('edittext {properties: {name: "colNumValue", borderless: true}}'); 
    colNumValue.text = "4"; 
    colNumValue.preferredSize.width = 30; 

// OPTIONS
// =======
var divider6 = Options.add("panel", undefined, undefined, {name: "divider6"}); 
    divider6.alignment = "fill"; 

// CELLPROPERTIES
// ==============
var cellProperties = Options.add("group", undefined, {name: "cellProperties"}); 
    cellProperties.preferredSize.width = 380; 
    cellProperties.orientation = "column"; 
    cellProperties.alignChildren = ["fill","center"]; 
    cellProperties.spacing = 5; 
    cellProperties.margins = [0,0,0,0]; 

var cellTitle = cellProperties.add("statictext", undefined, undefined, {name: "cellTitle"}); 
    cellTitle.text = "Cell Properties"; 
    cellTitle.alignment = ["fill","center"]; 

// CELLSPEC
// ========
var CellSpec = cellProperties.add("group", undefined, {name: "CellSpec"}); 
    CellSpec.orientation = "row"; 
    CellSpec.alignChildren = ["left","center"]; 
    CellSpec.spacing = 10; 
    CellSpec.margins = [0,10,0,10]; 

var cellHexTitle = CellSpec.add("statictext", undefined, undefined, {name: "cellHexTitle"}); 
    cellHexTitle.enabled = false; 
    cellHexTitle.text = "Colour"; 

var cellHexValue = CellSpec.add('edittext {properties: {name: "cellHexValue", borderless: true}}'); 
    cellHexValue.text = tableOptions.cellColor; 
    cellHexValue.preferredSize.width = 60; 


var cellWidthTitle = CellSpec.add("statictext", undefined, undefined, {name: "cellWidthTitle"}); 
    cellWidthTitle.enabled = false; 
    cellWidthTitle.text = "Width";

var cellWidthValue = CellSpec.add('edittext {properties: {name: "cellWidthValue", borderless: true}}'); 
    cellWidthValue.text = tableOptions.cellWidth; 
    cellWidthValue.preferredSize.width = 40; 
    if(parseInt(cellWidthValue.text)<50){
        alert("Width must be equal to or larger than 50")
        cellWidthValue.text = 55
    }


var cellGap = CellSpec.add("statictext", undefined, undefined, {name: "cellWidthTitle"}); 
cellGap.enabled = false; 
cellGap.text = "Gap between Cells";

var cellGapValue = CellSpec.add('edittext {properties: {name: "cellWidthValue", borderless: true}}'); 
     cellGapValue.text = tableOptions.cellGap; 
     cellGapValue.preferredSize.width = 40;     
// CELLFONTALL
// ===========
var cellFontAll = cellProperties.add("group", undefined, {name: "cellFontAll"}); 
    cellFontAll.orientation = "row"; 
    cellFontAll.alignChildren = ["left","center"]; 
    cellFontAll.spacing = 20; 
    cellFontAll.margins = [0,10,0,10]; 

// CELLFONTSTYLE
// =============
var cellFontStyle = cellFontAll.add("group", undefined, {name: "cellFontStyle"}); 
    cellFontStyle.orientation = "column"; 
    cellFontStyle.alignChildren = ["center","center"]; 
    cellFontStyle.spacing = 0; 
    cellFontStyle.margins = 0; 
    cellFontStyle.alignment = ["left","fill"]; 

var cellFontStyleTitle = cellFontStyle.add("statictext", undefined, undefined, {name: "cellFontStyleTitle"}); 
    cellFontStyleTitle.enabled = false; 
    cellFontStyleTitle.text = "Font Style"; 
    cellFontStyleTitle.alignment = ["left","center"]; 

var cellFontStyleInput_array = [tableOptions.cellFontStyle]; 
var cellFontStyleInput = cellFontStyle.add("dropdownlist", undefined, undefined, {name: "cellFontStyleInput", items: cellFontStyleInput_array}); 
    cellFontStyleInput.selection = 0; 
    cellFontStyleInput.preferredSize.width = 120; 



// CELLFONTSIZE
// ============
var cellFontSize = cellFontAll.add("group", undefined, {name: "cellFontSize"}); 
    cellFontSize.orientation = "column"; 
    cellFontSize.alignChildren = ["fill","center"]; 
    cellFontSize.spacing = 0; 
    cellFontSize.margins = 0; 
    cellFontSize.alignment = ["left","center"]; 

var cellFontSizeTitle1 = cellFontSize.add("statictext", undefined, undefined, {name: "cellFontSizeTitle1"}); 
    cellFontSizeTitle1.enabled = false; 
    cellFontSizeTitle1.text = "Font Size"; 

var cellFontSizeValue = cellFontSize.add('edittext {properties: {name: "cellFontSizeValue", borderless: true}}'); 
    cellFontSizeValue.text = tableOptions.cellFontSize; 
    cellFontSizeValue.preferredSize.width = 50; 


// OPTIONS
// =======
var divider7 = Options.add("panel", undefined, undefined, {name: "divider7"}); 
    divider7.alignment = "fill"; 

// HEADERPROPERTIES
// ================
var headerProperties = Options.add("group", undefined, {name: "headerProperties"}); 
    headerProperties.preferredSize.width = 380; 
    headerProperties.orientation = "column"; 
    headerProperties.alignChildren = ["fill","center"]; 
    headerProperties.spacing = 5; 
    headerProperties.margins = [0,0,0,0];
    headerProperties.enabled = enabled(tableOptions.colHeader.toString()+tableOptions.rowHeader.toString()); 
    

var headerTitle = headerProperties.add("statictext", undefined, undefined, {name: "headerTitle"}); 
    headerTitle.text = "Header Properties"; 
    headerTitle.alignment = ["left","center"]; 

// HEADERFONTALL
// =============
var headerFontAll = headerProperties.add("group", undefined, {name: "headerFontAll"}); 
    headerFontAll.orientation = "row"; 
    headerFontAll.alignChildren = ["left","center"]; 
    headerFontAll.spacing = 20; 
    headerFontAll.margins = [0,10,0,10]; 


// HEADERCOLOUR
// ============
var headerColour = headerFontAll.add("group", undefined, {name: "headerColour"}); 
    headerColour.orientation = "column"; 
    headerColour.alignChildren = ["center","center"]; 
    headerColour.spacing = 0; 
    headerColour.margins = 0; 
    headerColour.alignment = ["left","fill"]; 

var headerHexTitle = headerColour.add("statictext", undefined, undefined, {name: "headerHexTitle"}); 
    headerHexTitle.enabled = false; 
    headerHexTitle.text = "Cell Colour"; 
    headerHexTitle.alignment = ["left","center"]; 

var headerHexInput = headerColour.add('edittext {properties: {name: "headerHexInput", borderless: true}}'); 
    headerHexInput.text = tableOptions.headerColor; 
    headerHexInput.preferredSize.width = 80; 



// HEADERFONTSTYLE
// ===============
var headerFontStyle = headerFontAll.add("group", undefined, {name: "headerFontStyle"}); 
    headerFontStyle.orientation = "column"; 
    headerFontStyle.alignChildren = ["center","center"]; 
    headerFontStyle.spacing = 0; 
    headerFontStyle.margins = 0; 
    headerFontStyle.alignment = ["left","fill"]; 

var headerFontStyleTitle = headerFontStyle.add("statictext", undefined, undefined, {name: "headerFontStyleTitle"}); 
    headerFontStyleTitle.enabled = false; 
    headerFontStyleTitle.text = "Font Style"; 
    headerFontStyleTitle.alignment = ["left","center"]; 

var headerFontStyleInput_array = [tableOptions.headerFontStyle]; 
var headerFontStyleInput = headerFontStyle.add("dropdownlist", undefined, undefined, {name: "headerFontStyleInput", items: headerFontStyleInput_array}); 
    headerFontStyleInput.selection = 0; 
    headerFontStyleInput.preferredSize.width = 120; 




// HEADERFONTSIZE
// ==============
var headerFontSize = headerFontAll.add("group", undefined, {name: "headerFontSize"}); 
    headerFontSize.orientation = "column"; 
    headerFontSize.alignChildren = ["fill","center"]; 
    headerFontSize.spacing = 0; 
    headerFontSize.margins = 0; 
    headerFontSize.alignment = ["left","center"]; 

var headerFontSizeTitle = headerFontSize.add("statictext", undefined, undefined, {name: "headerFontSizeTitle"}); 
    headerFontSizeTitle.enabled = false; 
    headerFontSizeTitle.text = "Font Size"; 

var headerFontSizeValue = headerFontSize.add('edittext {properties: {name: "headerFontSizeValue", borderless: true}}'); 
    headerFontSizeValue.text = tableOptions.headerFontSize; 
    headerFontSizeValue.preferredSize.width = 50; 

// TMPTABLEINFO
// ============
var divider5 = Options.add("panel", undefined, undefined, {name: "divider5"}); 
    divider5.alignment = "fill"; 

//TITLEINFO
//========
var titleOptions = Options.add("group",undefined,"titleOptions")
titleOptions.orientation = "column"; 
titleOptions.alignChildren = ["fill","center"]; 
titleOptions.spacing = 5; 
titleOptions.margins = [0,0,0,0];
titleOptions.enabled = enabled(tableOptions.colTitle.toString()+tableOptions.rowTitle.toString()); 

var titleTitle = titleOptions.add("staticText")
    titleTitle.text = "Title Options"


//Title Colour
//=====
var titleColorOption = titleOptions.add("group",undefined)
    titleColorOption.orientation = "row"; 
    titleColorOption.alignment = ["left","center"]; 
    titleColorOption.enabled = enabled(tableOptions.rowTitle.toString()+tableOptions.colTitle.toString())

var titleColorOptionTitle = titleColorOption.add("staticText")
    titleColorOptionTitle.text = "Cell Title Colour"
    titleColorOptionTitle.preferredSize.width = 100;

var titleColorOptionInput = titleColorOption.add("editText")
    titleColorOptionInput.text = tableOptions.titleColor;
    titleColorOptionInput.preferredSize.width = 200;

//Title textStyle
//=====
var titleStyleOption = titleOptions.add("group",undefined)
titleStyleOption.orientation = "row"; 
titleStyleOption.alignment = ["left","center"]; 
titleStyleOption.enabled = enabled(tableOptions.rowTitle.toString()+tableOptions.colTitle.toString())

titleStyleOptionTitle = titleStyleOption.add("staticText")
titleStyleOptionTitle.text = "Font style"
titleStyleOptionTitle.preferredSize.width = 100;

var titleStyleOptionInput_array = [tableOptions.titleStyle]; 
var titleStyleOptionInput = titleStyleOption.add("dropdownlist", undefined, undefined,{name: "titleFontStyleInput", items: titleStyleOptionInput_array}); 
titleStyleOptionInput.selection = 0; 
titleStyleOptionInput.preferredSize.width = 120; 




//Row Title
//=====
var titleRowOption = titleOptions.add("group",undefined)
    titleRowOption.orientation = "row"; 
    titleRowOption.alignment = ["left","center"]; 
    titleRowOption.enabled = enabled(tableOptions.rowTitle.toString())

    titleRowOptionTitle = titleRowOption.add("staticText")
    titleRowOptionTitle.text = "Row Title"
    titleRowOptionTitle.preferredSize.width = 100;
    titleRowOptionInput = titleRowOption.add("editText")
    titleRowOptionInput.text = "Row Title"
    titleRowOptionInput.preferredSize.width = 200;

//Colum Title
//=====
var titleColOption = titleOptions.add("group",undefined)
    titleColOption.orientation = "row"; 
    titleColOption.alignment = ["left","center"];
    titleColOption.enabled = enabled(tableOptions.colTitle.toString())

    titleColOptionTitle = titleColOption.add("staticText")
    titleColOptionTitle.text = "Column Title"
    titleColOptionTitle.preferredSize.width = 100;
    titleColOptionInput = titleColOption.add("editText")
    titleColOptionInput.text = "Column Title"
    titleColOptionInput.preferredSize.width = 200;


var divider12 = Options.add("panel", undefined, undefined, {name: "divider5"}); 
divider12.alignment = "fill"; 
divider12.margins = 0; 



// EDITWINDOW
// ==========
var editWindow = new Window("palette"); 
    editWindow.text = "Edit Table"; 
    editWindow.orientation = "column"; 
    editWindow.alignChildren = ["center","top"]; 
    editWindow.spacing = 10; 
    editWindow.margins = 10; 

// EDITTABLE
// =========
var editTable = editWindow.add("group", undefined, {name: "editTable"}); 
    editTable.orientation = "column"; 
    editTable.alignChildren = ["center","center"]; 
    editTable.spacing = 10; 
    editTable.margins = 0; 

// HELPTEXT
// ========
var helpText = editTable.add("group", undefined, {name: "helpText"}); 
    helpText.orientation = "column"; 
    helpText.alignChildren = ["left","center"]; 
    helpText.spacing = 10; 
    helpText.margins = 0; 

var statictext1 = helpText.add("group"); 
    statictext1.preferredSize.width = 415; 
    statictext1.orientation = "column"; 
    statictext1.alignChildren = ["left","center"]; 
    statictext1.spacing = 0; 

    statictext1.add("statictext", undefined, "Resize a cell shape, state cell gap and then choose the layer from", {name: "statictext1"}); 
    statictext1.add("statictext", undefined, "the drop down and click amend. You may need to do this more", {name: "statictext1"}); 
    statictext1.add("statictext", undefined, "than once to get it perfect.", {name: "statictext1"}); 
    statictext1.preferredSize.width = 415; 

// EDITOPTIONS
// ===========
var editOptions = editTable.add("group", undefined, {name: "editOptions"}); 
    editOptions.orientation = "row"; 
    editOptions.alignChildren = ["left","center"]; 
    editOptions.spacing = 10; 
    editOptions.margins = 0; 

// GROUPOPTIONS
// ============
var groupOptions = editOptions.add("panel", undefined, undefined, {name: "groupOptions"}); 
    groupOptions.text = "Group by"; 
    groupOptions.preferredSize.height = 60; 
    groupOptions.orientation = "row"; 
    groupOptions.alignChildren = ["left","center"]; 
    groupOptions.spacing = 10; 
    groupOptions.margins = 10; 

var editGroupRow = groupOptions.add("checkbox", undefined, undefined, {name: "editGroupRow"}); 
    editGroupRow.text = "Row"; 

var editGroupCol = groupOptions.add("checkbox", undefined, undefined, {name: "editGroupCol"}); 
    editGroupCol.text = "Column"; 

// CELLGAPPANEL
// ============
var cellGapPanel = editOptions.add("panel", undefined, undefined, {name: "cellGapPanel"}); 
    cellGapPanel.text = "Cell gap"; 
    cellGapPanel.preferredSize.height = 60; 
    cellGapPanel.orientation = "row"; 
    cellGapPanel.alignChildren = ["center","center"]; 
    cellGapPanel.spacing = 10; 
    cellGapPanel.margins = 10; 

var StaticCellGap = cellGapPanel.add("statictext", undefined, undefined, {name: "StaticCellGap"}); 
    StaticCellGap.text = "Cell Gap"; 

var editCellGapValue = cellGapPanel.add('edittext {properties: {name: "editCellGapValue", borderless: true}}'); 
    editCellGapValue.text = "5"; 
    editCellGapValue.preferredSize.width = 121; 

// EDITTABLE
// =========
var divider1 = editTable.add("panel", undefined, undefined, {name: "divider1"}); 
    divider1.alignment = "fill"; 

// EDITTABLEINPUTGROUP
// ===================
var editTableInputGroup = editTable.add("group", undefined, {name: "editTableInputGroup"}); 
    editTableInputGroup.orientation = "row"; 
    editTableInputGroup.alignChildren = ["left","center"]; 
    editTableInputGroup.spacing = 10; 
    editTableInputGroup.margins = 0; 

var layerNameStatic = editTableInputGroup.add("statictext", undefined, undefined, {name: "layerNameStatic"}); 
    layerNameStatic.text = "Layer name"; 

var editLayerValue = editTableInputGroup.add("dropdownlist", undefined, undefined, {name: "editLayerValue"}); 
    editLayerValue.selection = 0; 
    editLayerValue.preferredSize.width = 200; 

var editButton = editTableInputGroup.add("button", undefined, undefined, {name: "editButton"}); 
    editButton.text = "Amend Table"; 


    editGroupRow.onClick = function (){
    if(editGroupCol.value == true){
        editGroupCol.value = false
    }
    }
    editGroupCol.onClick = function (){
        if(editGroupRow.value == true){
            editGroupRow.value = false
        }
    }

    editLayerValue.onChange = function () {

            editButton.enabled = true
    }

//Colaps
//====


csvTableInfo.size = [418,0]
tmpTableInfo.size = [418,105]
window.size = [572,500+tmpTableInfo.size[1]]
Options.size = [418,465+tmpTableInfo.size[1]]



// WINDOW
// ======
var divider8 = window.add("panel", undefined, undefined, {name: "divider8"}); 
    divider8.alignment = "fill"; 

// CONTROLS
// ========
var Controls = window.add("group", undefined, {name: "Controls"}); 
    Controls.preferredSize.width = 100; 
    Controls.orientation = "column"; 
    Controls.alignChildren = ["left","fill"]; 
    Controls.spacing = 10; 
    Controls.margins = 0; 

var OkayBtn = Controls.add("button", undefined, undefined, {name: "OkayBtn"}); 
    OkayBtn.text = "Confirm"; 
    OkayBtn.preferredSize.width = 100; 



var importCSVBtn = Controls.add("button", undefined, undefined, {name: "importCSVBtn"}); 
    importCSVBtn.text = "Import CSV"; 
    importCSVBtn.preferredSize.width = 100; 

    importCSVBtn.onClick = function (){
     var path = File.openDialog("choose CSV")
     var pathString = path.toString()
          if(pathString.substr(pathString.length-3,pathString.length)!="csv"){
               alert("Please pick a CSV file")
          }
          else{
          var file = File(path);
          var csvFile = openCSV(file)
          csvTableName.text = addSpace(file.name).split(".")[0]
          csvTablePath.text = addSpace(pathString)
          csvRowNumValue.text = csvFile.maxRow
          csvColNumValue.text = csvFile.maxCol
          csvTableInfo.size = [418,89]
          csvTableInfo.enabled = true
          tmpTableInfo.size = [418,0]
          tmpTableInfo.enabled = false
          }
    }

var savePreset = Controls.add("button", undefined, undefined, {name: "savePreset"}); 
    savePreset.text = "Save Preset"; 
    savePreset.preferredSize.width = 100; 

    savePreset.onClick = function (){

        var fileName = prompt("Name Preset","MyPreset")
        if(fileName!=null){
            var choice = confirm("Would you like to make this your default?")
            var tableLayerName = tmpTableNameValue.text.toString()
            if(whatTable()=="csv"){
            tableLayerName = csvTableName.text.toString()
            }

        var maxRow =  rowNumValue.text
            if(whatTable()=="csv"){
            maxRow = csvRowNumValue.text.toString()
            }
        var maxCol = colNumValue.text
            if(whatTable()=="csv"){
            maxCol = csvColNumValue.text.toString()
            }
            var thisTableOptions = {
                tableName:tableLayerName,
                tableRows:maxRow,
                tableCol:maxCol,
                cellColor:cellHexValue.text,
                cellWidth:cellWidthValue.text,
                cellGap:cellGapValue.text,
                cellFontStyle:cellFontStyleInput.selection,
                cellFontSize:cellFontSizeValue.text,
                headerColor:headerHexInput.text,
                headerFontStyle:headerFontStyleInput.selection,
                headerFontSize:headerFontSizeValue.text,
                titleColor:titleColorOptionInput.text,
                titleFontStyle:titleStyleOptionInput.selection,
                rowTitle:titleRow.value,
                colTitle:titleCol.value,
                rowHeader:rowHeader.value,
                colHeader:colHeader.value,
                rowGroup:groupRow.value,
                colGroup:groupCol.value,
                cellFont:cellFontInput.selection,
                titleStyle:titleStyleOptionInput.selection,
            } 
            makePreset(fileName,thisTableOptions,choice)
        }
    }

var loadPreset = Controls.add("button", undefined, undefined, {name: "loadPreset"}); 
    loadPreset.text = "Load Preset"; 
    loadPreset.preferredSize.width = 100; 



var CancelBtn = Controls.add("button", undefined, undefined, {name: "CancelBtn"}); 
     CancelBtn.text = "Cancel"; 
     CancelBtn.preferredSize.width = 100; 

     CancelBtn.onClick = function (){
          window.close()
     }

var divider9 = Controls.add("panel", undefined, undefined, {name: "divider9"}); 
    divider9.alignment = "fill"; 

var tableTitle = Controls.add("statictext", undefined, undefined, {name: "tableTitle"}); 
    tableTitle.text = "Titles"; 
    

var titleRow = Controls.add("checkbox", undefined, undefined, {name: "titleRow"}); 
    titleRow.text = "Row"; 
    titleRow.value = tableOptions.rowTitle
var titleCol = Controls.add("checkbox", undefined, undefined, {name: "titleCol"}); 
    titleCol.text = "Column"; 
    titleCol.value = tableOptions.colTitle

    titleCol.onClick = function (){
        titleColOption.enabled = titleCol.value;
        if(titleCol.value==true||titleRow.value==true){
            titleOptions.enabled = true; 
            titleColorOption.enabled = true;
            titleStyleOption.enabled = true;
        }
        else{
            titleOptions.enabled =titleCol.value 
            titleColorOption.enabled=titleCol.value
            titleStyleOption.enabled = titleCol.value;
        }
    }
    titleRow.onClick = function (){
        titleRowOption.enabled = titleRow.value;
        if(titleCol.value==true||titleRow.value==true){
            titleOptions.enabled = true; 
            titleColorOption.enabled = true;
            titleStyleOption.enabled = true;
        }
        else{
            titleOptions.enabled = titleRow.value; 
            titleColorOption.enabled=titleRow.value;
            titleStyleOption.enabled = titleRow.value;
        }
    }

var divider10 = Controls.add("panel", undefined, undefined, {name: "divider10"}); 
    divider10.alignment = "fill"; 

var controlHeaderTitle = Controls.add("statictext", undefined, undefined, {name: "controlHeaderTitle"}); 
    controlHeaderTitle.text = "Headers"; 
    
var rowHeader = Controls.add("checkbox", undefined, undefined, {name: "rowHeader"}); 
    rowHeader.text = "Row"; 
    rowHeader.value = tableOptions.rowHeader
var colHeader = Controls.add("checkbox", undefined, undefined, {name: "colHeader"}); 
    colHeader.text = "Column"; 
    colHeader.value = tableOptions.colHeader

        colHeader.onClick = function (){
            
            if(colHeader.value==true||rowHeader.value==true){
                headerProperties.enabled = true;
            }
            else{
                headerProperties.enabled = colHeader.value;
            }
        }

        rowHeader.onClick = function (){
            if(colHeader.value==true||rowHeader.value==true){
                headerProperties.enabled = true;
            }
            else{
                headerProperties.enabled = rowHeader.value;
            }
        }


var divider11 = Controls.add("panel", undefined, undefined, {name: "divider11"}); 
    divider11.alignment = "fill"; 

var groupTitle = Controls.add("statictext", undefined, undefined, {name: "groupTitle"}); 
    groupTitle.text = "Group by"; 
    
var groupRow = Controls.add("checkbox", undefined, undefined, {name: "groupRow"}); 
    groupRow.text = "Row"; 
    groupRow.value = tableOptions.rowGroup
    
    


var groupCol = Controls.add("checkbox", undefined, undefined, {name: "groupCol"}); 
    groupCol.text = "Column"; 
    groupCol.value = tableOptions.colGroup


    var divider20 = Controls.add("panel", undefined, undefined, {name: "divider20"}); 
    divider20.alignment = "fill"; 
    

    groupRow.onClick = function (){
    if(groupCol.value == true){
        groupCol.value = false
    }
    }
    groupCol.onClick = function (){
        if(groupRow.value == true){
            groupRow.value = false
        }
    }

// CELLFONT
// ========
var cellFont = Controls.add("group", undefined, {name: "cellFont"}); 
    cellFont.orientation = "column"; 
    cellFont.alignChildren = ["left","center"]; 
    cellFont.spacing = 0; 
    cellFont.margins = 0; 

var cellFontTitle = cellFont.add("statictext", undefined, undefined, {name: "cellFontTitle"}); 
    cellFontTitle.enabled = true; 
    cellFontTitle.text = "Search"; 

var cellFontSearch = cellFont.add('edittext {properties: {name: "cellFontInput", borderless: true}}'); 
    cellFontSearch.preferredSize.width = 100; 

var cellFontTitle = cellFont.add("statictext", undefined, undefined, {name: "cellFontTitle"}); 
    cellFontTitle.enabled = true; 
    cellFontTitle.text = "Font"; 

var cellFontInput_array = [tableOptions.cellFont]
var cellFontInput = cellFont.add("dropdownlist", undefined, undefined, {name: "cellFontInput", items: cellFontInput_array }); 
cellFontInput.selection = 0; 
cellFontInput.preferredSize.width = 100; 


    cellFontSearch.onChange = function (){
        var font = cellFontSearch.text
        var fontFamily = getFont(font)
        var fontStyles = getFontStyles(fontFamily,0)
        if(fontStyles.length>0){
           makeList(fontStyles,cellFontInput)
           }
           else{alert("Font family not found")
           cellFontSearch.text = ""
            }
            cellFontSearch.text = ""
        }

    cellFontInput.onChange = function (){
        try{
        var font = cellFontInput.selection.toString()
        var fontFamily = getFont(font)
        var fontStyles = getFontStyles(fontFamily,1)
            if(fontStyles.length>0){
                makeList(fontStyles,cellFontStyleInput)
                makeList(fontStyles,titleStyleOptionInput)
                makeList(fontStyles,headerFontStyleInput)
                }
            else{alert("Font family not found")
            cellFontInput.items = [tableOptions.cellFont]
            cellFontInput.selection = 0;
            }
        }catch(err){err}
    }




var activateTableEditor = Options.add("button", undefined, undefined, {name: "activateTableEditor"}); 
activateTableEditor.text = "Edit Table"; 

    activateTableEditor.onClick = function (){
        var layerList = getLayerList();
        makeList(layerList,editLayerValue)
window.close()
editWindow.show()
    }



    loadPreset.onClick = function (){
        var preset = loadNewPreset()
            if(preset!=false){
            rowHeader.value = preset[14]==="true";
            colHeader.value = preset[15]==="true";
            groupRow.value = preset[16]==="true";
            groupCol.value = preset[17]==="true";
            titleRow.value = preset[12]==="true";
            titleCol.value = preset[13]==="true";

            cellHexValue.text = preset[3].toString();
            cellWidthValue.text = parseInt(preset[4]);
            cellGapValue.text = parseInt(preset[5]);       
            cellFontSizeValue.text = parseInt(preset[7]);

            cellFontInput.removeAll()
            cellFontInput.add('item',preset[18].toString());
            cellFontInput.selection = 0;

            cellFontStyleInput.removeAll()
            cellFontStyleInput.add('item',preset[6].toString());
            cellFontStyleInput.selection = 0;    

            headerHexInput.text = preset[8].toString();
            headerFontSizeValue.text = parseInt(preset[10]);

            headerFontStyleInput.removeAll()
            headerFontStyleInput.add('item',preset[9].toString());
            headerFontStyleInput.selection = 0;   

            titleColorOptionInput.text = preset[11].toString();

            titleStyleOptionInput.removeAll()
            titleStyleOptionInput.add('item',preset[19].toString());
            titleStyleOptionInput.selection = 0;  

            if(colHeader.value==true||rowHeader.value==true){
                headerProperties.enabled = true;
            }
            else{
                headerProperties.enabled = colHeader.value;
            }
            titleColOption.enabled = titleCol.value;
            titleRowOption.enabled = titleRow.value;
            if(titleCol.value==true||titleRow.value==true){
                titleOptions.enabled = true; 
                titleColorOption.enabled = true;
                titleStyleOption.enabled = true;
            }

        }

    }


OkayBtn.onClick = function (){

    var tableLayerName = tmpTableNameValue.text.toString()
        if(whatTable()=="csv"){
        tableLayerName = csvTableName.text.toString()
        }

    var maxRow = parseInt(rowNumValue.text.toString())
        if(whatTable()=="csv"){
        maxRow = parseInt(csvRowNumValue.text.toString())
        }
    var maxCol = parseInt(colNumValue.text.toString())
    if(whatTable()=="csv"){
        maxCol = parseInt(csvColNumValue.text.toString())
        }
    var table = fillerTable(maxRow,maxCol)
    if(whatTable()=="csv"){
        table = openCSV(File(csvTablePath.text.toString()))
    }

    var thisTableOptions = {
            tableName:tableLayerName.toString(),
            tableRows:parseInt(maxRow),
            tableCol:parseInt(maxCol),
            cellColor:cellHexValue.text.toString(),
            cellWidth: parseInt(cellWidthValue.text),
            cellGap:parseInt(cellGapValue.text),
            cellFont:cellFontInput.selection.toString(),
            cellFontStyle:cellFontStyleInput.selection.toString(),
            cellFontSize:parseInt(cellFontSizeValue.text),
            headerColor:headerHexInput.text.toString(),
            headerFontStyle:headerFontStyleInput.selection.toString(),
            headerFontSize:parseInt(headerFontSizeValue.text),
            titleColor:titleColorOptionInput.text.toString(),
            rowTitleText: titleRowOptionInput.text.toString(),
            colTitleText: titleColOptionInput.text.toString(),
            titleFontStyle:titleStyleOptionInput.selection.toString(),
            rowTitle:titleRow.value.toString()==="true",
            colTitle:titleCol.value.toString()==="true",
            rowHeader:rowHeader.value.toString()==="true",
            colHeader:colHeader.value.toString()==="true",
            rowGroup:groupRow.value.toString()==="true",
            colGroup:groupCol.value.toString()==="true",
        } 

    var doc = app.activeDocument;   
        ///create layer
         try{
            var check = Window.confirm("You are you sure you want to deleted and recreate layer \n"+doc.layers.getByName(tableLayerName).name+"?",false,"removing layer");
            if(check==true){
                doc.layers.getByName(tableLayerName).remove()
                var newLayer = doc.layers.add()
                newLayer.name = tableLayerName
            }
        }
        catch(err){
            var newLayer = doc.layers.add()
            newLayer.name = tableLayerName
        }
       
        
        
        var edgeTextGap = 10;
        var cellHeight = thisTableOptions.cellFontSize+edgeTextGap;

        var fontFamily = thisTableOptions.cellFont.toString();
        var fontStyle = thisTableOptions.cellFontStyle.toString();
        var font = getFont(fontFamily+"-"+fontStyle)[0]//app.textFonts.getByName(fontFamily+"-"+fontStyle);

        var headerFontStyle = thisTableOptions.headerFontStyle.toString();
        var headerFont = getFont(fontFamily+"-"+headerFontStyle)[0]//app.textFonts.getByName(headerFontFamily+"-"+headerFontStyle);


        if(font!=false&&headerFont!=false){
        window.close()
        $.sleep(10);

        var layer = doc.layers.getByName(tableLayerName);
//make shapes and text frames
        for(var r=0;r<table.data.length;r++){
            for(var c =0 ;c<table.data[r].length;c++){
                var row = r+1;
                var col = c+1;
                var cellShapeName = "r-"+row+"_c-"+col;
                var tName = "txt_"+cellShapeName
                var cellShape = [-100,100,thisTableOptions.cellWidth,cellHeight];
                var textBox = forTextBox(cellShape,edgeTextGap);
                var cellText = table.data[r][c];

                makeRec(tableLayerName,cellShapeName,cellShape,hexToRgb(thisTableOptions.cellColor),false)
                addText(tableLayerName,cellText,tName,thisTableOptions.cellFontSize,font,makeRec(tableLayerName,cellShapeName,textBox,hexToRgb(thisTableOptions.cellColor),true))


                var textLayer = layer.textFrames.getByName(tName);
                var shapeLayer = layer.pathItems.getByName(cellShapeName);
                changeTextColor(shapeLayer.fillColor,textLayer.textRange.characterAttributes.fillColor)
                if(hasOverflow(textLayer)){
                fitFrame(textLayer)
                refitShape(shapeLayer,textLayer,edgeTextGap)
                }
            }
        }
//reconfigure shapes to matach largest in row and Column       
        reSizeCells(thisTableOptions.tableName,thisTableOptions.tableRows,thisTableOptions.tableCol,thisTableOptions.cellGap,edgeTextGap)
//distrubtes table
        distributeCells(edgeTextGap,thisTableOptions.tableName,thisTableOptions.tableRows,thisTableOptions.tableCol,thisTableOptions.cellGap)
//sets header styles
        if(thisTableOptions.rowHeader==true){
            headerMaker(tableLayerName,"c",thisTableOptions.headerColor,headerFont,thisTableOptions.headerFontSize)
        }

        if(thisTableOptions.colHeader==true){
            headerMaker(tableLayerName,"r",thisTableOptions.headerColor,headerFont,thisTableOptions.headerFontSize)
        }

//addes titles
        if(thisTableOptions.rowTitle==true){
            var titleWidth = tableLength(tableLayerName,"c",thisTableOptions.cellGap)
            var titleShapeDi = [-100,100,titleWidth,cellHeight];
            var titleTextBox = forTextBox(titleShapeDi,edgeTextGap);
            makeRec(tableLayerName,"Rows_title",titleShapeDi,hexToRgb(thisTableOptions.titleColor),false)
            addText(tableLayerName,thisTableOptions.rowTitleText,"Rows_title_txt",thisTableOptions.cellFontSize,getFont(fontFamily+"-"+thisTableOptions.titleFontStyle)[0],makeRec(tableLayerName,"Rows_title",titleTextBox,hexToRgb(thisTableOptions.titleColor),true))
           
            var doc = app.activeDocument;
            var layer = doc.layers.getByName(tableLayerName);
            var titleShape = layer.pathItems.getByName("Rows_title")
            var titleText = layer.textFrames.getByName("Rows_title_txt")

            if(hasOverflow(titleText)){
                fitFrame(titleText)
                refitShape(titleShape,titleText,edgeTextGap)
                }

            
            titleShape.rotate(-90)
            titleShape.top=layer.pathItems.getByName("r-1_c-1").top
            titleShape.left=layer.pathItems.getByName("r-1_c-1").left-titleShape.width-thisTableOptions.cellGap

            titleText.rotate(90)
            titleText.top=layer.textFrames.getByName("txt_r-1_c-1").top
            titleText.left=layer.textFrames.getByName("txt_r-1_c-1").left-titleShape.width-thisTableOptions.cellGap;
            
            changeTextColor(titleShape.fillColor,titleText.textRange.characterAttributes.fillColor)
        }

        if(thisTableOptions.colTitle==true){
        var titleWidth = tableLength(tableLayerName,"r",thisTableOptions.cellGap)
        var titleShapeDi = [-100,100,titleWidth,cellHeight];
        var titleTextBox = forTextBox(titleShapeDi,edgeTextGap);
        var doc = app.activeDocument;
        var layer = doc.layers.getByName(tableLayerName);
  

            makeRec(tableLayerName,"Columns_title",titleShapeDi,hexToRgb(thisTableOptions.titleColor),false)
            addText(tableLayerName,thisTableOptions.colTitleText,"Columns_title_txt",thisTableOptions.cellFontSize,getFont(fontFamily+"-"+thisTableOptions.titleFontStyle)[0],makeRec(tableLayerName,"Rows_title",titleTextBox,hexToRgb(thisTableOptions.titleColor),true))
            
            var titleShape = layer.pathItems.getByName("Columns_title")
            var titleText = layer.textFrames.getByName("Columns_title_txt")       

            if(hasOverflow(titleText)){
                fitFrame(titleText)
                refitShape(titleShape,titleText,edgeTextGap)
            }

   

            titleShape.top=layer.pathItems.getByName("r-1_c-1").top+titleShape.height+thisTableOptions.cellGap
            titleText.top=layer.textFrames.getByName("txt_r-1_c-1").top+titleShape.height+thisTableOptions.cellGap;
           


            /// +++++++++++===================================================================================  moves Column Title over inline with Row title
            // if(thisTableOptions.rowTitle==true){
            // var rowTitleShape = layer.pathItems.getByName("Rows_title")
            // var rowTitleText = layer.textFrames.getByName("Rows_title_txt")
            //     titleShape.width = titleShape.width + rowTitleShape.width + thisTableOptions.cellGap
            //     titleText.width = titleText.width + rowTitleText.width + thisTableOptions.cellGap
            //     titleShape.left = rowTitleShape.left
            //     titleText.left = rowTitleText.left
            // }

            
            changeTextColor(titleShape.fillColor,titleText.textRange.characterAttributes.fillColor)
        }
    
        var tableGroup = groupThis(thisTableOptions.rowGroup,thisTableOptions.colGroup,thisTableOptions.tableRows,thisTableOptions.tableCol);
        $.sleep(20)
        if(tableGroup[0]==true){
            groupTable(tableGroup[1],tableLayerName,tableGroup[2])
        }
    }
    else{
        if(font==false){
            alert(fontFamily+" "+fontStyle+ " not found")
        }
        else if(headerFont==false){
            alert(fontFamily+" "+headerFontStyle+ " not found")
        }
    }

}

editButton.onClick = function (){
    var bt = new BridgeTalk;
    bt.target = "illustrator";		
        var script = "\n" +
        "var layerName = editLayerValue.selection.toString();\n"+
        "ungroup(layerName)\n"+
        "var maxVals = getMaxRowCol(layerName)\n"+
        "var maxRow = maxVals.maxRow;\n"+
        "var maxCol = maxVals.maxCol;\n"+
        'var thisCellGap = parseInt(editCellGapValue.text);\n'+
        "reSizeCells(layerName,maxRow,maxCol,thisCellGap,10)\n"+
        "$.sleep(20)\n"+
        "var doc = app.activeDocument;\n"+
        "var layer = doc.layers.getByName(layerName);\n"+
        'if(checkForName(layerName,"Rows_title")==true){\n'+
        'var titleRowHeight = tableLength(layerName,"c",thisCellGap)\n'+
        'var titleRowShape = layer.pathItems.getByName("Rows_title")\n'+
        'var titleRowText = layer.textFrames.getByName("Rows_title_txt")\n'+
        "titleRowShape.height = titleRowHeight\n"+
        "titleRowText.textPath.height = titleRowHeight-20\n"+
        "}\n"+
        'if(checkForName(layerName,"Columns_title")==true){\n'+
        'var titleColWidth = tableLength(layerName,"r",thisCellGap)\n'+
        'var titleColShape = layer.pathItems.getByName("Columns_title")\n'+
        'var titleColText = layer.textFrames.getByName("Columns_title_txt")\n'+
        'titleColShape.width = titleColWidth;\n'+
        'titleColText.textPath.width = titleColWidth-20;\n'+
        '}\n'+
        'var tableGroup = groupThis(editGroupRow.value,editGroupCol.value,maxRow,maxCol);\n'+
        '$.sleep(20)\n'+
        'if(tableGroup[0]==true){\n'+
            'groupTable(tableGroup[1],layerName,tableGroup[2])\n'+
        '}\n'

    bt.body = script;
    bt.send();	
}

window.show();






//========================================================================================================================

function checkForName(layerName,search){
    var doc = app.activeDocument;
    var layer = doc.layers.getByName(layerName);
    var layerNameSearch = new RegExp (search+"","gi")
    var result = false;
    for (var index = 0; index < layer.pathItems.length; index++) {
        var element = layer.pathItems[index];
        if(element.name.match(layerNameSearch)){
            result = true
        }
        
    }
    return result    
}





function getMaxRowCol(name){
    var doc = app.activeDocument;
    var items = doc.layers.getByName(name).pathItems
    var rowReg = new RegExp ("r-[0-9]+","gi")
    var colReg = new RegExp ("c-[0-9]+","gi")
    var object = {
        maxRow: 0,
        maxCol: 0,
    };
    for(i=0;i<items.length;i++){
        var resR = items[i].name.match(rowReg)
        var resC = items[i].name.match(colReg)
        if(resR!=null){
            var rowNum = parseInt(resR.toString().replace("r-",""))
            if(rowNum>object.maxRow){
                object.maxRow = rowNum;
            }
            
        }
        if(resC!=null){
            var colNum = parseInt(resC.toString().replace("c-",""))
            if(colNum>object.maxCol){
                object.maxCol = colNum;
            }
        }
        
    }
    return object
    
     
}





function getLayerList(){
    var doc = app.activeDocument;
    var layers = doc.layers
    var list = [];
    for(i=0;i<layers.length;i++){
        list.push(layers[i].name)
    }
    return list
}

function findOutlier (array){
    var numberHold = 0;
    var index = 0;
    var last = array.length-2
        for(var i=0;i<array.length;i++){
            if(i<array.length-1){
                var sum = alwaysPositive(array[i]-array[i+1])
                    if(sum>=numberHold){
                        numberHold = sum;
                        index = i
                    }
            }
            else{
                if(last==array.length-1){last = index-1}
                sum = alwaysPositive(array[i]-array[last])
                    if(sum>=numberHold){
                    numberHold = sum;
                    index = i
                }
            }
        }
        return array[index]  
    }



function alwaysPositive (value){
    var string = value.toString()
    
    return parseInt(string.replace("-",""))
}

function changeTextColor(color1,color2){
    // calculate the relative luminance
    var color1luminance = luminance(color1.red, color1.green, color1.blue);
    var color2luminance = luminance(color2.red, color2.green, color2.blue);
    // calculate the color contrast ratio
    var ratio = color1luminance > color2luminance 
        ? ((color2luminance + 0.05) / (color1luminance + 0.05))
        : ((color1luminance + 0.05) / (color2luminance + 0.05));
        if(ratio > 1/7==true){
            if(blackContrastCheck(color1)=="white"){
            color2.red = 255
            color2.green = 255
            color2.blue = 255
            }
            else if(blackContrastCheck(color1)=="black") {
                color2.red = 0
                color2.green = 0
                color2.blue = 0
            }
        }
    }
    
    function luminance(red, green, blue) {
        var r = colorEquatoinOne(red)
        var g = colorEquatoinOne(green)
        var b = colorEquatoinOne(blue)
        return r * 0.2126 + g * 0.7152 + b * 0.0722;
    }
    
    
    function colorEquatoinOne(color){
        color /= 255;
        return color <= 0.03928
            ? color / 12.92
            : Math.pow( (color + 0.055) / 1.055, 2.4 );
    }
    
    
    
    function blackContrastCheck(color1){
        // calculate the relative luminance
        var color1luminance = luminance(color1.red, color1.green, color1.blue);
        var black = luminance(0, 0, 0);
        var white = luminance(255, 255, 255);
        // calculate the color contrast ratio
        var blackRatio = color1luminance > black 
            ? ((black + 0.05) / (color1luminance + 0.05))
            : ((color1luminance + 0.05) / (black + 0.05));
        var whiteRatio = color1luminance > white 
        ? ((white + 0.05) / (color1luminance + 0.05))
        : ((color1luminance + 0.05) / (white + 0.05));
    
            if (blackRatio<1/7 == true){return "black"}
            if (whiteRatio<1/7 == true){return "white"}
    
        }





function enabled(options){
    if(options=="truefalse"||options=="truetrue"||options=="true"||options=="falsetrue"){
        return true
    }
    else{return false}
}

function groupThis(row,col,rMax,cMax){
    if(row==true){
        return [true,"r",rMax];
    }
    else if(col==true){
        return [true,"c",cMax]
    }
    else {
        return false
    }
}


function tableLength(layerName,XorY,cellGap){
    var names  = fristXY(layerName,XorY);
    var doc = app.activeDocument;
    var layer = doc.layers.getByName(layerName);
    var finalLength = 0 
    for (var i = 0 ; i <  names.length; i++){
        shape = layer.pageItems.getByName(names[i]);
        if(XorY=="c"){
            if(i!=names.length-1){
                finalLength = finalLength+shape.height+cellGap
            }
            else{finalLength = finalLength+shape.height}
        }
        else if (XorY=="r"){
            if(i!=names.length-1){
                finalLength = finalLength+shape.width+cellGap
            }
            else{finalLength = finalLength+shape.width}
        }
    }
    return finalLength
}

function fristXY(layerName,XorY){
    var doc = app.activeDocument;
    var layer = doc.layers.getByName(layerName);
    var items = layer.pageItems;
    var find = new RegExp(XorY+"-1(_|$)","gi"); 
    var names = [];
    for (var i = 0 ; i <  items.length; i++){
        var found = items[i].name.match(find);
        if(found!=null){
            if(items[i].typename == "PathItem"){
                names.push(items[i].name);
            }
        }
    }
    return names
}


function headerMaker(layerName,XorY,shapeColor,headerFont,fontSize){
    var names  = fristXY(layerName,XorY);
    var doc = app.activeDocument;
    var layer = doc.layers.getByName(layerName);

    for (var i = 0 ; i <  names.length; i++){
        var shape = layer.pathItems.getByName(names[i]);
        var textLayer = layer.textFrames.getByName("txt_"+names[i]).textRange.characterAttributes;
        shape.fillColor = hexToRgb (shapeColor);
        textLayer.fillColor = hexToRgb ("#FFFFFF");
        textLayer.textFont = headerFont;
        textLayer.size = fontSize
    }
}






function loadNewPreset(){
    var defultPath = txtFilePath()+"TableScriptPresets/"
    var deFile = File(defultPath)
     var path = deFile.openDlg("choose Preset txt")
     var newPreset = [];
     if(path!=null||path!=""){
     var chosenPath = File(path)
     chosenPath.open("r");
          while(!chosenPath.eof){
               newPreset.push(chosenPath.readln().toString())
          }
        if(newPreset.length>0){
            return newPreset    
        }
        else { return false}
        }
}




function makePreset(fileName,tableObject,choice){

var folder = Folder(txtFilePath()+"TableScriptPresets/");
if(!folder.exists){
     folder.create()
}
var file = File(folder+"/"+fileName+".txt")
var defultFile = File(folder+"/default/defultsPreset.txt")
var att = ["tableName","tableRows","tableCol","cellColor","cellWidth","cellGap","cellFontStyle","cellFontSize","headerColor","headerFontStyle","headerFontSize","titleColor","rowTitle","colTitle","rowHeader","colHeader","rowGroup","colGroup","cellFont","titleStyle"]
var add = []

    for(i=0;i<att.length;i++){
        add.push(tableObject[att[i]])    
    }
var text= add.join("\n").toString();
if(!file.exists){
    file.open("w");
    file.write(text);
    file.close();

    }
else{
    var choice = confirm("Save over existing preset?")
    if(choice == false){
        file.open("w");
        file.write(text);
        file.close();
    } 
}
if(choice == true){
    defultFile.open("w");
    defultFile.write(text);
    defultFile.close();
}

}



function whatTable(){
    if(csvTableInfo.enabled==true){
        return "csv"
    }
    else { return "tmp"}
}


function activeLayer(name){
    var doc = app.activeDocument;
    var found = "";
    var layer = doc.layers;
    for(i=0;i<layer.length;i++)
        {
         if(layer[i].name.toUpperCase()==name.toUpperCase()){
             found = name
         }       
        }
        if(found!=""){
            return found  
        }
        else{return 0}
    }


function ungroup(layerName){
     var doc = app.activeDocument;
     var layer = doc.layers.getByName(layerName)
     var groups = layer.groupItems;
     for(g=0;g<groups.length;g++){
          
          var items = groups[g].pageItems;
          var  i = items.length
          while(i>0){
               items[i-1].move(layer,ElementPlacement.PLACEATBEGINNING)
               i--
          }
     }
}

function makeList(arry,dropdown){
     dropdown.removeAll();
for(i=0;i<arry.length;i++){
     dropdown.add('item',arry[i])
}
dropdown.selection = 0;
}


function addSpace (text){
     
     var splitText = text.split("%20")
     var newText = splitText.join(" ")
     if(splitText.length>0){
     return newText
     }
     else{return text}
 }


function fillerTable (rowNum,colNum){
     var finalTable = [];
     if(!isNaN(rowNum)||!isNaN(colNum)){
     for (r=0;r<rowNum;r++){
          var row = []
         for (c=0;c<colNum;c++){
             var rNum = r+1
             var cNum = c+1
                 row.push("row"+rNum+"_col"+cNum)
         }
         finalTable.push(row)
     }
     var table = {
          data: finalTable,
          maxRow: rowNum,
          maxCol: colNum
     }
     return table;
     }
}




function groupTable(roc,layerName,max){
    var doc = app.activeDocument;
    var layer = doc.layers.getByName(layerName);
    var allThings = layer.pageItems;
    var len = allThings.length
    var start = 0
    var thisName = "Row_"

    
    if(roc=="c"){
        thisName = "Column_"
    }
    for(var n = 1 ; n < max+1 ; n++){
    var exact = "_";
        if(roc=="c"){
            exact = "$"
        }
    var reg = new RegExp (roc+"-"+n+exact,"gm")
    var thisGroup = layer.groupItems.add()
    //var thisTextGroup = layer.groupItems.add()
    var group = [];
    len++
    start++
    thisGroup.name = thisName+n
    //thisTextGroup.name = thisName+n+"_txt"
        for(i=start;i<len;i++){
            if(allThings[i].typename!="GroupItem"){
                if(allThings[i].name.match(reg)!=null){
                    group.push(allThings[i].name)
                }
            }
        }
        for(g=0;g<group.length;g++){
            var elPl = ElementPlacement.PLACEATBEGINNING
            if(allThings.getByName(group[g]).typename=="PathItem"){
                elPl = ElementPlacement.PLACEATEND
            }
            allThings.getByName(group[g]).move(thisGroup,elPl)
            len--
        }
        
    }
   if(layer.pageItems.length>layer.groupItems.length){
       var titleGroup  = layer.groupItems.add()
       titleGroup.name = "Titles"
       var list  = [];
       for (i=0;i<layer.pageItems.length;i++){
           if(layer.pageItems[i].typename!="GroupItem"){
               list.push(layer.pageItems[i].name)    
           }
       }
       for (i=0;i<list.length;i++){
           var thing = layer.pageItems.getByName(list[i])
           var ep = ElementPlacement.PLACEATBEGINNING
           if (thing.typename=="PathItem"){
               ep = ElementPlacement.PLACEATEND
               }
               thing.move(titleGroup,ep)
       }
   }
   $.sleep(20)

   for(var i = max; i>0; i--){
       layer.groupItems.getByName(thisName+i).move(layer,ElementPlacement.PLACEATBEGINNING)
   }
   layer.groupItems.getByName("Title").move(layer,ElementPlacement.PLACEATEND)
}




function reSetCells(edgeTextGap,layerName,maxRow,maxCol){
     //ungroup(layerName)
     var doc = app.activeDocument;
     var allShapes = doc.layers.getByName(layerName).pathItems;
     var allText = doc.layers.getByName(layerName).textFrames;
     var colLeft = 0;
     var rowTop = 0;
     for(sc=1;sc<maxCol+1;sc++){//for the each column
          var newLeft = colLeft
          
          for(sr=1;sr<maxRow+1;sr++){       
               
               var cell = allShapes.getByName("r-"+sr+"_c-"+sc);
               var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)
               if(sc>1){
               cell.left = newLeft
               cellText.left = newLeft+edgeTextGap
               }
               else{                   
               colLeft = cell.left
               }

          }
     }
     $.sleep(20) 
     for(sr=1;sr<maxRow+1;sr++){//for the each column
          var newTop = rowTop
          
          for(sc=1;sc<maxCol+1;sc++){       
               var cell = allShapes.getByName("r-"+sr+"_c-"+sc);
               var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)             
               if(sr>1){
               cell.top = newTop
               cellText.top = newTop-edgeTextGap
               }
               else{                   
                    rowTop = cell.top
               }
          }
     }
}



function distributeCells(edgeTextGap,layerName,maxRow,maxCol,cellGap){
     //ungroup(layerName)
     var doc = app.activeDocument;
     var allShapes = doc.layers.getByName(layerName).pathItems;
     var allText = doc.layers.getByName(layerName).textFrames;
     var colLeft = 0;
     var rowTop = 0;
     for(sc=1;sc<maxCol+1;sc++){//for the each column
          var newLeft = colLeft+cellGap
          
          for(sr=1;sr<maxRow+1;sr++){       
               
               var cell = allShapes.getByName("r-"+sr+"_c-"+sc);
               var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)
               if(sc>1){
                   
               cell.left = newLeft
               cellText.left = newLeft+edgeTextGap
               colLeft = cell.left+cell.width
               }
               else{                   
               colLeft = cell.left+cell.width
               }

          }
     }
     $.sleep(20) 
     for(sr=1;sr<maxRow+1;sr++){//for the each column
          var newTop = rowTop-cellGap
          
          for(sc=1;sc<maxCol+1;sc++){       
               var cell = allShapes.getByName("r-"+sr+"_c-"+sc);
               var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)             
               if(sr>1){
               cell.top = newTop
               cellText.top = newTop-(edgeTextGap/2)
               rowTop = cell.top-cell.height
               }
               else{                   
                    rowTop = cell.top-cell.height
               }
          }
     }
}




function reSizeCells(layerName,maxRow,maxCol,cellGap,edgeTextGap){
    reSetCells(edgeTextGap,layerName,maxRow,maxCol)
    var doc = app.activeDocument;
    var allShapes = doc.layers.getByName(layerName).pathItems;
    var allText = doc.layers.getByName(layerName).textFrames;
    

    for(sc=1;sc<maxCol+1;sc++){//for the each column
       var colWidths = [];
       
       for(sr=1;sr<maxRow+1;sr++){       
           var cell = allShapes.getByName("r-"+sr+"_c-"+sc);//for each column cell
           colWidths.push(cell.width)
       }     
       for(sr=1;sr<maxRow+1;sr++){       
           var cell = allShapes.getByName("r-"+sr+"_c-"+sc);//for each column cell
           var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)
           var newWidth = findOutlier(colWidths);
           cell.width=newWidth //set width for column to max width
           cellText.textPath.left = cell.left + edgeTextGap
           
           cellText.textPath.width = newWidth - edgeTextGap*2
               if(cellText.contents!=""){
                   fitFrame(cellText)
               }
       }
   }

       for(sr=1;sr<maxRow+1;sr++){//for the each row
        var maxHeight = 0;
        var minHeight = 0;
        for(sc=1;sc<maxCol+1;sc++){   
            var cell = allShapes.getByName("r-"+sr+"_c-"+sc);//for each column cell
            var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)
            fitFrame(cellText) 
            refitShape(cell,cellText,edgeTextGap)//==================================================================always sets the cell shape to the text box
        }
        for(sc=1;sc<maxCol+1;sc++){       
            var cell = allShapes.getByName("r-"+sr+"_c-"+sc);//for each column cell
            var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)

            if(cell.height>maxHeight){maxHeight = cell.height}//check max height and set max height
            if(cell.height<minHeight){minHeight = cell.height}//check max height and set max height    
        }     
        for(sc=1;sc<maxCol+1;sc++){        
        var cell = allShapes.getByName("r-"+sr+"_c-"+sc);//for each row cell
        var cellText = allText.getByName("txt_r-"+sr+"_c-"+sc)
            cell.height = maxHeight //set height for row to max hight
            cellText.textPath.top = cell.top - edgeTextGap
            cellText.textPath.height = maxHeight - edgeTextGap*2
        }
    }
   distributeCells(edgeTextGap,layerName,maxRow,maxCol,cellGap)
}
     





function fitFrame(textFrame) { // textFrame must be a TextFrameItem
     if (!(textFrame instanceof TextFrame && textFrame.kind == TextType.AREATEXT)) { // ignore point/path text
          return -1;
     }
     var limit = 0.2;
     var textPath = textFrame.textPath;
     var textLength = textFrame.contents.replace(/\s+$/, "").length; // get length of printable text (ignores trailing whitespace)
     if (textLength === 0) {
          textPath.height = 0; // text frame is empty so set to zero-height and return
          return 0;
     }
     var h = textPath.height;
     // if frame has no height, add some to get things started
     if (h < limit) {
          h = limit;
          textPath.height = h;
     }
     // overflow checker; this checks length of printable text to index of last visible character in frame
     var hasOverflow = function() {
          var lastLine = textFrame.lines[textFrame.lines.length-1];
          if (lastLine === undefined) { // no lines are visible (frame is too small)
               return textLength > 0;
          }
          return textLength > (lastLine.characters[0].characterOffset + lastLine.length - 1);
     }
     // adjust text frame height using two-stage divide and conquer; crude, but works, and acceptably fast
     // find initial approximate min and max heights between which text overflow occurs
     var oh;
     if (hasOverflow()) {
          do {
               oh = h;
               h *= 1.5;
               textPath.height = h;
          } while (hasOverflow());
     } else {
          do {
               oh = h;
               h /= 1.5;
               textPath.height = h;
          } while (!hasOverflow());
     }
     // narrow the difference between min and max approximations till it falls within limit
     var d = oh - h;
     if (d < 0) { d = -d; }
     while (d > limit) {
          d /= 2;
          h += (hasOverflow() ? d : -d);
          textPath.height = h;
     }
     // if final reduction caused overflow, undo it
     if (hasOverflow()) {
          textPath.height = h + d;
     }
     return textPath.height;
}
    
function openCSV (file){
     var data = [];
     var oldTable = [];
     var maxRow = 0;
     var maxCol = 0;
     file.open();
     do{data.push(file.read());
     }while(!file.eof);
     file.close();
     oldTable = data.toString().split("\n");
     var finalTable = []
     for (var r = 0; r <oldTable.length;r++){
         var oldRow = oldTable[r].split(",");
         var youKnow = []
         if(r+1>maxRow){maxRow=r+1}
         for (c=0;c<oldRow.length;c++){
                 youKnow.push(oldRow[c])
                 if(c+1>maxCol){maxCol = c+1}
         }
         finalTable.push(youKnow)
     }
     var table = {
          data: finalTable,
          maxRow: maxRow,
          maxCol: maxCol
     }
     return table;
}

function addText(tableLayerName,content,tName,fontSize,fontName,box){
     var doc = app.activeDocument;
     //var thisShape = box; 
     var text1 = doc.layers.getByName(tableLayerName).textFrames.areaText(box);
     text1.name = tName;
     if(content.length>0){
     text1.contents = content
     var fontStyle = text1.textRange.characterAttributes;
     fontStyle.textFont = fontName;
     fontStyle.size = fontSize
     text1.textRange.paragraphAttributes.justification = Justification.CENTER
     }
}

function forTextBox(arry,num){
     var newArry = []
     var textTop = arry[0] - num;
     var textLeft = arry[1] + num;
     var textWidth = arry[2] - (num*2)
     var textHeight = arry[3] - (num*2)
     newArry.push(textTop);
     newArry.push(textLeft);
     newArry.push(textWidth);
     newArry.push(textHeight);
    return newArry
    }



function makeRec(tableLayerName,sName,points,cellColor,re){
var doc = app.activeDocument;
var layer = doc.layers.getByName(tableLayerName)
var top = points[0]
var left = points[1]
var width = points[2]
var height = points[3]

var shape = layer.pathItems.rectangle(top,left,width,height)
shape.name = sName
if(re==false){
shape.filled = true;
shape.fillColor = cellColor
shape.stroked = false
}
if(re==true){return shape}
}

function refitShape (shapeLayer,textLayer,num){
    //shapeLayer.top = textLayer.textPath.top + num
    //shapeLayer.left = textLayer.textPath.left - num
    shapeLayer.width = textLayer.textPath.width + (num*2)
    shapeLayer.height = shapeLayer.top-textLayer.textPath.top+textLayer.textPath.height+num//textLayer.textPath.height + (num*3)
}

function positionText(shapeLayer,textLayer,num){
     textLayer.textPath.top = shapeLayer.top+shapeLayer.height/2
     shapeLayer.left = textLayer.textPath.left + num
 }


function hasOverflow(textFrame) {
     var textLength = textFrame.contents.replace(/\s+$/, "").length;
    var lastLine = textFrame.lines[textFrame.lines.length-1];
    if (lastLine === undefined) { // no lines are visible (frame is too small)
         return textLength > 0;
    }
    return textLength > (lastLine.characters[0].characterOffset + lastLine.length - 1);
}


function noString(text){
    if(text=="true"){

    }
    else if(text == "false"){

    }
}

var repeat = function(str, count) {
     var array = [];
     for(var i = 0; i < count;)
         array[i++] = str;
     return array.join('');
 }


 function txtFilePath(){
     var os = getOS();
     var user = "";
     if(os == "Windows"){
     user = $.getenv("USERNAME")
     return "C:/Users/"+user+"/Documents/Adobe/"
     }
     else if (os == "Macintosh"){
     user = $.getenv("USER")
     return "/Users/"+user+"/Documents/Adobe/"
     }
     
}
     
     
function getOS(){
     var os = ""
     if($.os.match("Windows")!=null){
          os = $.os.match("Windows");
     }
     else{
          os = Folder.fs
     }
     return os
}


function hexToRgb (hex){
    var color = getRGBNums(hex);
    var newColor = new RGBColor()
    newColor.red = color.r;
    newColor.blue = color.b;
    newColor.green = color.g;
    return newColor
  }



     function getRGBNums(hex) {
          // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
          var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
          });
        
          var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        }


        function getFont (fontName){
                 var fonts = app.textFonts
                 var fontFormat = new RegExp (fontName.toString().split(" ").join("")+"+","gi")
                 var fontList = [];
        
                 for(i=0;i<fonts.length;i++){
                      if(fonts[i].name.match(fontFormat)!=null){
                           fontList.push(fonts[i])
                      }
                      else{
                        if(fonts[i].name.match(fontName.toString().replace("-",""))!=null){
                            fontList.push(fonts[i])
                          }
                      }
                    
                 }
                 if(fontList.length==0){
                     //alert(fontName+" not found")
                     return [false]
                 }
                 return fontList
        }
        
            function getFontStyles (fontList,num){
                 var styleList = [];
                 
                 for(f=0;f<fontList.length;f++){
                    var style = fontList[f].name.toString().split("-")[num]
                    var pushThis = true;
                    if(style==""){
                         style = fontList[f].name.toString().split("-")[0]
                    }
                    for(l=0;l<styleList.length;l++){
                      if(styleList[l]==style){
                        pushThis = false;
                      }    
                     }
                     if(pushThis==true){
                        styleList.push(style)
                     }
                     
             }
                 return styleList
             }


           function textColorCheck(color1,color2){
            // calculate the relative luminance
            var color1luminance = luminance(color1.red, color1.green, color1.blue);
            var color2luminance = luminance(color2.red, color2.green, color2.blue);
            // calculate the color contrast ratio
            var ratio = color1luminance > color2luminance 
                ? ((color2luminance + 0.05) / (color1luminance + 0.05))
                : ((color1luminance + 0.05) / (color2luminance + 0.05));
                if(ratio > 1/7==true){
                    if(blackContrastCheck(color1)=="white"){
                    color2.red = 255
                    color2.green = 255
                    color2.blue = 255
                    }
                    else if(blackContrastCheck(color1)=="black") {
                        color2.red = 0
                        color2.green = 0
                        color2.blue = 0
                    }
                }
            }
            
            function luminance(red, green, blue) {
                var r = colorEquatoinOne(red)
                var g = colorEquatoinOne(green)
                var b = colorEquatoinOne(blue)
                return r * 0.2126 + g * 0.7152 + b * 0.0722;
            }
            
            
            function colorEquatoinOne(color){
                color /= 255;
                return color <= 0.03928
                    ? color / 12.92
                    : Math.pow( (color + 0.055) / 1.055, 2.4 );
            }
            
            
            
            function blackContrastCheck(color1){
                // calculate the relative luminance
                var color1luminance = luminance(color1.red, color1.green, color1.blue);
                var black = luminance(0, 0, 0);
                var white = luminance(255, 255, 255);
                // calculate the color contrast ratio
                var blackRatio = color1luminance > black 
                    ? ((black + 0.05) / (color1luminance + 0.05))
                    : ((color1luminance + 0.05) / (black + 0.05));
                var whiteRatio = color1luminance > white 
                ? ((white + 0.05) / (color1luminance + 0.05))
                : ((color1luminance + 0.05) / (white + 0.05));
            
                    if (blackRatio<1/7 == true){return "black"}
                    if (whiteRatio<1/7 == true){return "white"}
            
                }
