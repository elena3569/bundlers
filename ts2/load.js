function loadScript(arg, callback=null){
    if (typeof arg === 'function'){
        const el =document.createElement('script');
        el.type = 'text/javascript';
        el.addEventListener (arg);
        document.body.appendChild(el);
    }
    else if(Array.isArray(arg) || typeof arg ==='string'){
        
        let n = 1;
        if(Array.isArray(arg)){
            n = arg.length;
        }
        const existingScript = [];
        for (let i = 0; i < n; i++){
            existingScript(document.querySelectorAll("script[src='" + arg[i] + "']"));
        }
        const isNewScript = (existingScript.length == 0);
        if(isNewScript){
            for (let i = 0; i < n; i++){
                const el =document.createElement('script');
                el.src = arg[i];
                el.type = 'text/javascript';
                if (callback){
                    el.addEventListener (callback);
                }
                document.body.appendChild(el);
            }
        }
        
    }
}

loadScript('src/timer', ()=>{}
)