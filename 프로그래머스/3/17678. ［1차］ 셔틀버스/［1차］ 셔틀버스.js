function solution(n, t, m, timetable) {
    // 크루 도착시간 정렬
    timetable.sort((a, b) => {
        const at = calculateTimeToMin(a);
        const bt = calculateTimeToMin(b);
        return at - bt;
    });
    
    // 셔틀버스 배열
    let shuttleTime = calculateTimeToMin("09:00");
    const shuttles = [];
    for(let i = 0; i < n; i++) {
        shuttles.push([shuttleTime, []]);
        shuttleTime += t;
    }
    
    for(let i = 0; i < timetable.length; i++) {
        const arrive = calculateTimeToMin(timetable[i]);
        for(let j = 0; j < n; j++) {
            const [time, crews] = shuttles[j];
            
            if(arrive <= time && crews.length < m) {
                shuttles[j][1].push(arrive);
                break;
            }
        }
    }
    
    const [time, crews] = shuttles[n - 1];
    // 한명만 제치면 됨
    if(crews.length === m) {
        const lastCrew = crews[crews.length - 1];
        return formatTimeStr(lastCrew - 1);
    } else {
        return formatTimeStr(time);
    }
}

function convertTimeArr(timeStr) {
    return timeStr.split(":").map(Number);
}
function calculateTimeToMin(timeStr) {
    const [hh, mm] = convertTimeArr(timeStr);
    return hh * 60 + mm;
}
function formatTimeStr(time) {
    const hh = Math.floor(time / 60);
    const mm = time % 60;
    return `${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}`;
}