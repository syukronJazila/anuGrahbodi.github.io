
//ANIMASI
//ANIMASI IDDLE PLAYER
const frameElement = document.getElementById('idlePlayer');
let currentFrame = 1;

function animateFrame() {
    currentFrame++;
    if (currentFrame > 6) {
        currentFrame = 1;
    }
    const imageUrl = `library/idlePlayer/idle${currentFrame}.png`; 
    frameElement.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrame, 200); 
//END IDLE PLAYER

//ANIMASI IDDLE PLAYER PROLOG
const frameElementidlePlayerProlog = document.getElementById('idlePlayerProlog');
let currentFrameidlePlayerProlog = 1;

function animateFrameidlePlayerProlog() {
    currentFrameidlePlayerProlog++;
    if (currentFrameidlePlayerProlog > 6) {
        currentFrameidlePlayerProlog = 1;
    }
    const imageUrl = `library/idlePlayer/idle${currentFrameidlePlayerProlog}.png`; 
    frameElementidlePlayerProlog.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameidlePlayerProlog, 200); 
//END IDLE PLAYER PROLOG

//IDLE ENEMY 1
const frameElementIdleEnemy = document.getElementById('idleEnemy');
let currentFrameIdleEnemy = 1;

function animateFrameIdleEnemy() {
    currentFrameIdleEnemy++;
    if (currentFrameIdleEnemy > 5) {
        currentFrameIdleEnemy = 1;
    }
    const imageUrl = `library/idleEnemy/idle${currentFrameIdleEnemy}.png`; 
    frameElementIdleEnemy.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameIdleEnemy, 200); 
//END IDLE ENEMY 1

//IDLE ENEMY 2
const frameElementIdleEnemy2 = document.getElementById('idleEnemy2');
let currentFrameIdleEnemy2 = 1;

function animateFrameIdleEnemy2() {
    currentFrameIdleEnemy2++;
    if (currentFrameIdleEnemy2 > 5) {
        currentFrameIdleEnemy2 = 1;
    }
    const imageUrl = `library/idleEnemy2/idle${currentFrameIdleEnemy2}.png`; 
    frameElementIdleEnemy2.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameIdleEnemy2, 200); 
//END IDLE ENEMY 2

//IDLE ENEMY 2 PROLOG
const frameElementIdleEnemy2Prolog = document.getElementById('idleEnemy2Prolog');
let currentFrameIdleEnemy2Prolog = 1;

function animateFrameIdleEnemy2Prolog() {
    currentFrameIdleEnemy2Prolog++;
    if (currentFrameIdleEnemy2Prolog > 5) {
        currentFrameIdleEnemy2Prolog = 1;
    }
    const imageUrl = `library/idleEnemy2/idle${currentFrameIdleEnemy2Prolog}.png`; 
    frameElementIdleEnemy2Prolog.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameIdleEnemy2Prolog, 200); 
//END IDLE ENEMY 2 PROLOG


//ATTACK PLAYER 1
const frameElementAttackPlayer1 = document.getElementById('attackPlayer1');
let currentFrameAttackPlayer1  = 1;
function animateFrameAttackPlayer1 () {
    currentFrameAttackPlayer1++;
    if (currentFrameAttackPlayer1 > 4) {
        currentFrameAttackPlayer1 = 1;
    }
    const imageUrl = `library/attackPlayer/attack1/attack${currentFrameAttackPlayer1}.png`; 
    frameElementAttackPlayer1.style.backgroundImage = `url('${imageUrl}')`;

}
setInterval(animateFrameAttackPlayer1 , 200); 
//END ATTACK PLAYER 1

//ATTACK 2 PLAYER 1
const frameElementAttack2Player1 = document.getElementById('attack2Player1');
let currentFrameAttack2Player1  = 1;
function animateFrameAttack2Player1 () {
    currentFrameAttack2Player1++;
    if (currentFrameAttack2Player1 > 4) {
        currentFrameAttack2Player1 = 1;
    }
    const imageUrl = `library/attackPlayer/attack2/attack${currentFrameAttack2Player1}.png`; 
    frameElementAttack2Player1.style.backgroundImage = `url('${imageUrl}')`;

}
setInterval(animateFrameAttack2Player1 , 200); 
//END ATTACK 2 PLAYER 1


//ATTACK PLAYER 2
const frameElementAttackPlayer2 = document.getElementById('attackPlayer2');
let currentFrameAttackPlayer2 = 1;
function animateFrameAttackPlayer2 () {
    currentFrameAttackPlayer2++;
    if (currentFrameAttackPlayer2 > 4) {
        currentFrameAttackPlayer2 = 1;
    }
    const imageUrl = `library/attackPlayer2/attack/attack${currentFrameAttackPlayer2}.png`; 
    frameElementAttackPlayer2.style.backgroundImage = `url('${imageUrl}')`;

}
setInterval(animateFrameAttackPlayer2 , 200); 
//END ATTACK PLAYER 2

//ATTACK PLAYER 2
const frameElementAttack2Player2 = document.getElementById('attack2Player2');
let currentFrameAttack2Player2 = 1;
function animateFrameAttack2Player2 () {
    currentFrameAttack2Player2++;
    if (currentFrameAttack2Player2 > 4) {
        currentFrameAttack2Player2 = 1;
    }
    const imageUrl = `library/attackPlayer2/attack2/attack${currentFrameAttack2Player2}.png`; 
    frameElementAttack2Player2.style.backgroundImage = `url('${imageUrl}')`;

}
setInterval(animateFrameAttack2Player2 , 200); 
//END ATTACK PLAYER 2

//ATTACK ENEMY 1
const frameElementAttackEnemy1 = document.getElementById('attackEnemy1');
let currentFrameAttackEnemy1 = 1;
function animateFrameAttackEnemy1 () {
    currentFrameAttackEnemy1++;
    if (currentFrameAttackEnemy1 > 4) {
        currentFrameAttackEnemy1 = 1;
    }
    const imageUrl = `library/attackEnemy/attack1/attack${currentFrameAttackEnemy1}.png`; 
    frameElementAttackEnemy1.style.backgroundImage = `url('${imageUrl}')`;
}
myattack = setInterval(animateFrameAttackEnemy1 , 200); 
//END ATTACK ENEMY1

//ATTACK 2 ENEMY 1
const frameElementAttack2Enemy1 = document.getElementById('attack2Enemy1');
let currentFrameAttack2Enemy1 = 1;
function animateFrameAttack2Enemy1 () {
    currentFrameAttack2Enemy1++;
    if (currentFrameAttack2Enemy1 > 4) {
        currentFrameAttack2Enemy1 = 1;
    }
    const imageUrl = `library/attackEnemy/attack2/attack${currentFrameAttack2Enemy1}.png`; 
    frameElementAttack2Enemy1.style.backgroundImage = `url('${imageUrl}')`;
}
myattack = setInterval(animateFrameAttack2Enemy1 , 200); 
//END ATTACK 2 ENEMY1

//ATTACK ENEMY 2
const frameElementAttackEnemy2 = document.getElementById('attackEnemy2');
let currentFrameAttackEnemy2 = 1;
function animateFrameAttackEnemy2 () {
    currentFrameAttackEnemy2++;
    if (currentFrameAttackEnemy2 > 5) {
        currentFrameAttackEnemy2 = 1;
    }
    const imageUrl = `library/attackEnemy2/attack/attack${currentFrameAttackEnemy2}.png`; 
    frameElementAttackEnemy2.style.backgroundImage = `url('${imageUrl}')`;
}
myattack = setInterval(animateFrameAttackEnemy2 , 200); 
//END ATTACK ENEMY 2

//ATTACK 2 ENEMY 2
const frameElementAttack2Enemy2 = document.getElementById('attack2Enemy2');
let currentFrameAttack2Enemy2 = 1;
function animateFrameAttack2Enemy2 () {
    currentFrameAttack2Enemy2++;
    if (currentFrameAttack2Enemy2 > 6) {
        currentFrameAttack2Enemy2 = 1;
    }
    const imageUrl = `library/attackEnemy2/attack2/attack${currentFrameAttack2Enemy2}.png`; 
    frameElementAttack2Enemy2.style.backgroundImage = `url('${imageUrl}')`;
}
myattack = setInterval(animateFrameAttack2Enemy2 , 200); 
//END ATTACK 2 ENEMY 2

//DEAD ENEMY 1
const frameElementDeadEnemy = document.getElementById('deadEnemy');
let currentFrameDeadEnemy = 1;

function animateFrameDeadEnemy() {
    currentFrameDeadEnemy++;
    if (currentFrameDeadEnemy > 6) {
        currentFrameDeadEnemy = 1;
    }
    const imageUrl = `library/deadEnemy/dead${currentFrameDeadEnemy}.png`; 
    frameElementDeadEnemy.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameDeadEnemy, 200); 
//END DEAD ENEMY 1

//DEAD PLAYER
const frameElementDeadPlayer = document.getElementById('deadPlayer');
let currentFrameDeadPlayer = 1;

function animateFrameDeadPlayer() {
    currentFrameDeadPlayer++;
    if (currentFrameDeadPlayer > 6) {
        currentFrameDeadPlayer = 1;
    }
    const imageUrl = `library/deadPlayer/dead${currentFrameDeadEnemy}.png`; 
    frameElementDeadPlayer.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameDeadPlayer, 200); 
//END DEAD PLAYER

//WALKS PLAYER
const frameElementWalkPlayer = document.getElementById('walkPlayer');
let currentFrameWalkPlayer = 1;

function animateFrameWalkPlayer() {
    currentFrameWalkPlayer++;
    if (currentFrameWalkPlayer > 6) {
        currentFrameWalkPlayer = 1;
    }
    const imageUrl = `library/walkPlayer/walk${currentFrameWalkPlayer}.png`; 
    frameElementWalkPlayer.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameWalkPlayer, 200); 
//END WALKS PLAYER

//NANTANG ENEMY
const frameElementNantang = document.getElementById('nantangEnemy');
let currentFrameNantang = 1;

function animateFrameNantang() {
    currentFrameNantang++;
    if (currentFrameNantang > 3) {
        currentFrameNantang = 1;
    }
    const imageUrl = `library/nantang/nantang${currentFrameNantang}.png`; 
    frameElementNantang.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameNantang, 200); 
//END NANTANG ENEMY

//RUN PLAYER
const frameElementRunPlayer = document.getElementById('runPlayer');
let currentFrameRunPlayer = 1;

function animateFrameRunPlayer() {
    currentFrameRunPlayer++;
    if (currentFrameRunPlayer > 4) {
        currentFrameRunPlayer = 1;
    }
    const imageUrl = `library/runPlayer/run${currentFrameRunPlayer}.png`; 
    frameElementRunPlayer.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameRunPlayer, 200); 
//END RUN PLAYER

//RUN ENEMY 1
const frameElementRunEnemy = document.getElementById('runEnemy');
let currentFrameRunEnemy = 1;

function animateFrameRunEnemy() {
    currentFrameRunEnemy++;
    if (currentFrameRunEnemy > 4) {
        currentFrameRunEnemy = 1;
    }
    const imageUrl = `library/runEnemy/run${currentFrameRunEnemy}.png`; 
    frameElementRunEnemy.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameRunEnemy, 200); 
//END RUN ENEMY 1

//RUN ENEMY 2
const frameElementRunEnemy2 = document.getElementById('shot');
let currentFrameRunEnemy2 = 1;

function animateFrameRunEnemy2() {
    currentFrameRunEnemy2++;
    if (currentFrameRunEnemy2 > 12) {
        currentFrameRunEnemy2 = 1;
    }
    const imageUrl = `library/shot/shot${currentFrameRunEnemy2}.png`; 
    frameElementRunEnemy2.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameRunEnemy2, 200); 
//END RUN ENEMY 2

//ULTI 1
const frameElementUlti = document.getElementById('ulti');
let currentFrameUlti = 1;

function animateFrameUlti() {
    currentFrameUlti++;
    if (currentFrameUlti > 23) {
        currentFrameUlti = 1;
    }
    const imageUrl = `library/attackPlayer/ulti/attack${currentFrameUlti}.png`; 
    frameElementUlti.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameUlti, 200); 
//END ULTI 1

//ULTI 1
const frameElementUlti2 = document.getElementById('ulti2');
let currentFrameUlti2 = 1;

function animateFrameUlti2() {
    currentFrameUlti2++;
    if (currentFrameUlti2 > 26) {
        currentFrameUlti2 = 1;
    }
    const imageUrl = `library/attackPlayer2/ulti/attack${currentFrameUlti2}.png`; 
    frameElementUlti2.style.backgroundImage = `url('${imageUrl}')`;
}
setInterval(animateFrameUlti2, 200); 
//END ULTI 1
