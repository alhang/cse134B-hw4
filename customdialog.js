const el = document.getElementById("popup");
const alertBtn = document.getElementById("alert-button");
const confirmBtn = document.getElementById("confirm-button");
const promptBtn = document.getElementById("prompt-button");
const sPromptBtn = document.getElementById("safe-prompt-button");
const result = document.getElementById("result");

alertBtn.addEventListener('click', betterAlert);
confirmBtn.addEventListener('click', betterConfirm);
promptBtn.addEventListener('click', betterPrompt);
sPromptBtn.addEventListener('click', betterPrompt);

function betterAlert(){
    el.show();
    el.innerHTML = 'IM THE BETTER ALERT <button id="ok" onclick="ok();">OK</button>';
}

function betterConfirm(){
    el.show();
    el.innerHTML = 'Confirm <button id="yes" onclick="yes();">YES</button> <button id="no" onclick="no();">NO</button>';
}

function betterPrompt(){
    el.show();
    el.innerHTML = 'Prompt <input id="fullname" type="text" placeholder="Enter your name"></input> <button id="submit" onclick="submit();">SUBMIT</button> <button id="cancel" onclick="cancel();">CANCEL</button>';
}

function submit(){
    let submit = document.getElementById("submit");
    let el = submit.parentElement;
    el.close();
    let out = document.getElementById("fullname").value;
    if(out == ""){
        result.textContent = "Prompt result: User didn't enter anything";
    }else{
        result.textContent = "Prompt result: " + out;
    }
}

function cancel(){
    let cancel = document.getElementById("cancel");
    let el = cancel.parentElement;
    el.close();
    let out = "User didn't enter anything";
    result.textContent = "Prompt result: User didn't enter anything";
}

function ok(){
    let ok = document.getElementById("ok");
    let el = ok.parentElement;
    el.close();
}

function yes(){
    let yes = document.getElementById("yes");
    let el = yes.parentElement;
    el.close();
    result.textContent = "Confrim result: TRUE";
}

function no(){
    let no = document.getElementById("no");
    let el = no.parentElement;
    el.close();
    result.textContent = "Confirm result: FALSE";
}