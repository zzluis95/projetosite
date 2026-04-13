

const scriptsInEvents = {

	async Fase1_Event4_Act1(runtime, localVars)
	{
		const p = runtime.objects.Sprite3.getFirstInstance();
		if (p) {
		    const forca = 20;
		    const intervalo = setInterval(() => {
		        p.x += Math.random() * forca - forca/2;
		        p.y += Math.random() * forca - forca/2;
		    }, 16);
		    setTimeout(() => clearInterval(intervalo), 300); 
		}
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
