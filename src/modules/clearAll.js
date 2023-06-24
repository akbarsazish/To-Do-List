import { todoLists, displayTodoList } from './todos.js';
// Function to clear all completed tasks
const clearCompletedTasks = () => {
  const incompleteTasks = todoLists.filter((todo) => !todo.completed);
  todoLists.length = 0;
  Array.prototype.push.apply(todoLists, incompleteTasks);
  // eslint-disable-next-line no-use-before-define
  updateLocalStorage();
  displayTodoList();
};

const updateLocalStorage = () => {
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// Add event listener for Clear All Completed button
const clearCompletedBtn = document.getElementById('clear-all');
clearCompletedBtn.addEventListener('click', clearCompletedTasks);





$("#editTakhfifCodeBtn").on("click",()=>{
	let modelSn=$("#editTakhfifCodeBtn").val();

	$.get(baseUrl+"/getSMSModel",{modelSn:modelSn},(data,status)=>{

            $("#selectOptionEd").empty();
            switch(data[0].FstSelect){
                case 'Name':
                $("#selectOptionEd").append(`   
                        <option value="Name" selected > نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                      ` );
                break;

               case 'Code':
               $("#selectOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code" selected> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'UseDays':
               $("#selectOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays" selected> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'Money':
               $("#selectOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" selected> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'ToDate':
               $("#selectOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate" selected> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'FromDate':
               $("#selectOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate" selected> تا تاریخ </option>
                `);
               break;
            }

            $("#secondOptionEd").empty();
            switch(data[0].SecSelect){
                case 'Name':
                $("#secondOptionEd").append(`   
                        <option value="Name" selected > نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                      ` );
                break;

               case 'Code':
               $("#secondOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code" selected> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'UseDays':
               $("#secondOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays" selected> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'Money':
               $("#secondOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" selected> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'ToDate':
               $("#secondOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate" selected> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'FromDate':
               $("#secondOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate" selected> تا تاریخ </option>
                `);
               break;
            }


            $("#thirthOptionEd").empty();
            switch(data[0].ThirdSelect){
                case 'Name':
                $("#thirthOptionEd").append(`   
                        <option value="Name" selected > نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                      ` );
                break;

               case 'Code':
               $("#thirthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code" selected> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'UseDays':
               $("#thirthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays" selected> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'Money':
               $("#thirthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" selected> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'ToDate':
               $("#thirthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate" selected> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'FromDate':
               $("#thirthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate" selected> تا تاریخ </option>
                `);
               break;
            }

            $("#fourthContentEd").empty();
            switch(data[0].FourSelect){
                case 'Name':
                $("#fourthContentEd").append(`   
                        <option value="Name" selected > نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                      ` );
                break;

               case 'Code':
               $("#fourthContentEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code" selected> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'UseDays':
               $("#fourthContentEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays" selected> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'Money':
               $("#fourthContentEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" selected> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'ToDate':
               $("#fourthContentEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate" selected> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'FromDate':
               $("#fourthContentEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate" selected> تا تاریخ </option>
                `);
               break;
            }

            $("#fifthOptionEd").empty();
            switch(data[0].FiveSelect){
                case 'Name':
                $("#fifthOptionEd").append(`   
                        <option value="Name" selected > نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                      ` );
                break;

               case 'Code':
               $("#fifthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code" selected> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'UseDays':
               $("#fifthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays" selected> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'Money':
               $("#fifthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" selected> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'ToDate':
               $("#fifthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate" selected> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'FromDate':
               $("#fifthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate" selected> تا تاریخ </option>
                `);
               break;
            }


            $("#sixthOptionEd").empty();
            switch(data[0].SixSelect){
                case 'Name':
                $("#sixthOptionEd").append(`   
                        <option value="Name" selected > نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                      ` );
                break;

               case 'Code':
               $("#sixthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code" selected> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'UseDays':
               $("#sixthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays" selected> مهلت استفاده </option>
                        <option value="Money"> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'Money':
               $("#sixthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" selected> مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'ToDate':
               $("#sixthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate" selected> از تاریخ  </option>
                        <option value="FromDate"> تا تاریخ </option>
                `);
               break;

               case 'FromDate':
               $("#sixthOptionEd").append(`
                        <option value="Name"> نام و نام خانوادگی </option>
                        <option value="Code"> کد </option>
                        <option value="UseDays"> مهلت استفاده </option>
                        <option value="Money" > مبلغ  </option>
                        <option value="ToDate"> از تاریخ  </option>
                        <option value="FromDate" selected> تا تاریخ </option>
                `);
               break;
            }

            if(data[0].FstCurrency == 'on'){
                $("#reyalEd1").prop('checked', true)
            }else {
               $("#reyalEd1").prop('checked', false)
            }
         
            if(data[0].SecCurrency  == 'on'){
                $("#reyalEd2").prop('checked', true)
            }else {
               $("#reyalEd2").prop('checked', false)
            }

            if(data[0].ThirdCurrency  == 'on'){
                $("#reyalEd3").prop('checked', true)
            }else {
               $("#reyalEd3").prop('checked', false)
            }
         
            if(data[0].FourCurrency  == 'on'){
                $("#reyalEd4").prop('checked', true)
            }else {
               $("#reyalEd4").prop('checked', false)
            }
         
            if(data[0].FiveCurrency  == 'on'){
                $("#reyalEd5").prop('checked', true)
            }else {
               $("#reyalEd5").prop('checked', false)
            }

            if(data[0].SixCurrency  == 'on'){
                $("#reyalEd6").prop('checked', true)
            }else {
               $("#reyalEd6").prop('checked', false)
            }


            // checking the 
            if(data[0].FstNLine == 'on'){
                $("#nextLineEd").prop('checked', true)
            }else {
               $("#nextLineEd").prop('checked', false)
            }

            if(data[0].SecNLine == 'on'){
                $("#secondLineEd").prop('checked', true)
            }else {
               $("#secondLineEd").prop('checked', false)
            }

            if(data[0].ThirdNLine == 'on'){
                $("#thirthLineEd").prop('checked', true)
            }else {
               $("#thirthLineEd").prop('checked', false)
            }

            if(data[0].FourthNLine == 'on'){
                $("#fourthLineEd").prop('checked', true)
            }else {
               $("#fourthLineEd").prop('checked', false)
            }

            if(data[0].FifthNLine == 'on'){
                $("#fifthLineEd").prop('checked', true)
            }else {
               $("#fifthLineEd").prop('checked', false)
            }

           let modelNameEd =  $("#modelNameEd").val(data[0].ModelName);
          
           let genratateCode = $("#generatedCodeEd").val(data[0].Code);
           let moblaghEl =  $("#moblaghEd").val(data[0].Money);
           let mohlatEl =  $("#mohlatEd").val(data[0].UseDays);

           let firstInput  =  $("#firstContentEd").val(data[0].FstText);
           let secondInput =  $("#secondContentEd").val(data[0].SecText);
           let thirthInput  =  $("#thirthContentEd").val(data[0].ThirdText);
           let fourthInput  =  $("#fourthContentEd").val(data[0].FourText);
           let fifthInput  =  $("#fifthContentEd").val(data[0].FiveText);
           let sixthInput  =  $("#sixthContentEd").val(data[0].SixText);
           let seventhContent =  $("#seventhContentEd").val(data[0].SevenText);


          const firstOption = $('#selectOptionEd');
          const secondOption = $('#secondOptionEd');
          const thirthOption = $('#thirthOptionEd');
          const fourthOption = $('#fourthOptionEd');
          const fifthOption = $('#fifthOptionEd');
          const sixthOption = $('#sixthOptionEd');
            
          const nextLine = $('#nextLineEd');
          const secondLine = $('#secondLineEd');
          const thirthLine = $('#thirthLineEd');
          const fourthLine = $('#fourthLineEd');
          const fifthLine = $('#fifthLineEd');

        function displayInputValue() {
            let modelNameValu = modelNameEd.val();
            let genratateCodeVal = genratateCode.val();
            let moblaghVal = moblaghEl.val();
            const mohlatVal = mohlatEl.val();

            const firstValue = firstInput.val();
            const secondValue = secondInput.val();
            const thirthValue = thirthInput.val();
            const fourthValue = fourthInput.val();
            const fifthValue = fifthInput.val();
            const sixthInputValue = sixthInput.val();
            
            const firstOptionvalue = firstOption.val();
            const secondOptionvalue = secondOption.val();
            const thirthOptionvalue = thirthOption.val();
            const fourthOptionvalue = fourthOption.val();
            const fifthOptionvalue = fifthOption.val();
            const sixthOptionValue = sixthOption.val();
            const sevenOptionValue = seventhContent.val();

            
            let firstReyal = "";
            if ($('#reyalEd').prop('checked')) {
                firstReyal = "ریال";
            } else {
                firstReyal = "";
            }
         }

        // call function for each input, select and checkbox
        modelNameEd.on('input', displayInputValue);
        firstInput.on('input', displayInputValue);
        firstOption.on('change', displayInputValue);
        nextLine.on('change', displayInputValue);
        
        secondInput.on('input', displayInputValue);
        secondOption.on('change', displayInputValue);
        secondLine.on('change', displayInputValue);
        
        thirthInput.on('input', displayInputValue);
        thirthOption.on('change', displayInputValue);
        thirthLine.on('change', displayInputValue);
        
        fourthInput.on('input', displayInputValue);
        fourthOption.on('change', displayInputValue);
        fourthLine.on('change', displayInputValue);
        
        fifthInput.on('input', displayInputValue);
        fifthOption.on('change', displayInputValue);
        fifthLine.on('change', displayInputValue);
        
        sixthOption.on('change', displayInputValue);
        sixthInput.on('change', displayInputValue);
        seventhContent.on('change', displayInputValue);

        $("#messageContentEd").val = "";
        let textContent = "";
        textContent = data[0].FstText+"  "+data[0].FstCurrency+" "+data[0].FstNLine+" "+
                    data[0].SecText+" "+data[0].SecSelect+" "+data[0].SecCurrency+" "+data[0].SecNLine+" "+
                    data[0].ThirdText+" "+data[0].ThirdSelect+" "+data[0].thirdCurrency+" "+data[0].thirdNLine+" "+
                    data[0].FourText+" "+data[0].FourSelect+" "+data[0].FourCurrency+" "+data[0].fourthNLine+" "+
                    data[0].FiveText+" "+data[0].FiveSelect+" "+data[0].FiveCurrency+" "+data[0].fivethNLine+" "+
                    data[0].SixText+" "+data[0].SixSelect+" "+data[0].SixCurrency+" "+data[0].sixthNLine+" "+
                    data[0].SevenText;

        $("#messageContentEd").val(textContent);

        
    if (!($('.modal.in').length)) {
            $('.modal-dialog').css({
                left: 50,
                top: 0
            });
        }
        $('#editTakhfifCodeModal').modal({
            backdrop: false,
            show: true
        });

        $('.modal-dialog').draggable({
            handle: ".modal-header"
        });
        $("#editTakhfifCodeModal").modal("show");
  });
});
