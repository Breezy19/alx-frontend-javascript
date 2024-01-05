// Import the ClassRoom class from 0-classroom.js
import ClassRoom from './0-classroom.js';

function initializeRooms() {
    // Create an array of ClassRoom objects with specified sizes
    return [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
}

// Export the initializeRooms function
export default initializeRooms;
