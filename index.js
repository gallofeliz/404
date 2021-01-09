
setTimeout(removeMessage, 10000);
setTimeout(runChicken, 1000);

function removeMessage() {
	const message = document.querySelector('.message-container');
	let opacity = 1;
	let reduce = 0.01;

	function animMessageContainer() {

		opacity -= reduce;
		reduce = reduce * 1.3;

		message.style.opacity = opacity;

		if (opacity <= 0) {
			message.remove();
			document.removeEventListener('enterFrame', animMessageContainer);
		}

	}

	document.addEventListener('enterFrame', animMessageContainer);
}

const definitions = [
	{
		name: 'pause',
		startable: true,
		sprite: 'pause',
		from: 3,
		to: 130,
		spriteCols: 22,
		width: 74,
		height: 110,
		duration: {
			type: 'time',
			min: 1,
			max: 5
		},
		moveSpeed: 0,
        point0: [35, 93],
		transitions: [
			{ name: 'walk', transitionFrames: [{from: 4, to: 14}] },
			{ name: 'cocorico' },
			{ name: 'strech' },
			{ name: 'look' },
			{ name: 'sit' },
			{ name: 'idle1' },
			{ name: 'pecking' },
			{ name: 'find_main', coeff: 5 }
		]
	},
	{
		name: 'walk',
		startable: true,
		sprite: 'walk',
		from: 0,
		to: 23,
		spriteCols: 24,
		width: 74,
		height: 110,
		duration: {
			type: 'time',
			min: 5,
			max: 15
		},
		moveSpeed: 2,
        point0: [35, 93],
		transitions: [
			{ name: 'pause'/*, transitionFrames: [{from: 14, to: 4}]*/ },
			{ name: 'look' },
			{ name: 'strech' },
			{ name: 'idle1' }
		]
	},
	{
		name: 'cocorico',
		startable: true,
		sprite: 'idle2',
		spriteCols: 12,
		from: 0,
		to: 46,
		width: 148,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
		point0: [110, 90],
		transitions: [
			{ name: 'walk' },
			{ name: 'pause' },
			{ name: 'look' },
			{ name: 'strech' },
			{ name : 'sit' },
			{ name: 'idle1' },
			{ name: 'pecking' },
			{ name: 'find_main' }
		]
	},
	{
		name: 'strech',
		startable: true,
		sprite: 'idle3',
		spriteCols: 11,
		from: 0,
		to: 85,
		width: 148,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
		point0: [110, 90],
		transitions: [
			{ name: 'walk' },
			{ name: 'pause' },
			{ name: 'look' },
			{ name: 'cocorico' },
			{ name : 'sit' },
			{ name: 'idle1' },
			{ name: 'pecking' },
			{ name: 'find_main' }
		]
	},
	{
		name: 'look',
		startable: true,
		sprite: 'verb',
		spriteCols: 11,
		from: 0,
		to: 54,
		width: 148,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
		point0: [110, 90],
		transitions: [
			{ name: 'walk', coeff: 2 },
			{ name: 'pause' },
			{ name: 'cocorico' },
			{ name: 'strech' },
			{ name: 'idle1' },
			{ name: 'pecking' },
			{ name: 'find_main' }
		]
	},
	{
		name: 'sit',
		startable: true,
		sprite: 'sit',
		spriteCols: 20,
		from: 0,
		to: 19,
		width: 74,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [35, 93],
		transitions: [
			{ name: 'rooked' },
			{ name: 'incubate' }
		]
	},
	{
		name: 'stand',
		startable: false,
		sprite: 'sit',
		spriteCols: 20,
		from: 19,
		to: 0,
		width: 74,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [35, 93],
		transitions: [
			{ name: 'walk', coeff: 2 },
			{ name: 'pause' },
			{ name: 'cocorico' },
			{ name: 'strech' },
			{ name: 'idle1' },
			{ name: 'pecking' },
			{ name: 'find_main' }
		]
	},
	{
		name: 'rooked',
		startable: false,
		sprite: 'rooked',
		spriteCols: 9,
		from: 0,
		to: 26,
		width: 148,
		height: 55,
		duration: {
			type: 'time',
			min: 2,
			max: 5
		},
		moveSpeed: 0,
        point0: [105, 43],
		transitions: [
			{ name: 'stand' }
		]
	},
	{
		name: 'incubate',
		startable: false,
		sprite: 'incubate',
		spriteCols: 19,
		from: 0,
		to: 189,
		width: 74,
		height: 110,
		duration: {
			type: 'time',
			min: 5,
			max: 13
		},
		moveSpeed: 0,
        point0: [35, 93],
		transitions: [
			{ name: 'stand' }		
		]
	},
	{
		name: 'idle1',
		startable: true,
		sprite: 'idle1',
		spriteCols: 17,
		from: 0,
		to: 66,
		width: 74,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [35, 93],
		transitions: [
			{ name: 'walk' },
			{ name: 'pause' },
			{ name: 'look' },
			{ name: 'strech' },
			{ name: 'sit' },
			{ name: 'pecking' }
		]
	},
	{
		name: 'pecking',
		startable: true,
		sprite: 'pecking-twice',
		spriteCols: 10,
		from: 0,
		to: 39,
		width: 148,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [105, 93],
		transitions: [
			{ name: 'walk' },
			{ name: 'pause' },
			{ name: 'look' },
			{ name: 'strech' },
			{ name: 'sit' },
			{ name: 'idle1' }
		]
	},
	{
		name: 'find_main',
		startable: true,
		sprite: 'idle1',
		spriteCols: 17,
		from: 5,
		to: 50,
		width: 74,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [35, 93],
		transitions: [
			{ name: 'find_pecking' }
		]
	},
	{
		name: 'find_pecking',
		startable: true,
		sprite: 'pecking-twice',
		spriteCols: 10,
		from: 12,
		to: 28,
		width: 148,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [105, 93],
		transitions: [
			{ name: 'find_main', coeff: 5 },
			{ name: 'find_head-up' }
		]
	},
	{
		name: 'find_head-up',
		startable: false,
		sprite: 'pecking-twice',
		spriteCols: 10,
		from: 29,
		to: 30,
		width: 148,
		height: 110,
		duration: {
			type: 'iteration'
		},
		moveSpeed: 0,
        point0: [105, 93],
		transitions: [
			{ name: 'walk' },
			{ name: 'pause' },
			{ name: 'look' },
			{ name: 'strech' },
			{ name: 'sit' },
			{ name: 'idle1' }
		]
	}
];

const dynamicCss = document.createElement('style');
dynamicCss.style = 'text/css';
document.head.append(dynamicCss);
const preloadContainer = document.querySelector('.preload-container');
definitions.forEach(definition => {
	dynamicCss.sheet.insertRule(`.sprite-${definition.sprite} {
		display:inline-block;
		overflow:hidden;
		background-repeat: no-repeat;
		background-image:url(chicken-${definition.sprite}.png);
		width:${definition.width}px;
		height:${definition.height}px;
		left: -${definition.point0[0]}px;
    	top: -${definition.point0[1]}px;
	}`);

	const div = document.createElement('div');
	div.classList.add('sprite-' + definition.sprite);
	preloadContainer.append(div);
});

const chicken = document.querySelector('.chicken');
const chickenSprite = document.querySelector('.chicken-sprite');
const chickenContainer = document.querySelector('.chicken-container');
const state = {
    position: 0,
    direction: 1
};
let runDefinitions = [];

function getRandomInt(from, toIncluded) {
	return from + Math.round(Math.random() * (toIncluded - from));
}

function getRandomBoolean() {
	return !!getRandomInt(0, 1);
}

function getRandomElement(array) {
	const coeffed = [];

	array.forEach(item => {
		const coeff = item.coeff || 1;
		for (let i = 0; i < coeff; i++) {
			coeffed.push(item);
		}
	});

	return coeffed[Math.floor(Math.random() * coeffed.length)];
}

function getDefinition(name) {
	return definitions.find(definition => definition.name === name);
}

function runChickenDefinition(definition) {
	runDefinitions = runDefinitions.slice(-14);
	runDefinitions.push(definition.name);
    // Run currentState the duration written
    // And then make a transition to other

    chickenSprite.classList.forEach(_class => {
        if (_class.indexOf('sprite-') === 0) {
            chickenSprite.classList.remove(_class);
        }
    });

    chickenSprite.classList.add('sprite-' + definition.sprite);

    const backgroundPositions = getBackgroundPositions(definition);

    let frameI = 0;
    setChickenFrame(frameI);
    updatePosition();
    let transition = getRandomElement(definition.transitions);

    for (let i = 0; i < 10; i++) {
	    if(runDefinitions.filter(name => name === transition.name).length >= 3) {
			transition = getRandomElement( definition.transitions);
			continue;
	    }
	    break;
    }

    const newDefinition = getDefinition(transition.name);

    if (definition.duration.type === 'time') {
        const duration = getRandomInt(definition.duration.min, definition.duration.max) * 1000;
    	document.addEventListener('enterFrame', updateChicken);

        setTimeout(() => {
            document.removeEventListener('enterFrame', updateChicken);
            runChickenDefinition(newDefinition);
        }, duration);
    } else if (definition.duration.type === 'iteration') {
    	document.addEventListener('enterFrame', onEnterFrame);

    	function onEnterFrame(e) {
    		if (frameI === backgroundPositions.length - 1) {
            	document.removeEventListener('enterFrame', onEnterFrame);
            	runChickenDefinition(newDefinition);
            	return;
    		}

    		updateChicken();
    	}
    }

    function setChickenFrame(i) {
        chickenSprite.style.backgroundPositionX = backgroundPositions[i].x + 'px';
        chickenSprite.style.backgroundPositionY = backgroundPositions[i].y + 'px';
    }

    function incrementFrame() {
        frameI++;
        if (!backgroundPositions[frameI]) {
            frameI = 0;
        }
    }

    function incrementPosition() {
    	state.position += state.direction * definition.moveSpeed;

    	if (state.position < 0) {
    		state.position = 0;
    		state.direction = 1;
    	}

		if (state.position > chickenContainer.offsetWidth) {
    		state.position = chickenContainer.offsetWidth;
    		state.direction = -1;
    	}
    }

    function updatePosition() {
    	chicken.style.left = state.position + 'px';
    	chicken.style.transform = 'scaleX(' + state.direction + ')';
    }

    function updateChicken() {
    	incrementFrame();
        setChickenFrame(frameI);
        incrementPosition();
        updatePosition();
    }
}

function runChicken() {
	state.position = chickenContainer.offsetWidth / 2;

	if(getRandomBoolean()) {
		state.direction = -1;
	}

	//runChickenDefinition(getDefinition('find_main'));
    runChickenDefinition(getRandomElement(definitions.filter(definition => definition.startable)));
}

window.addEventListener('resize', () => {
	if (state.position > chickenContainer.offsetWidth) {
		state.position = chickenContainer.offsetWidth;
	}
})

function getBackgroundPositions(definition) {
	const positions = [];

	if (definition.from < definition.to) {
		for (let i = definition.from; i <= definition.to; i++) {
			line = Math.floor(i / definition.spriteCols);
			row = i % definition.spriteCols;

			positions.push({frameIndex: i, x: -row * definition.width, y: -line * definition.height});
		}
	} else {
		for (let i = definition.from; i >= definition.to; i--) {
			line = Math.floor(i / definition.spriteCols);
			row = i % definition.spriteCols;

			positions.push({frameIndex: i, x: -row * definition.width, y: -line * definition.height});
		}
	}

	return positions;
}

(() => {

	var i = 0;

	function onAnimationFrame() {
		requestAnimationFrame(onAnimationFrame);
		if (i++ % 2 === 0) {
			document.dispatchEvent(new Event('enterFrame'));
		}
	}

	onAnimationFrame();

})();
