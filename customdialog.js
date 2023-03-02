//variables
const el = document.getElementById("popup");
const alertBtn = document.getElementById("alert-button");
const confirmBtn = document.getElementById("confirm-button");
const promptBtn = document.getElementById("prompt-button");
const sPromptBtn = document.getElementById("safe-prompt-button");
const result = document.getElementById("result");

//event listeners
alertBtn.addEventListener('click', betterAlert);
confirmBtn.addEventListener('click', betterConfirm);
promptBtn.addEventListener('click', betterPrompt);
sPromptBtn.addEventListener('click', safePrompt);

//custom alert
function betterAlert(){
    el.show();
    el.innerHTML = 'IM THE BETTER ALERT <button id="ok" onclick="ok();">OK</button>';
}

//custom confirm
function betterConfirm(){
    el.show();
    el.innerHTML = 'Confirm <button id="yes" onclick="yes();">YES</button> <button id="no" onclick="no();">NO</button>';
}

//custom prompt
function betterPrompt(){
    el.show();
    el.innerHTML = 'Prompt <input id="fullname" type="text" placeholder="Enter your name"></input> <button id="submit" onclick="submit();">SUBMIT</button> <button id="cancel" onclick="cancel();">CANCEL</button>';
}

//custom safe prompt
function safePrompt(){
    el.show();
    el.innerHTML = 'Prompt <input id="fullname" type="text" placeholder="Enter your name"></input> <button id="betterSubmit" onclick="betterSubmit();">SUBMIT</button> <button id="cancel" onclick="cancel();">CANCEL</button>';
}

//submit button for prompt
function submit(){
    let submit = document.getElementById("submit");
    let el = submit.parentElement;
    el.close();
    let out = document.getElementById("fullname").value;
    if(out == ""){
        result.innerHTML = "Prompt result: User didn't enter anything";
    }else{
        result.innerHTML = "Prompt result: " + out;
    }
}

//submit button for safe prompt
function betterSubmit(){
    let submit = document.getElementById("betterSubmit");
    let el = submit.parentElement;
    el.close();
    let out = DOMPurify.sanitize(document.getElementById("fullname").value);
    //let out = document.getElementById("fullname").value;
    if(out == ""){
        result.innerHTML = "Prompt result: User didn't enter anything";
    }else{
        result.innerHTML = "Prompt result: " + out;
    }
}

//cancel button for prompt
function cancel(){
    let cancel = document.getElementById("cancel");
    let el = cancel.parentElement;
    el.close();
    result.textContent = "Prompt result: User didn't enter anything";
}

//ok button for alert
function ok(){
    let ok = document.getElementById("ok");
    let el = ok.parentElement;
    el.close();
}

//yes button for confirm
function yes(){
    let yes = document.getElementById("yes");
    let el = yes.parentElement;
    el.close();
    result.textContent = "Confrim result: TRUE";
}

//no button for confirm
function no(){
    let no = document.getElementById("no");
    let el = no.parentElement;
    el.close();
    result.textContent = "Confirm result: FALSE";
}