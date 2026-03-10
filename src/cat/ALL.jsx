import React from 'react'

 
export const categories = [
    'Security Equipment',
    'Rescue Equipment',
    'Fire Fighting Equipment',
    'Safety Shoes',
    'Road Safety',
    'Fire Fighting Vehicle',
    'Fire Alarm System',
    'Fall Arrest System',
    'Personal Protective Wear',
    'Medical Equipment For Ambulance',
    'Personal Protective Equipments',
    'Laboratory safety System',
    'Safety Containment System',
    'Spill Prevention Containment and Control',
    'Industrial Tools',
    'Hand tools',
    'Power Tools',
];



export const productsData = {
'Security Equipment': [
    { 
        id: 'alcohol-detector', 
        title: 'Alcohol Detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEBITFRUXFRIVEhUVFRUSFhcXFRUXFxgVFxUYHSggGBolHRUVITEhJSkrLi4vFyAzODMtNygtLjcBCgoKDg0OGhAQGzclICUvMC0vNzY3MTctLTcrLTUtLTUtMi0vLS0rLTctMy0tLS0tNzgtMS0rLTg3LS0tKy04K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUIAgH/xABLEAABAwICBAcNBAcHBQEAAAABAAIDBBESIQUGBzETIkFRYXGxFCMkMjRydIGRobKzwTNCc9FSYoKDosLwNUNVhJLh8RYlk6O0Ff/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQABBAEFAQAAAAAAAAAAAAECAxESMcEEIUFRgRP/2gAMAwEAAhEDEQA/ALxREQEREBERAREQERY6idsbXPkc1rWguc5xDWtAzJJO4IMiKDM2raNcSI3SvIJHFZa9uUBxBI6V8y7UaUboag+qMfzoJ2iqPWLarI9uCjj4InfI8hzh5rdw6zfq5VCpdZ652+sqfVM9vwkIPSF0LgvMz9K1LvGqKg+dNI7tctdzi7xnE9LiTYetB6bfWxDfIwdbmj6r9jqmOya9pPMHA9i8v09VhdxQAL2JIsT0dS3pGg2c3Ig3B5Wn+j77IPTCKq9mmuBDu5alxs496c4k4Xn7hJ+6csPTly5WoEBERAREQEREBERAREQEREBEWGXC7Jx3bwgykr4Mzece0LTljhbvAWN8sI5lZjalrdNWz9NvtC+e7Y/0wudJX07d5C5VZX00hc154owgDnu0O3cvjBd8NC5fFcNXXxwnaWNlaRcEW57hUHt21pndVGga/DAxkT3tblwj3cYYzyhuVhz555WsaGm0fitwbbnPMBUZtMla7SdRgaGsaWMaALZMjaL+26a2jNP7/Zt5cvTer/tlcZt7fV38IqHm9wbcxGRHVzKR0M8sjG5veTyDPl5bdpUccFM9WG2HUxo9v/C872sbaCd392/1kDtKzs0HUn7gHW8fRSGKRbcMnVyII0zVipPJH/r+tlgpNGOFR3PIAHbjY3Bu3G0g2vbJTqJ6jemnmOvik5MMR9bZHg+5zUHF01T4H2C0Yq0j8l2dangvdZRZ7kEkjlxAPZv3Efyn6dfWrp2c62Cpj4GV15mDik75GDK5/XG4+3nXnWhrDG6+8Hxhz/7qUaP0gYnsnhdaxDw4chH3urkIPIg9LouJqlrAyshDxYPblKz9F3R+qd4P5LtoCIiAiIgIiICIiAiIgLXFMLknlN1sL4kYTuNj1X9yDUqKBriPX9Fhdoph3rbNMeV59gTuTnc73LUys6SyXtou0REd6wRaNixvDgN7SCRyYGtt/D711BQt53e3/Zfh0dGd4J9ZXSa1+bXLLSl6jn9yU7XXNgR1BedNqsLW6UqcBu1xieOjFGy49t/avUMVMxos1oH9c689bdtCSxV/dRbeGdsYY8bg+NmEsdzGzcQ5wegrOefLtNLR4Xf2VsAprocWDvUPZ/yobTi72j9YdqmGjncXrPZl9Fzd0tOkYsFow+Nwa1mNoaS4NB32ILcTnEk3Ngxoz3LoQ6aFy52I8fE3OxaMsr3zuABuyF997KKRPW5E/d6kElk0sHMw4SMreMLWLg61rbhaw5rlRDW8ceB/4jfXxHDsK60T1w9b6oXhj5buk9QGD34z7EHC0nUXJ61yXlZa15xHrv6juWFu9Bkp6YuXQljLAxouOLfLLe92a6erGj+FeBZbGu1FwM4jHJFH73PKCSbEpXd22xOt3K+4ubZOitl7faVeaorYl5d/lZfjiV6oCIiAiIgIiICIiAiIgIiICIiAiIgKKbUaCObRlS2QeK1r2nmexwLSPXl1EqVqCbZqpzNH4RukmiY/zRik7Ywg8/U9NY5bzcN/M9H9cq7NOA1oA5PfnmV96o0bJ6uGOW+F7jjAJHFa0vwg8l8NienoUt0fX0sjS4UVDHY2AklfiPFuN+8cl+dWS0R6Ny2onfRSCn0jTm9qWhFnOAxYs7AG+btxvYdS2I9IQlxaKfRwAtxjGbG9/F42e4e1ONTeOHE5V/rpXE1hLf7trWdrj73FXK3SEQBPBaNyF8ob/wA1/d9VEKfTcEskGKn0PJ3RPCySNlK1szWzPALsZfe4xb7XvvAzV403QynkEzL/AHuVfPAWXPrLU1VMxnismkYAT91jyBfpsFYWp1NHIDI5oJbgLb5gXF7gc/XuWVb2o9C6O0sjSBYFoOTndNuRvSfUuPr5OX1Zcd+CPtcptdQPXI+EnzY/qgkmxDy//KSfHCr3VE7EPLj6JJ8cKvZAREQEREBERAREQEREBERAREQEREBV7tu8gZ6Qz5cqsJV9tt8hj9Ij+XKgqbUB/h9P+9+RItyhjp46eOaoZM/hDKGiORsWEQiO98THXvwnRay5uz13h9P+9+RIu7oqWoFFD3LTioOOo4UGmFXgNocGRa7g8QxZC17dC3glZX6PihdPwuORsUzYQGObESXCR2IktcLAR2tbl35Z7DKGMPxcfg+AbUYMQx2c5rQzHhtcF18WHk3LPUxyMfUuhi4YvqGGNro+6g6Id0NdIGEOBs9objtlci+aysikxmTguN3K0cHwfE4a7CYOBtbJpxcHbK17LTLSraSOVkYixxieR1PxnCRzSeDBeCGtG6Xdb7vSopqzS0s00UtLFNCYaihe7hZmzh4kqo48ItGzCQXA3z3WtyqSaZnJk0ayZvAF1a7G1re5bMbwFn4QBhJLzxuXCOZaOq9RPI61RSx01p9HFnB0wo+Eca6AFrrAcIACTbktfkVFd6z+WVPpE/zHKx9RD3p37vsKrfWbyyp9In+Y5WNqOe9H932FcW0pJUG1v8oPmx/VTa+Sg+th8IPmx/VBJ9h/l59Ek+ZAr2VE7DfLj6JJ8yBXsgIiICIiAiIgIiICIiAiIgIiICIiAq/22eQM9Ij+CRWAq/21jwBnpEfwSIKZ2eP/AO4U/wC+/wDnlW3oXR0kjQYpWNJsMOJ7Xc17Nab9vQo1oXST6eaOeO2KNwcARcHIgtPQQSPWpRDrVSAhzdFRNIvYtq6hluqwyWsctkrJHSSttgc6+C9gXNI4xa5g57OGfWtw0czCCX2OIWdjdm45XDufLetVmsVD/hTfVWVH5LZj0/Q/4ZbdurZ/yWrlE2R7WyhqJH43kua1jW3c4uN3Xdhz5cwLdKy6NjqxWUYqp5HhtdRDA+V8tsbw5sgBJFrBwv0FYZ9a9Guc4u0VIb4rn/8AQqMweS1t1uRbLNeqFsgnbo6ThWljmYqyV0eKM3jxMsAWtdmAnOGyIazeWVPpE/zHKxNST3o9TOwqrqqd0j3SPN3Oc5zjuuXG595Vn6lHvZ6o+wrm0lF1B9bD4QfNj+qml1Cda/KD5sf1QSvYaPDnehyfNp1eyovYYPDnehyfNp1eiAiIgIiICIiAiIgIiICIiAiIgIiICgG2v+z2+kRfDIp+oBtr/s8fjxfC9B5vjf8ARbDHrSjd9Fsw1BYQ8b2kOHW03A9yCVRaoV+R7lfnnm6MHMcxdcL7n1U0gGOtSSXsQPF3+1XJoLR9NMyQyQQyOEsl3Pja9xDw2VnGIJyjkjHUAum3V6j3ilgHVG1vYEHl7SOqddAwyTUsrGNticW3A5LkjcOlcRemdosMFPQy8GwNLoqkOGJ2HCYiwXbex75JFbpXmZAVq6lZxH9jsKqpWjqS7vbv2OwoJOoPrX5QfNj+qmpKhOtB8JPms+qCY7DfLn+iP+bCrzVF7Cj4c/mFG73yw8qvRAREQEREBERAREQEREBERAREQEREBQDbX/Z4/Hi+F6n6r/bb/Z7fSIvhkQeZo3ZD1LOwrUYVnY5BZWrOu0lg0U4c+KDjyCqlgxshAALomtLXOAO+24cgCkp1yqBiPcr8LGyOL21bS20TsMli9g8Ugjk3KNbPdU46mDhMc/CS8K3DDIyINjjLWux4wcVy4G3VlldSyXZhiBb3RXYTiuDNTuHHaWuyLRvDiD1oIJtA174eN9LwUjZMQZI58rJQ1rXh5Y3Blcva25v923VW6nO07U7uF7JBLI/hXScJwmHGH8V5N25OBDwfaoMgK0dSh3t37HYqvCs/U13e3fs/CgkLioXrL5QfNYpc52ah+sR8IPUzsQTbYT5bJ6IfjhV5KjthQ8Nl9Gd8yH8leKAiIgIiICIiAiIgIiICIiAiIgIiIChu1yg4XRkzr5w4Jx1RnjfwF/rspkuRrhDjoKth5aacf+tyDyFpCmwuxN8V2YtuHQsDXLea4ugcD921vdkuc0oLc2N6TLGvAa55jmLntbm8RTRtaXNbvcA+GO4HISrW/wCoouVlSP8AK1J97WFeZdXamBkuKp4TBhIHBlzXYsTeVpBtYOUmp9M0lwBVVDBip/FmqwQ254TebYv0s7YbYTe6DJtq0pwtRELObxZJcLgWkCR2Bl2OzaSyFjrGxGLOyrhbumZy+eRxeX3e6z3Oc4uAyaS5xJOVt5K0wgyU8Je4Nbv/AKzVhauVTI2ua51jcdllGNHxCOPFvcQtnR8meZQT7hARcEHqKiOnvt3dTOxdmiOQXF04O/O6mfCrRO9hQ8Nm9GPzIleCpDYV5ZL6N/PErvUBERAREQEREBERAREQEREBERAREQFp6ZZenmHPFKPawrcWvpD7KTzH/CUHjijHe5Bzs7AVzQV1NHDeOdpXKKD6eV8IiAvpm8L5X3ELkDpQSGQcVo6PoF+UhzX3NyDoWOHegllA7cuVpr7c9TewLe0a7ILR0we/Hqb2IJ5sJHhk3ow+ONXcqS2EeVTejj441dqAiIgIiICIiAiIgIiICIiAiIgIiIC16/7KTzH/AAlbC19I/ZSeY/4Sg8daO8YdS5kws4jpK6NCeOOtYm0bpagRNtifIGtvuu4gC9utBoIuvW6tVcbi008psXC7WOe0luK9iB+o49QWrVaJnjcWSQyNc0XcC05AAuueizXf6TzINJZqMcdvWFistnRg741B3Jt6xA5r7kdmVivmgkOiX5LW0ue+nqb2L90W9YtKnvh6h2ILD2Djwqf8AfGz8ldqpTYR5VP+A34mq60BERAREQEREBERAREQEREBERAREQFraS+xk/Df8JWytbSX2Mn4b/hKDxrSOzB6ivyrmdHNjYS1zS1zXA2IIsQQetflNydS+dKDj35wEHRg1vrWXwzuzJccQY7Mgtvxm8xPu5luU2vdW3GHFjg+2I4Q1wAv4jhk05nkI6FFkQS+bXpzmvaaaHjBwaTd+C75HNLQ+9rcJYAWFmgZDJR7Q4756itFdHQzc3HoQdBxWJyyFY3IOlo+RftebvJ6B2LUoJM7LZqzxvUOxBZewjyqo/Ab8TVdapXYP5TUfgR/EFdSAiIgIiICIiAiIgIiICIiAiIgIiICwV7C6KRozJY8DrLSAs6IPFUbCDZwIIyIIsQRkQRyFfulhm0/qqw9s2rXcukTMxveqrFKMshICBK31kh37ZUD0lTkhuEXtdByUWR0Dhva72FfFkH4urocZOPUFyl2NFjvZPOfyQbBCxuWQlY3IEL7EFb9Rv8AUOxc0LcDrgdXYLILT2C+UVH4MfxBXWqd2C0T8dTMWnBhjjDud4zLR1ZX6wriQEREBERAREQEREBERAREQEREBERAREQRfaLq13dSOjaAZWESwXsOO24LbnIYmlwz5weRUxW6h1zL4qOb9jvnwEr0eiDyjVaKfF9qySP8RhZ8QC1nUYO4tPqXrYhc2s1fpJftaaB/S6JhPttdB5Tfo1vKxp6sl+ilLRYNsPavSVXs40ZJn3PgP6kkjP4Q63uXFqtkNIc456hnQTG9o/hB96CgysLldNZsZfnwdTGebFG5h9Za49ijlfsi0iy5jbDLzBkoBP8A5A0e9BXMLCSAu9onRklRNHTwC73uDW8w53noaM/UpTojZPpF3jsjhuczJI1xA5w2Muv1XCs7UTUGPR7nyuk4WVwDQ7AGBjb3IaLk55XJPJyZoJDq7oaKkp46eEcVjbX5XHe5x6SbldJEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQF+FEQAv1EQEREBERAREQEREBERB/9k=', 
        desc: 'The Portable Alcohol Breath Tester is a professional-grade, handheld device designed for instant and accurate blood alcohol content (BAC) measurement. Built with advanced semiconductor or fuel-cell sensor technology, it delivers results in seconds with ±0.001% accuracy. Ideal for law enforcement, corporate safety programs, personal use, bars, schools, and transportation companies. Features a large backlit LCD display, audible alarm at 0.05% BAC, one-touch operation, and compact design that fits in any pocket. Includes 5 mouthpieces, carrying case, and USB rechargeable battery lasting up to 300 tests. Meets international calibration standards and is used by police departments worldwide. Perfect for preventing drunk driving, ensuring workplace safety, and promoting responsible alcohol consumption. Lightweight (only 120g), durable ABS body, and easy-to-read digital results make it the most reliable choice for security professionals and individuals alike. Regular calibration recommended every 6 months for continuous accuracy. This device is NIOSH and CE certified, ensuring top-tier performance in any environment. It also supports data logging for compliance reporting and comes with a 1-year manufacturer warranty.', 
        tagsLine: 'Tags: Alcohol Detector, Breathalyzer, Portable Breath Tester, BAC Tester, Law Enforcement Equipment, Road Safety Device, Police Breath Analyzer, Digital Alcohol Tester, Handheld Breathalyzer, Personal Safety Tool, Corporate Safety Equipment, Bar Security Device, School Safety Product, Transportation Safety, Alcohol Testing Machine, Semiconductor Sensor, Fuel Cell Sensor, Backlit LCD Display, Audible Alarm, USB Rechargeable, Compact Design, High Accuracy Tester, Breath Test Device, Drunk Driving Prevention, Workplace Safety Tool, CE Certified, NIOSH Approved, Easy to Use, Pocket Size, 300 Tests Battery, Mouthpiece Included, Professional Grade, Security Gear, Detection Device, Sobriety Tester, Alcohol Sensor, Public Safety Equipment, Enforcement Tool, Instant Results, Data Logging, 1 Year Warranty',
        tags: ["Alcohol Detector", "Breathalyzer", "Portable Breath Tester", "BAC Tester", "Law Enforcement Equipment", "Road Safety Device", "Police Breath Analyzer", "Digital Alcohol Tester", "Handheld Breathalyzer", "Personal Safety Tool", "Corporate Safety Equipment", "Bar Security Device", "School Safety Product", "Transportation Safety", "Alcohol Testing Machine", "Semiconductor Sensor", "Fuel Cell Sensor", "Backlit LCD Display", "Audible Alarm", "USB Rechargeable", "Compact Design", "High Accuracy Tester", "Breath Test Device", "Drunk Driving Prevention", "Workplace Safety Tool", "CE Certified", "NIOSH Approved", "Easy to Use", "Pocket Size", "300 Tests Battery"],
        rating: 4.5, 
        reviews: 28, 
        sold: '50+' 
    },
    { 
        id: 'automatic-barrier', 
        title: 'Automatic Barrier', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://www.nobrokerhood.com/blog/wp-content/uploads/2024/07/Automatic-Boom-Barrier-Gate.jpg', 
        desc: 'The Automatic Barrier (Boom Barrier Gate) is a heavy-duty, high-speed security system engineered for complete vehicle access control in residential societies, commercial complexes, industrial sites, toll plazas, parking lots, and government facilities. Powered by a powerful 24V DC motor with 100% duty cycle, it opens/closes in just 1–3 seconds with smooth, quiet operation. Features robust 304-grade stainless steel construction, IP55 weatherproof rating, built-in LED lights for night visibility, anti-crush safety sensors, and compatibility with RFID, ANPR, loop detectors, and remote controls. Supports up to 6-meter boom arm with reflective stickers and crash-resistant design. Integrated control board allows multiple access modes (card, fingerprint, plate recognition, mobile app). Built-in battery backup ensures operation during power failures. This is the ultimate solution for traffic management, perimeter security, and vehicle flow control. CE, ISO, and ROHS certified. Extremely low maintenance with millions of cycles lifespan. Perfect for high-traffic areas requiring reliable 24/7 performance. Includes manual release for emergencies and optional solar power kit.', 
        tagsLine: 'Tags: Automatic Barrier, Boom Barrier Gate, Parking Barrier, Vehicle Access Control, Toll Barrier, Road Barrier System, Automatic Boom Gate, Security Barrier, Car Parking System, RFID Barrier, ANPR Compatible, Stainless Steel Barrier, IP55 Weatherproof, Anti-Crush Safety, LED Indicator, Remote Control Gate, Industrial Barrier, Residential Society Gate, Commercial Complex Security, Toll Plaza Equipment, Crash Rated Barrier, Battery Backup Barrier, High Speed Barrier, Traffic Management System, Perimeter Security, Automatic Gate, Access Control System, Heavy Duty Barrier, 6 Meter Boom, CE Certified, ISO Certified, ROHS Certified, Solar Ready, Manual Release',
        tags: ["Automatic Barrier", "Boom Barrier Gate", "Parking Barrier", "Vehicle Access Control", "Toll Barrier", "Road Barrier System", "Automatic Boom Gate", "Security Barrier", "Car Parking System", "RFID Barrier", "ANPR Compatible", "Stainless Steel Barrier", "IP55 Weatherproof", "Anti-Crush Safety", "LED Indicator", "Remote Control Gate", "Industrial Barrier", "Residential Society Gate", "Commercial Complex Security", "Toll Plaza Equipment", "Crash Rated Barrier", "Battery Backup Barrier", "High Speed Barrier", "Traffic Management System", "Perimeter Security", "Automatic Gate", "Access Control System", "Heavy Duty Barrier", "6 Meter Boom", "CE Certified"],
        rating: 4.8, 
        reviews: 42, 
        sold: '30+' 
    },
    { 
        id: 'biometric-system', 
        title: 'Biometric System', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://cdn.prod.website-files.com/61845f7929f5aa517ebab941/6333bf2f22cf4830e5672c89_Single-factor%20and%20multi-factor%20authentication%20biometric%20access%20control%20systems.jpg', 
        desc: 'The Fingerprint Biometric Access System is a cutting-edge security solution that uses advanced optical or capacitive fingerprint sensors for fast and accurate user authentication. Ideal for offices, factories, schools, hospitals, banks, and high-security zones. Supports up to 10,000 users, 100,000 logs, and multiple verification modes (fingerprint + PIN + card). Features 1-second recognition time, false acceptance rate <0.0001%, tamper-proof design, and TCP/IP + USB connectivity. Built-in door lock relay, Wiegand interface for integration with existing access control panels, and cloud-based software for real-time monitoring. Anti-passback, anti-duress, and time-attendance reporting included. Rugged ABS housing with IP65 rating makes it suitable for indoor/outdoor use. Complete kit includes reader, power supply, and installation accessories. Fully GDPR compliant with encrypted fingerprint templates. This system eliminates key/cards theft and provides complete audit trail for compliance.', 
        tagsLine: 'Tags: Biometric System, Fingerprint Access Control, Biometric Door Lock, Fingerprint Reader, Office Security System, Factory Attendance Machine, School Biometric, Hospital Access Control, Bank Security, Multi-Factor Authentication, TCP/IP Biometric, USB Biometric, 10000 Users Capacity, Time Attendance System, Cloud Based Software, Anti-Passback, Wiegand Interface, IP65 Weatherproof, Tamper Proof, Door Lock Relay, High Security, GDPR Compliant, Encrypted Templates, 1 Second Recognition, False Acceptance Rate, Access Control Panel, Real Time Monitoring, Audit Trail, Complete Kit',
        tags: ["Biometric System", "Fingerprint Access Control", "Biometric Door Lock", "Fingerprint Reader", "Office Security System", "Factory Attendance Machine", "School Biometric", "Hospital Access Control", "Bank Security", "Multi-Factor Authentication", "TCP/IP Biometric", "USB Biometric", "10000 Users Capacity", "Time Attendance System", "Cloud Based Software", "Anti-Passback", "Wiegand Interface", "IP65 Weatherproof", "Tamper Proof", "Door Lock Relay", "High Security", "GDPR Compliant", "Encrypted Templates", "1 Second Recognition", "False Acceptance Rate"],
        rating: 4.6, 
        reviews: 156, 
        sold: '200+' 
    },
    { 
        id: 'bomb-blanket', 
        title: 'Bomb Blanket', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://www.atomicdefense.com/cdn/shop/products/anti-bomb-blanket-for-suppression-and-safety-atomic-defense-clothing-1_800x571.jpg?v=1689026017', 
        desc: 'The Explosion Suppression Bomb Blanket is a life-saving ballistic protection device designed to contain and suppress blast fragments from small explosive devices (up to 2 kg TNT equivalent). Used by bomb disposal units, airports, police, military, VIP security, and event organizers. Made with multiple layers of aramid fiber (Kevlar equivalent) and flame-retardant materials. Lightweight (only 12 kg) yet extremely strong, with reinforced handles for quick deployment. Covers 1.5m x 1.5m area with Velcro straps and tie-down loops. Tested to NIJ and STANAG standards. Can be folded into a compact carry bag. Reusable after inspection. Essential tool for suspicious package handling, mailrooms, and public venues. Provides immediate containment of shrapnel and reduces blast pressure. Comes with training manual and 5-year warranty.', 
        tagsLine: 'Tags: Bomb Blanket, Explosion Suppression, Blast Protection, Ballistic Blanket, Bomb Disposal Tool, Police Equipment, Military Safety, Airport Security, Suspicious Package, Shrapnel Containment, Aramid Fiber, Kevlar Blanket, NIJ Certified, STANAG Standard, Lightweight Bomb Blanket, Flame Retardant, VIP Protection, Event Security, Public Venue Safety, Reusable Blanket, Quick Deployment, 2kg TNT Protection, Carry Bag Included, 5 Year Warranty',
        tags: ["Bomb Blanket", "Explosion Suppression", "Blast Protection", "Ballistic Blanket", "Bomb Disposal Tool", "Police Equipment", "Military Safety", "Airport Security", "Suspicious Package", "Shrapnel Containment", "Aramid Fiber", "Kevlar Blanket", "NIJ Certified", "STANAG Standard", "Lightweight Bomb Blanket", "Flame Retardant", "VIP Protection", "Event Security", "Public Venue Safety", "Reusable Blanket", "Quick Deployment", "2kg TNT Protection"],
        rating: 5, 
        reviews: 12, 
        sold: '15+' 
    },
    { 
        id: 'bullet-proof-jacket', 
        title: 'Bullet Proof Jacket', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'http://bulletsafe.com/cdn/shop/articles/Different_Types_of_Body_Armor.png?v=1726764345', 
        desc: 'The Ballistic Protection Jacket is a Level IIIA body armor vest engineered to stop 9mm, .357 Magnum, and .44 Magnum rounds at point-blank range. Ideal for police, security guards, VIP protection, journalists in conflict zones, and private security contractors. Constructed with ultra-lightweight UHMWPE panels (only 2.8 kg) and breathable mesh lining for all-day comfort. Features MOLLE webbing for attaching pouches, adjustable side straps, and front/back trauma plates pockets. NIJ 0101.06 certified, water-resistant outer shell, and 5-year ballistic warranty. Available in black, tan, and camouflage. Quick-don design with emergency rip cord. This jacket provides maximum mobility while delivering life-saving protection. Includes soft armor panels and optional hard plates for Level IV upgrade.', 
        tagsLine: 'Tags: Bullet Proof Jacket, Ballistic Vest, Body Armor, Level IIIA Armor, Police Protection, Security Guard Vest, VIP Body Armor, UHMWPE Panels, NIJ Certified, Lightweight Armor, MOLLE Webbing, Trauma Plate Pocket, Breathable Lining, Adjustable Straps, Water Resistant, 5 Year Warranty, Quick Don Design, Emergency Rip Cord, Conflict Zone Gear, Private Security, Hard Plate Upgrade',
        tags: ["Bullet Proof Jacket", "Ballistic Vest", "Body Armor", "Level IIIA Armor", "Police Protection", "Security Guard Vest", "VIP Body Armor", "UHMWPE Panels", "NIJ Certified", "Lightweight Armor", "MOLLE Webbing", "Trauma Plate Pocket", "Breathable Lining", "Adjustable Straps", "Water Resistant", "5 Year Warranty", "Quick Don Design", "Emergency Rip Cord"],
        rating: 4.9, 
        reviews: 89, 
        sold: '120+' 
    },
    { 
        id: 'bulletproof-case', 
        title: 'Bulletproof Case', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://www.marsarmor.com/fls/briefcase-w-mars-armor.jpg', 
        desc: 'The Bulletproof Briefcase is a discreet Level IIIA ballistic briefcase that stops multiple 9mm and .44 Magnum rounds while looking like a normal executive case. Perfect for diplomats, executives, lawyers, and high-net-worth individuals. Features a hidden ballistic panel covering the entire front and back, reinforced corners, combination lock, and padded laptop compartment. Weighs only 4.5 kg with full ballistic protection. Includes shoulder strap and multiple internal pockets. NIJ certified ballistic insert is removable for easy cleaning. Available in black leather or carbon fiber finish. Ideal for carrying sensitive documents, cash, or valuables safely in high-risk areas. 5-year warranty on ballistic integrity.', 
        tagsLine: 'Tags: Bulletproof Case, Ballistic Briefcase, Executive Protection, Level IIIA Case, Diplomat Security, VIP Briefcase, Hidden Ballistic Panel, Combination Lock, Laptop Compartment, Lightweight Briefcase, NIJ Certified, Removable Insert, Leather Finish, Carbon Fiber, Shoulder Strap, High Risk Travel, Document Protection, Cash Transport, 5 Year Warranty',
        tags: ["Bulletproof Case", "Ballistic Briefcase", "Executive Protection", "Level IIIA Case", "Diplomat Security", "VIP Briefcase", "Hidden Ballistic Panel", "Combination Lock", "Laptop Compartment", "Lightweight Briefcase", "NIJ Certified", "Removable Insert", "Leather Finish", "Carbon Fiber"],
        rating: 4.7, 
        reviews: 34, 
        sold: '40+' 
    },
    { 
        id: 'explosive-detector', 
        title: 'Explosive detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://cdn.prod.website-files.com/5edf9e74d5a7585ab5e77dc2/5fca21ff1b1d45b9d6484fbb_e3500-trace-detector.png', 
        desc: 'The Handheld Explosive Detector is a portable, highly sensitive device that detects trace amounts of explosives (TNT, RDX, PETN, C4, etc.) in seconds using IMS (Ion Mobility Spectrometry) technology. Used by airports, border security, military, police, and event security teams. Weighs only 2.5 kg with 8-hour battery life. Features color touchscreen, data logging, GPS, and wireless connectivity. False alarm rate <1%. Includes sampling swabs and calibration kit. Rugged MIL-STD-810G construction. Detects both explosives and narcotics in one unit. Ideal for vehicle checkpoints, luggage screening, and mailroom security. CE and ISO certified with full training support.', 
        tagsLine: 'Tags: Explosive Detector, Trace Detector, Handheld Explosive, IMS Technology, Airport Security, Border Patrol, Military Equipment, Police Tool, Event Security, TNT Detector, RDX Detector, C4 Detector, Data Logging, GPS Enabled, Wireless Connectivity, 8 Hour Battery, MIL-STD-810G, False Alarm Rate, Sampling Swabs, CE Certified, Narcotics Detection',
        tags: ["Explosive Detector", "Trace Detector", "Handheld Explosive", "IMS Technology", "Airport Security", "Border Patrol", "Military Equipment", "Police Tool", "Event Security", "TNT Detector", "RDX Detector", "C4 Detector", "Data Logging", "GPS Enabled", "Wireless Connectivity", "8 Hour Battery", "MIL-STD-810G"],
        rating: 4.8, 
        reviews: 23, 
        sold: '25+' 
    },
    { 
        id: 'fiber-cabin', 
        title: 'Fiber Cabin', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://media.prefabex.com/media/_8Portable%20Booths,%20kiosks,%20huts%20(22).jpg', 
        desc: 'The Security Fiber Cabin is a modular, portable, bullet-resistant guard booth made from high-strength fiberglass and steel-reinforced panels. Ideal for checkpoints, toll plazas, factories, housing societies, and temporary security posts. Features Level IIIA ballistic protection, insulated walls for all-weather comfort, large bulletproof glass windows, AC-ready wiring, and lockable steel door. Size: 1.5m x 1.5m x 2.2m with custom options available. Includes ventilation, lighting, and desk. Easy to transport and install in hours. Fire-retardant and UV-resistant. Multiple cabins can be joined together. Used by police, military, and private security worldwide. 10-year structural warranty.', 
        tagsLine: 'Tags: Fiber Cabin, Security Booth, Guard Cabin, Portable Cabin, Bullet Resistant Booth, Checkpoint Cabin, Toll Plaza Booth, Factory Security, Modular Cabin, Fiberglass Cabin, Ballistic Cabin, Insulated Walls, Bulletproof Glass, AC Ready, Steel Door, Temporary Post, Police Booth, Military Cabin, 10 Year Warranty, UV Resistant',
        tags: ["Fiber Cabin", "Security Booth", "Guard Cabin", "Portable Cabin", "Bullet Resistant Booth", "Checkpoint Cabin", "Toll Plaza Booth", "Factory Security", "Modular Cabin", "Fiberglass Cabin", "Ballistic Cabin", "Insulated Walls", "Bulletproof Glass", "AC Ready", "Steel Door", "Temporary Post"],
        rating: 4.4, 
        reviews: 15, 
        sold: '20+' 
    },
    { 
        id: 'humadity-meter', 
        title: 'HUMADITY METER', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://m.media-amazon.com/images/I/7153Agb-juL._AC_UF894,1000_QL80_.jpg', 
        desc: 'The Digital Humidity Meter is a professional thermo-hygrometer that accurately measures temperature and relative humidity with ±2% RH and ±0.5°C precision. Essential for warehouses, data centers, museums, greenhouses, laboratories, and HVAC monitoring. Large LCD display with min/max memory, dew point calculation, and alarm function. Battery powered with auto shut-off. Wall-mountable or tabletop use. Includes calibration certificate. Compact and lightweight design. Perfect for maintaining optimal environmental conditions to prevent mold, corrosion, and equipment damage. Data logging version also available.', 
        tagsLine: 'Tags: Humidity Meter, Thermo Hygrometer, Digital Humidity, Temperature Meter, Warehouse Monitoring, Data Center Sensor, Museum Environment, Greenhouse Meter, Laboratory Tool, HVAC Monitoring, Dew Point Calculator, Min Max Memory, Alarm Function, Calibration Certificate, Wall Mountable, Battery Powered, Mold Prevention, Corrosion Control',
        tags: ["Humidity Meter", "Thermo Hygrometer", "Digital Humidity", "Temperature Meter", "Warehouse Monitoring", "Data Center Sensor", "Museum Environment", "Greenhouse Meter", "Laboratory Tool", "HVAC Monitoring", "Dew Point Calculator", "Min Max Memory", "Alarm Function"],
        rating: 4.3, 
        reviews: 45, 
        sold: '60+' 
    },
    { 
        id: 'laser-detector', 
        title: 'Laser detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'http://quartzcomponents.com/cdn/shop/articles/Laser-Security-System.jpg?v=1670586202', 
        desc: 'The Laser Security System is a high-precision invisible laser beam perimeter protection device that detects intrusions instantly. Ideal for homes, warehouses, farms, and industrial perimeters. Uses 4-8 beams with 100-300 meter range. Features alarm output, weatherproof housing, and easy alignment. Compatible with any existing alarm panel. False alarm free with dual-beam technology. Solar-powered option available. Quick installation with no wiring between transmitter and receiver. Perfect for protecting large open areas cost-effectively.', 
        tagsLine: 'Tags: Laser Detector, Laser Security System, Perimeter Protection, Invisible Beam, Intrusion Detection, Home Security, Warehouse Alarm, Farm Security, Industrial Perimeter, 300 Meter Range, Dual Beam, Weatherproof, Solar Powered, Alarm Output, Easy Alignment',
        tags: ["Laser Detector", "Laser Security System", "Perimeter Protection", "Invisible Beam", "Intrusion Detection", "Home Security", "Warehouse Alarm", "Farm Security", "Industrial Perimeter", "300 Meter Range", "Dual Beam", "Weatherproof"],
        rating: 4.6, 
        reviews: 30, 
        sold: '35+' 
    },
    { 
        id: 'lux-meters', 
        title: 'Lux meters', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://sensing.konicaminolta.us/wp-content/uploads/measuring-light-intensity-using-a-lux-meter-99977xj82w.png', 
        desc: 'The Digital Lux Meter is a professional light intensity measurement instrument used in photography, film production, warehouses, offices, schools, and greenhouses. Measures 0-200,000 Lux with high accuracy. Features data hold, max/min, and auto ranging. Large LCD with backlight. Includes calibration certificate and carrying case. Essential for maintaining proper lighting levels for safety, productivity, and plant growth. USB data logging version available for long-term monitoring.', 
        tagsLine: 'Tags: Lux Meter, Light Intensity Meter, Digital Lux, Photography Tool, Film Production, Warehouse Lighting, Office Lighting, School Safety, Greenhouse Meter, Data Hold, Max Min Function, Auto Ranging, Backlit LCD, Calibration Certificate',
        tags: ["Lux Meter", "Light Intensity Meter", "Digital Lux", "Photography Tool", "Film Production", "Warehouse Lighting", "Office Lighting", "School Safety", "Greenhouse Meter", "Data Hold", "Max Min Function"],
        rating: 4.5, 
        reviews: 67, 
        sold: '80+' 
    },
    { 
        id: 'metal-detector', 
        title: 'Metal Detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://i.ytimg.com/vi/5-5zZYiREe4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwx789iCvvFPrY8U1erlScBuzKjQ', 
        desc: 'The Handheld & Walk-Through Metal Detector is a dual-purpose security screening device used at airports, malls, schools, events, and courthouses. Detects ferrous and non-ferrous metals with adjustable sensitivity. Features audio-visual alarms, vibration mode, and rechargeable battery. Lightweight and ergonomic design. Walk-through version includes 6-zone detection and traffic lights. Both models are CE certified and used by thousands of security agencies worldwide. Easy to operate with one-button calibration.', 
        tagsLine: 'Tags: Metal Detector, Handheld Metal, Walk Through Gate, Security Screening, Airport Security, Mall Security, School Safety, Event Security, Adjustable Sensitivity, Audio Visual Alarm, Rechargeable Battery, 6 Zone Detection, CE Certified, Ferrous Non Ferrous',
        tags: ["Metal Detector", "Handheld Metal", "Walk Through Gate", "Security Screening", "Airport Security", "Mall Security", "School Safety", "Event Security", "Adjustable Sensitivity", "Audio Visual Alarm", "Rechargeable Battery", "6 Zone Detection"],
        rating: 4.7, 
        reviews: 234, 
        sold: '300+' 
    },
    { 
        id: 'multi-gas-detector', 
        title: 'MULTI GAS DETECTOR', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://m.media-amazon.com/images/I/71dkfGjwOBL.jpg', 
        desc: 'The Multi-Gas Detector simultaneously monitors O2, LEL, CO, and H2S with high-precision sensors. Designed for confined spaces, oil & gas, mining, firefighting, and industrial safety. Features pump option, data logging, bright alarm lights, and 24-hour battery. Rugged IP67 housing. Includes calibration kit and carrying case. Bluetooth connectivity for real-time monitoring via mobile app. Meets OSHA and ATEX standards. Essential life-saving device for hazardous environments.', 
        tagsLine: 'Tags: Multi Gas Detector, 4 Gas Monitor, Confined Space, Oil Gas Safety, Mining Detector, Firefighting Tool, Industrial Safety, O2 LEL CO H2S, Data Logging, Pump Option, IP67 Housing, ATEX Certified, OSHA Compliant, Bluetooth App, Calibration Kit',
        tags: ["Multi Gas Detector", "4 Gas Monitor", "Confined Space", "Oil Gas Safety", "Mining Detector", "Firefighting Tool", "Industrial Safety", "O2 LEL CO H2S", "Data Logging", "Pump Option", "IP67 Housing", "ATEX Certified"],
        rating: 4.8, 
        reviews: 89, 
        sold: '100+' 
    },
    { 
        id: 'natural-gas-detector', 
        title: 'Natural Gas Detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'http://www.forensicsdetectors.com/cdn/shop/articles/gas_leak_detector_2_520x500_520x500_520x500_520x500_66caa047-3157-40ba-ac49-caf178c64475.jpg?v=1746048970', 
        desc: 'The Natural Gas Leak Detector is a highly sensitive device that detects methane, propane, and LPG leaks instantly with audible and visual alarms. Ideal for homes, kitchens, RV, boats, and commercial kitchens. Compact plug-in or battery model with 5-year sensor life. Adjustable sensitivity and test button. Meets UL and CE safety standards. Prevents explosions and carbon monoxide poisoning. Simple installation and low maintenance.', 
        tagsLine: 'Tags: Natural Gas Detector, Gas Leak Detector, Methane Detector, Propane Alarm, LPG Detector, Home Safety, Kitchen Safety, RV Gas Alarm, Boat Safety, Commercial Kitchen, Audible Visual Alarm, 5 Year Sensor, UL Certified, CE Certified',
        tags: ["Natural Gas Detector", "Gas Leak Detector", "Methane Detector", "Propane Alarm", "LPG Detector", "Home Safety", "Kitchen Safety", "RV Gas Alarm", "Boat Safety"],
        rating: 4.6, 
        reviews: 56, 
        sold: '70+' 
    },
    { 
        id: 'navigation', 
        title: 'Navigation ', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://i5.walmartimages.com/seo/GPS-Navigation-for-Car-GPS-Truck-GPS-for-Car-Arcon-7-Inch-Touch-Screen-16G-256M-Voice-Broadcast-Car-Navigation-System_f995b984-4774-4224-8852-3fd5c965ec27.95988e01d9c4c3076836910c25892bb3.jpeg', 
        desc: 'The Security Navigation GPS Device is a rugged 7-inch touchscreen system designed for vehicles, trucks, and security patrols. Features real-time tracking, voice guidance, offline maps, and anti-theft alerts. Supports fleet management software with live location sharing. 16GB storage, 256MB RAM, and 3000mAh battery backup. Ideal for security companies, delivery fleets, and emergency vehicles. Waterproof and shockproof design.', 
        tagsLine: 'Tags: Navigation GPS, Car GPS, Truck Navigation, Security GPS, Fleet Tracking, Real Time Tracking, Offline Maps, Voice Guidance, Anti Theft Alert, 7 Inch Touchscreen, Fleet Management, Waterproof GPS, Shockproof Device',
        tags: ["Navigation GPS", "Car GPS", "Truck Navigation", "Security GPS", "Fleet Tracking", "Real Time Tracking", "Offline Maps", "Voice Guidance"],
        rating: 4.4, 
        reviews: 23, 
        sold: '30+' 
    },
    { 
        id: 'security-detector', 
        title: 'Security Detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://www.directorthocare.com/wp-content/uploads/2018/12/airport-metal-detectors.jpg', 
        desc: 'The General Security Detector is a versatile handheld or walk-through screening device used for weapons, metals, and contraband detection at airports, stadiums, and public venues. High sensitivity with low false alarms. Easy operation and maintenance. CE certified and widely trusted by security professionals.', 
        tagsLine: 'Tags: Security Detector, General Security, Handheld Detector, Walk Through, Airport Screening, Stadium Security, Public Venue, Weapons Detection, Low False Alarm, CE Certified',
        tags: ["Security Detector", "General Security", "Handheld Detector", "Walk Through", "Airport Screening", "Stadium Security"],
        rating: 4.5, 
        reviews: 45, 
        sold: '60+' 
    },
    { 
        id: 'security-metal-detector', 
        title: 'Security Metal Detector', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://sesameportastile.com/wp-content/uploads/2025/10/2P7A6421-copy.png', 
        desc: 'The Advanced Security Metal Detector offers 33-zone detection with pinpoint accuracy for high-security locations. Features 7-inch color display, remote control, and network connectivity. Perfect for prisons, courthouses, and VIP events. Meets international aviation standards.', 
        tagsLine: 'Tags: Security Metal Detector, Advanced Metal, 33 Zone Detection, Pinpoint Accuracy, Prison Security, Courthouse Gate, VIP Event, 7 Inch Display, Network Connectivity, Aviation Standard',
        tags: ["Security Metal Detector", "Advanced Metal", "33 Zone Detection", "Pinpoint Accuracy", "Prison Security", "Courthouse Gate"],
        rating: 4.7, 
        reviews: 123, 
        sold: '150+' 
    },
    { 
        id: 'sound-noise-level-meter', 
        title: 'Sound / Noise Level Meter', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://media.fluke.com/260e33a7-a93f-4124-8281-b108002bdeae_product_slideshow_main.jpg', 
        desc: 'The Noise Level Meter measures sound from 30-130 dB with A/C weighting and fast/slow response. Used in factories, offices, schools, and construction sites for OSHA compliance. Data logging, USB output, and tripod mount included. Backlit LCD and auto power off.', 
        tagsLine: 'Tags: Noise Level Meter, Sound Meter, Decibel Meter, OSHA Compliance, Factory Monitoring, Office Noise, School Safety, Construction Tool, Data Logging, USB Output',
        tags: ["Noise Level Meter", "Sound Meter", "Decibel Meter", "OSHA Compliance", "Factory Monitoring", "Office Noise"],
        rating: 4.4, 
        reviews: 78, 
        sold: '90+' 
    },
    { 
        id: 'tri-pode-turnstile', 
        title: 'Tri pode turnstile', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://static.palizafzar.com/media/article_images/c5ebdb9c8ec1495db1d28b035a6bafcd.jpg', 
        desc: 'The Tripod Turnstile Gate provides reliable pedestrian access control with anti-tailgating technology. Ideal for offices, stadiums, and metro stations. Stainless steel construction, 30 persons/min flow rate, and integration with any access control system. Drop-arm function for emergencies.', 
        tagsLine: 'Tags: Tripod Turnstile, Turnstile Gate, Pedestrian Control, Anti Tailgating, Office Entry, Stadium Gate, Metro Station, Stainless Steel, 30 Persons Min, Drop Arm',
        tags: ["Tripod Turnstile", "Turnstile Gate", "Pedestrian Control", "Anti Tailgating", "Office Entry", "Stadium Gate"],
        rating: 4.6, 
        reviews: 67, 
        sold: '80+' 
    },
    { 
        id: 'tripod', 
        title: 'Tripod', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://m.media-amazon.com/images/I/6118NXwBZ4L._AC_UF894,1000_QL80_.jpg', 
        desc: 'The Security Tripod is a heavy-duty aluminum stand for mounting cameras, lights, or detectors. Adjustable height up to 2 meters, quick-release locks, and carrying bag. Stable on uneven surfaces with rubber feet. Ideal for temporary security setups and events.', 
        tagsLine: 'Tags: Security Tripod, Camera Stand, Aluminum Tripod, Adjustable Height, Event Equipment, Temporary Setup, Rubber Feet, Carrying Bag',
        tags: ["Security Tripod", "Camera Stand", "Aluminum Tripod", "Adjustable Height", "Event Equipment"],
        rating: 4.3, 
        reviews: 34, 
        sold: '50+' 
    },
    { 
        id: 'tyre-killers', 
        title: 'Tyre Killers', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://smartpower.co.in/wp-content/uploads/2022/09/Tyre-Killer-38-1200x900.jpg', 
        desc: 'The Tyre Killer Barrier is a spike-based vehicle stopping system for high-security entrances. Hydraulic or manual operation, 3-6 meter length, and crash-rated design. Stops vehicles instantly while allowing authorized passage. IP67 rated and remote controllable.', 
        tagsLine: 'Tags: Tyre Killers, Spike Barrier, Vehicle Stopper, Hydraulic Tyre Killer, High Security Gate, Crash Rated, Remote Control, IP67 Rated',
        tags: ["Tyre Killers", "Spike Barrier", "Vehicle Stopper", "Hydraulic Tyre Killer", "High Security Gate"],
        rating: 4.8, 
        reviews: 56, 
        sold: '60+' 
    },
    { 
        id: 'under-vehicle-inspection', 
        title: 'Under Vehicle Inspection', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://cdn.globalso.com/hewei-defense/%E5%9B%BE%E7%89%8719.png', 
        desc: 'The Under Vehicle Inspection System (UVIS) uses high-resolution cameras and mirrors to scan the underside of vehicles for hidden threats. Fixed or portable models with LED lighting and recording. Essential for embassies, military bases, and VIP entrances. Real-time video and image storage.', 
        tagsLine: 'Tags: Under Vehicle Inspection, UVIS, Vehicle Search, Hidden Threat, Camera System, Embassy Security, Military Base, VIP Entrance, Real Time Video',
        tags: ["Under Vehicle Inspection", "UVIS", "Vehicle Search", "Hidden Threat", "Camera System"],
        rating: 4.9, 
        reviews: 89, 
        sold: '100+' 
    },
    { 
        id: 'under-vehicle-security-system', 
        title: 'Under Vehicle Security system', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://loyalty-secu.com/wp-content/uploads/2022/01/Fixed-Under-Vehicle-Surveillance-Scanning-System.jpg', 
        desc: 'The Fixed Under Vehicle Surveillance Scanning System (UVSS) provides 360° high-definition imaging of vehicle undercarriage. AI-based threat detection, license plate recognition, and database integration. Used at borders, ports, and critical infrastructure. Rugged and weatherproof.', 
        tagsLine: 'Tags: Under Vehicle Security, UVSS, Fixed Scanner, 360 Degree Imaging, AI Threat Detection, License Plate, Border Security, Port Security, Critical Infrastructure',
        tags: ["Under Vehicle Security", "UVSS", "Fixed Scanner", "360 Degree Imaging", "AI Threat Detection"],
        rating: 4.9, 
        reviews: 78, 
        sold: '90+' 
    },
    { 
        id: 'walk-through-gate', 
        title: 'Walk Through Gate', 
        price: 'Contact for Price', 
        originalPrice: null, 
        image: 'https://cdn-dflng.nitrocdn.com/xvNlKkpnlXqajMLgIGyABpSzvlOmgVwg/assets/images/optimized/rev-18de0f9/www.daosafe.com/wp-content/uploads/2020/06/DSSP516DS7300-1-1024x576.jpg', 
        desc: 'The Walk Through Metal Detector Gate is a 6-zone advanced screening system with 100 levels of sensitivity. Detects weapons and small metal objects with pinpoint accuracy. Used in airports, schools, and public buildings. Easy setup with remote control and self-diagnostic function.', 
        tagsLine: 'Tags: Walk Through Gate, Metal Detector Gate, 6 Zone Gate, Airport Screening, School Security, Public Building, 100 Sensitivity Levels, Pinpoint Accuracy, Remote Control',
        tags: ["Walk Through Gate", "Metal Detector Gate", "6 Zone Gate", "Airport Screening", "School Security"],
        rating: 4.8, 
        reviews: 234, 
        sold: '300+' 
    },
   ,
  
  { 
    id: 'replacement-carbon-monoxide-co-sensor', 
    title: 'Replacement Carbon Monoxide (CO) Sensor', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://cdn11.bigcommerce.com/s-ur73dgttco/images/stencil/1280x1280/products/1778/1833/Gold-Replacement-Sensor-CO__06849.1712173850.jpg?c=1',
    desc: 'Replacement CO Sensor for BW series gas detectors (MicroClip, Max XT II, etc.). High-precision electrochemical sensor with 2-year life. Easy plug-and-play installation. Restores full functionality to your multi-gas monitor. Factory calibrated and ready to use. Essential spare for safety compliance.', 
    tagsLine: 'Tags: Replacement CO Sensor, Carbon Monoxide Sensor, BW Series Sensor, MicroClip Sensor, Max XT II, Electrochemical Sensor, Gas Detector Part, Safety Spare, Plug And Play',
    tags: ["Replacement CO Sensor", "Carbon Monoxide Sensor", "BW Series Sensor", "MicroClip Sensor", "Max XT II", "Electrochemical Sensor"],
    rating: 4.7, 
    reviews: 80, 
    sold: '400+' 
  },
  { 
    id: 'replacement-hydrogen-sulfide-h2s-sensor', 
    title: 'Replacement Hydrogen Sulfide (H2S) Sensor', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://res.cloudinary.com/iwh/image/upload/q_auto,g_center/w_1024,h_768,c_lpad/assets/1/26/BWSR-H-MC_Main_Image.jpg',
    desc: 'Replacement H2S Sensor compatible with all BW multi-gas detectors. Long-life electrochemical cell. Quick calibration and accurate detection of hydrogen sulfide. Critical spare part for confined space and industrial monitoring. Ships with calibration certificate.', 
    tagsLine: 'Tags: Replacement H2S Sensor, Hydrogen Sulfide Sensor, BW Gas Detector, Electrochemical Cell, Confined Space, Industrial Safety, Calibration Certificate',
    tags: ["Replacement H2S Sensor", "Hydrogen Sulfide Sensor", "BW Gas Detector", "Electrochemical Cell", "Confined Space"],
    rating: 4.8, 
    reviews: 90, 
    sold: '450+' 
  },
  { 
    id: 'replacement-combustible-lel-sensor', 
    title: 'Replacement Combustible (LEL) Sensor', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://res.cloudinary.com/iwh/image/upload/q_auto,g_center/w_1024,h_768,c_lpad/assets/1/26/BW_SR-W-MP75C_Image.jpg',
    desc: 'Replacement LEL Combustible Gas Sensor for BW monitors. Catalytic bead technology with high stability. Detects a wide range of flammable gases. Direct replacement with no tools required. Extends life of your gas detector significantly.', 
    tagsLine: 'Tags: Replacement LEL Sensor, Combustible Sensor, BW Monitor, Catalytic Bead, Flammable Gas, Direct Replacement, Industrial Safety',
    tags: ["Replacement LEL Sensor", "Combustible Sensor", "BW Monitor", "Catalytic Bead", "Flammable Gas"],
    rating: 4.7, 
    reviews: 70, 
    sold: '350+' 
  },
  { 
    id: 'replacement-oxygen-o2-sensor', 
    title: 'Replacement Oxygen (O2) Sensor', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://m.media-amazon.com/images/I/41WUeEz4djL._AC_UF894,1000_QL80_.jpg',
    desc: 'Replacement O2 Sensor for BW GasAlert series. Galvanic cell technology with 2-year lifespan. Accurate oxygen level monitoring for confined spaces. Easy swap installation. Comes with fresh date code and calibration sticker.', 
    tagsLine: 'Tags: Replacement O2 Sensor, Oxygen Sensor, BW GasAlert, Galvanic Cell, Confined Space, 2 Year Life, Easy Swap',
    tags: ["Replacement O2 Sensor", "Oxygen Sensor", "BW GasAlert", "Galvanic Cell", "Confined Space"],
    rating: 4.6, 
    reviews: 100, 
    sold: '500+' 
  },
  { 
    id: 'bw-clip-2-year-single-gas-detector', 
    title: 'BW Clip 2 Year Single Gas Detector', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://www.instrumart.com/assets/BWClipRTmainimage-Square.jpg?width=660&height=495&scale=upscalecanvas&bgcolor=fff',
    desc: 'Maintenance-free 2-year single gas detector for H2S, CO, O2 or SO2. No calibration or sensor replacement needed. Compact and lightweight with visual, vibrating, and audible alarms. Ideal for personal safety in oil & gas, utilities, and manufacturing. Ships ready to use.', 
    tagsLine: 'Tags: BW Clip 2 Year, Single Gas Detector, Maintenance Free, H2S CO O2 SO2, No Calibration, Personal Safety, Oil Gas, Utilities, Audible Alarm',
    tags: ["BW Clip 2 Year", "Single Gas Detector", "Maintenance Free", "H2S CO O2 SO2", "No Calibration"],
    rating: 4.8, 
    reviews: 200, 
    sold: '1000+' 
  },
  { 
    id: 'bw-clip-3-year-single-gas-detector', 
    title: 'BW Clip 3 Year Single Gas Detector', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://www.instrumart.com/assets/BWClipRTmainimage-Square.jpg?width=660&height=495&scale=upscalecanvas&bgcolor=fff',
    desc: 'Maintenance-free 3-year single gas detector for reliable monitoring. Longer battery life and extended warranty. Same trusted Honeywell quality with enhanced durability. Perfect for long-term deployment in fixed locations or personal use.', 
    tagsLine: 'Tags: BW Clip 3 Year, Single Gas Detector, 3 Year Life, Maintenance Free, Honeywell Quality, Long Term Monitoring',
    tags: ["BW Clip 3 Year", "Single Gas Detector", "3 Year Life", "Maintenance Free"],
    rating: 4.9, 
    reviews: 180, 
    sold: '900+' 
  },
  { 
    id: 'gasalertmax-xt-ii-multi-gas-detector', 
    title: 'GasAlertMax XT II Multi Gas Detector', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://cdn11.bigcommerce.com/s-e163lt99/images/stencil/1280x1280/products/12985/54596/MAX_XT__68053.1650563610.jpg?c=2',
    desc: '4-gas detector with integrated sampling pump for confined space entry. Monitors O2, LEL, CO, H2S with smart sensor technology. One-button operation, data logging, and IntelliFlash status indicator. Rugged design for tough environments.', 
    tagsLine: 'Tags: GasAlertMax XT II, Multi Gas Detector, Integrated Pump, Confined Space, 4 Gas Monitor, Smart Sensor, Data Logging',
    tags: ["GasAlertMax XT II", "Multi Gas Detector", "Integrated Pump", "Confined Space", "4 Gas Monitor"],
    rating: 4.8, 
    reviews: 150, 
    sold: '700+' 
  },
  { 
    id: 'bw-solo-single-gas-detector', 
    title: 'BW Solo Single-Gas Detector', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://www.instrumart.com/assets/BW-Solo-360.jpg?width=660&height=495&scale=upscalecanvas&bgcolor=fff',
    desc: 'Easy-to-service single-gas detector with Bluetooth connectivity. Wireless data download and real-time alerts via Honeywell Safety Communicator app. Multiple gas options and long battery life. Perfect for personal monitoring.', 
    tagsLine: 'Tags: BW Solo, Single Gas Detector, Bluetooth Connectivity, Wireless Data, Real Time Alerts, Honeywell App',
    tags: ["BW Solo", "Single Gas Detector", "Bluetooth Connectivity", "Wireless Data"],
    rating: 4.7, 
    reviews: 120, 
    sold: '600+' 
  },
  { 
    id: 'bw-ultra-portable-multi-gas-detector-with-pump', 
    title: 'BW Ultra Portable Multi-Gas Detector with Pump', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://www.instrumart.com/assets/Honeywell-BW-Ultra-Multi-Gas-Detector-360.jpg?width=660&height=495&scale=upscalecanvas&bgcolor=fff',
    desc: '5-gas detector designed for confined spaces with hole-watch mode. Large color display, advanced sensors, and wireless connectivity. Pump for remote sampling. Ideal for industrial hygiene and emergency response.', 
    tagsLine: 'Tags: BW Ultra, 5 Gas Detector, Confined Space, Hole Watch Mode, Color Display, Wireless Connectivity',
    tags: ["BW Ultra", "5 Gas Detector", "Confined Space", "Hole Watch Mode"],
    rating: 4.9, 
    reviews: 110, 
    sold: '500+' 
  },
  { 
    id: 'gasalert-extreme-single-gas-detector', 
    title: 'GasAlert Extreme Single Gas Detector', 
    price: 'Contact for Price', 
    originalPrice: null, 
    image: 'https://www.instrumart.com/assets/bw-gaxt-360.jpg?width=660&height=495&scale=upscalecanvas&bgcolor=fff',
    desc: 'Rugged single-gas detector with datalogging for harsh environments. Multiple gas options, IP67 rating, and long battery life. Simple one-button operation with easy-to-read display. Trusted choice for utilities and manufacturing.', 
    tagsLine: 'Tags: GasAlert Extreme, Single Gas Detector, Datalogging, Harsh Environment, IP67 Rating, Utilities Safety',
    tags: ["GasAlert Extreme", "Single Gas Detector", "Datalogging", "Harsh Environment"],
    rating: 4.7, 
    reviews: 140, 
    sold: '650+' 
  }
],

   'Rescue Equipment': [
  {
    id: 'back-pack-life-saver',
    title: 'Back pack Life saver',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://static.grainger.com/rp/s/is/image/Grainger/54ZJ80_AS01',
    desc: 'The Backpack Life Saver is a rugged, portable emergency rescue backpack built for first responders and search teams.\n' +
          'Made from durable water-resistant fabric with reinforced stitching for tough field use.\n' +
          'Features multiple compartments to organize medical supplies, ropes, tools, and PPE.\n' +
          'Includes reflective strips and MOLLE webbing for visibility and extra attachments.\n' +
          'Ergonomic straps and belt ensure comfort during long carries or rapid movement.\n' +
          'Quick-access pockets hold trauma shears, gloves, flashlight, and essentials.\n' +
          'Perfect for urban search, swiftwater rescue, wilderness SAR, and vehicle incidents.\n' +
          'Lightweight design allows fast deployment from vehicles or helicopters.\n' +
          'Bright color options boost on-scene visibility in low-light conditions.\n' +
          'Essential gear for fire, police, EMS, and volunteer rescue organizations.',
    rating: 4.7,
    reviews: 67,
    sold: '80+',
    tags: [
      'rescue backpack', 'emergency kit bag', 'life saver pack', 'first responder backpack', 'SAR backpack',
      'trauma response bag', 'portable rescue gear', 'urban search kit', 'swiftwater rescue pack', 'MOLLE rescue bag',
      'high visibility backpack', 'field rescue kit', 'collapse access bag', 'wilderness SAR gear', 'tactical rescue pack',
      'rapid response backpack', 'EMS support bag', 'vehicle extrication kit', 'helicopter rescue pack', 'compact emergency bag',
      'rescue team essentials', 'outdoor search pack', 'medical rescue backpack'
    ]
  },
  {
    id: 'boat-for-rescue-squads',
    title: 'Boat For Rescue Squads',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://theoneboat.com/wp-content/uploads/2014/03/r_one_i_series_rs_1080x608.jpg',
    desc: 'This high-performance Rescue Squad Boat is designed for swiftwater, flood, and coastal emergency operations.\n' +
          'Built with strong marine-grade hull for durability and lightweight handling.\n' +
          'Powered by reliable outboard engines for fast response in challenging waters.\n' +
          'Self-bailing deck and non-slip surfaces keep crew safe during rescues.\n' +
          'Includes searchlights, VHF radio, siren, and PA system for coordination.\n' +
          'Spacious layout supports stretchers, multiple rescuers, and medical gear.\n' +
          'Tow post and bow roller aid in victim recovery and vessel towing.\n' +
          'High stability hull reduces risk in rough or fast-moving water.\n' +
          'Storage for life rings, throw bags, AED, and trauma supplies.\n' +
          'Ideal for fire departments, coast guard, and disaster response teams.',
    rating: 5,
    reviews: 23,
    sold: '10+',
    tags: [
      'rescue boat', 'swiftwater rescue vessel', 'flood rescue boat', 'water emergency craft', 'marine SAR boat',
      'search and rescue boat', 'fire department vessel', 'coastal rescue boat', 'river rescue platform', 'high-speed rescue boat',
      'victim recovery boat', 'mass casualty vessel', 'disaster response boat', 'surface water rescue', 'inflatable rescue boat',
      'swiftwater team gear', 'emergency boat', 'flood operations boat', 'rescue squad watercraft', 'boat for first responders',
      'tactical rescue vessel', 'water rescue platform'
    ]
  },
  {
    id: 'chainsaw',
    title: 'Chainsaw',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://tempest.us.com/wp-content/uploads/2019/06/572_HD-e1565990354708-600x450.jpg',
    desc: 'This specialized Rescue Chainsaw is built for emergency cutting in vehicle extrication and structural collapse.\n' +
          'High-torque engine delivers powerful performance with reduced vibration.\n' +
          'Carbide-tipped rescue chain cuts wood, metal, drywall, and light steel effectively.\n' +
          'Quick-stop brake and chain catcher enhance operator safety.\n' +
          'Water-resistant design ensures reliability in wet or rainy conditions.\n' +
          'Tool-less tensioner allows fast chain adjustments on scene.\n' +
          'Large fuel tank supports extended cutting during long operations.\n' +
          'Ergonomic handles reduce fatigue in awkward cutting positions.\n' +
          'Widely used by technical rescue teams and heavy rescue squads.\n' +
          'Essential for creating access in pinned victims or collapsed buildings.',
    rating: 4.6,
    reviews: 134,
    sold: '150+',
    tags: [
      'rescue chainsaw', 'extrication chainsaw', 'emergency cutting tool', 'collapse rescue saw', 'vehicle extrication saw',
      'technical rescue chainsaw', 'firefighter chainsaw', 'carbide rescue chain', 'structural access tool', 'urban search saw',
      'heavy duty rescue chainsaw', 'disaster cutting tool', 'pinned victim chainsaw', 'building collapse saw', 'swiftwater chainsaw',
      'rescue team saw', 'emergency extrication gear', 'chainsaw for SAR', 'high-torque rescue saw', 'low-vibration chainsaw',
      'rescue cutting equipment'
    ]
  },
  {
    id: 'combi-tool-ct-5160',
    title: 'Combi Tool CT 5160',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.holmatro.com/app/uploads/2025/11/E0026205-27.jpg',
    desc: 'The Holmatro CT 5160 Combi Tool combines cutting and spreading in one powerful hydraulic rescue device.\n' +
          'Ideal for vehicle extrication, providing fast access to trapped victims.\n' +
          'High spreading force and wide jaw opening handle tough materials.\n' +
          'Ergonomic design with optimal grip reduces rescuer fatigue.\n' +
          'Quick connection technology allows rapid setup on scene.\n' +
          'Durable blades maintain sharpness through multiple operations.\n' +
          'Compact and lightweight for easy carrying and maneuverability.\n' +
          'Used by professional fire and rescue teams worldwide.\n' +
          'Reliable performance in extreme conditions and confined spaces.\n' +
          'Essential hydraulic tool for modern technical rescue operations.',
    rating: 5,
    reviews: 18,
    sold: '20+',
    tags: [
      'hydraulic combi tool', 'rescue combi tool', 'vehicle extrication tool', 'Holmatro CT 5160', 'cutting spreading tool',
      'emergency rescue tool', 'hydraulic rescue equipment', 'firefighter combi tool', 'technical rescue device', 'crash rescue tool',
      'jaws of life combi', 'extrication combi', 'hydraulic cutter spreader', 'rescue hydraulics', 'car accident rescue tool',
      'heavy rescue combi', 'confined space combi tool', 'professional rescue gear', 'Holmatro rescue tool', 'emergency hydraulics'
    ]
  },
  {
    id: 'combi-tool-gct-5160-evo-3',
    title: 'Combi Tool GCT 5160 EVO 3',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://lexipol.brightspotcdn.com/dims4/default/9dde48a/2147483647/strip/false/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fk1-prod-lexipol.s3.us-east-2.amazonaws.com%2Fbrightspot%2F76%2Fe0%2F8c57b14b4b7c880c7a1a1d8ed3cb%2Fc0dfe0cd311d4ddf8b4de0eed10e7fab%2Fposter.jpg',
    desc: 'Advanced GCT 5160 EVO 3 Combi Tool from Holmatro offers next-level performance in rescue operations.\n' +
          'Enhanced battery or corded power with superior cutting and spreading force.\n' +
          'Innovative jaw geometry improves grip on modern vehicle structures.\n' +
          'Green indicator shows optimal battery status for uninterrupted work.\n' +
          'Lightweight yet extremely powerful for extended rescue missions.\n' +
          'Ergonomic controls and balanced design reduce operator strain.\n' +
          'Fast cycle times speed up victim extrication in critical situations.\n' +
          'Proven in real-world crashes and heavy rescue scenarios.\n' +
          'Durable construction withstands harsh emergency environments.\n' +
          'Top choice for advanced fire departments and technical teams.',
    rating: 5,
    reviews: 20,
    sold: '25+',
    tags: [
      'advanced combi tool', 'GCT 5160 EVO 3', 'Holmatro EVO combi', 'battery rescue tool', 'next-gen extrication tool',
      'hydraulic combi EVO', 'vehicle rescue combi', 'emergency cutting tool', 'spreading rescue device', 'technical rescue EVO',
      'fire rescue hydraulics', 'crash extrication tool', 'modern vehicle rescue', 'high-force combi tool', 'professional EVO tool',
      'rescue power tool', 'Holmatro advanced combi', 'battery powered rescue', 'heavy duty combi tool', 'emergency EVO gear'
    ]
  },
  {
    id: 'combi-tool-hct-4120',
    title: 'Combi Tool HCT 4120',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://firesafecambodia.com/wp-content/uploads/2014/03/HCT1A.jpg',
    desc: 'Compact HCT 4120 Combi Tool delivers reliable cutting and spreading in a lightweight package.\n' +
          'Perfect for quick interventions in tight spaces or rapid response.\n' +
          'High performance blades cut through vehicle pillars and roofs efficiently.\n' +
          'Ergonomic handles provide excellent control during operations.\n' +
          'Quick-connect fittings for fast hydraulic hose attachment.\n' +
          'Ideal for urban rescue, small-team operations, and confined areas.\n' +
          'Durable build quality ensures long service in demanding conditions.\n' +
          'Trusted by rescue professionals for everyday emergency use.\n' +
          'Balances power and portability for versatile rescue tasks.\n' +
          'Essential tool for fire services and technical rescue units.',
    rating: 4.9,
    reviews: 15,
    sold: '18+',
    tags: [
      'compact combi tool', 'HCT 4120', 'lightweight rescue tool', 'hydraulic combi compact', 'quick rescue device',
      'vehicle extrication compact', 'emergency combi tool', 'tight space rescue', 'firefighter compact tool', 'portable hydraulics',
      'rapid response combi', 'confined rescue tool', 'cutting spreading compact', 'rescue hydraulics compact', 'urban rescue gear',
      'small team combi', 'professional compact tool', 'emergency cutting compact', 'rescue team essentials'
    ]
  },
  {
    id: 'concrete-crusher-cc-23',
    title: 'Concrete Crusher CC 23',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.holmatro.com/app/uploads/2025/12/E0018440-1-1024x665.jpg',
    desc: 'The CC 23 Concrete Crusher powerfully breaks reinforced concrete in collapse rescue scenarios.\n' +
          'High crushing force opens access through slabs, walls, and beams.\n' +
          'Sharp jaws penetrate and fracture concrete efficiently.\n' +
          'Hydraulic power provides controlled, precise operation.\n' +
          'Compact design allows use in tight or confined spaces.\n' +
          'Essential for urban search and rescue after earthquakes or explosions.\n' +
          'Durable construction handles heavy-duty debris removal.\n' +
          'Quick setup for fast deployment by rescue teams.\n' +
          'Improves victim access in structural collapse incidents.\n' +
          'Trusted hydraulic tool for heavy technical rescue.',
    rating: 4.8,
    reviews: 12,
    sold: '15+',
    tags: [
      'concrete crusher', 'CC 23 crusher', 'rescue concrete breaker', 'structural collapse tool', 'hydraulic concrete crusher',
      'urban search crusher', 'earthquake rescue tool', 'debris removal crusher', 'reinforced concrete tool', 'collapse access device',
      'heavy rescue crusher', 'building collapse gear', 'concrete breaking tool', 'rescue hydraulics crusher', 'technical rescue crusher',
      'disaster response tool', 'concrete jaw crusher', 'rescue team crusher'
    ]
  },
  {
    id: 'concrete-saw',
    title: 'Concrete Saw',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://shop.broco-rankin.com/cdn/shop/products/Mini-Saw-Blade-Group.jpg?v=1681280783',
    desc: 'This Rescue Concrete Saw cuts through reinforced concrete, masonry, and metal quickly.\n' +
          'High-powered engine handles demanding rescue cutting tasks.\n' +
          'Diamond blade ensures clean, fast cuts in hard materials.\n' +
          'Water feed system reduces dust and cools blade during use.\n' +
          'Ergonomic design improves control in overhead or floor cuts.\n' +
          'Used in collapse rescue to create access openings.\n' +
          'Portable and rugged for field deployment.\n' +
          'Essential for structural breaching in emergencies.\n' +
          'Reliable performance in wet or dusty conditions.\n' +
          'Key tool for technical rescue and disaster response.',
    rating: 4.7,
    reviews: 34,
    sold: '40+',
    tags: [
      'concrete rescue saw', 'rescue concrete cutter', 'diamond blade saw', 'collapse rescue saw', 'structural cutting saw',
      'emergency concrete saw', 'masonry rescue saw', 'technical rescue cutter', 'building access saw', 'disaster saw',
      'hydraulic concrete saw', 'rescue team saw', 'concrete breaching tool', 'urban search saw', 'heavy rescue cutter',
      'rescue cutting saw', 'reinforced concrete saw', 'field rescue saw'
    ]
  },
  {
    id: 'confined-space-rescue-team-kit',
    title: 'CONFINED SPACE RESCUE TEAM KIT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://rescueresponse.com/wp-content/uploads/2023/07/50130X_Confined_Space_Rigging_Kit_1-1024x791-1.jpg',
    desc: 'Complete Confined Space Rescue Team Kit includes all essential rigging and safety gear.\n' +
          'Tripod, winch, harnesses, ropes, and carabiners for safe entry and extraction.\n' +
          'Designed for manholes, tanks, silos, and underground spaces.\n' +
          'High-strength components meet strict rescue standards.\n' +
          'Portable and organized for rapid team deployment.\n' +
          'Includes communication and lighting accessories.\n' +
          'Critical for industrial, municipal, and emergency services.\n' +
          'Ensures rescuer and victim safety in IDLH environments.\n' +
          'Customizable for specific confined space hazards.\n' +
          'Trusted solution for professional confined space rescue.',
    rating: 5,
    reviews: 10,
    sold: '12+',
    tags: [
      'confined space kit', 'rescue rigging kit', 'manhole rescue gear', 'tripod rescue kit', 'confined space harness',
      'industrial rescue kit', 'entry rescue equipment', 'IDLH rescue gear', 'silo rescue kit', 'underground rescue',
      'confined space tripod', 'winch rescue kit', 'safety rescue kit', 'municipal rescue gear', 'team rescue package',
      'confined space extraction', 'rescue rope kit', 'professional confined kit'
    ]
  },
  {
    id: 'covert-radio-vest',
    title: 'covert radio vest',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/QClpNqzt0AY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA-Lpg-Oj4Gko17UBusTnnqGZ9-dw',
    desc: 'The Covert Radio Vest provides discreet communication for tactical and rescue operations.\n' +
          'Hidden pockets securely hold radios, earpieces, and backup batteries.\n' +
          'Low-profile design blends with civilian clothing for undercover work.\n' +
          'Quick-access microphone and PTT buttons for hands-free use.\n' +
          'Adjustable fit ensures comfort during extended missions.\n' +
          'Durable, lightweight materials resist wear in field conditions.\n' +
          'Used by special operations, SWAT, and search teams.\n' +
          'Enhances team coordination without visible equipment.\n' +
          'Ideal for hostage rescue, surveillance, and covert SAR.\n' +
          'Essential gear for discreet emergency communication.',
    rating: 4.6,
    reviews: 23,
    sold: '30+',
    tags: [
      'covert radio vest', 'tactical communication vest', 'discreet radio gear', 'undercover vest', 'hidden radio pouch',
      'rescue comms vest', 'low profile vest', 'PTT vest', 'special ops vest', 'SWAT communication', 'covert SAR gear',
      'emergency radio vest', 'tactical vest radio', 'discreet comms', 'rescue team vest', 'hidden microphone vest',
      'covert operations gear', 'surveillance vest', 'professional covert vest'
    ]
  },
  {
    id: 'cutter-cu-5050-gp',
    title: 'Cutter CU 5050 GP',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://dkv.biz.vn/public/products/larger/may-cat-thep-thuy-luc-holmatro-cutter-cu-5050-gp1605164496.png',
    desc: 'Powerful CU 5050 GP Cutter slices through vehicle frames, posts, and heavy steel.\n' +
          'Wide jaw opening and high cutting force for tough extrications.\n' +
          'Sharp blades maintain performance on modern high-strength steel.\n' +
          'Ergonomic grip and balanced weight for precise control.\n' +
          'Quick hydraulic connection for fast setup.\n' +
          'Reliable in extreme rescue environments.\n' +
          'Used globally by fire and rescue services.\n' +
          'Essential for rapid victim access in crashes.\n' +
          'Durable construction for repeated heavy use.\n' +
          'Top-tier hydraulic cutter for professional teams.',
    rating: 4.9,
    reviews: 28,
    sold: '35+',
    tags: [
      'hydraulic cutter', 'CU 5050 GP', 'vehicle cutter', 'Holmatro cutter', 'extrication cutter',
      'rescue cutting tool', 'heavy steel cutter', 'crash rescue cutter', 'firefighter cutter', 'technical cutter',
      'high force cutter', 'emergency cutter', 'car extrication cutter', 'rescue hydraulics cutter', 'professional cutter',
      'heavy rescue cutter', 'steel frame cutter', 'rescue team cutter'
    ]
  },
  {
    id: 'drill-unit',
    title: 'Drill Unit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.holmatro.com/app/uploads/2025/12/E0021323-1-1024x682.jpg',
    desc: 'The Rescue Drill Unit powers through metal, concrete, and composites in trapped situations.\n' +
          'High-torque motor for fast drilling in vehicle roofs or floors.\n' +
          'Various bit options for different materials and rescue needs.\n' +
          'Hydraulic or battery power for versatile use.\n' +
          'Compact design reaches confined or awkward areas.\n' +
          'Used to create relief holes or attachment points.\n' +
          'Essential for complex extrications and collapse access.\n' +
          'Durable and reliable under emergency stress.\n' +
          'Improves speed in victim disentanglement.\n' +
          'Key tool for advanced technical rescue squads.',
    rating: 4.5,
    reviews: 45,
    sold: '50+',
    tags: [
      'rescue drill', 'hydraulic drill unit', 'extrication drill', 'vehicle drill tool', 'rescue drilling unit',
      'technical rescue drill', 'concrete rescue drill', 'metal drilling rescue', 'collapse access drill', 'emergency drill',
      'fire rescue drill', 'heavy rescue drill', 'drill for extrication', 'rescue power drill', 'professional drill unit',
      'rescue team drill', 'confined space drill', 'advanced rescue tool'
    ]
  },
  {
    id: 'cutter-cu-5050-i-ct',
    title: 'Cutter CU 5050 i CT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.ipp-ips.com/media/g0/29/92/1744833738/Cutter%20CU%205050%20i_96dpi_1280x853px_2_NR-25612.PNG?ts=1744833738',
    desc: 'Industrial-grade CU 5050 i CT Cutter handles heavy steel and exotic materials in rescue.\n' +
          'Intelligent control system optimizes cutting performance.\n' +
          'Wide blade geometry for large-diameter cuts.\n' +
          'High durability for repeated industrial or crash use.\n' +
          'Ergonomic and balanced for precise, fatigue-free operation.\n' +
          'Fast setup with quick-connect hydraulics.\n' +
          'Proven in high-strength vehicle extrications.\n' +
          'Reliable power in demanding rescue scenarios.\n' +
          'Essential for modern rescue with advanced materials.\n' +
          'Trusted by professional heavy rescue teams.',
    rating: 4.8,
    reviews: 20,
    sold: '25+',
    tags: [
      'industrial cutter', 'CU 5050 i CT', 'heavy cutter rescue', 'intelligent cutter', 'Holmatro industrial',
      'extrication heavy cutter', 'rescue steel cutter', 'high strength cutter', 'crash cutter industrial', 'technical cutter i',
      'emergency heavy cutter', 'rescue hydraulics i', 'professional industrial cutter', 'vehicle frame cutter', 'rescue team heavy',
      'advanced cutter tool', 'durable rescue cutter'
    ]
  },
  {
    id: 'cutter-cu-5060-gp',
    title: 'Cutter CU 5060 GP',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://jeffersonfire.com/wp-content/uploads/2024/03/Holmatro-cutter-cu-5060.jpg',
    desc: 'The CU 5060 GP Heavy Cutter delivers maximum force for toughest vehicle structures.\n' +
          'Extra-wide jaw and superior cutting capacity for large sections.\n' +
          'Cuts high-strength steel, pillars, and roll cages effortlessly.\n' +
          'Balanced design with ergonomic handles for control.\n' +
          'Reliable hydraulic performance in prolonged rescues.\n' +
          'Used in severe crash and heavy extrication cases.\n' +
          'Durable blades resist wear on tough materials.\n' +
          'Quick deployment for time-critical operations.\n' +
          'Essential for advanced fire and rescue services.\n' +
          'Top heavy-duty cutter for professional use.',
    rating: 4.9,
    reviews: 18,
    sold: '22+',
    tags: [
      'heavy cutter', 'CU 5060 GP', 'Holmatro heavy cutter', 'high strength cutter', 'vehicle heavy cutter',
      'rescue heavy duty cutter', 'extrication heavy tool', 'crash heavy cutter', 'fire heavy rescue', 'technical heavy cutter',
      'maximum force cutter', 'emergency heavy cutter', 'rescue hydraulics heavy', 'professional heavy cutter', 'roll cage cutter',
      'severe extrication tool', 'heavy rescue cutter', 'advanced heavy tool'
    ]
  },
  {
    id: 'life-jacket',
    title: 'Life Jacket',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://diverescueintl.com/wp-content/uploads/2023/04/AV-500HiVis-400x264.png',
    desc: 'High-visibility Life Jacket provides buoyancy and safety in water rescue missions.\n' +
          'Designed for rescuers and victims in rivers, lakes, and floods.\n' +
          'Bright colors and reflective tape ensure visibility in low light.\n' +
          'Comfortable fit with adjustable straps for all-day wear.\n' +
          'Durable materials withstand harsh water environments.\n' +
          'Multiple grab handles for easy rescue and recovery.\n' +
          'Integrated whistle and light attachment points.\n' +
          'Meets international safety standards for rescue use.\n' +
          'Essential for swiftwater, flood, and marine teams.\n' +
          'Reliable protection in high-risk water operations.',
    rating: 4.5,
    reviews: 450,
    sold: '800+',
    tags: [
      'rescue life jacket', 'water rescue vest', 'high visibility PFD', 'swiftwater life jacket', 'flood rescue jacket',
      'marine rescue PFD', 'personal flotation device', 'rescuer life vest', 'victim recovery jacket', 'reflective life jacket',
      'emergency water jacket', 'river rescue gear', 'coastal life vest', 'rescue team PFD', 'durable rescue jacket',
      'water safety gear', 'professional life jacket', 'swiftwater team vest'
    ]
  },
  {
    id: 'hydraulic-spreader',
    title: 'Hydraulic Spreader',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.fireapparatusmagazine.com/wp-content/uploads/2017/04/jaws-of-life-sp777.jpg',
    desc: 'Powerful Hydraulic Spreader forces open doors, roofs, and crushed compartments.\n' +
          'Wide tip-to-tip opening and strong spreading force for vehicle extrication.\n' +
          'Sharp tips penetrate gaps for initial purchase.\n' +
          'Ergonomic handles and control for precise operation.\n' +
          'Quick hydraulic connection speeds setup time.\n' +
          'Essential part of jaws-of-life rescue systems.\n' +
          'Durable build for repeated heavy use on scene.\n' +
          'Used by fire departments and technical rescue worldwide.\n' +
          'Improves access in pinned or entrapped victims.\n' +
          'Reliable tool for crash and collapse emergencies.',
    rating: 4.9,
    reviews: 56,
    sold: '70+',
    tags: [
      'hydraulic spreader', 'jaws of life spreader', 'vehicle spreader', 'extrication spreader', 'rescue spreading tool',
      'crash rescue spreader', 'door opener hydraulic', 'roof spreader', 'technical rescue spreader', 'firefighter spreader',
      'heavy spreading tool', 'emergency spreader', 'rescue hydraulics spreader', 'professional spreader', 'entrapped victim tool',
      'heavy rescue spreader', 'spreading force tool'
    ]
  },
  {
    id: 'inflatable-boat',
    title: 'Inflatable Boat',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://zodiacmilpro.com/wp-content/uploads/2024/03/re-1a-carr1.jpeg',
    desc: 'Lightweight Inflatable Boat offers rapid deployment for water rescue missions.\n' +
          'High-buoyancy tubes provide stability in rough water.\n' +
          'Quick inflation system for fast launch from shore or vehicle.\n' +
          'Durable fabric resists punctures and abrasion.\n' +
          'Multiple carry handles and tow points for versatility.\n' +
          'Ideal for flood, river, and swiftwater operations.\n' +
          'Compact storage when deflated for easy transport.\n' +
          'Supports rescuers, victims, and medical equipment.\n' +
          'Used by emergency services and rescue squads.\n' +
          'Reliable platform for surface water emergencies.',
    rating: 4.8,
    reviews: 34,
    sold: '40+',
    tags: [
      'inflatable rescue boat', 'swiftwater inflatable', 'flood rescue boat', 'portable rescue boat', 'emergency inflatable',
      'river rescue vessel', 'water rescue inflatable', 'rapid deployment boat', 'rescue zodiac boat', 'lightweight rescue craft',
      'marine inflatable boat', 'flood operations boat', 'rescue team inflatable', 'surface rescue boat', 'compact rescue vessel',
      'professional inflatable boat', 'water emergency boat'
    ]
  },
  {
    id: 'rescue-tripod',
    title: 'Rescue Tripod',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://pksafety.com/cdn/shop/articles/frenchcreekblogtripod.png?v=1719888210&width=800',
    desc: 'Sturdy Rescue Tripod provides secure anchor point for confined space entries.\n' +
          'Adjustable legs for uneven surfaces and various heights.\n' +
          'High-strength aluminum or steel construction supports heavy loads.\n' +
          'Compatible with winches, pulleys, and self-retracting lifelines.\n' +
          'Quick setup for fast rescue team response.\n' +
          'Essential for manholes, tanks, sewers, and pits.\n' +
          'Safety locking mechanisms prevent collapse.\n' +
          'Portable and lightweight for transport to sites.\n' +
          'Meets strict standards for confined space rescue.\n' +
          'Critical equipment for industrial and municipal rescue.',
    rating: 4.7,
    reviews: 78,
    sold: '100+',
    tags: [
      'rescue tripod', 'confined space tripod', 'manhole tripod', 'entry rescue tripod', 'industrial tripod',
      'confined space anchor', 'rescue winch tripod', 'safety tripod rescue', 'sewer rescue tripod', 'pit rescue equipment',
      'high strength tripod', 'emergency tripod', 'rescue team tripod', 'confined space gear', 'professional rescue tripod',
      'fall protection tripod', 'municipal rescue tripod', 'technical rescue anchor'
    ]
  },
  {
    id: 'solution',
    title: 'solution',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://pksafety.com/cdn/shop/articles/frenchcreekblogtripod.png?v=1719888210&width=800',
    desc: 'This Confined Space Solution Tripod serves as a versatile anchor for rescue and retrieval.\n' +
          'Stable on uneven ground with adjustable telescopic legs.\n' +
          'Supports winches and retrieval systems for safe victim extraction.\n' +
          'Lightweight yet robust for easy transport and setup.\n' +
          'Ideal for tanks, vaults, silos, and underground access.\n' +
          'Quick-deploy design for time-sensitive emergencies.\n' +
          'Durable materials ensure reliability in harsh conditions.\n' +
          'Compatible with full-body harnesses and lifelines.\n' +
          'Essential for safe confined space operations.\n' +
          'Trusted by rescue professionals worldwide.',
    rating: 4.7,
    reviews: 78,
    sold: '100+',
    tags: [
      'confined space solution', 'rescue tripod solution', 'retrieval tripod', 'manhole solution tripod', 'entry anchor solution',
      'industrial solution tripod', 'confined space equipment', 'rescue anchor solution', 'safety solution tripod', 'emergency tripod solution',
      'rescue team solution', 'fall arrest tripod', 'professional solution tripod', 'technical rescue solution', 'confined space anchor solution',
      'municipal tripod solution', 'versatile rescue tripod'
    ]
  }
],


    'Fire Fighting Equipment': [
  {
    id: 'automatic-fire-extinguishers',
    title: 'Automatic Fire Extinguishers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.kanexfire.com/blog/wp-content/uploads/2022/02/Automatic-Modular-Fire-Extinguishers-1200x675.jpeg',
    desc: 'Automatic Fire Extinguishers provide reliable 24/7 protection without needing human activation.\n' +
          'They detect heat via thermal sensors and discharge agent immediately upon reaching critical temperature.\n' +
          'Commonly ceiling-mounted for maximum spread in enclosed spaces.\n' +
          'Available in dry chemical, clean agent, or water mist variants depending on the hazard.\n' +
          'Ideal for kitchens, electrical rooms, server rooms, warehouses, and garages.\n' +
          'Prevents small fires from escalating into major incidents.\n' +
          'Low-maintenance design with visible pressure gauge and easy annual inspection.\n' +
          'Meets international standards like UL, FM, and NFPA for passive fire suppression.\n' +
          'Reduces cleanup time and secondary damage compared to manual methods.\n' +
          'Must-have for high-risk or unoccupied areas in commercial & industrial settings.',
    rating: 4.8,
    reviews: 156,
    sold: '200+',
    tags: [
      'automatic extinguisher', 'modular fire extinguisher', 'ceiling mounted automatic', 'thermal detection extinguisher', 'passive fire suppression',
      'kitchen automatic extinguisher', 'server room protection', 'warehouse fire safety', 'clean agent automatic', 'dry powder modular',
      'unoccupied area safety', 'low maintenance extinguisher', 'nfpa compliant automatic', 'industrial fire protection', 'fast activation extinguisher',
      '24/7 fire guard', 'heat triggered unit', 'enclosed space safety'
    ]
  },
  {
    id: 'automatic-nozzle',
    title: 'Automatic Nozzle',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://tft.com/wp-content/uploads/2025/05/b-bgh-bd-10.jpg',
    desc: 'Automatic Nozzle maintains constant pressure and optimal flow rate regardless of pump fluctuations.\n' +
          'Self-adjusting mechanism ensures consistent stream performance during long hose lays.\n' +
          'Ergonomic pistol grip and bale handle reduce operator fatigue in extended operations.\n' +
          'Multiple patterns: straight stream for penetration, fog for cooling & protection, flush for clearing debris.\n' +
          'Built from lightweight, heat-resistant, corrosion-proof materials for harsh fireground conditions.\n' +
          'Ideal for structural firefighting, industrial incidents, and wildland-urban interface fires.\n' +
          'Quick pattern change and shutoff for tactical flexibility.\n' +
          'Compatible with all standard 1.5"–2.5" fire hoses and couplings.\n' +
          'Improves firefighter safety by reducing kickback and improving control.\n' +
          'Trusted by professional fire departments around the world.',
    rating: 4.7,
    reviews: 89,
    sold: '120+',
    tags: [
      'automatic nozzle', 'pressure regulating nozzle', 'constant pressure nozzle', 'self adjusting nozzle', 'fog straight nozzle',
      'pistol grip nozzle', 'bale handle nozzle', 'heat resistant nozzle', 'corrosion proof nozzle', 'structural firefighting nozzle',
      'industrial fire nozzle', 'quick pattern change', 'flush mode nozzle', 'tactical fire nozzle', 'fireground control tool',
      'low fatigue nozzle', 'professional firefighter nozzle', 'hose compatible nozzle'
    ]
  },
  {
    id: 'branch-pipe-nozzle',
    title: 'Branch Pipe Nozzle',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://mcsfire.net/wp-content/uploads/2016/05/AWG_nozzles_safequip-700x450.jpg',
    desc: 'Branch Pipe Nozzle is the classic adjustable nozzle used directly on fire hoses for versatile stream control.\n' +
          'Twist or lever operation switches easily between solid jet, spray, and fog patterns.\n' +
          'Heavy-duty metal construction withstands high pressure and physical abuse on scene.\n' +
          'Provides strong reach for exterior attacks and wide coverage for interior cooling.\n' +
          'Flush feature clears blockages without disconnecting the line.\n' +
          'Lightweight enough for one-person operation in confined spaces.\n' +
          'Standard fitting worldwide for municipal, industrial, and volunteer fire services.\n' +
          'Reliable in both low and high-pressure operations.\n' +
          'Essential basic tool carried on every fire appliance.\n' +
          'Proven performance in thousands of real incidents.',
    rating: 4.6,
    reviews: 134,
    sold: '180+',
    tags: [
      'branch pipe nozzle', 'fire branch nozzle', 'adjustable branch pipe', 'jet fog branch nozzle', 'lever operated nozzle',
      'metal fire nozzle', 'flush branch pipe', 'interior attack nozzle', 'exterior firefighting tool', 'standard hose nozzle',
      'municipal branch pipe', 'volunteer fire nozzle', 'high pressure branch', 'cooling nozzle', 'confined space nozzle',
      'classic fire nozzle', 'reliable branch pipe', 'fire appliance tool'
    ]
  },
  {
    id: 'co2-fire-extinguisher',
    title: 'CO2 Fire Extinguisher',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://spectrumfire.co.nz/wp-content/uploads/2022/05/All-About-CO2-Fire-Extinguishers.jpg',
    desc: 'CO2 Fire Extinguisher uses carbon dioxide gas to quickly smother fires without leaving residue.\n' +
          'Perfectly safe for electrical equipment, computers, servers, and sensitive machinery.\n' +
          'Non-conductive discharge eliminates shock risk on live circuits.\n' +
          'Horn applicator directs gas precisely to the fire base for fast knockdown.\n' +
          'Portable cylinder with integrated handle and wall mounting bracket.\n' +
          'Effective on Class B (flammable liquids) and Class E (electrical) fires.\n' +
          'Simple pull-pin and squeeze-lever activation for instant use.\n' +
          'Built-in pressure gauge shows operational readiness.\n' +
          'Widely used in offices, data centers, labs, vehicles, and electrical rooms.\n' +
          'Clean, fast, and reliable suppression solution.',
    rating: 4.9,
    reviews: 289,
    sold: '500+',
    tags: [
      'co2 extinguisher', 'carbon dioxide extinguisher', 'electrical fire extinguisher', 'no residue extinguisher', 'electronics safe co2',
      'class b co2', 'class e extinguisher', 'server room co2', 'data center extinguisher', 'horn applicator co2',
      'portable co2 unit', 'non conductive extinguisher', 'quick knockdown co2', 'pressure gauge extinguisher', 'office fire safety',
      'laboratory co2', 'vehicle extinguisher', 'clean suppression tool'
    ]
  },
  {
    id: 'delivery-hose-coupling',
    title: 'Delivery Hose Coupling',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://markogroup.com/upload/iblock/76f/fire_hose_delivery_coupling_storz_52mm_02.jpg',
    desc: 'Delivery Hose Coupling connects hoses and appliances quickly and securely during fire operations.\n' +
          'Storz symmetrical design allows fast blind coupling – no male/female orientation needed.\n' +
          'Lightweight aluminum or brass body resists corrosion in wet conditions.\n' +
          'High-pressure rated for large-diameter supply and attack lines.\n' +
          'Used for hydrant-to-hose, hose-to-hose, and hose-to-nozzle connections.\n' +
          'No tools required – saves critical seconds on scene.\n' +
          'Essential for efficient relay pumping and water supply setup.\n' +
          'Durable locking mechanism withstands thousands of cycles.\n' +
          'Standard in most modern fire services internationally.\n' +
          'Improves overall water delivery speed and reliability.',
    rating: 4.5,
    reviews: 78,
    sold: '100+',
    tags: [
      'delivery hose coupling', 'storz coupling', 'fire hose connector', 'blind coupling', 'aluminum hose coupling',
      'brass fire coupling', 'quick connect coupling', 'high pressure hose connector', 'hydrant coupling', 'hose to hose coupling',
      'relay pumping fitting', 'leak proof coupling', 'fast setup coupling', 'corrosion resistant coupling', 'fire service coupling',
      'supply line connector', 'attack line coupling', 'international standard coupling'
    ]
  },
  {
    id: 'double-headed-hydrant-valve',
    title: 'Double Headed Hydrant Valve',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hridhicorporation.com/wp-content/uploads/2023/07/Screenshot-33.png',
    desc: 'Double Headed Hydrant Valve (also called landing valve) allows two hoses to connect simultaneously.\n' +
          'Gunmetal or ductile iron body for superior strength and corrosion resistance.\n' +
          'Oblique or straight pattern with low friction loss for maximum flow.\n' +
          'Instantaneous or threaded outlets for quick hose attachment.\n' +
          'ISI / BS marked for compliance with national and international standards.\n' +
          'Used at pillar hydrants, wall hydrants, and underground hydrants.\n' +
          'Supports high-volume water delivery during major fires.\n' +
          'Reduces time needed to establish multiple attack lines.\n' +
          'Reliable sealing even after years of service.\n' +
          'Essential component in urban and industrial fire hydrant systems.',
    rating: 4.7,
    reviews: 112,
    sold: '150+',
    tags: [
      'double headed hydrant', 'double outlet landing valve', 'gunmetal hydrant valve', 'oblique hydrant valve', 'isi landing valve',
      'quick coupling hydrant', 'multi hose hydrant', 'high flow hydrant valve', 'pillar hydrant valve', 'wall hydrant valve',
      'underground hydrant outlet', 'low friction valve', 'major fire hydrant', 'attack line hydrant', 'durable hydrant valve',
      'urban fire hydrant', 'industrial hydrant system'
    ]
  },
  {
    id: 'double-hose-reel',
    title: 'Double Hose Reel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://flammatech.africa/wp-content/uploads/2024/01/fire_hose_reel_cabinets_1452059138_wz530-e1705411905594.jpg',
    desc: 'Double Hose Reel equips two separate 30 m hose lines for simultaneous use by multiple users.\n' +
          '180° swivel mount or fixed cabinet for flexible hose deployment angles.\n' +
          'Enclosed design protects hoses from dust, sunlight, and mechanical damage.\n' +
          'Each reel includes shut-off valve, nozzle, and jet/spray adjustment.\n' +
          'Ideal for large warehouses, factories, hangars, and multi-level buildings.\n' +
          'Smooth uncoiling and automatic rewind for quick reset after use.\n' +
          'Complies with fire safety codes for commercial occupancies.\n' +
          'Increases first-aid firefighting capacity in high-risk areas.\n' +
          'Robust construction ensures years of reliable service.\n' +
          'Perfect dual-line solution for enhanced indoor response.',
    rating: 4.6,
    reviews: 95,
    sold: '130+',
    tags: [
      'double hose reel', 'dual fire hose reel', 'twin hose reel', 'swivel double reel', 'cabinet hose reel',
      'warehouse double reel', 'factory fire reel', 'hangar hose system', 'multi level reel', 'simultaneous firefighting',
      'quick rewind reel', 'commercial hose reel', 'indoor dual reel', 'enclosed hose protection', 'first aid dual line',
      'robust fire reel', 'safety code compliant reel'
    ]
  },
  {
    id: 'dry-chemical-powder-trolley-mounted',
    title: 'Dry Chemical Powder Trolley Mounted',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sffecoglobal.com/wp-content/uploads/2017/07/1.-ABC-Powder-Mobile-Trolley-Extinguishers.png',
    desc: 'Trolley Mounted Dry Chemical Powder Extinguisher brings high-capacity ABC powder to the fire scene.\n' +
          'Fights Class A (solids), Class B (liquids), and Class C (gases) fires effectively.\n' +
          'Large wheeled cart with push handle for easy movement by one or two people.\n' +
          'Long discharge hose and pistol nozzle for safe-distance application.\n' +
          'High volume capacity ideal for refineries, airports, chemical plants, and warehouses.\n' +
          'Rapid valve opening for immediate full-flow discharge.\n' +
          'Rugged frame protects cylinder during transport over rough terrain.\n' +
          'Portable alternative to fixed systems in open or remote areas.\n' +
          'Proven effective in large-scale industrial incidents.\n' +
          'Heavy-duty mobile suppression for serious fire hazards.',
    rating: 4.8,
    reviews: 167,
    sold: '220+',
    tags: [
      'trolley mounted extinguisher', 'mobile powder extinguisher', 'abc trolley unit', 'dry chemical trolley', 'wheeled abc extinguisher',
      'industrial trolley extinguisher', 'airport fire trolley', 'chemical plant unit', 'long hose trolley', 'high capacity powder',
      'refinery suppression', 'rugged cart extinguisher', 'rapid discharge trolley', 'mobile heavy extinguisher', 'class a b c trolley',
      'portable industrial extinguisher'
    ]
  },
  {
    id: 'emergency-exit-sign',
    title: 'Emergency Exit Sign',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://blog.koorsen.com/hs-fs/hubfs/shutterstock_655149517.jpg?width=1200&name=shutterstock_655149517.jpg',
    desc: 'Emergency Exit Sign illuminates safe escape routes during fire, smoke, or power failure.\n' +
          'High-brightness LED ensures visibility through smoke and darkness.\n' +
          'Built-in battery backup provides 90+ minutes of operation during outages.\n' +
          'Universal running-man pictogram + "EXIT" text for clear understanding.\n' +
          'Heat-resistant polycarbonate or metal housing for fire endurance.\n' +
          'Easy surface, recessed, or pendant mounting options.\n' +
          'Mandatory in commercial buildings, hotels, hospitals, schools, and factories.\n' +
          'Low-energy consumption with 10+ year LED lifespan.\n' +
          'Improves evacuation speed and reduces panic in emergencies.\n' +
          'Fundamental part of every building life-safety system.',
    rating: 4.4,
    reviews: 234,
    sold: '400+',
    tags: [
      'emergency exit sign', 'led exit sign', 'illuminated exit sign', 'battery backup exit', 'running man sign',
      'smoke visible exit', 'heat resistant sign', 'commercial exit sign', 'hotel safety sign', 'hospital exit sign',
      'school evacuation sign', 'low power exit', 'long life led sign', 'life safety sign', 'fire escape sign',
      'building code exit', 'panic reduction sign'
    ]
  },
  {
    id: 'emergency-eye-wash-shower',
    title: 'Emergency Eye Wash Shower',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://safety.umbc.edu/wp-content/uploads/sites/507/2022/11/61O7v2f1zL.jpg',
    desc: 'Emergency Eye Wash & Shower provides immediate decontamination for chemical splashes.\n' +
          'Twin aerated eye/face wash heads deliver gentle, high-volume flush.\n' +
          'Pull rod or push plate activation starts flow in under 1 second.\n' +
          'Meets ANSI Z358.1 standard for 15-minute continuous flow at 0.4 GPM minimum.\n' +
          'Stainless steel bowl and piping for corrosion resistance in harsh environments.\n' +
          'Required in laboratories, chemical plants, battery rooms, and manufacturing areas.\n' +
          'Optional tepid water mixing to prevent thermal shock.\n' +
          'High-visibility yellow color and signage for instant location.\n' +
          'Protects eyes and skin from permanent injury.\n' +
          'Critical safety equipment for chemical-handling workplaces.',
    rating: 4.7,
    reviews: 89,
    sold: '110+',
    tags: [
      'emergency eye wash', 'safety shower', 'chemical splash shower', 'eye face wash station', 'ansi z358 shower',
      'lab safety shower', 'chemical plant eye wash', 'aerated eye wash', 'pull rod activation', 'tepid water shower',
      'stainless safety shower', 'corrosion resistant wash', 'high visibility safety', 'chemical decontamination', 'workplace eye protection',
      'battery room safety', 'manufacturing safety unit'
    ]
  },
  {
    id: 'fire-alarm-system',
    title: 'Fire Alarm System',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://instrumentationtools.com/wp-content/uploads/2020/02/What-is-an-FACP-720x444.png',
    desc: 'Fire Alarm System detects fire early and alerts building occupants with audible & visual signals.\n' +
          'Includes fire alarm control panel (FACP), smoke/heat detectors, manual call points, sirens, and strobes.\n' +
          'Addressable systems pinpoint exact detector location for faster response.\n' +
          'Conventional systems offer cost-effective coverage for smaller buildings.\n' +
          'Integrates with sprinklers, fire doors, elevators, and HVAC shutdown.\n' +
          'Monitored for faults, tampering, and low battery conditions.\n' +
          'Required in virtually all commercial, industrial, and multi-residential structures.\n' +
          'Wireless detectors available for retrofit and historic buildings.\n' +
          'Reduces response time and potential casualties dramatically.\n' +
          'Foundation of every modern active fire protection strategy.',
    rating: 4.9,
    reviews: 201,
    sold: '280+',
    tags: [
      'fire alarm system', 'smoke detection system', 'heat alarm system', 'addressable fire panel', 'conventional fire alarm',
      'early fire detection', 'building fire alert', 'sprinkler integration alarm', 'commercial fire system', 'multi residential alarm',
      'fault monitored alarm', 'wireless fire detection', 'rapid alert system', 'active fire protection', 'life safety alarm',
      'facp system', 'detector siren strobe'
    ]
  },
  {
    id: 'fire-blanket',
    title: 'Fire blanket',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/81yK16U2sbL._AC_UF894,1000_QL80_.jpg',
    desc: 'Fire Blanket quickly smothers small fires by cutting off oxygen supply completely.\n' +
          'Made from woven fiberglass or fire-retardant wool with silicone coating.\n' +
          'Stored in quick-release pouch for instant grab and deployment.\n' +
          'Highly effective on cooking oil fires, clothing fires, and small waste fires.\n' +
          'Safe to use directly on people or animals to extinguish burning clothing.\n' +
          'No training required – simply cover the fire and leave in place.\n' +
          'Leaves no chemical residue or mess after use.\n' +
          'Wall-mounted near kitchens, BBQs, and workshops.\n' +
          'Mandatory in many residential and commercial kitchens.\n' +
          'Simple, foolproof, and life-saving first-response tool.',
    rating: 4.6,
    reviews: 345,
    sold: '600+',
    tags: [
      'fire blanket', 'smother blanket', 'kitchen fire blanket', 'fiberglass fire blanket', 'oil pan fire blanket',
      'quick release blanket', 'burning clothing blanket', 'no residue fire tool', 'wall mounted blanket', 'easy use fire blanket',
      'residential kitchen safety', 'bbq fire blanket', 'workshop fire tool', 'foolproof suppression', 'life saving blanket'
    ]
  },
  {
    id: 'fire-doors-and-frames',
    title: 'FIRE DOORS AND FRAMES',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://s3.us-east-2.amazonaws.com/dyke-site-assets/resources/subpages/extfire.jpg',
    desc: 'Fire Doors and Frames stop fire and smoke from spreading between building compartments.\n' +
          'Fire ratings from FD30 to FD240 depending on location and risk level.\n' +
          'Steel or solid timber core with intumescent strips that expand in heat.\n' +
          'Self-closing devices and positive latch ensure automatic closure.\n' +
          'Glazing options available with fire-rated glass for visibility.\n' +
          'Essential in corridors, stairwells, lobbies, plant rooms, and escape routes.\n' +
          'Tested to BS 476, EN 1634, or UL standards for certification.\n' +
          'Improves compartmentation and gives occupants more evacuation time.\n' +
          'Durable powder-coated or veneer finishes for aesthetics and longevity.\n' +
          'Vital passive fire protection component in every building.',
    rating: 4.8,
    reviews: 67,
    sold: '90+',
    tags: [
      'fire door', 'fire rated door', 'fd30 fire door', 'fd120 fire door', 'intumescent fire door',
      'self closing fire door', 'steel fire door', 'timber fire door', 'smoke control door', 'escape route door',
      'stairwell fire door', 'compartmentation door', 'bs 476 certified', 'en 1634 door', 'passive fire protection',
      'building fire door', 'rated glazing door'
    ]
  },
  {
    id: 'fire-extinguisher',
    title: 'Fire Extinguisher',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://swartzfireandsafety.com/files/images/An%20ABC%20fire%20extinguisher%20hanging%20on%20a%20wall.jpg',
    desc: 'Fire Extinguisher is the most common portable device for tackling small fires quickly.\n' +
          'ABC dry powder type handles wood, paper, liquids, gases, and electrical fires.\n' +
          'Wall-mounted bracket or floor stand for high-visibility placement.\n' +
          'Pull pin safety and squeeze grip lever for easy one-handed operation.\n' +
          'Clear pressure gauge shows if unit is ready for use.\n' +
          'Suitable for homes, offices, shops, vehicles, workshops, and boats.\n' +
          'Compact size with impressive discharge range and duration.\n' +
          'Annual servicing recommended to maintain reliability.\n' +
          'Prevents minor incidents from becoming major disasters.\n' +
          'Universal first-line fire safety equipment worldwide.',
    rating: 4.7,
    reviews: 456,
    sold: '800+',
    tags: [
      'fire extinguisher', 'abc dry powder extinguisher', 'portable fire extinguisher', 'wall mounted extinguisher', 'home fire unit',
      'office extinguisher', 'vehicle fire extinguisher', 'squeeze lever extinguisher', 'pressure gauge extinguisher', 'universal fire tool',
      'small fire control', 'annual service extinguisher', 'compact fire device', 'first line suppression', 'multi class extinguisher'
    ]
  },
  {
    id: 'fire-fighting-pump-skid-unit',
    title: 'FIRE FIGHTING PUMP SKID UNIT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.spiedr.com/wp-content/uploads/2017/03/RANCHER-65_.jpg',
    desc: 'Fire Fighting Pump Skid Unit supplies high-pressure water where hydrants are unavailable.\n' +
          'Diesel, petrol, or electric engine drives reliable centrifugal pump.\n' +
          'Skid-mounted frame for forklift, crane, or trailer transport.\n' +
          'Includes suction hose, delivery hoses, nozzles, and priming system.\n' +
          'Perfect for rural sites, construction zones, remote facilities, and events.\n' +
          'High flow and pressure capability for effective fire attack or relay.\n' +
          'Self-priming pump starts quickly even from static water sources.\n' +
          'Rugged enclosure protects components in harsh outdoor conditions.\n' +
          'Serves as backup or primary water source in critical areas.\n' +
          'Essential for off-grid or hydrant-scarce firefighting.',
    rating: 5,
    reviews: 34,
    sold: '45+',
    tags: [
      'pump skid unit', 'fire pump skid', 'portable fire pump', 'diesel fire pump', 'centrifugal skid pump',
      'construction site pump', 'rural firefighting unit', 'self priming pump', 'high flow fire pump', 'relay pump skid',
      'remote facility pump', 'event fire pump', 'rugged outdoor pump', 'backup water supply', 'off grid firefighting'
    ]
  },
  {
    id: 'fire-hook',
    title: 'Fire Hook',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.gaam.com.au/wp-content/uploads/2024/01/poles-full1.jpg',
    desc: 'Fire Hook (pike pole) is used to pull down ceilings, open walls, and remove burning material.\n' +
          'Long fiberglass or wooden handle with steel pike, hook, and fork end.\n' +
          'Reaches 6–16 ft high safely from ladders or ground level.\n' +
          'Checks for hidden fire spread in voids and roof spaces.\n' +
          'Essential during overhaul and ventilation after knockdown.\n' +
          'Lightweight yet strong for prolonged use without fatigue.\n' +
          'Standard tool on aerial ladders, engines, and rescue trucks.\n' +
          'Helps prevent rekindle by exposing smoldering pockets.\n' +
          'Versatile for forcible entry, debris removal, and probing.\n' +
          'Classic, indispensable fireground tool.',
    rating: 4.5,
    reviews: 56,
    sold: '70+',
    tags: [
      'fire hook', 'pike pole', 'ceiling hook tool', 'overhaul pike pole', 'ventilation fire hook',
      'hidden fire probe', 'fiberglass pike pole', 'steel hook pole', 'ladder truck tool', 'rekindle prevention',
      'forcible entry pole', 'debris removal hook', 'long reach fire tool', 'engine company pole', 'classic fireground tool'
    ]
  },
  {
    id: 'fire-hose',
    title: 'Fire Hose',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://media.istockphoto.com/id/1287907323/photo/red-rolled-firefighter-hose-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=2yuLirE3jHV9ctla8W28E-4oHqeh51PO5unNGIzy88c=',
    desc: 'Fire Hose transports high-pressure water from pump or hydrant to the nozzle.\n' +
          'Double-jacket synthetic construction with rubber or thermoplastic liner.\n' +
          'Resists abrasion, punctures, heat, and chemicals on the fireground.\n' +
          'Available in 38 mm (1.5"), 65 mm (2.5"), and larger supply sizes.\n' +
          'Lightweight when empty for rapid deployment by small teams.\n' +
          'Color-coded jackets for quick size and type identification.\n' +
          'Hydrostatic tested annually to ensure service pressure integrity.\n' +
          'Critical for both interior attack lines and exterior master streams.\n' +
          'Backbone of every structural firefighting operation.\n' +
          'Reliable, flexible, and durable water delivery lifeline.',
    rating: 4.8,
    reviews: 178,
    sold: '250+',
    tags: [
      'fire hose', 'attack hose', 'supply hose', 'double jacket hose', 'synthetic fire hose',
      'abrasion resistant hose', 'heat resistant hose', 'lightweight fire hose', 'color coded hose', 'hydrostatic tested hose',
      'interior attack line', 'exterior master stream', 'structural firefighting hose', 'fireground lifeline', 'durable water hose',
      'rapid deployment hose', 'chemical resistant hose'
    ]
  },
  {
    id: 'fire-hose-box',
    title: 'Fire Hose Box',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://thomasproducts.com/wp-content/uploads/2020/04/FHC-10-Interior.jpg',
    desc: 'Fire Hose Box protects and organizes pre-connected hose lines for instant access.\n' +
          'Lockable steel or fiberglass cabinet with break-glass or key access.\n' +
          'Houses 30 m hose reel, nozzle, and inlet connection.\n' +
          'Red powder-coated finish with clear identification signage.\n' +
          'Wall-recessed or surface-mounted for space efficiency.\n' +
          'Ideal for corridors, stairwells, factories, hotels, and apartments.\n' +
          'Prevents hose damage from weather, dust, and vandalism.\n' +
          'Ensures hose is ready for immediate use by occupants or responders.\n' +
          'Complies with local fire safety regulations for standpipe systems.\n' +
          'Reliable storage solution for indoor firefighting readiness.',
    rating: 4.6,
    reviews: 89,
    sold: '120+',
    tags: [
      'fire hose box', 'hose cabinet', 'protected hose box', 'break glass hose box', 'lockable fire cabinet',
      'corridor hose box', 'stairwell hose storage', 'factory hose cabinet', 'hotel fire box', 'apartment hose unit',
      'weather protected hose', 'vandal resistant cabinet', 'standpipe hose box', 'indoor fire readiness', 'red hose cabinet'
    ]
  },
  {
    id: 'fire-hose-cabinet',
    title: 'Fire Hose Cabinet',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.shutterstock.com/image-photo/wall-mounted-fire-hose-reel-260nw-794986504.jpg',
    desc: 'Fire Hose Cabinet securely stores and protects fire hose reels or folded hoses.\n' +
          'Durable steel construction with tough red epoxy coating.\n' +
          'Glass door or solid door with breakable panel for quick access.\n' +
          'Houses 30 m hose, adjustable nozzle, and hydrant connection.\n' +
          'Wall or recess mounted in high-visibility locations.\n' +
          'Common in offices, schools, hospitals, malls, and industrial facilities.\n' +
          'Prevents hose deterioration from UV, moisture, and impact.\n' +
          'Clear signage and bright color for rapid location in emergencies.\n' +
          'Meets building code requirements for occupant-use firefighting.\n' +
          'Ensures equipment is always ready and tamper-resistant.',
    rating: 4.7,
    reviews: 101,
    sold: '140+',
    tags: [
      'fire hose cabinet', 'hose storage cabinet', 'wall mounted hose cabinet', 'glass door hose box', 'red fire cabinet',
      'office hose cabinet', 'hospital fire cabinet', 'school hose storage', 'mall fire equipment', 'industrial hose cabinet',
      'uv protected hose', 'tamper resistant cabinet', 'building code cabinet', 'occupant use hose', 'quick access cabinet'
    ]
  },
  {
    id: 'fire-hose-reel',
    title: 'Fire Hose Reel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/BhDl94rncfs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gISgrMA8=&rs=AOn4CLAo8lHBXpmYUFPXy_rMxPlpakU03A',
    desc: 'Fire Hose Reel provides 30 meters of ready-to-use hose for first-aid firefighting.\n' +
          'Swing arm, fixed, or recessed design for flexible installation.\n' +
          'Includes adjustable nozzle with jet, spray, and shut-off functions.\n' +
          'Smooth swivel mechanism prevents kinking during pull-out.\n' +
          'Wall-mounted in corridors, workshops, garages, and commercial spaces.\n' +
          'Quick manual or automatic rewind after deployment.\n' +
          'Durable hose material resists pressure and abrasion.\n' +
          'Ideal for early-stage fire control by trained staff or occupants.\n' +
          'Complies with fire safety standards for commercial buildings.\n' +
          'Compact, reliable, and user-friendly indoor fire solution.',
    rating: 4.8,
    reviews: 223,
    sold: '350+',
    tags: [
      'fire hose reel', '30 meter hose reel', 'swing arm hose reel', 'wall mounted reel', 'adjustable nozzle reel',
      'indoor fire reel', 'workshop hose reel', 'garage fire reel', 'commercial hose reel', 'quick rewind reel',
      'anti kink hose', 'first aid firefighting', 'occupant use reel', 'building safety reel', 'compact fire reel',
      'user friendly hose', 'early stage suppression'
    ]
  },
  {
    id: 'fire-hydrant-system',
    title: 'Fire Hydrant System',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sffecoglobal.com/wp-content/uploads/2017/08/1.-Landing-Valves.png',
    desc: 'Fire Hydrant System provides immediate pressurized water supply for firefighting.\n' +
          'Includes pillar, wall, or underground hydrants with landing valves.\n' +
          'Connected to dedicated fire mains, pumps, and storage tanks.\n' +
          'Delivers high flow rates for multiple attack lines simultaneously.\n' +
          'Strategic placement around buildings, yards, and perimeters.\n' +
          'Essential for industrial plants, residential complexes, and urban areas.\n' +
          'Regular flow testing and maintenance ensure reliability.\n' +
          'Supports both internal standpipes and external pumper connections.\n' +
          'Reduces reliance on mobile tankers during large incidents.\n' +
          'Cornerstone of municipal and private fire protection infrastructure.',
    rating: 4.9,
    reviews: 78,
    sold: '100+',
    tags: [
      'fire hydrant system', 'landing valve system', 'pillar hydrant', 'wall hydrant', 'underground hydrant',
      'high flow hydrant', 'fire main system', 'industrial hydrant', 'residential complex hydrant', 'urban fire supply',
      'flow tested hydrant', 'pumper connection', 'standpipe support', 'private fire main', 'municipal hydrant network'
    ]
  },
  ,
  {
    id: 'fire-man-helmet',
    title: 'Fire Man Helmet',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61wBC2aBYhL._AC_UF894,1000_QL80_.jpg',
    desc: 'Fireman Helmet provides head protection against impact, heat, and falling debris.\n' +
          'High-impact thermoplastic or composite shell with high-temperature resistance.\n' +
          'Adjustable ratchet suspension system for secure, comfortable fit.\n' +
          'Integrated face shield and neck protector for added facial and neck safety.\n' +
          'Reflective strips and high-visibility colors improve firefighter location in smoke.\n' +
          'Meets NFPA 1971, EN 443, or equivalent structural firefighting standards.\n' +
          'Lightweight design reduces neck strain during prolonged operations.\n' +
          'Compatible with communication headsets and SCBA masks.\n' +
          'Essential PPE for interior structural firefighting and rescue.\n' +
          'Durable, reliable, and trusted by professionals worldwide.',
    rating: 4.8,
    reviews: 156,
    sold: '200+',
    tags: [
      'fireman helmet', 'structural firefighting helmet', 'nfpa 1971 helmet', 'composite fire helmet', 'impact resistant helmet',
      'heat resistant helmet', 'reflective firefighter helmet', 'ratchet suspension helmet', 'face shield helmet', 'neck protector helmet',
      'high visibility helmet', 'scba compatible helmet', 'lightweight fire helmet', 'professional ppe helmet', 'rescue helmet',
      'interior attack helmet', 'durable firefighter gear'
    ]
  },
  {
    id: 'fire-man-turn-out-gear',
    title: 'Fire Man Turn Out Gear',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://firegear.lakeland.com/wp-content/uploads/turnouts-1600x1000-1.webp',
    desc: 'Fireman Turn Out Gear (structural firefighting ensemble) protects against extreme heat, flames, and physical hazards.\n' +
          'Three-layer system: outer shell, moisture barrier, and thermal liner.\n' +
          'Nomex, Kevlar, or PBI fabrics offer superior flame resistance and durability.\n' +
          'Reflective trim and high-visibility panels for low-light scene safety.\n' +
          'Ergonomic design with reinforced knees, elbows, and drag rescue device.\n' +
          'Meets NFPA 1971 standard for structural firefighting PPE.\n' +
          'Integrated pockets for tools, radio, and gloves.\n' +
          'Breathable yet waterproof to reduce heat stress.\n' +
          'Essential for interior attack, search & rescue, and overhaul operations.\n' +
          'Life-saving equipment trusted by fire departments globally.',
    rating: 5,
    reviews: 89,
    sold: '110+',
    tags: [
      'turn out gear', 'structural firefighting ppe', 'nomex turnout', 'kevlared turnout', 'nfpa 1971 gear',
      'flame resistant ensemble', 'reflective turnout', 'drag rescue device', 'reinforced knee turnout', 'breathable fire gear',
      'moisture barrier suit', 'thermal liner turnout', 'interior attack ppe', 'search rescue gear', 'overhaul turnout',
      'professional firefighter suit', 'high visibility turnout'
    ]
  },
  {
    id: 'fire-pump',
    title: 'Fire Pump',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.betterfirepump.com/d/images/%E4%BA%A7%E5%93%81/%E6%9F%B4%E6%B2%B9%E6%9C%BA%E6%B3%B5/XBC-IS/XBC-IS7%20(1).png',
    desc: 'Fire Pump delivers high-pressure, high-volume water to hydrants, standpipes, and sprinkler systems.\n' +
          'Centrifugal type with diesel, electric, or jockey pump configurations.\n' +
          'Meets NFPA 20 standards for fire protection service.\n' +
          'Automatic start on pressure drop or manual activation.\n' +
          'Suitable for buildings, industrial plants, airports, and campuses.\n' +
          'High reliability with backup power and controller options.\n' +
          'Boosts municipal supply or provides independent water source.\n' +
          'Regular testing ensures readiness during emergencies.\n' +
          'Critical component of fixed fire protection infrastructure.\n' +
          'Ensures adequate flow for large-scale fire suppression.',
    rating: 4.9,
    reviews: 67,
    sold: '85+',
    tags: [
      'fire pump', 'centrifugal fire pump', 'nfpa 20 pump', 'diesel fire pump', 'electric fire pump',
      'jockey pump system', 'high pressure fire pump', 'standpipe pump', 'sprinkler system pump', 'industrial fire pump',
      'airport fire pump', 'automatic start pump', 'backup power pump', 'municipal boost pump', 'fixed fire protection',
      'high volume pump', 'emergency water source'
    ]
  },
  {
    id: 'fire-safety-helmet',
    title: 'Fire Safety Helmet',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.prod.website-files.com/657b0e121366738e774bf1c0/65a936bb0e095cf53bcb6d62_Construction-safety-helmet-studson-scaled.jpg',
    desc: 'Fire Safety Helmet offers head protection for firefighters and support personnel during operations.\n' +
          'Lightweight composite shell with excellent impact and penetration resistance.\n' +
          'Adjustable 6-point suspension and chin strap for secure fit.\n' +
          'High-visibility reflective tape and bright colors for scene identification.\n' +
          'Compatible with goggles, ear muffs, and communication systems.\n' +
          'Meets EN 397 or NFPA 1971 standards depending on model.\n' +
          'Ventilated options reduce heat buildup during long shifts.\n' +
          'Used in structural firefighting, wildland, and rescue missions.\n' +
          'Durable against heat, chemicals, and electrical hazards.\n' +
          'Essential PPE for all fire and emergency response roles.',
    rating: 4.7,
    reviews: 134,
    sold: '180+',
    tags: [
      'fire safety helmet', 'composite firefighter helmet', 'impact resistant helmet', 'reflective safety helmet', 'high visibility helmet',
      'adjustable suspension helmet', 'en 397 helmet', 'nfpa safety helmet', 'ventilated fire helmet', 'rescue mission helmet',
      'wildland fire helmet', 'communication compatible helmet', 'chemical resistant helmet', 'structural ppe helmet', 'emergency response helmet'
    ]
  },
  {
    id: 'fireman-turn-out-gear-bag',
    title: 'Fireman Turn Out Gear Bag',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://gearbags.com/wp-content/uploads/2015/06/LXFB10-K-1200x967.jpg',
    desc: 'Fireman Turn Out Gear Bag stores and transports heavy PPE and equipment safely.\n' +
          'Heavy-duty ballistic nylon or PVC material resists tears and abrasion.\n' +
          'Large main compartment fits turnout coat, pants, boots, helmet, and SCBA.\n' +
          'Multiple exterior pockets for gloves, flashlight, radio, and tools.\n' +
          'Reinforced handles, shoulder straps, and wheels for easy carrying.\n' +
          'Water-resistant and easy to clean after smoky incidents.\n' +
          'Ideal for firefighters responding from home or station.\n' +
          'Organized layout reduces response time when gearing up.\n' +
          'Durable construction withstands daily heavy use.\n' +
          'Standard gear transport solution for professional responders.',
    rating: 4.6,
    reviews: 45,
    sold: '60+',
    tags: [
      'turnout gear bag', 'firefighter gear bag', 'ppe storage bag', 'ballistic nylon bag', 'heavy duty gear bag',
      'scba bag', 'wheeled turnout bag', 'water resistant gear bag', 'station response bag', 'home firefighter bag',
      'tool pocket bag', 'reinforced handle bag', 'smoke resistant bag', 'daily use gear bag', 'professional responder bag'
    ]
  },
  {
    id: 'flame-cutter',
    title: 'Flame Cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://simpleweld.com/cdn/shop/articles/Welder_using_an_acetylene_gas_cutting_torch_to_cut_metal.jpg?v=1684304983&width=1100',
    desc: 'Flame Cutter (oxy-acetylene torch) cuts through thick steel, bolts, and vehicle frames during extrication.\n' +
          'High-temperature flame reaches over 3000°C for rapid cutting.\n' +
          'Adjustable regulators control oxygen and acetylene flow precisely.\n' +
          'Used by rescue teams to free pinned victims in vehicle accidents.\n' +
          'Portable setup with cylinders and hoses for field operations.\n' +
          'Requires proper PPE and fire watch due to open flame.\n' +
          'Effective on metal up to several inches thick.\n' +
          'Essential tool for heavy rescue and technical extrication.\n' +
          'Complements hydraulic tools in complex entrapment scenarios.\n' +
          'Proven in crash rescue worldwide.',
    rating: 4.5,
    reviews: 34,
    sold: '50+',
    tags: [
      'flame cutter', 'oxy acetylene torch', 'cutting torch', 'vehicle extrication cutter', 'heavy rescue torch',
      'steel cutting tool', 'acetylene flame cutter', 'rescue torch', 'crash rescue tool', 'technical extrication',
      'high temperature cutter', 'portable cutting torch', 'pinned victim tool', 'metal frame cutter', 'hydraulic complement tool'
    ]
  },
  {
    id: 'fm-200-fire-suppression-system',
    title: 'FM-200 Fire Suppression System',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.ufpco.com/wp-content/uploads/2015/03/How-a-Clean-Agent-System-Works.png',
    desc: 'FM-200 Fire Suppression System uses clean agent HFC-227ea to extinguish fires rapidly.\n' +
          'Electrically non-conductive and leaves no residue – safe for electronics.\n' +
          'Total flooding system ideal for server rooms, data centers, and control rooms.\n' +
          'Fast discharge in 10 seconds or less for minimal fire damage.\n' +
          'Environmentally friendly with zero ozone depletion potential.\n' +
          'Stored in cylinders with automatic or manual release options.\n' +
          'Integrates with fire detection and alarm systems.\n' +
          'No cleanup required after discharge – business continuity preserved.\n' +
          'NFPA 2001 and UL listed for reliable performance.\n' +
          'Preferred clean agent for high-value asset protection.',
    rating: 5,
    reviews: 56,
    sold: '70+',
    tags: [
      'fm-200 system', 'hfc-227ea suppression', 'clean agent system', 'server room suppression', 'data center fire protection',
      'no residue agent', 'total flooding system', 'fast discharge suppression', 'electronics safe agent', 'nfpa 2001 system',
      'zero ozone depletion', 'automatic fire suppression', 'high value asset protection', 'control room safety', 'business continuity system'
    ]
  },
  {
    id: 'foam-maker',
    title: 'Foam Maker',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hdfire.com/wp-content/uploads/2024/07/Inline-Foam-Inductor-1-768x456.jpg',
    desc: 'Foam Maker (inductor or proportioner) mixes foam concentrate with water to produce firefighting foam.\n' +
          'Inline or pick-up tube models for accurate 1–6% proportioning.\n' +
          'Generates low, medium, or high-expansion foam depending on nozzle.\n' +
          'Effective on Class B flammable liquid fires (fuel, oil, chemicals).\n' +
          'Used with foam nozzles, branches, or monitors for large spills.\n' +
          'Simple venturi principle requires no external power.\n' +
          'Essential for petrochemical plants, airports, and fuel storage.\n' +
          'Compatible with AFFF, AR-AFFF, and fluorine-free foams.\n' +
          'Improves suppression speed and prevents re-ignition.\n' +
          'Reliable foam generation for high-hazard areas.',
    rating: 4.7,
    reviews: 78,
    sold: '90+',
    tags: [
      'foam maker', 'foam proportioner', 'inline foam inductor', 'class b foam system', 'aFFF proportioner',
      'low expansion foam', 'high expansion foam', 'fuel fire foam', 'petrochemical foam tool', 'airport foam maker',
      'venturi foam device', 'fluorine free foam', 'spill suppression foam', 're-ignition prevention', 'high hazard foam'
    ]
  },
  {
    id: 'four-way-suction-collecting-head',
    title: 'Four Way Suction Collecting Head',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://vintexfire.com/assets/images/products/hydrant-accessories/four_way_suction_collection_head.jpg',
    desc: 'Four Way Suction Collecting Head connects multiple suction hoses to a single pump inlet.\n' +
          'Allows drafting from static sources like ponds, rivers, or tanks.\n' +
          'Four gated inlets with independent control valves.\n' +
          'Reduces friction loss and improves priming efficiency.\n' +
          'Durable aluminum construction with hard-coat anodizing.\n' +
          'Essential for rural, wildland, or high-volume drafting operations.\n' +
          'Quick-connect couplings for fast setup.\n' +
          'Supports relay pumping from distant water sources.\n' +
          'Increases pump supply capacity during large fires.\n' +
          'Standard accessory for pumper and tanker operations.',
    rating: 4.6,
    reviews: 23,
    sold: '30+',
    tags: [
      'four way suction head', 'suction collector', 'drafting collector', 'multiple hose inlet', 'static water drafting',
      'pond drafting head', 'river suction collector', 'aluminum suction head', 'gated inlet collector', 'relay pumping accessory',
      'high volume drafting', 'rural fire tool', 'wildland suction', 'quick connect collector', 'pumper drafting head'
    ]
  },
  {
    id: 'hydrant-valve',
    title: 'HYDRANT VALVE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://firefightingtool.com/2018/products/6-1-oblique-landing-valve_0.jpg',
    desc: 'Hydrant Valve (landing valve) controls water flow from fire hydrants to hoses.\n' +
          'Oblique or right-angle design with low pressure loss.\n' +
          'Gunmetal or stainless steel body for corrosion resistance.\n' +
          'Instantaneous male outlet for quick hose coupling.\n' +
          'Handwheel or lever operation for smooth flow adjustment.\n' +
          'Used on pillar, wall, and breeching inlets.\n' +
          'High-pressure rated for demanding firefighting conditions.\n' +
          'ISI / BS certified for safety and reliability.\n' +
          'Essential interface between hydrant and attack/supply lines.\n' +
          'Durable component in every hydrant system.',
    rating: 4.8,
    reviews: 112,
    sold: '150+',
    tags: [
      'hydrant valve', 'landing valve', 'oblique hydrant valve', 'gunmetal landing valve', 'instantaneous outlet valve',
      'low pressure loss valve', 'stainless hydrant valve', 'lever operated valve', 'pillar hydrant valve', 'wall hydrant valve',
      'breeching inlet valve', 'high pressure valve', 'isi certified valve', 'attack line valve', 'supply line valve'
    ]
  },
  {
    id: 'monitor-jet-nozzles',
    title: 'Monitor Jet Nozzles',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.firedos.de/files/en/9/kokkola_firedos_monitor.png?76906',
    desc: 'Monitor Jet Nozzles deliver large-volume water or foam streams over long distances.\n' +
          'Fixed, portable, or elevated models with manual or remote control.\n' +
          'Oscillating or turret options for automatic coverage of large areas.\n' +
          'High flow rates up to 5000+ GPM for tank fires and aircraft incidents.\n' +
          'Adjustable pattern from jet to fog for versatility.\n' +
          'Used in refineries, chemical plants, airports, and marine terminals.\n' +
          'Foam-compatible models for flammable liquid suppression.\n' +
          'Electric or hydraulic drive for precise positioning.\n' +
          'Reduces firefighter exposure in high-hazard zones.\n' +
          'Powerful master stream tool for major fire control.',
    rating: 4.7,
    reviews: 89,
    sold: '120+',
    tags: [
      'monitor nozzle', 'jet monitor', 'fire monitor', 'high volume monitor', 'remote control monitor',
      'oscillating monitor', 'turret fire monitor', 'tank farm monitor', 'airport crash monitor', 'foam monitor nozzle',
      'large flow monitor', 'refinery fire tool', 'chemical plant monitor', 'marine terminal monitor', 'master stream device'
    ]
  },
  {
    id: 'rrl-hose-pipe',
    title: 'RRL Hose Pipe',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://kartarvalves.com/wp-content/uploads/2021/07/K-909-R15-GM.jpg',
    desc: 'RRL Hose Pipe (Reinforced Rubber Lined) is a durable delivery hose for firefighting.\n' +
          'Synthetic outer jacket with rubber lining for flexibility and pressure retention.\n' +
          'Resists kinking, abrasion, and heat exposure on the fireground.\n' +
          'Common sizes 63 mm (2.5") and 38 mm (1.5") for attack and supply lines.\n' +
          'High burst pressure rating for safety during intense operations.\n' +
          'Lightweight compared to canvas hoses – easier to handle and deploy.\n' +
          'Tested to IS 636 standards for Indian fire services.\n' +
          'Used in municipal, industrial, and rural firefighting.\n' +
          'Long service life with proper care and storage.\n' +
          'Reliable workhorse hose for everyday fire response.',
    rating: 4.8,
    reviews: 167,
    sold: '220+',
    tags: [
      'rrl hose pipe', 'reinforced rubber lined hose', 'synthetic jacket hose', 'attack line rrl', 'supply line hose',
      'kink resistant hose', 'abrasion resistant hose', 'is 636 hose', 'municipal fire hose', 'industrial hose pipe',
      'rural firefighting hose', 'high burst hose', 'lightweight delivery hose', 'durable fire hose', 'everyday response hose'
    ]
  },
  {
    id: 'scuba-air-cylinder',
    title: 'Scuba Air Cylinder',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.padi.com/sites/default/files/styles/hero_standard/public/2018-01/tank.jpg?itok=DJGCN2bo',
    desc: 'Scuba Air Cylinder (SCBA cylinder) supplies breathable air in smoke-filled or toxic environments.\n' +
          'Aluminum or carbon composite construction for lightweight strength.\n' +
          '30-minute to 60-minute duration depending on capacity (6.8L–9L common).\n' +
          'High-pressure 300 bar rating for extended working time.\n' +
          'Valve with handwheel and pressure gauge for status monitoring.\n' +
          'Compatible with all standard SCBA backplates and face masks.\n' +
          'Hydrostatic testing every 5 years ensures safety.\n' +
          'Essential for interior structural firefighting and hazmat entry.\n' +
          'Critical component of firefighter breathing apparatus.\n' +
          'Reliable air source in IDLH atmospheres.',
    rating: 4.9,
    reviews: 45,
    sold: '60+',
    tags: [
      'scba cylinder', 'breathing air cylinder', 'carbon composite cylinder', '300 bar scba', '30 minute cylinder',
      '60 minute scba tank', 'aluminum air cylinder', 'pressure gauge cylinder', 'hazmat entry cylinder', 'interior firefighting scba',
      'id lh atmosphere tank', 'hydrostatic test cylinder', 'firefighter breathing tank', 'backplate compatible cylinder'
    ]
  },
  {
    id: 'single-hose-reel',
    title: 'Single Hose Reel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41eMKhCgPkL._AC_UF894,1000_QL80_.jpg',
    desc: 'Single Hose Reel provides 30 meters of hose for rapid first-aid firefighting.\n' +
          'Wall-mounted fixed or swing-arm design for easy reach.\n' +
          'Includes adjustable nozzle with jet, fog, and shut-off functions.\n' +
          'Smooth swivel prevents hose twisting during pull-out.\n' +
          'Durable drum and hose resist pressure and wear.\n' +
          'Ideal for offices, apartments, small factories, shops, and garages.\n' +
          'Manual or automatic rewind for quick reset.\n' +
          'Complies with fire safety codes for occupant-use equipment.\n' +
          'Compact footprint with good coverage range.\n' +
          'User-friendly early-stage fire control solution.',
    rating: 4.6,
    reviews: 134,
    sold: '180+',
    tags: [
      'single hose reel', '30 meter fire reel', 'wall mounted hose reel', 'swing arm single reel', 'adjustable nozzle reel',
      'office fire reel', 'apartment hose reel', 'small factory reel', 'garage safety reel', 'quick pull hose reel',
      'anti twist swivel', 'occupant use reel', 'compact single reel', 'early stage firefighting', 'code compliant reel'
    ]
  },
  {
    id: 'smoke-through-fans',
    title: 'Smoke through fans',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://fire-end.com/cdn/shop/articles/PPV-Fire-End-V18-BD_InCompartment-700x700-1.jpg?v=1683820915',
    desc: 'Smoke Through Fans (Positive Pressure Ventilation – PPV fans) clear smoke and heat from buildings.\n' +
          'High-velocity axial fans create positive pressure to push smoke out.\n' +
          'Gasoline, electric, or battery-powered models for different scenes.\n' +
          'Improves visibility, reduces heat, and aids search & rescue.\n' +
          'Portable with carry handles and tilt stand for angle adjustment.\n' +
          'Used in structural fires, vehicle fires, and confined space ventilation.\n' +
          'Increases firefighter safety and speeds interior operations.\n' +
          'Large diameter models for high-volume smoke extraction.\n' +
          'Essential tactical ventilation tool on modern fire engines.\n' +
          'Proven to save lives and reduce property damage.',
    rating: 4.7,
    reviews: 78,
    sold: '100+',
    tags: [
      'smoke through fan', 'positive pressure ventilation', 'ppv fan', 'smoke clearance fan', 'axial fire fan',
      'high velocity fan', 'tactical ventilation tool', 'heat reduction fan', 'search rescue fan', 'confined space fan',
      'gasoline ppv', 'electric smoke fan', 'battery powered fan', 'large diameter fan', 'fire engine ventilation'
    ]
  },
  {
    id: 'fire-extinguisher-dcp-abc-5kg-fire-killer-china',
    title: 'Fire Extinguisher DCP/ABC 5kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.chinafiretech.com/Content/uploads/2020382311/20200720171836b1e8a6cdc01e40dbbb64f65b45dda746.jpg',
    desc: '5kg DCP/ABC Fire Extinguisher from Fire Killer China offers affordable multi-class protection.\n' +
          'Dry chemical powder fights Class A solids, Class B liquids, and Class C gases.\n' +
          'Portable size with easy-carry handle for quick access.\n' +
          'Wall bracket included for visible placement in homes or shops.\n' +
          'Simple pull-pin and squeeze-lever operation.\n' +
          'Pressure gauge confirms unit is charged and ready.\n' +
          'Cost-effective choice for vehicles, small offices, and workshops.\n' +
          'Reliable discharge range and duration for small fires.\n' +
          'Popular entry-level extinguisher in many markets.\n' +
          'Good value for basic fire safety needs.',
    rating: 4.5,
    reviews: 120,
    sold: '500+',
    tags: [
      '5kg abc extinguisher', 'dcp fire killer', 'china fire extinguisher', 'affordable abc unit', 'multi class powder',
      'portable 5kg extinguisher', 'vehicle fire unit', 'small office extinguisher', 'workshop safety extinguisher', 'squeeze lever abc',
      'pressure gauge extinguisher', 'wall bracket unit', 'entry level extinguisher', 'cost effective fire tool', 'basic fire protection'
    ]
  },{
    id: 'fire-extinguisher-co₂-5kg-fire-killer-china',
    title: 'Fire Extinguisher CO₂ – 5kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00eQBkIlOorJbU/High-Quality-Portable-5kg-CO2-Fire-Extinguisher.webp',
    desc: '5kg CO₂ Fire Extinguisher from Fire Killer China is designed for clean, residue-free suppression.\n' +
          'Carbon dioxide gas effectively knocks down Class B flammable liquid and Class E electrical fires.\n' +
          'No conductive or corrosive residue – perfect for electronics, servers, and machinery.\n' +
          'Horn applicator allows precise targeting without spreading the fire.\n' +
          'Portable cylinder with carry handle and wall bracket for quick access.\n' +
          'Simple pull-pin and squeeze-lever operation for instant discharge.\n' +
          'Pressure gauge clearly indicates operational status.\n' +
          'Ideal for offices, data centers, labs, vehicles, and electrical panels.\n' +
          'Affordable, reliable clean-agent option for sensitive areas.\n' +
          'Popular choice for cost-effective electrical fire protection.',
    rating: 4.8,
    reviews: 95,
    sold: '300+',
    tags: [
      '5kg co2 extinguisher', 'carbon dioxide fire killer', 'electrical co2 unit', 'no residue extinguisher', 'china co2 extinguisher',
      'class b co2', 'class e fire extinguisher', 'electronics safe co2', 'server room co2', 'horn applicator extinguisher',
      'portable co2 cylinder', 'affordable clean agent', 'pressure gauge co2', 'lab safety extinguisher', 'vehicle co2 unit'
    ]
  },
  {
    id: 'fire-extinguisher-dcp-abc-1-kg-fire-killer-china',
    title: 'Fire Extinguisher DCP/ABC 1 Kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/51e1Sgm9hhL.jpg',
    desc: 'Compact 1kg DCP/ABC Fire Extinguisher from Fire Killer China is perfect for small spaces.\n' +
          'Dry chemical powder handles Class A solids, Class B liquids, and Class C gases.\n' +
          'Ultra-portable size fits easily in cars, kitchens, offices, and boats.\n' +
          'Quick-grab handle and wall bracket for fast deployment.\n' +
          'Pull-pin and squeeze operation – simple even for untrained users.\n' +
          'Effective short-range discharge for early-stage fires.\n' +
          'Pressure gauge confirms readiness at a glance.\n' +
          'Budget-friendly first-line defense for vehicles and homes.\n' +
          'Lightweight and easy to store without taking much space.\n' +
          'Great entry-level extinguisher for basic safety needs.',
    rating: 4.4,
    reviews: 200,
    sold: '1000+',
    tags: [
      '1kg abc extinguisher', 'compact dcp unit', 'fire killer 1kg', 'vehicle extinguisher', 'small space fire tool',
      'portable abc powder', 'car fire extinguisher', 'kitchen safety unit', 'budget fire extinguisher', 'easy use extinguisher',
      'pressure gauge 1kg', 'early stage suppression', 'home car boat unit', 'lightweight dcp', 'entry level extinguisher'
    ]
  },
  {
    id: 'fire-killer-co₂-3kg-fire-extinguisher',
    title: 'Fire Killer CO₂ – 3kg Fire Extinguisher',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://firefightingtool.com/2018/products/2-3-portable-co2-fire-extinguisher_02.jpg',
    desc: '3kg CO₂ Fire Extinguisher from Fire Killer provides clean suppression for electrical hazards.\n' +
          'Carbon dioxide displaces oxygen to extinguish Class B and Class E fires quickly.\n' +
          'Zero residue ensures no damage to sensitive equipment or electronics.\n' +
          'Frost-free horn for safe, precise application without freezing.\n' +
          'Medium-size cylinder balances portability and discharge duration.\n' +
          'Pull-pin safety and lever grip for intuitive operation.\n' +
          'Wall mount included for strategic placement near risks.\n' +
          'Suitable for offices, workshops, server racks, and vehicles.\n' +
          'Reliable clean-agent performance at an accessible size.\n' +
          'Strong choice for areas with live electrical equipment.',
    rating: 4.7,
    reviews: 80,
    sold: '400+',
    tags: [
      '3kg co2 extinguisher', 'fire killer co2', 'frost free horn co2', 'electrical fire unit', 'no residue co2',
      'class b electrical extinguisher', 'portable 3kg co2', 'server rack safety', 'workshop co2 unit', 'clean suppression tool',
      'medium size co2', 'lever grip extinguisher', 'vehicle electrical unit', 'reliable co2 cylinder', 'accessible clean agent'
    ]
  },
  {
    id: 'fire-extinguisher-1kg-powder-bsi-kitemark',
    title: 'Fire Extinguisher 1KG powder (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://nwzimg.wezhan.hk/contents/sitefiles3604/18023698/images/3410950.jpg',
    desc: '1kg Dry Powder Fire Extinguisher with BSI Kitemark certification ensures trusted quality.\n' +
          'ABC powder effectively tackles Class A, B, and C fires in compact form.\n' +
          'Ultra-lightweight and portable – ideal for vehicles, homes, and small offices.\n' +
          'BSI Kitemark guarantees compliance with rigorous British standards.\n' +
          'Quick activation with pull-pin and squeeze-grip mechanism.\n' +
          'Clear pressure indicator for maintenance checks.\n' +
          'Wall bracket for visible, ready-access mounting.\n' +
          'Minimal size with maximum versatility for early intervention.\n' +
          'Excellent choice for basic, certified fire safety.\n' +
          'Proven reliable performance in real-world use.',
    rating: 4.9,
    reviews: 150,
    sold: '600+',
    tags: [
      '1kg powder extinguisher', 'bsi kitemark extinguisher', 'certified abc unit', 'compact dry powder', 'vehicle powder extinguisher',
      'home safety 1kg', 'bsi approved fire tool', 'quick activation powder', 'pressure indicator extinguisher', 'small office unit',
      'wall mount certified', 'early intervention extinguisher', 'british standard extinguisher', 'lightweight abc', 'trusted quality unit'
    ]
  },
  {
    id: 'fire-extinguisher-2kg-powder-bsi-kitemark',
    title: 'Fire Extinguisher 2Kg powder (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://nwzimg.wezhan.hk/contents/sitefiles3604/18023698/images/3410690.jpg',
    desc: '2kg Dry Powder Fire Extinguisher carries BSI Kitemark for verified safety and performance.\n' +
          'ABC multi-purpose powder covers Class A solids, B liquids, and C gases.\n' +
          'Balanced size – more capacity than 1kg while remaining highly portable.\n' +
          'BSI certification ensures it meets strict UK/European quality standards.\n' +
          'Ergonomic handle and squeeze lever for easy one-handed use.\n' +
          'Built-in pressure gauge for at-a-glance readiness check.\n' +
          'Ideal for offices, shops, workshops, kitchens, and vehicles.\n' +
          'Wall bracket included for strategic placement.\n' +
          'Reliable discharge range for small to medium fires.\n' +
          'Great mid-size certified option for everyday protection.',
    rating: 4.8,
    reviews: 140,
    sold: '700+',
    tags: [
      '2kg powder extinguisher', 'bsi kitemark powder', 'mid size abc unit', 'certified dry powder', 'office 2kg extinguisher',
      'workshop safety unit', 'bsi approved 2kg', 'ergonomic powder extinguisher', 'pressure gauge 2kg', 'vehicle mid size',
      'kitchen fire tool', 'balanced capacity extinguisher', 'uk standard extinguisher', 'reliable abc powder', 'everyday certified unit'
    ]
  },
  {
    id: 'fire-extinguisher-4kg-powder',
    title: 'Fire Extinguisher 4Kg powder',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://nwzimg.wezhan.hk/contents/sitefiles3604/18023698/images/3410664.jpg',
    desc: '4kg Dry Powder Fire Extinguisher delivers increased capacity for medium-risk areas.\n' +
          'ABC powder suppresses Class A, B, and C fires with strong discharge power.\n' +
          'Larger cylinder provides longer discharge time than smaller units.\n' +
          'Robust carry handle and sturdy base for easy transport.\n' +
          'Squeeze-grip valve for controlled, precise application.\n' +
          'Pressure gauge and safety pin for user confidence.\n' +
          'Suitable for factories, warehouses, garages, and commercial spaces.\n' +
          'Wall or trolley mount options available.\n' +
          'Effective balance of portability and firefighting duration.\n' +
          'Solid mid-range choice for higher-hazard locations.',
    rating: 4.6,
    reviews: 110,
    sold: '500+',
    tags: [
      '4kg powder extinguisher', 'medium capacity abc', 'dry powder 4kg', 'factory extinguisher', 'warehouse fire unit',
      'garage safety extinguisher', 'long discharge powder', 'squeeze grip 4kg', 'pressure gauge extinguisher', 'commercial abc unit',
      'higher hazard extinguisher', 'robust carry extinguisher', 'balanced portability unit', 'mid range fire tool', 'strong discharge powder'
    ]
  },
  {
    id: 'fire-extinguisher-6kg-dry-powder-bsi-kitemark',
    title: 'Fire Extinguisher 6Kg Dry Powder (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://nwzimg.wezhan.hk/contents/sitefiles3604/18023698/images/3410696.jpg',
    desc: '6kg Dry Powder Fire Extinguisher with BSI Kitemark offers certified high-capacity protection.\n' +
          'ABC powder tackles Class A, B, and C fires with extended discharge.\n' +
          'BSI Kitemark confirms compliance with rigorous quality and performance standards.\n' +
          'Heavy-duty cylinder with ergonomic handle for transport.\n' +
          'Full-flow valve for rapid knockdown of larger fires.\n' +
          'Pressure gauge and tamper seal for safety assurance.\n' +
          'Ideal for industrial sites, workshops, fuel storage, and large offices.\n' +
          'Wall bracket or optional trolley for placement flexibility.\n' +
          'Reliable for medium to high-risk environments.\n' +
          'Trusted certified option for serious fire threats.',
    rating: 4.9,
    reviews: 130,
    sold: '400+',
    tags: [
      '6kg dry powder', 'bsi kitemark 6kg', 'high capacity abc', 'industrial extinguisher', 'workshop 6kg unit',
      'fuel storage extinguisher', 'full flow valve powder', 'certified high capacity', 'pressure gauge 6kg', 'large office safety',
      'tamper seal extinguisher', 'ergonomic heavy unit', 'medium risk extinguisher', 'serious fire protection', 'trusted bsi unit'
    ]
  },
  {
    id: 'fire-extinguisher-9kg-powder-bsi-kitemark',
    title: 'Fire Extinguisher 9Kg powder (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.firesupplies.ae/wp-content/uploads/2023/10/bristol-bfe50p-50kg-dry-powder-trolley-extinguisher-bsi-kitemark.jpg',
    desc: '9kg Dry Powder Fire Extinguisher with BSI Kitemark provides substantial suppression power.\n' +
          'ABC multi-class powder for solids, liquids, gases, and electrical fires.\n' +
          'BSI certification guarantees high-quality manufacturing and testing.\n' +
          'Large cylinder with wide base for stability during use.\n' +
          'High-volume discharge for faster knockdown of bigger fires.\n' +
          'Reinforced handle and pressure gauge for safe operation.\n' +
          'Suited for factories, warehouses, petrol stations, and large facilities.\n' +
          'Often trolley-mounted for mobility in big spaces.\n' +
          'Excellent for high-risk areas requiring longer runtime.\n' +
          'Premium certified choice for demanding environments.',
    rating: 4.8,
    reviews: 90,
    sold: '300+',
    tags: [
      '9kg powder extinguisher', 'bsi kitemark 9kg', 'large capacity abc', 'factory 9kg unit', 'warehouse heavy extinguisher',
      'petrol station safety', 'high volume discharge', 'reinforced handle extinguisher', 'trolley optional unit', 'high risk extinguisher',
      'long runtime powder', 'premium certified abc', 'demanding environment tool', 'stability base extinguisher', 'big facility protection'
    ]
  },
  {
    id: 'fire-extinguisher-12kg-powder-bsi-kitemark',
    title: 'Fire Extinguisher 12Kg powder (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://nwzimg.wezhan.hk/contents/sitefiles3604/18023698/images/3410664.jpg',
    desc: '12kg Dry Powder Fire Extinguisher with BSI Kitemark is built for heavy-duty applications.\n' +
          'ABC powder delivers powerful multi-class fire knockdown.\n' +
          'BSI Kitemark ensures superior build quality and reliability.\n' +
          'Extra-large capacity for prolonged discharge on large fires.\n' +
          'Robust construction with strong carry handles.\n' +
          'Full-pressure valve for maximum flow rate.\n' +
          'Ideal for industrial plants, fuel depots, hangars, and high-hazard zones.\n' +
          'Typically trolley-mounted for easy positioning.\n' +
          'Pressure gauge and safety features for operator confidence.\n' +
          'Top-tier choice for maximum protection in critical areas.',
    rating: 4.7,
    reviews: 70,
    sold: '200+',
    tags: [
      '12kg powder extinguisher', 'bsi kitemark heavy', 'extra large abc', 'industrial heavy unit', 'fuel depot extinguisher',
      'hangar fire tool', 'prolonged discharge powder', 'robust heavy extinguisher', 'trolley mounted 12kg', 'high hazard protection',
      'maximum flow valve', 'critical area unit', 'top tier extinguisher', 'strong handle powder', 'heavy duty certified'
    ]
  },
  {
    id: 'fire-extinguisher-9lt-foam-bsi-kitemark',
    title: 'Fire Extinguisher 9Lt Foam (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sc04.alicdn.com/kf/HTB14xTMgxHI8KJjy1zbq6yxdpXaY.jpg',
    desc: '9L Foam Fire Extinguisher with BSI Kitemark excels on Class A and B fires.\n' +
          'AFFF or FFFP foam creates blanket to smother flammable liquids.\n' +
          'BSI certification guarantees performance and safety compliance.\n' +
          'Effective on petrol, diesel, paints, and solid combustibles.\n' +
          '9-liter capacity offers good runtime for medium incidents.\n' +
          'Squeeze valve for controlled foam application.\n' +
          'Ideal for garages, workshops, kitchens, and fuel handling areas.\n' +
          'Pressure gauge and mounting bracket included.\n' +
          'Prevents re-flash by sealing fuel surfaces.\n' +
          'Certified reliable foam protection for liquid hazards.',
    rating: 4.6,
    reviews: 85,
    sold: '250+',
    tags: [
      '9lt foam extinguisher', 'bsi kitemark foam', 'class b foam unit', 'afff fire extinguisher', 'fuel fire blanket',
      'garage foam extinguisher', 'workshop liquid safety', '9 liter foam', 'controlled foam valve', 're-flash prevention',
      'kitchen foam unit', 'certified foam tool', 'medium incident extinguisher', 'liquid hazard protection', 'pressure gauge foam'
    ]
  },
  {
    id: 'fire-extinguisher-6lt-wet-chemical-bsi-kitemark',
    title: 'Fire Extinguisher 6Lt Wet Chemical (BSI KITEMARK)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.brave.com.sg/cdn/shop/files/Hercules-6L-Fire-Extinguisher-Shopify.jpg?crop=center&height=500&v=1763617934&width=600',
    desc: '6L Wet Chemical Fire Extinguisher with BSI Kitemark is specialized for kitchen fires.\n' +
          'Wet chemical agent cools and saponifies cooking oils and fats.\n' +
          'Prevents re-ignition by forming a foam seal on the surface.\n' +
          'BSI Kitemark certifies compliance with strict fire standards.\n' +
          'Gentle discharge wand minimizes splash-back on hot oils.\n' +
          'Effective on Class F (cooking oil) and Class A fires.\n' +
          'Ideal for commercial kitchens, restaurants, and canteens.\n' +
          '6-liter size balances power and maneuverability.\n' +
          'Wall mount bracket for easy access near cooking stations.\n' +
          'Essential modern solution for deep-fat fryer fires.',
    rating: 4.9,
    reviews: 100,
    sold: '300+',
    tags: [
      '6lt wet chemical', 'bsi kitemark wet', 'class f extinguisher', 'kitchen fire unit', 'cooking oil extinguisher',
      'saponification agent', 're-ignition prevention', 'gentle discharge wand', 'restaurant safety', 'commercial kitchen tool',
      'deep fat fryer extinguisher', 'certified wet chemical', 'canister foam seal', 'hot oil safety', 'modern kitchen protection'
    ]
  },
  {
    id: 'fire-extinguisher-9lt-water-mobiak-bsi-kitemark-certified',
    title: 'Fire Extinguisher 9Lt Water – Mobiak (BSI KITEMARK Certified)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.vintexfire.com/assets/images/products/fire-extinguishers/9_liter_Water_Type_Stored_Pressure_Fire_Extinguisher.jpg',
    desc: '9L Water Fire Extinguisher from Mobiak with BSI Kitemark is optimized for Class A fires.\n' +
          'Cools burning solids like wood, paper, textiles, and plastics.\n' +
          'Stored pressure design with high discharge rate.\n' +
          'BSI certification ensures premium quality and reliability.\n' +
          'Long-range jet nozzle for safe-distance application.\n' +
          '9-liter capacity provides extended runtime for larger solids fires.\n' +
          'Suitable for offices, schools, warehouses, and residential buildings.\n' +
          'Simple operation with squeeze grip and safety pin.\n' +
          'Pressure gauge and mounting bracket included.\n' +
          'Eco-friendly water-based option for everyday Class A risks.',
    rating: 4.5,
    reviews: 60,
    sold: '200+',
    tags: [
      '9lt water extinguisher', 'mobiak water unit', 'bsi kitemark water', 'class a extinguisher', 'solid fire cooling',
      'long range water jet', 'office water extinguisher', 'school safety unit', 'warehouse class a', 'eco friendly extinguisher',
      'stored pressure water', 'extended runtime unit', 'premium certified water', 'residential fire tool', 'high discharge water'
    ]
  },
  {
    id: 'fire-extinguisher-5kg-co2-portable-mobiak',
    title: 'Fire Extinguisher 5Kg CO2 Portable – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.firesafetysearch.com/wp-content/uploads/2019/04/5Kg-CO2-Fire-Extinguisher.jpg',
    desc: '5kg CO₂ Portable Fire Extinguisher from Mobiak offers premium clean suppression.\n' +
          'Carbon dioxide safely extinguishes electrical and flammable liquid fires.\n' +
          'No residue or cleanup needed – ideal for sensitive equipment.\n' +
          'Non-conductive discharge protects live circuits.\n' +
          'Frost-free horn and ergonomic handle for precise, comfortable use.\n' +
          'Premium Mobiak build quality with high reliability.\n' +
          'Pressure gauge and wall bracket for readiness and placement.\n' +
          'Perfect for data centers, offices, labs, and electrical rooms.\n' +
          '5kg size balances capacity and portability.\n' +
          'High-end CO₂ solution for critical asset protection.',
    rating: 4.8,
    reviews: 75,
    sold: '150+',
    tags: [
      '5kg co2 mobiak', 'portable co2 premium', 'clean agent mobiak', 'electrical co2 5kg', 'no residue mobiak',
      'frost free co2 horn', 'data center extinguisher', 'lab co2 unit', 'premium co2 cylinder', 'sensitive equipment safety',
      'non conductive discharge', 'ergonomic co2 handle', 'high reliability co2', 'critical asset protection', 'mobiak quality unit'
    ]
  },
  {
    id: 'fire-extinguisher-2kg-co2-portable-mobiak',
    title: 'Fire Extinguisher 2Kg CO2 Portable – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://firefightingtool.com/2018/products/2-3-portable-co2-fire-extinguisher_09.jpg',
    desc: '2kg CO₂ Portable Fire Extinguisher from Mobiak is compact and premium.\n' +
          'Carbon dioxide suppresses electrical and liquid fires cleanly.\n' +
          'Zero residue – safe for computers, servers, and delicate machinery.\n' +
          'Frost-free horn prevents hand freeze during discharge.\n' +
          'Lightweight cylinder with comfortable carry handle.\n' +
          'Mobiak premium construction for long-term reliability.\n' +
          'Pressure gauge and mounting bracket included.\n' +
          'Ideal for offices, vehicles, small labs, and electrical panels.\n' +
          'Quick, clean suppression in a small footprint.\n' +
          'Excellent portable clean-agent choice.',
    rating: 4.7,
    reviews: 65,
    sold: '180+',
    tags: [
      '2kg co2 mobiak', 'compact co2 portable', 'frost free mobiak', 'electrical small co2', 'zero residue extinguisher',
      'vehicle co2 2kg', 'office clean agent', 'premium mobiak co2', 'lightweight co2 cylinder', 'small lab safety',
      'pressure gauge portable', 'carry handle co2', 'reliable small co2', 'clean suppression compact', 'electrical panel unit'
    ]
  },
  {
    id: 'trolley-fire-extinguisher-25kg-dry-powder-welded-mobiak',
    title: 'Trolley Fire Extinguisher 25Kg Dry Powder Welded – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/318f0j00PaeYtmbqvVrU/1-17-mp4.webp',
    desc: '25kg Dry Powder Trolley Extinguisher from Mobiak is welded for maximum durability.\n' +
          'ABC powder provides powerful multi-class suppression.\n' +
          'Large 25kg capacity for extended discharge on big fires.\n' +
          'Heavy-duty trolley frame with solid wheels for mobility.\n' +
          'Long hose and pistol nozzle for safe-distance attack.\n' +
          'Mobiak quality welding ensures structural integrity.\n' +
          'Ideal for petrochemical plants, warehouses, and large yards.\n' +
          'Quick-open valve for immediate full flow.\n' +
          'Pressure gauge and safety features for operator security.\n' +
          'High-capacity mobile unit for industrial-scale hazards.',
    rating: 4.9,
    reviews: 50,
    sold: '100+',
    tags: [
      '25kg dry powder trolley', 'mobiak welded trolley', 'high capacity abc trolley', 'industrial powder unit', 'petrochemical trolley',
      'warehouse large extinguisher', 'long hose trolley', 'solid wheel cart', 'quick open valve', 'durable welded frame',
      'extended discharge trolley', 'mobile industrial unit', 'large yard safety', 'pressure gauge trolley', 'heavy duty powder'
    ]
  },
  {
    id: 'trolley-fire-extinguisher-50kg-dry-powder-welded-mobiak',
    title: 'Trolley Fire Extinguisher 50kg Dry Powder Welded – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sffecoglobal.com/wp-content/uploads/2017/07/1.-ABC-Powder-Mobile-Trolley-Extinguishers.png',
    desc: '50kg Dry Powder Trolley Extinguisher from Mobiak is built for massive fire risks.\n' +
          'ABC powder delivers enormous multi-class suppression power.\n' +
          'Extra-large 50kg capacity for prolonged, high-volume discharge.\n' +
          'Reinforced welded trolley with heavy-duty wheels and handle.\n' +
          'Extended hose and adjustable nozzle for controlled reach.\n' +
          'Mobiak premium welding for extreme durability.\n' +
          'Perfect for refineries, fuel farms, airports, and heavy industry.\n' +
          'Rapid valve activation for instant response.\n' +
          'Pressure gauge and safety pin for secure operation.\n' +
          'Ultimate mobile suppression for the largest hazards.',
    rating: 4.8,
    reviews: 40,
    sold: '80+',
    tags: [
      '50kg dry powder trolley', 'mobiak heavy trolley', 'extra large abc unit', 'refinery trolley extinguisher', 'fuel farm safety',
      'airport heavy unit', 'reinforced welded cart', 'prolonged discharge trolley', 'heavy industry powder', 'extended hose 50kg',
      'rapid valve trolley', 'ultimate mobile suppression', 'pressure gauge heavy', 'extreme durability unit', 'massive fire risk tool'
    ]
  },
  {
    id: 'trolley-fire-extinguisher-25lt-foam-mobiak',
    title: 'Trolley Fire Extinguisher 25Lt Foam – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://firefightingtool.com/2018/products/2-7-trolley-foam-fire-extinguisher_01.jpg',
    desc: '25L Foam Trolley Extinguisher from Mobiak handles large Class A and B fires.\n' +
          'Foam agent blankets flammable liquids and prevents re-ignition.\n' +
          '25-liter tank on wheeled trolley for easy transport to scene.\n' +
          'Long discharge hose and branch pipe for safe application.\n' +
          'Mobiak quality construction for industrial reliability.\n' +
          'Ideal for fuel stations, chemical storage, hangars, and loading bays.\n' +
          'Quick valve for immediate foam generation.\n' +
          'Pressure gauge and secure mounting on cart.\n' +
          'High-capacity foam solution for liquid spill fires.\n' +
          'Effective large-area suppression on wheels.',
    rating: 4.7,
    reviews: 45,
    sold: '90+',
    tags: [
      '25lt foam trolley', 'mobiak foam cart', 'class b foam trolley', 'fuel station extinguisher', 'chemical storage unit',
      'hangar foam trolley', 'long hose foam cart', 'blanket foam agent', 'quick valve trolley', 'industrial foam solution',
      'liquid spill suppression', 'pressure gauge foam', 'wheeled foam unit', 'large area trolley', 're-ignition prevention cart'
    ]
  },
  {
    id: 'trolley-fire-extinguisher-50lt-foam-mobiak',
    title: 'Trolley Fire Extinguisher 50Lt Foam – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://luluhardware.com/wp-content/uploads/2024/02/50L-Mobile-Foam-Fire-Extinguishers-Ce-Bsi-Approved-1200x675.jpg',
    desc: '50L Foam Trolley Extinguisher from Mobiak is designed for massive liquid fires.\n' +
          'Large 50-liter foam capacity creates thick blanket on spills.\n' +
          'Heavy-duty trolley with large wheels for rough terrain mobility.\n' +
          'Extended hose and foam branch for distant, controlled application.\n' +
          'Mobiak premium build for long-term industrial use.\n' +
          'Perfect for airports, refineries, chemical plants, and marine terminals.\n' +
          'Rapid activation valve for fast foam deployment.\n' +
          'Pressure gauge and safety features included.\n' +
          'Ultimate mobile foam unit for high-volume hazards.\n' +
          'Prevents escalation of large flammable liquid incidents.',
    rating: 4.8,
    reviews: 35,
    sold: '70+',
    tags: [
      '50lt foam trolley', 'mobiak large foam', 'high volume foam unit', 'airport foam trolley', 'refinery foam cart',
      'chemical plant extinguisher', 'extended hose 50l', 'thick blanket foam', 'rough terrain trolley', 'marine terminal unit',
      'rapid foam activation', 'premium foam trolley', 'large spill suppression', 'mobile high hazard', 'escalation prevention tool'
    ]
  }
,
  {
    id: 'trolley-30kg-co₂-fire-extinguisher-mobiak',
    title: 'Trolley 30kg CO₂ Fire Extinguisher – Mobiak',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sffecoglobal.com/wp-content/uploads/2017/07/3.-CO2-Mobile-Trolley-Extinguishers.png',
    desc: '30kg CO₂ Trolley Extinguisher from Mobiak delivers massive clean-agent capacity.\n' +
          'Carbon dioxide suppresses large electrical and flammable liquid fires without residue.\n' +
          'Heavy-duty trolley frame with large wheels for easy movement to hazard zones.\n' +
          'Long discharge hose and horn applicator for precise, safe-distance application.\n' +
          'Mobiak premium construction ensures reliability under industrial stress.\n' +
          'Ideal for power stations, data centers, aircraft hangars, and electrical substations.\n' +
          'Quick valve activation for immediate high-volume discharge.\n' +
          'Pressure gauge and safety features for operator confidence.\n' +
          'High-capacity mobile clean suppression for critical infrastructure.\n' +
          'Prevents damage to expensive equipment during large-scale incidents.',
    rating: 4.9,
    reviews: 30,
    sold: '50+',
    tags: [
      '30kg co2 trolley', 'mobiak co2 cart', 'large capacity co2', 'electrical trolley extinguisher', 'data center co2 unit',
      'hangar co2 trolley', 'long hose co2 cart', 'no residue trolley', 'power station safety', 'substation fire tool',
      'quick valve co2', 'premium mobiak trolley', 'clean agent heavy unit', 'critical infrastructure protection', 'mobile co2 suppression'
    ]
  },
  {
    id: 'foam-trolley-fire-extinguisher-50kg-fire-killer-china',
    title: 'Foam Trolley Fire Extinguisher – 50KG Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://springextinguishers.co.ke/wp-content/uploads/2024/03/AFFF-FOAM-TROLLEY-25LTRS.png',
    desc: '50kg Foam Trolley Extinguisher from Fire Killer China offers affordable high-volume foam suppression.\n' +
          'AFFF or similar foam blankets Class B flammable liquids and Class A solids.\n' +
          'Large 50kg tank on wheeled trolley for mobility in big facilities.\n' +
          'Extended hose and foam nozzle for controlled application over distance.\n' +
          'Cost-effective solution for fuel depots, garages, and industrial yards.\n' +
          'Quick-open valve for rapid foam generation.\n' +
          'Rugged cart withstands rough handling and outdoor use.\n' +
          'Prevents re-ignition by sealing fuel surfaces effectively.\n' +
          'Great value mobile unit for medium to large liquid fire risks.\n' +
          'Popular choice for budget-conscious high-hazard sites.',
    rating: 4.5,
    reviews: 55,
    sold: '150+',
    tags: [
      '50kg foam trolley', 'fire killer foam cart', 'affordable foam unit', 'class b foam trolley', 'fuel depot extinguisher',
      'garage foam trolley', 'extended hose foam', 're-ignition prevention cart', 'industrial yard safety', 'quick valve foam',
      'rugged foam trolley', 'budget high volume unit', 'liquid fire blanket', 'medium large risk tool', 'value mobile suppression'
    ]
  },
  {
    id: 'fire-extinguisher-automatic-ceiling-mounted-dcp-6kg-fire-killer',
    title: 'Fire Extinguisher Automatic Ceiling-Mounted DCP – 6KG Fire Killer',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sea-max-fire.com/wp-content/uploads/2019/12/2.jpg',
    desc: '6kg Automatic Ceiling-Mounted DCP Extinguisher from Fire Killer activates without human input.\n' +
          'Dry chemical powder releases when temperature reaches activation point.\n' +
          'Ceiling installation provides 360° coverage in enclosed risk areas.\n' +
          'Ideal for electrical panels, server rooms, warehouses, and storage spaces.\n' +
          'Hands-free suppression reduces fire spread in unoccupied zones.\n' +
          'Minimal residue compared to water-based systems.\n' +
          'Easy installation with mounting bracket and thermal trigger.\n' +
          'Pressure gauge allows visual readiness check.\n' +
          'Affordable automatic protection for high-risk unattended locations.\n' +
          'Passive fire safety solution for 24/7 coverage.',
    rating: 4.6,
    reviews: 90,
    sold: '400+',
    tags: [
      'automatic ceiling extinguisher', '6kg dcp automatic', 'fire killer ceiling unit', 'thermal trigger extinguisher', 'hands free dcp',
      'server room automatic', 'warehouse ceiling unit', 'unoccupied protection', '360 coverage extinguisher', 'passive fire safety',
      'minimal residue unit', 'easy mount automatic', 'pressure gauge ceiling', '24/7 fire guard', 'affordable automatic dcp'
    ]
  },
  {
    id: 'fire-extinguisher-wet-chemical-6l-fire-killer-china',
    title: 'Fire Extinguisher Wet Chemical – 6L Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.blackwoodfire.co.uk/images/firepower/wet-chemical-extinguishers-with-key-points.jpg',
    desc: '6L Wet Chemical Fire Extinguisher from Fire Killer China is specialized for kitchen hazards.\n' +
          'Wet chemical agent cools and saponifies burning cooking oils and fats.\n' +
          'Forms thick foam blanket to prevent re-ignition of hot oils.\n' +
          'Gentle spray wand reduces splash-back and fire spread.\n' +
          'Effective on Class F (cooking oil) and Class A solid fires.\n' +
          'Ideal for restaurants, commercial kitchens, canteens, and food processing.\n' +
          'Simple squeeze valve for controlled discharge.\n' +
          'Wall bracket for placement near cooking stations.\n' +
          'Affordable, reliable solution for deep-fat fryer and stove fires.\n' +
          'Essential modern kitchen fire safety tool.',
    rating: 4.7,
    reviews: 70,
    sold: '200+',
    tags: [
      '6l wet chemical extinguisher', 'fire killer wet unit', 'class f kitchen extinguisher', 'cooking oil suppression', 'saponification foam',
      'gentle spray wand', 'restaurant fire tool', 'commercial kitchen safety', 're-ignition prevention wet', 'stove fire extinguisher',
      'squeeze valve wet', 'wall mount kitchen unit', 'deep fat fryer safety', 'affordable class f', 'food processing extinguisher'
    ]
  },
  {
    id: 'fire-extinguisher-foam-9l-fire-killer-china',
    title: 'Fire Extinguisher Foam – 9L Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://2.wlimg.com/product_images/bc-full/dir_12/341436/foam-fire-extinguisher-1485077.jpg',
    desc: '9L Foam Fire Extinguisher from Fire Killer China provides effective Class A and B protection.\n' +
          'AFFF foam creates insulating blanket on flammable liquids.\n' +
          'Cools and suppresses burning solids like wood and paper.\n' +
          '9-liter capacity offers good runtime for medium incidents.\n' +
          'Squeeze-grip valve for precise foam application.\n' +
          'Suitable for garages, workshops, fuel handling, and small industrial areas.\n' +
          'Wall bracket included for visible, ready-access mounting.\n' +
          'Pressure gauge confirms unit readiness.\n' +
          'Cost-effective foam solution for liquid and solid fire risks.\n' +
          'Reliable choice for budget-conscious locations.',
    rating: 4.5,
    reviews: 80,
    sold: '300+',
    tags: [
      '9l foam extinguisher', 'fire killer foam unit', 'class b foam 9l', 'afff foam extinguisher', 'garage foam safety',
      'workshop liquid extinguisher', 'fuel handling foam', 'medium runtime foam', 'squeeze grip foam', 'pressure gauge 9l',
      'wall mount foam unit', 'cost effective foam', 'liquid solid suppression', 'industrial small foam', 'blanket foam agent'
    ]
  },
  {
    id: 'fire-extinguisher-water-9l-fire-killer-china',
    title: 'Fire Extinguisher Water – 9L Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71Je2Dv9XoL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg',
    desc: '9L Water Fire Extinguisher from Fire Killer China is optimized for Class A combustibles.\n' +
          'Cools and saturates burning wood, paper, textiles, and plastics.\n' +
          '9-liter tank provides extended discharge for larger solid fires.\n' +
          'Jet nozzle delivers long-range stream for safe-distance use.\n' +
          'Simple squeeze valve and safety pin for quick activation.\n' +
          'Pressure gauge shows operational status.\n' +
          'Ideal for offices, schools, warehouses, homes, and retail spaces.\n' +
          'Eco-friendly water-based suppression with no chemical residue.\n' +
          'Wall bracket for strategic placement.\n' +
          'Affordable, straightforward Class A protection.',
    rating: 4.4,
    reviews: 100,
    sold: '400+',
    tags: [
      '9l water extinguisher', 'fire killer water unit', 'class a water 9l', 'solid fire cooling', 'long range water jet',
      'office water extinguisher', 'school safety water', 'warehouse class a unit', 'eco friendly extinguisher', 'squeeze valve water',
      'pressure gauge 9l water', 'wall mount water unit', 'retail fire tool', 'affordable class a', 'no residue water suppression'
    ]
  },
  {
    id: 'fire-extinguisher-dcp-abc-12kg-fire-killer-china',
    title: 'Fire Extinguisher DCP/ABC 12kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://fireextinguisher.me/wp-content/uploads/2019/09/5-KG-ABC.png',
    desc: '12kg DCP/ABC Fire Extinguisher from Fire Killer China handles large multi-class fires.\n' +
          'Dry chemical powder suppresses Class A, B, and C fires effectively.\n' +
          'High-capacity cylinder for prolonged discharge on bigger incidents.\n' +
          'Robust handle and base for stable operation.\n' +
          'Full-flow valve for rapid knockdown power.\n' +
          'Suitable for factories, warehouses, garages, and fuel storage.\n' +
          'Pressure gauge and mounting options included.\n' +
          'Cost-effective large-size solution for higher-risk areas.\n' +
          'Reliable performance in demanding environments.\n' +
          'Great value for industrial-grade protection.',
    rating: 4.6,
    reviews: 110,
    sold: '350+',
    tags: [
      '12kg abc extinguisher', 'fire killer 12kg', 'large capacity dcp', 'industrial abc unit', 'warehouse 12kg extinguisher',
      'fuel storage powder', 'prolonged discharge abc', 'full flow valve extinguisher', 'robust handle unit', 'pressure gauge 12kg',
      'factory fire tool', 'cost effective large', 'higher risk protection', 'reliable industrial extinguisher', 'multi class heavy'
    ]
  },
  {
    id: 'fire-extinguisher-dcp-abc-6kg-fire-killer-china',
    title: 'Fire Extinguisher DCP/ABC 6kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00hWntSEMJEBzi/ABC-Fire-Extinguisher-MFZ-5KG-.webp',
    desc: '6kg DCP/ABC Fire Extinguisher from Fire Killer China is a standard multi-purpose unit.\n' +
          'ABC dry powder fights Class A solids, B liquids, and C gases.\n' +
          'Balanced 6kg size offers good capacity and easy handling.\n' +
          'Squeeze-grip valve for controlled discharge.\n' +
          'Pressure gauge and wall bracket for readiness and placement.\n' +
          'Ideal for workshops, offices, small factories, and commercial spaces.\n' +
          'Reliable discharge range for medium fires.\n' +
          'Affordable, widely used extinguisher model.\n' +
          'Simple and effective for everyday fire risks.\n' +
          'Trusted basic protection at good value.',
    rating: 4.5,
    reviews: 130,
    sold: '500+',
    tags: [
      '6kg abc extinguisher', 'fire killer 6kg', 'standard multi purpose', 'workshop abc unit', 'office dry powder',
      'small factory extinguisher', 'squeeze grip 6kg', 'pressure gauge abc', 'wall mount standard', 'medium fire capacity',
      'affordable abc unit', 'widely used extinguisher', 'everyday fire protection', 'reliable basic tool', 'good value abc'
    ]
  },
  {
    id: 'fire-extinguisher-dcp-abc-4kg-fire-killer-china',
    title: 'Fire Extinguisher DCP/ABC 4kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://s.alicdn.com/@sc01/kf/HTB1TesMXrH1gK0jSZFwq6A7aXXac/223477909/HTB1TesMXrH1gK0jSZFwq6A7aXXac.jpg',
    desc: '4kg DCP/ABC Fire Extinguisher from Fire Killer China is a versatile mid-size unit.\n' +
          'Dry chemical powder covers Class A, B, and C fire types.\n' +
          '4kg capacity provides longer runtime than smaller models.\n' +
          'Ergonomic handle and stable base for easy use.\n' +
          'Squeeze valve for precise foam-like powder application.\n' +
          'Pressure gauge confirms charge status.\n' +
          'Suitable for garages, small warehouses, shops, and homes.\n' +
          'Wall bracket for visible mounting near risks.\n' +
          'Cost-effective balance of size and performance.\n' +
          'Popular mid-range extinguisher for general use.',
    rating: 4.4,
    reviews: 140,
    sold: '600+',
    tags: [
      '4kg abc extinguisher', 'fire killer 4kg', 'mid size dcp', 'garage powder unit', 'small warehouse extinguisher',
      'shop safety abc', 'longer runtime 4kg', 'ergonomic handle extinguisher', 'pressure gauge mid', 'wall mount 4kg',
      'cost effective mid range', 'general use extinguisher', 'versatile dry powder', 'stable base unit', 'popular abc size'
    ]
  },
  {
    id: 'fire-extinguisher-dcp-abc-3kg-fire-killer-china',
    title: 'Fire Extinguisher DCP/ABC 3kg Fire Killer China',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.brave.com.sg/cdn/shop/files/Hercules-1KG-Dry-Powder-Fire-Extinguisher-Shopify_5d97ba07-1759-4491-9ae4-2c1a0a941dc3.jpg?crop=center&height=500&v=1762322419&width=600',
    desc: '3kg DCP/ABC Fire Extinguisher from Fire Killer China offers compact multi-class defense.\n' +
          'ABC powder tackles solids, liquids, gases, and electrical fires.\n' +
          '3kg size is highly portable yet has decent discharge duration.\n' +
          'Lightweight cylinder with easy-carry handle.\n' +
          'Quick squeeze lever and safety pin for fast activation.\n' +
          'Pressure gauge for readiness verification.\n' +
          'Perfect for homes, small offices, cars, boats, and apartments.\n' +
          'Wall bracket included for strategic placement.\n' +
          'Affordable, space-saving solution for everyday risks.\n' +
          'Reliable entry-to-mid level protection.',
    rating: 4.3,
    reviews: 150,
    sold: '700+',
    tags: [
      '3kg abc extinguisher', 'fire killer 3kg', 'compact multi class', 'home powder unit', 'small office extinguisher',
      'car boat abc', 'lightweight 3kg', 'quick lever extinguisher', 'pressure gauge compact', 'wall mount 3kg',
      'space saving unit', 'affordable multi purpose', 'everyday risk tool', 'entry mid level', 'portable abc powder'
    ]
  },
  {
    id: 'fire-extinguisher-trolley-foam',
    title: 'Fire Extinguisher Trolley Foam',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://luluhardware.com/wp-content/uploads/2024/02/50L-Mobile-Foam-Fire-Extinguishers-Ce-Bsi-Approved-1200x675.jpg',
    desc: 'Trolley Foam Fire Extinguisher provides mobile high-capacity foam suppression.\n' +
          'Foam agent blankets and cools Class A and B fires effectively.\n' +
          'Wheeled trolley design allows fast transport to large incidents.\n' +
          'Long hose and foam branch pipe for safe, distant application.\n' +
          'Heavy-duty cart with reinforced frame for industrial use.\n' +
          'Quick valve operation for immediate foam discharge.\n' +
          'Ideal for fuel stations, chemical areas, hangars, and loading docks.\n' +
          'Pressure gauge and secure tank mounting.\n' +
          'Prevents re-flash on liquid surfaces.\n' +
          'Powerful on-wheels solution for liquid and solid fire hazards.',
    rating: 4.7,
    reviews: 40,
    sold: '100+',
    tags: [
      'trolley foam extinguisher', 'mobile foam unit', 'high capacity foam trolley', 'fuel station foam', 'chemical area cart',
      'hangar foam extinguisher', 'long hose foam trolley', 're-flash prevention foam', 'industrial foam cart', 'quick valve foam',
      'reinforced trolley frame', 'pressure gauge foam', 'loading dock safety', 'on wheels suppression', 'liquid solid foam tool'
    ]
  },
  {
    id: 'fire-extinguisher-trolley-co2',
    title: 'Fire Extinguisher Trolley CO2',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.chinafiretech.com/uploads/202317736/trolley-mounted-co2-fire-extinguisher7d89d4ac-eee2-48ee-9099-0e9a6babe256.jpg',
    desc: 'Trolley CO₂ Fire Extinguisher offers large-capacity clean suppression on wheels.\n' +
          'Carbon dioxide safely extinguishes electrical and liquid fires with zero residue.\n' +
          'Trolley frame with wheels for mobility in large facilities.\n' +
          'Extended hose and horn for precise, long-range application.\n' +
          'High-capacity cylinders for extended discharge duration.\n' +
          'Ideal for power plants, data centers, substations, and aircraft hangars.\n' +
          'Quick valve for immediate high-volume CO₂ release.\n' +
          'Pressure gauge and safety features included.\n' +
          'Protects sensitive equipment during major incidents.\n' +
          'Mobile clean-agent solution for critical infrastructure.',
    rating: 4.8,
    reviews: 35,
    sold: '80+',
    tags: [
      'trolley co2 extinguisher', 'mobile co2 unit', 'large capacity co2 trolley', 'power plant co2', 'data center trolley',
      'substation co2 cart', 'extended hose co2', 'zero residue trolley', 'aircraft hangar safety', 'quick valve co2',
      'high volume co2', 'pressure gauge trolley', 'critical infrastructure tool', 'clean agent mobile', 'sensitive equipment protection'
    ]
  },
  {
    id: 'fire-extinguisher-trolley-dcp',
    title: 'Fire Extinguisher Trolley DCP',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.vintexfire.com/assets/images/products/fire-extinguishers/75_kg_bc_abc_trolley_mounted_fire_extinguisher.jpg',
    desc: 'Trolley DCP/ABC Fire Extinguisher brings high-capacity dry powder to the scene.\n' +
          'ABC powder suppresses Class A, B, and C fires over large areas.\n' +
          'Wheeled trolley allows quick positioning in industrial settings.\n' +
          'Long hose and nozzle for safe-distance powder application.\n' +
          'Large cylinder capacity for prolonged firefighting.\n' +
          'Suitable for refineries, warehouses, chemical plants, and fuel yards.\n' +
          'Rapid valve opening for instant full flow.\n' +
          'Pressure gauge and robust cart construction.\n' +
          'Effective mobile solution for multi-class industrial hazards.\n' +
          'Heavy-duty suppression on wheels.',
    rating: 4.7,
    reviews: 45,
    sold: '120+',
    tags: [
      'trolley dcp extinguisher', 'mobile abc trolley', 'high capacity powder cart', 'refinery dcp unit', 'warehouse trolley extinguisher',
      'chemical plant powder', 'long hose dcp trolley', 'rapid valve abc', 'industrial multi class', 'pressure gauge trolley',
      'robust cart construction', 'fuel yard safety', 'heavy duty suppression', 'multi class mobile', 'industrial hazard tool'
    ]
  },
  {
    id: 'fire-hose-pipe-1-5-x-10-bar-white',
    title: 'Fire Hose Pipe – 1.5″ x 10 Bar, White',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71ObW-K3d2L._AC_SL1500_.jpg',
    desc: '1.5″ White Fire Hose Pipe rated at 10 bar is designed for medium-pressure attack lines.\n' +
          'Synthetic double-jacket construction with rubber lining for flexibility.\n' +
          'White color for high visibility and easy identification.\n' +
          'Lightweight and kink-resistant for rapid deployment.\n' +
          'Handles both interior structural and exterior firefighting tasks.\n' +
          'Tested to withstand working pressure with safety margin.\n' +
          'Standard 38 mm diameter compatible with most nozzles and couplings.\n' +
          'Durable against abrasion, heat, and chemicals on scene.\n' +
          'Ideal for municipal, industrial, and commercial fire services.\n' +
          'Reliable medium-size delivery hose for everyday use.',
    rating: 4.7,
    reviews: 120,
    sold: '500+',
    tags: [
      '1.5 inch fire hose', '10 bar white hose', 'medium pressure hose', 'double jacket hose', 'synthetic white hose',
      'kink resistant hose', 'high visibility hose', 'attack line 38mm', 'interior exterior hose', 'abrasion resistant hose',
      'municipal fire hose', 'industrial delivery hose', 'lightweight 1.5 hose', 'standard diameter hose', 'everyday firefighting hose'
    ]
  },
  {
    id: 'fire-hose-pipe-2-5-x-30-meter-100-feet-white-13-bar',
    title: 'Fire Hose Pipe – 2.5″ x 30 Meter (100 Feet), White, 13 Bar',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/719J6GQOANL._AC_UF894,1000_QL80_.jpg',
    desc: '2.5″ White Fire Hose Pipe (30 m / 100 ft) rated 13 bar for high-volume delivery.\n' +
          'Heavy-duty double-jacket synthetic with rubber lining for strength.\n' +
          'White color enhances visibility during operations.\n' +
          'Large 65 mm diameter for high flow rates in attack or supply lines.\n' +
          'Kink-resistant and abrasion-resistant for tough fireground use.\n' +
          'Tested for working pressure with excellent burst safety.\n' +
          'Ideal for structural fires, industrial incidents, and relay pumping.\n' +
          'Standard length and coupling compatibility worldwide.\n' +
          'Durable hose for professional municipal and industrial teams.\n' +
          'Workhorse hose for major fire suppression tasks.',
    rating: 4.8,
    reviews: 150,
    sold: '600+',
    tags: [
      '2.5 inch fire hose', '30 meter white hose', '13 bar high flow hose', '100 feet fire hose', 'double jacket 65mm',
      'high volume attack hose', 'supply line white hose', 'kink resistant 2.5', 'abrasion resistant hose', 'structural fire hose',
      'industrial relay hose', 'professional municipal hose', 'large diameter hose', 'durable high pressure hose', 'major suppression hose'
    ]
  },
  {
    id: 'fire-hose-pipe-2-5-x-16-bar-x-30-meter-100-feet',
    title: 'Fire Hose Pipe – 2.5″ x 16 Bar x 30 Meter (100 Feet)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/202f0j00ihNcsCTrnMkR/Best-Price-Fire-Fighting-TPU-EPDM-Hose-Pipe-High-Pressure-Polyester-Fire-Hose.webp',
    desc: '2.5″ Fire Hose Pipe (30 m / 100 ft) rated at 16 bar for demanding high-pressure use.\n' +
          'Reinforced construction with TPU/EPDM lining for superior strength.\n' +
          'Handles extreme pressures during master stream and long relay operations.\n' +
          '65 mm diameter delivers massive water volume efficiently.\n' +
          'Abrasion, heat, and chemical resistant jacket for harsh conditions.\n' +
          'Lightweight relative to capacity for faster deployment.\n' +
          'Ideal for industrial fires, high-rise attacks, and large-scale incidents.\n' +
          'Standard couplings and tested burst pressure for safety.\n' +
          'Premium heavy-duty hose for professional fire services.\n' +
          'Built for the toughest firefighting applications.',
    rating: 4.9,
    reviews: 100,
    sold: '400+',
    tags: [
      '2.5 inch 16 bar hose', '30 meter high pressure hose', '100 feet heavy duty hose', 'tpu epdm fire hose', 'master stream hose',
      'high rise attack hose', 'large scale fire hose', 'extreme pressure hose', 'abrasion chemical resistant', 'reinforced 65mm hose',
      'industrial heavy hose', 'professional high pressure', 'massive volume hose', 'premium fire hose', 'tough application hose'
    ]
  },
  {
    id: 'fire-hose-reel-30-meters-1-inch-diameter-safety-53',
    title: 'Fire Hose Reel – 30 Meters (1-Inch Diameter) Safety 53',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00BvfiaUGCObqI/Swing-Arm-1-Inch-30-Meters-Fire-Hose-Reel.webp',
    desc: '30 Meters Fire Hose Reel with 1-inch diameter hose is designed for first-aid response.\n' +
          'Swing-arm or fixed wall mount allows flexible 180° reach.\n' +
          'Includes adjustable nozzle with jet, fog, and shut-off functions.\n' +
          'Smooth swivel mechanism prevents hose kinking during pull-out.\n' +
          'Durable reel drum and high-quality hose for long life.\n' +
          'Ideal for offices, apartments, shops, hotels, and small facilities.\n' +
          'Quick manual rewind for fast reset after use.\n' +
          'Complies with safety standards for occupant-use equipment.\n' +
          'Compact design with excellent coverage for early-stage fires.\n' +
          'User-friendly indoor firefighting solution.',
    rating: 4.8,
    reviews: 130,
    sold: '550+',
    tags: [
      '30 meter hose reel', '1 inch fire reel', 'swing arm hose reel', 'wall mounted reel', 'adjustable nozzle reel',
      'office hose reel', 'apartment safety reel', 'hotel fire reel', 'quick rewind reel', 'anti kink mechanism',
      'occupant use reel', 'compact indoor reel', 'safety 53 hose', 'early stage firefighting', 'user friendly reel',
      'small facility protection', 'high quality hose reel'
    ]
  }

],



 'Safety Shoes': [
  {
    id: 'safety-shoes-st001',
    title: 'Safety Shoes ST001',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.shoesforcrews.com/shared-imgs/productimages/US_en/79333/0000-1024.webp',
    desc: 'Safety Shoes ST001 feature a reinforced steel toe cap for maximum foot protection on job sites.\n' +
          'Built with durable leather upper that resists abrasion, oil, and daily industrial wear.\n' +
          'Slip-resistant rubber outsole provides firm grip on wet, oily, or uneven surfaces.\n' +
          'Padded collar and tongue enhance ankle support and all-day wearing comfort.\n' +
          'Puncture-resistant midsole shields the foot from sharp objects and debris.\n' +
          'Breathable lining keeps feet cool and dry during extended work shifts.\n' +
          'Meets international EN ISO 20345 S1 safety standards for industrial use.\n' +
          'Lightweight construction reduces fatigue during long hours on your feet.\n' +
          'Ideal for construction, warehousing, manufacturing, and logistics workers.\n' +
          'A reliable entry-level safety shoe trusted by professionals across Pakistan.',
    rating: 4.5,
    reviews: 1200,
    sold: '2K+',
    tags: [
      'steel toe shoes', 'safety shoes ST001', 'industrial safety footwear', 'construction shoes',
      'slip resistant shoes', 'puncture resistant shoes', 'work safety shoes', 'EN ISO 20345 shoes',
      'warehouse safety shoes', 'manufacturing footwear', 'oil resistant shoes', 'durable work shoes',
      'safety shoes Pakistan', 'protective footwear', 'steel cap shoes', 'job site shoes',
      'anti-slip work shoes', 'logistics safety shoes', 'breathable safety shoes', 'lightweight safety shoes'
    ]
  },
  {
    id: 'safety-shoes-st002',
    title: 'Safety Shoes ST002',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://us.mbt.com/media/catalog/product/cache/ece4043ff4894d9c50be98c4bf1bd7c4/m/e/men-omega-work-shoe-black-700753-03-right_1.jpg',
    desc: 'Safety Shoes ST002 combine comfort engineering with robust protective features for daily industrial use.\n' +
          'Ergonomically designed footbed distributes weight evenly to reduce foot fatigue.\n' +
          'Steel toe cap protects against falling objects and compression hazards.\n' +
          'High-quality leather upper offers durability and resistance to workplace chemicals.\n' +
          'Anti-static properties dissipate static electricity in sensitive work environments.\n' +
          'Slip-resistant outsole ensures stability on smooth, wet, or greasy floors.\n' +
          'Cushioned insole provides shock absorption for workers on hard concrete surfaces.\n' +
          'Suitable for long shifts in factories, plants, and industrial facilities.\n' +
          'Complies with international safety footwear standards for professional use.\n' +
          'A top choice for workers who demand both protection and all-day comfort.',
    rating: 4.6,
    reviews: 1100,
    sold: '1.8K+',
    tags: [
      'comfort safety shoes', 'safety shoes ST002', 'ergonomic work shoes', 'anti-static shoes',
      'steel toe footwear', 'industrial comfort shoes', 'shock absorbing shoes', 'factory safety shoes',
      'chemical resistant shoes', 'slip resistant work shoes', 'cushioned safety shoes', 'protective work footwear',
      'plant safety shoes', 'work shoes Pakistan', 'durable safety footwear', 'long shift shoes',
      'safety shoes for men', 'construction footwear', 'anti-fatigue shoes', 'professional work shoes'
    ]
  },
  {
    id: 'safety-shoes-st003',
    title: 'Safety Shoes ST003',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.srmax.com/images/products/srm2090-profile.jpg',
    desc: 'Safety Shoes ST003 are engineered for high-durability performance in tough work conditions.\n' +
          'Heavy-gauge leather upper resists cuts, punctures, and harsh chemicals effectively.\n' +
          'Reinforced steel toecap withstands heavy impact and compression up to 200 joules.\n' +
          'Double-stitched seams and reinforced heel ensure extended lifespan under stress.\n' +
          'Heat-resistant outsole handles exposure to hot surfaces up to 300°C safely.\n' +
          'Anti-perforation midsole prevents nail and sharp object penetration.\n' +
          'Moisture-wicking lining keeps feet dry and odor-free throughout the workday.\n' +
          'Ideal for steelworks, foundries, construction sites, and heavy manufacturing.\n' +
          'Wide toe box allows natural foot movement without sacrificing protection.\n' +
          'Trusted by industrial professionals who require maximum footwear durability.',
    rating: 4.7,
    reviews: 1050,
    sold: '1.7K+',
    tags: [
      'high durability shoes', 'safety shoes ST003', 'heavy duty work shoes', 'heat resistant shoes',
      'steel foundry shoes', 'impact resistant shoes', 'anti-perforation shoes', 'industrial footwear',
      'construction site shoes', 'chemical resistant footwear', 'reinforced safety shoes', 'wide toe safety shoes',
      'moisture wicking shoes', 'durable industrial shoes', 'steel toe boots Pakistan', 'manufacturing safety shoes',
      'long lasting safety shoes', 'heavy industry footwear', 'protective toe shoes', 'professional durability shoes'
    ]
  },
  {
    id: 'safety-shoes-st004',
    title: 'Safety Shoes ST004',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/81dTCKNIBjL._AC_UY900_.jpg',
    desc: 'Safety Shoes ST004 offer a lightweight design without compromising on essential protection features.\n' +
          'Composite toe cap provides impact protection while keeping the shoe significantly lighter.\n' +
          'Breathable mesh and leather upper combination ensures maximum ventilation.\n' +
          'Flexible rubber outsole adapts to varied terrain for versatile workplace use.\n' +
          'ESD protection prevents static buildup in electronics and cleanroom environments.\n' +
          'Memory foam insole contours to foot shape for personalized comfort all day.\n' +
          'Low-profile design suits workers who move quickly across job sites.\n' +
          'Suitable for logistics, light manufacturing, and service industry workers.\n' +
          'Non-metallic construction allows easy passage through metal detectors.\n' +
          'Perfect balance of weight, comfort, and protection for active workers.',
    rating: 4.5,
    reviews: 980,
    sold: '1.5K+',
    tags: [
      'lightweight safety shoes', 'safety shoes ST004', 'composite toe shoes', 'ESD safety shoes',
      'non-metallic safety shoes', 'breathable work shoes', 'memory foam shoes', 'flexible work shoes',
      'logistics safety footwear', 'light manufacturing shoes', 'cleanroom safety shoes', 'metal detector safe shoes',
      'active worker shoes', 'ventilated safety shoes', 'low profile work shoes', 'service industry shoes',
      'comfortable safety shoes', 'anti-static footwear', 'work shoes for men', 'professional light shoes'
    ]
  },
  {
    id: 'safety-shoes-st005',
    title: 'Safety Shoes ST005',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.shoesforcrews.com/shared-imgs/productimages/US_en/77280/0000-1024.webp',
    desc: 'Safety Shoes ST005 are specifically designed with advanced anti-slip technology for wet environments.\n' +
          'Patented slip-resistant outsole achieves top ratings on oily and wet surface tests.\n' +
          'Steel toe cap meets S1P safety standards for impact and compression resistance.\n' +
          'Water-resistant upper keeps feet dry in wet kitchens, labs, and outdoor sites.\n' +
          'Lightweight EVA midsole absorbs shock and reduces strain on joints and back.\n' +
          'Easy-clean surface finish makes maintenance quick and hygienic.\n' +
          'Ideal for food processing, hospitality, healthcare, and outdoor industries.\n' +
          'Padded ankle collar prevents blisters during long shifts and fast-paced work.\n' +
          'Resistant to fats, oils, and common industrial cleaning chemicals.\n' +
          'A trusted slip-resistant solution for safety-conscious workplaces.',
    rating: 4.6,
    reviews: 920,
    sold: '1.4K+',
    tags: [
      'anti-slip safety shoes', 'safety shoes ST005', 'slip resistant footwear', 'wet floor shoes',
      'food industry shoes', 'hospitality safety shoes', 'kitchen safety shoes', 'healthcare footwear',
      'water resistant work shoes', 'oil resistant safety shoes', 'S1P safety shoes', 'outdoor safety shoes',
      'easy clean shoes', 'EVA midsole shoes', 'shock absorbing work shoes', 'hygienic safety footwear',
      'anti-slip work shoes Pakistan', 'fat resistant shoes', 'chemical safe shoes', 'padded collar shoes'
    ]
  },
  {
    id: 'safety-shoes-st006',
    title: 'Safety Shoes ST006',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71fGIvIUnVL._AC_UY900_.jpg',
    desc: 'Safety Shoes ST006 feature full waterproof construction for wet and outdoor work environments.\n' +
          'Sealed seams and waterproof membrane keep feet completely dry in rain and puddles.\n' +
          'Steel toe protection shields against impact from heavy falling tools and objects.\n' +
          'Aggressive tread outsole provides firm grip on muddy and slippery outdoor terrain.\n' +
          'Insulated lining maintains warmth during cold weather or refrigerated storage work.\n' +
          'Durable nubuck leather upper resists scuffs, abrasion, and environmental wear.\n' +
          'Mid-cut design supports the ankle on uneven ground and sloped work surfaces.\n' +
          'Suitable for outdoor construction, agriculture, and cold storage facilities.\n' +
          'Quick-lace closure system allows fast, secure fitting on the job.\n' +
          'A complete waterproof safety solution for demanding outdoor professionals.',
    rating: 4.7,
    reviews: 890,
    sold: '1.3K+',
    tags: [
      'waterproof safety shoes', 'safety shoes ST006', 'water resistant footwear', 'outdoor work shoes',
      'rain proof safety shoes', 'muddy terrain shoes', 'insulated work shoes', 'cold storage shoes',
      'nubuck leather shoes', 'mid-cut safety shoes', 'agriculture safety footwear', 'steel toe waterproof',
      'sealed seam shoes', 'construction waterproof shoes', 'quick lace shoes', 'anti-slip outdoor shoes',
      'refrigerated work shoes', 'durable outdoor footwear', 'waterproof boots Pakistan', 'ankle support shoes'
    ]
  },
  {
    id: 'safety-shoes-st007',
    title: 'Safety Shoes ST007',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.midwestboots.com/mm5/graphics/00000001/Mellow-Walk-500089-L.jpg',
    desc: 'Safety Shoes ST007 are built for heavy-duty industrial environments requiring maximum foot protection.\n' +
          'Thick steel toe cap rated for 200J impact resistance for the most demanding sites.\n' +
          'Full-grain leather upper provides superior abrasion resistance and long service life.\n' +
          'Heavy-duty rubber outsole is heat, oil, and acid resistant for industrial floors.\n' +
          'Steel midsole plate prevents puncture from nails, rebar, and sharp site debris.\n' +
          'High ankle design provides additional support and protection in rugged conditions.\n' +
          'Shock-absorbing heel cushion reduces joint stress during heavy-load carrying.\n' +
          'Ideal for steelwork, mining, heavy construction, and oil and gas industries.\n' +
          'Double-density outsole extends wear life in the harshest work environments.\n' +
          'The go-to heavy-duty safety shoe for workers in extreme industrial settings.',
    rating: 4.8,
    reviews: 850,
    sold: '1.2K+',
    tags: [
      'heavy duty safety shoes', 'safety shoes ST007', 'steel midsole shoes', 'mining safety footwear',
      'oil gas safety shoes', 'high ankle work shoes', 'full grain leather shoes', 'acid resistant shoes',
      'heat resistant work shoes', '200J impact shoes', 'rebar puncture proof shoes', 'rugged work shoes',
      'industrial heavy shoes', 'shock absorbing safety shoes', 'construction heavy boots', 'double density shoes',
      'extreme condition shoes', 'steelwork footwear', 'professional heavy shoes', 'durable industrial boots'
    ]
  },
  {
    id: 'safety-shoes-st008',
    title: 'Safety Shoes ST008',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i5.walmartimages.com/seo/OwnShoe-Steel-Toe-Work-Boots-for-Men-Women-Waterproof-Safety-Shoes-Leather-Welding-Boots-Construction-Sneakers_1054d80e-1e93-4efc-a2e0-9644345824f4.0c3a7ce50e802b4ba6e4192d78e5ba2a.jpeg',
    desc: 'Safety Shoes ST008 feature advanced breathable technology to keep feet fresh during long shifts.\n' +
          'Perforated leather upper with moisture-wicking lining promotes maximum air circulation.\n' +
          'Steel toe cap provides reliable protection against impact and compression hazards.\n' +
          'Anti-microbial insole prevents bacterial growth and eliminates foot odor effectively.\n' +
          'Lightweight construction reduces overall fatigue during extended work periods.\n' +
          'Flexible rubber outsole delivers grip and comfort across various work surfaces.\n' +
          'Suitable for warm climate workplaces, factories, and indoor industrial settings.\n' +
          'Cushioned footbed supports the arch and heel for superior walking comfort.\n' +
          'Easy slip-on or lace-up style for quick wearing before and after work.\n' +
          'The ideal breathable safety shoe for hot and humid work environments.',
    rating: 4.6,
    reviews: 810,
    sold: '1.1K+',
    tags: [
      'breathable safety shoes', 'safety shoes ST008', 'ventilated work shoes', 'anti-microbial shoes',
      'moisture wicking footwear', 'odor free shoes', 'hot climate work shoes', 'indoor safety shoes',
      'arch support shoes', 'flexible safety footwear', 'perforated leather shoes', 'cushioned work shoes',
      'lightweight breathable shoes', 'factory breathable shoes', 'steel toe breathable', 'comfortable work footwear',
      'anti-fatigue breathable shoes', 'summer safety shoes', 'grip rubber sole shoes', 'professional breathable shoes'
    ]
  },
  {
    id: 'safety-shoes-st009',
    title: 'Safety Shoes ST009',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://shoecity.com/cdn/shop/products/45455_1000x.jpg?v=1587263361',
    desc: 'Safety Shoes ST009 represent the premium tier of protective footwear for industrial professionals.\n' +
          'Superior full-grain leather upper with advanced finishing for a polished professional look.\n' +
          'Reinforced steel toe cap exceeds EN ISO 20345 standards for maximum impact safety.\n' +
          'Triple-density outsole provides exceptional durability and slip resistance underfoot.\n' +
          'Anatomically shaped footbed offers premium comfort during 12-hour work shifts.\n' +
          'Anti-static and ESD certified for use in electronics and explosive environments.\n' +
          'Oil, fuel, and chemical resistant construction for versatile industrial applications.\n' +
          'Reinforced heel counter provides stability on rough and uneven surfaces.\n' +
          'Ideal for supervisors, engineers, and workers who need style with protection.\n' +
          'The top premium safety shoe choice available at SS Safety Solutions Pakistan.',
    rating: 4.7,
    reviews: 780,
    sold: '1K+',
    tags: [
      'premium safety shoes', 'safety shoes ST009', 'professional safety footwear', 'EN ISO 20345 shoes',
      'ESD certified shoes', 'anti-static premium shoes', 'triple density sole shoes', 'full grain premium shoes',
      'engineer safety shoes', 'supervisor work shoes', 'chemical resistant premium', 'oil resistant premium shoes',
      'anatomical footbed shoes', 'reinforced heel shoes', 'polished safety shoes', '12 hour comfort shoes',
      'premium work footwear Pakistan', 'industrial premium boots', 'stylish safety shoes', 'high end work shoes'
    ]
  },
  {
    id: 'st-aura-s3',
    title: 'ST AURA S3',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://emeys.com/cdn/shop/products/IMG_2579_7b8dd292-7d40-459e-b9a0-274dd99fbbf0_2048x.jpg?v=1661988294',
    desc: 'The ST AURA S3 is a high-specification safety boot rated to the rigorous S3 European standard.\n' +
          'Features a hardened steel toecap and anti-penetration midsole for full foot protection.\n' +
          'Water-resistant full-grain leather upper keeps feet dry in wet work conditions.\n' +
          'SRC-rated slip-resistant outsole performs on both ceramic tiles and steel surfaces.\n' +
          'Energy-absorbing heel reduces fatigue and joint stress during all-day standing.\n' +
          'Anti-static properties ensure safe use in potentially explosive environments.\n' +
          'Ergonomic fit with padded collar and tongue for superior ankle comfort.\n' +
          'Designed for construction, manufacturing, and heavy industrial applications.\n' +
          'Meets EN ISO 20345:2011 S3 SRC standards for professional workplace safety.\n' +
          'A complete S3-rated safety solution for workers demanding the highest protection.',
    rating: 4.8,
    reviews: 950,
    sold: '1.5K+',
    tags: [
      'S3 safety boot', 'ST AURA S3', 'S3 rated footwear', 'anti-penetration shoes', 'SRC rated shoes',
      'EN ISO 20345 S3', 'water resistant S3 boot', 'steel toe S3 boot', 'energy absorbing heel shoes',
      'anti-static S3 shoes', 'construction S3 boot', 'manufacturing safety S3', 'industrial S3 footwear',
      'professional S3 shoes Pakistan', 'ergonomic safety boot', 'heavy industry S3', 'S3 SRC shoes',
      'padded collar boot', 'slip resistant S3', 'full grain S3 boot'
    ]
  },
  {
    id: 'st-bestboy-s3',
    title: 'ST BESTBOY S3',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.safgard.com/images/products/srm2010-profile.jpg',
    desc: 'The ST BESTBOY S3 is a globally recognized S3 safety boot known for exceptional reliability.\n' +
          'Rugged leather upper delivers outstanding resistance to abrasion and workplace hazards.\n' +
          'Steel toecap and anti-perforation plate provide certified S3-level foot protection.\n' +
          'SRC slip-resistant outsole tested on slippery and oily surface conditions.\n' +
          'Phylon midsole provides lightweight cushioning for long working hours.\n' +
          'Moisture-wicking lining controls sweat and maintains foot hygiene all day.\n' +
          'Wide fit design accommodates most foot shapes for a comfortable secure feel.\n' +
          'Trusted by safety professionals in construction, oil, and logistics sectors.\n' +
          'Compliant with EN ISO 20345 S3 SRC international safety footwear standards.\n' +
          'The best-selling S3 safety boot for reliability and professional performance.',
    rating: 4.9,
    reviews: 1100,
    sold: '1.8K+',
    tags: [
      'bestboy S3 boot', 'ST BESTBOY S3', 'best selling safety boot', 'S3 SRC safety shoes',
      'steel toe S3', 'anti-perforation S3', 'phylon midsole shoes', 'wide fit safety boot',
      'moisture wicking S3', 'oil sector safety boot', 'logistics S3 footwear', 'construction S3 shoes',
      'EN ISO 20345 S3 SRC', 'slip resistant S3 boot', 'rugged leather S3', 'professional S3 Pakistan',
      'reliable safety boot', 'abrasion resistant S3', 'certified safety footwear', 'durable S3 boot'
    ]
  },
  {
    id: 'st-bestboy2-s3',
    title: 'ST BESTBOY2 S3',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71Ifiq5++EL._AC_UY900_.jpg',
    desc: 'The ST BESTBOY2 S3 is the upgraded next-generation version of the popular BESTBOY safety boot.\n' +
          'Enhanced upper material combines leather and textile for improved breathability and flex.\n' +
          'Upgraded steel toecap and midsole plate retain full S3 protection certification.\n' +
          'Improved SRC outsole compound delivers superior grip on all workplace surfaces.\n' +
          'New anatomical insole design provides better arch support and pressure relief.\n' +
          'Reinforced heel and toe areas extend product life in demanding work conditions.\n' +
          'Updated styling makes it suitable for both site and supervisory roles.\n' +
          'Anti-static rated for use in electronics, fuel, and explosive environments.\n' +
          'Fully compliant with EN ISO 20345 S3 SRC European safety standards.\n' +
          'The evolved choice for workers who rely on BESTBOY performance every day.',
    rating: 4.8,
    reviews: 1020,
    sold: '1.6K+',
    tags: [
      'bestboy2 S3', 'ST BESTBOY2 S3', 'upgraded safety boot', 'next gen S3 boot', 'improved S3 shoes',
      'breathable S3 footwear', 'anti-static S3 boot', 'arch support S3', 'anatomical insole shoes',
      'reinforced toe S3', 'supervisory safety boot', 'electronics safety shoes', 'fuel safe S3 boot',
      'EN ISO 20345 upgraded', 'SRC grip S3', 'textile leather S3', 'durable S3 Pakistan',
      'flex safety boot', 'professional upgraded shoes', 'construction upgraded boot'
    ]
  },
  {
    id: 'st-black-eagle',
    title: 'ST BLACK EAGLE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://www.safetytoe.com/cdn/shop/files/NB-MIDLOGIBL-L_grande.jpg?v=1752008902',
    desc: 'The ST BLACK EAGLE is a premium high-performance safety boot designed for extreme environments.\n' +
          'Sleek black full-grain leather upper combines tactical aesthetics with industrial protection.\n' +
          'Composite toe cap offers lightweight yet certified impact and compression resistance.\n' +
          'Advanced anti-slip outsole handles diverse terrains from concrete to rough gravel.\n' +
          'Mid-cut design with padded collar gives strong ankle support on uneven ground.\n' +
          'Moisture-management lining keeps feet dry and comfortable through long shifts.\n' +
          'Metal-free construction allows quick clearance through airport and site checkpoints.\n' +
          'Suitable for security personnel, engineers, and outdoor industrial workers.\n' +
          'Heat-resistant outsole withstands contact with hot surfaces and asphalt.\n' +
          'The BLACK EAGLE: where tactical style meets certified industrial safety.',
    rating: 4.9,
    reviews: 890,
    sold: '1.4K+',
    tags: [
      'black eagle boot', 'ST BLACK EAGLE', 'tactical safety boot', 'composite toe boot',
      'metal free safety shoes', 'mid-cut safety boot', 'security safety boots', 'ankle support boot',
      'heat resistant safety boot', 'premium black boot', 'anti-slip tactical boot', 'engineer safety boot',
      'outdoor industrial boot', 'airport safe shoes', 'moisture management boot', 'full grain black boot',
      'lightweight composite boot', 'stylish safety boot Pakistan', 'gravel terrain boots', 'certified black boot'
    ]
  },
  {
    id: 'st-cross-s3',
    title: 'ST CROSS S3',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.midwestboots.com/mm5/graphics/00000001/Coulomb-33051-CU1-L.jpg',
    desc: 'The ST CROSS S3 is a versatile safety boot engineered for cross-industry workplace protection.\n' +
          'Robust leather upper with reinforced overlays resists impact, abrasion, and chemical splash.\n' +
          'S3-certified steel toe and anti-penetration plate deliver comprehensive foot protection.\n' +
          'Dual-density SRC outsole provides outstanding grip across all work surface types.\n' +
          'Integrated shank adds torsional stability for work on ladders and scaffolding.\n' +
          'Breathable lining with anti-microbial treatment controls moisture and odor.\n' +
          'Lace-up closure with speed hooks allows quick and secure adjustment.\n' +
          'Ideal for workers in construction, utilities, and multi-site operations.\n' +
          'Fully certified to EN ISO 20345 S3 SRC for European safety compliance.\n' +
          'A cross-terrain S3 boot built for workers who move between multiple environments.',
    rating: 4.7,
    reviews: 780,
    sold: '1.2K+',
    tags: [
      'cross S3 boot', 'ST CROSS S3', 'versatile safety boot', 'cross industry shoes',
      'S3 SRC dual density', 'scaffolding safety boot', 'ladder safety shoes', 'utility worker boot',
      'speed hook boot', 'anti-microbial S3', 'torsional stability boot', 'reinforced overlay boot',
      'multi-site safety boot', 'chemical splash resistant boot', 'integrated shank shoes', 'construction S3 cross',
      'EN ISO 20345 cross', 'breathable S3 lining', 'grip S3 outsole', 'professional cross boot'
    ]
  },
  {
    id: 'st-desert',
    title: 'ST DESERT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.safgard.com/images/products/n7119-inside.jpg',
    desc: 'The ST DESERT safety boot is purpose-built for hot, arid, and desert work environments.\n' +
          'Tan suede leather upper reflects heat and resists sand, dust, and dry terrain abrasion.\n' +
          'Steel toe cap provides mandatory protection on outdoor and construction sites.\n' +
          'Breathable lining with air-flow channels prevents heat buildup inside the boot.\n' +
          'Oil and slip resistant outsole handles both sandy and hard rocky surfaces reliably.\n' +
          'Padded ankle collar and tongue protect against friction and desert terrain impact.\n' +
          'Lightweight construction reduces heat fatigue during outdoor summer work shifts.\n' +
          'Suitable for oil field workers, outdoor engineers, and construction crews in hot regions.\n' +
          'High-traction tread pattern ensures stability on loose gravel and sandy ground.\n' +
          'The ideal safety boot for workers battling heat, sun, and harsh desert conditions.',
    rating: 4.6,
    reviews: 720,
    sold: '1.1K+',
    tags: [
      'desert safety boot', 'ST DESERT boot', 'hot climate safety shoes', 'arid environment boot',
      'tan suede safety boot', 'oil field safety shoes', 'outdoor summer boot', 'breathable desert shoes',
      'heat resistant boot', 'sandy terrain shoes', 'lightweight desert boot', 'dust resistant shoes',
      'steel toe desert boot', 'construction hot weather shoes', 'anti-slip desert boot', 'rocky terrain shoes',
      'summer work boots Pakistan', 'engineer outdoor boot', 'high traction desert shoes', 'padded desert boot'
    ]
  },
  {
    id: 'st-jumper-s3',
    title: 'ST JUMPER S3',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.steel-toe-shoes.com/mm5/graphics/00000001/P90800-L.jpg',
    desc: 'The ST JUMPER S3 is a sporty high-performance safety boot designed for active work environments.\n' +
          'Athletic-inspired design delivers the comfort of a sports shoe with S3-level protection.\n' +
          'Steel toecap and anti-penetration midsole provide certified full foot safety coverage.\n' +
          'Lightweight EVA and rubber compound outsole delivers energy return and slip resistance.\n' +
          'Padded tongue and collar offer sports-shoe comfort during high-activity work shifts.\n' +
          'Breathable mesh panels keep air flowing to prevent overheating and moisture buildup.\n' +
          'Ideal for workers in fast-paced logistics, warehousing, and light manufacturing.\n' +
          'Quick lace-up system allows rapid on and off during shift changes.\n' +
          'Anti-static and energy-absorbing heel certified to EN ISO 20345 S3 standards.\n' +
          'The JUMPER S3: the sporty S3 safety shoe for workers who never slow down.',
    rating: 4.8,
    reviews: 850,
    sold: '1.3K+',
    tags: [
      'jumper S3 boot', 'ST JUMPER S3', 'sporty safety shoes', 'athletic safety boot',
      'S3 sports style', 'lightweight S3 shoe', 'EVA S3 outsole', 'fast paced work shoes',
      'warehouse S3 shoes', 'logistics safety shoes', 'breathable S3 mesh', 'quick lace S3',
      'energy absorbing S3', 'anti-static jumper', 'active worker boot', 'EN ISO 20345 sporty',
      'light manufacturing boot', 'comfortable S3 boot', 'shift change shoes', 'padded S3 collar'
    ]
  },
  {
    id: 'st-ranger',
    title: 'ST RANGER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/ncoAAOSwAR5ilMiE/s-l1200.jpg',
    desc: 'The ST RANGER is a rugged tactical safety boot built for outdoor and multi-terrain professionals.\n' +
          'High-cut design provides maximum ankle support across rough and uneven terrain.\n' +
          'Durable nubuck leather upper resists abrasion from rocks, brush, and harsh environments.\n' +
          'Steel toe protection ensures compliance with site safety regulations and standards.\n' +
          'Aggressive lug outsole bites into mud, gravel, and loose soil for firm footing.\n' +
          'Waterproof membrane liner keeps feet dry during outdoor and wet-condition work.\n' +
          'Reinforced ankle guard reduces the risk of sprains during heavy terrain movement.\n' +
          'Ideal for rangers, field engineers, outdoor site supervisors, and security teams.\n' +
          'Shock-absorbing midsole cushions the foot on long treks across varied ground.\n' +
          'The RANGER: ultimate safety and durability for those who work beyond the beaten path.',
    rating: 4.7,
    reviews: 800,
    sold: '1.2K+',
    tags: [
      'ranger safety boot', 'ST RANGER boot', 'tactical outdoor boot', 'high-cut safety boot',
      'multi-terrain shoes', 'nubuck leather boot', 'lug outsole safety boot', 'waterproof ranger boot',
      'ankle support outdoor', 'field engineer boot', 'security safety boot', 'outdoor site supervisor shoes',
      'mud terrain safety boot', 'shock absorbing ranger', 'reinforced ankle boot', 'gravel terrain boot',
      'rugged safety footwear', 'trekking safety boot', 'off-road work boot', 'outdoor professional shoes'
    ]
  },,
  {
    id: 'safety-jogger-x1100n',
    title: 'Safety Jogger X1100N S3 Mid-Cut Leather Safety Shoe',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41zvlhV96QL._AC_UF894,1000_QL80_.jpg',
    desc: 'The Safety Jogger X1100N S3 is a premium mid-cut leather safety shoe engineered for modern professionals.\n' +
          'Full-grain leather upper combines durability with a lightweight metal-free construction.\n' +
          'Composite toe cap meets S3 standards while keeping the shoe non-metallic throughout.\n' +
          'Anti-penetration composite midsole protects against sharp objects and nail penetration.\n' +
          'SRC slip-resistant outsole provides grip on wet ceramic tile and smooth steel floors.\n' +
          'Mid-cut design offers enhanced ankle support without restricting natural movement.\n' +
          'Breathable moisture-wicking lining controls temperature and reduces foot sweat.\n' +
          'ESD certified for safe use in sensitive electronics and anti-static environments.\n' +
          'Stylish design suits both active site workers and supervisory office-to-site use.\n' +
          'A best-selling mid-cut S3 shoe trusted by professionals across Pakistan.',
    rating: 4.8,
    reviews: 156,
    sold: '300+',
    tags: [
      'Safety Jogger X1100N', 'S3 mid-cut shoe', 'leather S3 shoe', 'composite toe S3',
      'metal-free S3 shoe', 'ESD S3 shoe', 'SRC mid-cut shoe', 'anti-penetration composite',
      'mid-cut leather shoe', 'professional S3 shoe', 'safety jogger Pakistan', 'lightweight S3 shoe',
      'moisture wicking S3', 'stylish safety shoe', 'office site safety shoe', 'hacsons safety shoe',
      'composite midsole S3', 'non-metallic S3 shoe', 'best selling S3 shoe', 'X1100N safety shoe'
    ]
  },
  {
    id: 'safety-shoes-aak-s1p',
    title: 'Safety Shoes AAK S1P LOW',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://gibadi.com/cdn/shop/files/project_20240429_0908014-01_750x810.png?v=1729525821',
    desc: 'The AAK S1P LOW is a lightweight low-cut safety shoe designed for comfort in everyday industrial use.\n' +
          'Composite toe cap provides S1P-rated impact protection without the weight of steel.\n' +
          'ESD-certified construction dissipates static electricity safely in sensitive workplaces.\n' +
          'Flexible rubber outsole delivers excellent slip resistance on varied work surfaces.\n' +
          'Low-cut profile allows natural ankle movement for fast-paced and dynamic work.\n' +
          'Breathable lining controls moisture to keep feet fresh during full-day shifts.\n' +
          'Anti-perforation composite insole shields against sharp object penetration.\n' +
          'Suitable for electronics, logistics, light industry, and cleanroom environments.\n' +
          'Metal-free design passes through security checkpoints and metal detectors easily.\n' +
          'An affordable, reliable S1P safety shoe for everyday professional protection.',
    rating: 4.7,
    reviews: 234,
    sold: '400+',
    tags: [
      'AAK S1P LOW', 'S1P safety shoes', 'low cut safety shoes', 'composite toe S1P',
      'ESD S1P shoe', 'lightweight S1P shoe', 'metal-free S1P', 'anti-perforation S1P',
      'electronics safety shoe', 'cleanroom footwear', 'logistics safety shoe', 'breathable S1P shoe',
      'affordable safety shoes', 'flexible safety shoe', 'dynamic work shoe', 'security clearance shoes',
      'anti-static low shoe', 'S1P Pakistan', 'hacsons AAK shoe', 'everyday safety shoe'
    ]
  },
  {
    id: 'safety-jogger-cador',
    title: 'Safety Jogger Cador S1P Sporty Low-Cut ESD Safety Shoe',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-nhmkn80zx/images/stencil/1280x1280/products/41268/56943/safety-jogger-cador-s1p-sporty-low-cut-esd-safety-shoe-blue__67512.1720988851.jpg?c=1?imbypass=on',
    desc: 'The Safety Jogger Cador S1P is a sporty low-cut ESD safety shoe built for active work environments.\n' +
          'Athletic sneaker-style design delivers maximum comfort with certified S1P protection.\n' +
          'ESD-rated construction prevents static discharge in electronics and hazardous workplaces.\n' +
          'Composite toe cap offers lightweight certified impact resistance without metal components.\n' +
          'Breathable knit and mesh upper provides excellent ventilation for all-day freshness.\n' +
          'Flexible TPU outsole combines slip resistance with energy return for active workers.\n' +
          'Cushioned OrthoLite insole contours to foot shape for personalized support.\n' +
          'Ideal for warehousing, light manufacturing, logistics, and indoor industrial roles.\n' +
          'Quick lace closure system ensures a snug, secure fit for fast-moving workers.\n' +
          'The sporty S1P ESD shoe that makes safety feel like wearing your favorite sneaker.',
    rating: 4.6,
    reviews: 189,
    sold: '350+',
    tags: [
      'Cador S1P shoe', 'sporty safety shoe', 'ESD low-cut shoe', 'safety jogger Cador',
      'athletic safety shoe', 'sneaker safety shoe', 'composite toe sporty', 'breathable ESD shoe',
      'knit upper safety shoe', 'OrthoLite insole shoe', 'warehouse sporty shoe', 'logistics active shoe',
      'flexible safety shoe', 'TPU outsole shoe', 'quick lace safety shoe', 'indoor safety shoe',
      'metal-free sporty shoe', 'S1P ESD Pakistan', 'hacsons Cador shoe', 'active work safety shoe'
    ]
  },
  {
    id: 'safety-jogger-best-boy',
    title: 'Safety Jogger Best Boy S3 All-Time Favorite Mid-Cut Safety Shoe',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://totalfirensafety.com/wp-content/uploads/2025/03/Bestboy-3.jpg',
    desc: 'The Safety Jogger Best Boy S3 is the all-time favorite mid-cut safety shoe for industrial workers.\n' +
          'Iconic design updated with modern materials while retaining trusted S3 protection standards.\n' +
          'Steel toe cap and anti-penetration midsole deliver comprehensive certified foot safety.\n' +
          'SRC-rated outsole provides excellent slip resistance on oily and wet work surfaces.\n' +
          'Mid-cut leather and textile upper balances protection with flexibility and breathability.\n' +
          'Energy-absorbing heel cushion reduces foot and joint strain during long shifts.\n' +
          'Anti-static certified for use in potentially explosive or sensitive environments.\n' +
          'Trusted by thousands of workers in construction, logistics, and manufacturing sectors.\n' +
          'Fully compliant with EN ISO 20345 S3 SRC international safety footwear standards.\n' +
          'The Best Boy S3: decades of trust, updated for today\'s demanding workplace.',
    rating: 4.9,
    reviews: 345,
    sold: '600+',
    tags: [
      'Best Boy S3', 'safety jogger best boy', 'all time favorite safety shoe', 'mid-cut S3 shoe',
      'steel toe mid-cut', 'anti-penetration mid-cut', 'SRC S3 shoe', 'energy absorbing S3',
      'anti-static best boy', 'construction favorite shoe', 'logistics trusted shoe', 'manufacturing S3 shoe',
      'EN ISO 20345 S3', 'iconic safety shoe', 'updated safety shoe', 'breathable S3 mid',
      'hacsons best boy', 'affordable S3 shoe', 'best selling safety shoe Pakistan', 'worker favorite shoe'
    ]
  },
  {
    id: 'safety-jogger-turbo',
    title: 'Safety Jogger Turbo S3 Safety Shoes',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.safetyjogger.com/picture/Brands/SAFETY/HIRES/TURBO-094-HR03.PNG?nocache=1750197600000',
    desc: 'The Safety Jogger Turbo S3 is a fashionable premium safety shoe combining style with S3 protection.\n' +
          'Modern design with premium leather and textile upper suits professional and site environments.\n' +
          'Steel toe cap and composite anti-penetration midsole provide full S3 safety certification.\n' +
          'Superior grip outsole with heat-resistant compound rated for hot surface contact.\n' +
          'SRC-rated slip resistance performs on wet and greasy floors in all conditions.\n' +
          'Cushioned dual-density midsole provides superior shock absorption and comfort.\n' +
          'Anti-static and ESD rated for use in sensitive and hazardous work environments.\n' +
          'Stylish enough for managerial roles, robust enough for active site use.\n' +
          'Fully certified to EN ISO 20345 S3 SRC for comprehensive safety compliance.\n' +
          'The Turbo S3: high fashion meets high performance in premium safety footwear.',
    rating: 4.8,
    reviews: 278,
    sold: '250+',
    tags: [
      'Turbo S3 shoe', 'safety jogger Turbo', 'fashionable safety shoe', 'premium S3 shoe',
      'stylish safety shoe', 'heat resistant S3', 'SRC S3 Turbo', 'dual density S3 shoe',
      'ESD Turbo shoe', 'managerial safety shoe', 'anti-static Turbo', 'leather textile S3',
      'shock absorbing S3', 'premium work shoe Pakistan', 'high performance safety shoe', 'EN ISO 20345 Turbo',
      'hacsons Turbo shoe', 'greasy floor shoe', 'composite S3 Turbo', 'site manager shoe'
    ]
  },
  {
    id: 'safety-jogger-worker-plus',
    title: 'Safety Jogger Worker Plus S3 Safety Shoes',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/00/s/MTA0NlgxNjAw/z/ShgAAOSweApbar-5/$_57.JPG?set_id=8800005007',
    desc: 'The Safety Jogger Worker Plus S3 is a heavy-duty safety boot engineered for extreme industrial use.\n' +
          'Robust full-grain leather upper with reinforced overlays handles the toughest job sites.\n' +
          'Steel toe cap rated for 200J impact and 15kN compression for maximum protection.\n' +
          'Anti-penetration steel midsole provides certified puncture resistance underfoot.\n' +
          'High-grip heat and oil-resistant outsole performs in demanding industrial environments.\n' +
          'SRC-rated slip resistance on ceramic tile and steel floors for certified safety.\n' +
          'Anti-static and energy-absorbing heel certified to EN ISO 20345 S3 SRC standards.\n' +
          'Padded collar and tongue provide comfort during extended heavy-duty work shifts.\n' +
          'Ideal for steelworks, heavy construction, mining, and oil and gas sectors.\n' +
          'The Worker Plus S3: the ultimate heavy-duty boot for the most demanding professionals.',
    rating: 4.9,
    reviews: 167,
    sold: '200+',
    tags: [
      'Worker Plus S3', 'safety jogger worker plus', 'heavy duty S3 boot', 'extreme duty safety shoe',
      '200J impact boot', 'steel midsole S3', 'mining safety boot', 'oil gas S3 boot',
      'steelworks safety boot', 'heavy construction boot', 'anti-penetration steel', 'SRC heavy boot',
      'heat oil resistant S3', 'padded heavy boot', 'EN ISO 20345 worker plus', 'robust safety boot Pakistan',
      'hacsons worker plus', 'professional heavy boot', 'reinforced overlay boot', 'maximum protection S3'
    ]
  },
  {
    id: 'safety-jogger-jumper31',
    title: 'Safety Jogger Jumper31 S3 Safety Shoes',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.safetyjogger.com/picture/Brands/SAFETY/HIRES/JUMPER31-BLK-HR01.PNG?nocache=1750197600000',
    desc: 'The Safety Jogger Jumper31 S3 is a low-cut metal-free safety shoe built for agile industrial workers.\n' +
          'Composite toe cap and composite anti-penetration midsole ensure full metal-free S3 protection.\n' +
          'Enhanced grip outsole with multi-directional tread pattern provides superior slip resistance.\n' +
          'Lightweight construction significantly reduces foot fatigue during fast-paced work.\n' +
          'Breathable upper with ventilation panels keeps feet cool and fresh all shift long.\n' +
          'ESD-certified to prevent static discharge in electronics and sensitive environments.\n' +
          'Flexible design allows natural foot movement during bending and crouching tasks.\n' +
          'Ideal for logistics, light manufacturing, warehousing, and cleanroom applications.\n' +
          'Airport and detector-safe metal-free design for multi-site professional workers.\n' +
          'The Jumper31 S3: agile, lightweight, and fully certified for modern workplaces.',
    rating: 4.7,
    reviews: 212,
    sold: '280+',
    tags: [
      'Jumper31 S3', 'safety jogger jumper31', 'metal-free S3 shoe', 'composite S3 low-cut',
      'agile safety shoe', 'ESD S3 low-cut', 'lightweight composite shoe', 'breathable S3 low',
      'logistics S3 shoe', 'electronics safety shoe', 'warehouse S3 low-cut', 'detector safe S3',
      'airport safe S3 shoe', 'moisture management S3', 'lightweight S3 low-cut', 'hacsons jumper31',
      'non-metallic S3 shoe', 'damp environment shoe', 'anti-static jumper31', 'professional low-cut S3'
    ]
  },
  {
    id: 'safety-jogger-mars-eh',
    title: 'Safety Jogger MARS-EH Electrical Hazard Safety Shoe',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/51IMsASz8bL._AC_SL1050_.jpg',
    desc: 'The Safety Jogger MARS-EH is a specialized safety shoe engineered for electrical hazard protection.\n' +
          'EH-rated insulating sole provides protection against electrical shock up to 18,000 volts.\n' +
          'Composite toe cap offers certified impact resistance without conducting electricity.\n' +
          'Mid-cut leather upper provides ankle support and protection in electrical work environments.\n' +
          'Slip-resistant outsole handles wet and dry surfaces commonly found on electrical sites.\n' +
          'Non-conductive composite midsole protects against accidental electrical contact underfoot.\n' +
          'Breathable lining maintains foot comfort during technical electrical field work.\n' +
          'Ideal for electricians, utility workers, power plant staff, and electrical engineers.\n' +
          'Meets international electrical hazard safety footwear standards for certified protection.\n' +
          'The MARS-EH: engineered specifically to protect electrical professionals on every job.',
    rating: 4.9,
    reviews: 134,
    sold: '180+',
    tags: [
      'MARS-EH safety shoe', 'electrical hazard shoe', 'EH rated safety shoe', 'electrician safety shoe',
      'insulating sole shoe', '18kV safety shoe', 'composite toe EH', 'non-conductive safety shoe',
      'power plant safety shoe', 'utility worker shoe', 'electrical engineer shoe', 'mid-cut EH shoe',
      'electrical protection footwear', 'hacsons MARS-EH', 'shock proof safety shoe', 'EH certified shoe Pakistan',
      'technical field safety shoe', 'slip resistant EH shoe', 'composite midsole EH', 'voltage protection shoe'
    ]
  },
  {
    id: 'safety-jogger-pluto-eh',
    title: 'Safety Jogger Pluto EH 18KV Electrical Hazard Safety Shoes',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://baoholaodongsocvang.com/wp-content/uploads/2023/07/giay-bao-ho-jogger-PLUTO-EH-soc-vang-800-500-SV2.webp',
    desc: 'The Safety Jogger Pluto EH 18KV delivers low-cut electrical hazard protection for field electricians.\n' +
          'Certified to protect against electrical shock exposure up to 18,000 volts AC safely.\n' +
          'Composite toe cap provides non-metallic certified impact and compression protection.\n' +
          'Low-cut profile allows maximum ankle mobility during active electrical fieldwork.\n' +
          'EH-rated insulating outsole forms a complete barrier against electrical conductivity.\n' +
          'Breathable mesh and leather upper keeps feet cool in warm electrical work environments.\n' +
          'Lightweight design reduces fatigue during long electrical installation and maintenance shifts.\n' +
          'Slip-resistant SRC-rated outsole provides grip on surfaces common to electrical sites.\n' +
          'Suitable for electricians, substation workers, telecom engineers, and power sector staff.\n' +
          'The Pluto EH 18KV: certified high-voltage protection in a lightweight low-cut design.',
    rating: 4.8,
    reviews: 189,
    sold: '220+',
    tags: [
      'Pluto EH 18KV', 'safety jogger Pluto', '18KV electrical shoe', 'low-cut EH shoe',
      'electrician low-cut shoe', 'EH insulating shoe', 'composite toe 18KV', 'substation safety shoe',
      'telecom engineer shoe', 'power sector shoe', 'lightweight EH shoe', 'SRC EH shoe',
      'breathable EH shoe', 'voltage protection low-cut', 'non-metallic EH shoe', 'hacsons Pluto shoe',
      'electrical hazard Pakistan', 'field electrician shoe', 'high voltage safety shoe', 'mobile EH shoe'
    ]
  },
  {
    id: 'safety-jogger-x1110n',
    title: 'Safety Jogger X1110N S3 Safety Shoes',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61CkN0vD7TL._AC_SL1000_.jpg',
    desc: 'The Safety Jogger X1110N S3 is a water-resistant low-cut metal-free safety shoe for modern workers.\n' +
          'Water-repellent leather and textile upper keeps feet dry in wet and damp environments.\n' +
          'Composite toe cap and composite midsole provide full metal-free S3 certified protection.\n' +
          'SRC slip-resistant outsole tested for superior grip on wet tile and smooth steel.\n' +
          'ESD-certified anti-static construction prevents static discharge in sensitive areas.\n' +
          'Breathable lining with moisture management keeps feet fresh and dry all day long.\n' +
          'Lightweight low-cut design reduces foot fatigue and allows natural ankle movement.\n' +
          'Suitable for logistics, warehousing, electronics, and light industrial applications.\n' +
          'Non-metallic throughout for airport security and detector-safe site access.\n' +
          'The X1110N S3: water-resistant, metal-free, and fully S3 certified for today\'s workplace.',
    rating: 4.7,
    reviews: 156,
    sold: '260+',
    tags: [
      'X1110N S3 shoe', 'safety jogger X1110N', 'water resistant S3 shoe', 'metal-free low-cut S3',
      'composite toe X1110N', 'ESD S3 low-cut', 'SRC water resistant S3', 'breathable low-cut S3',
      'logistics S3 shoe', 'electronics safety shoe', 'warehouse S3 low-cut', 'detector safe S3',
      'airport safe S3 shoe', 'moisture management S3', 'lightweight S3 low-cut', 'hacsons X1110N',
      'non-metallic S3 shoe', 'damp environment shoe', 'anti-static X1110N', 'professional low-cut S3'
    ]
  }
],


 'Road Safety': [
  {
    id: 'automatic-traffic-barrier',
    title: 'Automatic Traffic Barrier',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://allsecurityequipment.com/cdn/shop/articles/barrier_gate_in_parking_lot.jpg?v=1704207376',
    desc: 'Automatic Traffic Barrier provides efficient vehicle access control for parking lots, campuses, and industrial sites.\n' +
          'Heavy-duty steel boom with powder-coated finish resists weather and corrosion.\n' +
          'Fast 1–3 second opening/closing time for smooth traffic flow.\n' +
          'Integrated remote control, RFID reader, loop detector, and safety photocells.\n' +
          'Durable DC motor with backup battery option for power failure situations.\n' +
          'LED lighting strip on boom enhances visibility at night or in fog.\n' +
          'Adjustable arm lengths from 3m to 8m to suit different lane widths.\n' +
          'Ideal for gated communities, malls, hospitals, factories, and toll plazas.\n' +
          'Meets international safety standards with anti-smash and auto-reverse features.\n' +
          'Reliable, low-maintenance solution for modern traffic management.',
    rating: 4.7,
    reviews: 89,
    sold: '120+',
    tags: [
      'automatic traffic barrier', 'boom barrier gate', 'parking access control', 'vehicle barrier system', 'remote control barrier',
      'rfid barrier gate', 'safety photocell barrier', 'industrial traffic control', 'toll plaza barrier', 'fast opening barrier',
      'led boom lighting', 'anti smash barrier', 'dc motor barrier', 'backup battery gate', 'gated community security'
    ]
  },
  {
    id: 'barricade-tape',
    title: 'Barricade Tape',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41wYdplCbeL.jpg',
    desc: 'Barricade Tape (caution tape) clearly marks hazardous areas, construction zones, and restricted access.\n' +
          'High-visibility red/white or yellow/black stripes printed on durable polyethylene.\n' +
          'Weather-resistant and tear-proof for outdoor use in rain, wind, and sun.\n' +
          'Bold "CAUTION" or "DANGER" messaging with international warning symbols.\n' +
          'Available in 100m, 200m, 300m rolls for large or small sites.\n' +
          'Lightweight and easy to deploy, tie, or staple to posts/fences.\n' +
          'Non-adhesive design allows quick removal without residue.\n' +
          'Essential for construction sites, roadworks, events, warehouses, and emergencies.\n' +
          'Increases safety awareness and prevents unauthorized entry.\n' +
          'Cost-effective, reusable solution for temporary hazard demarcation.',
    rating: 4.5,
    reviews: 456,
    sold: '800+',
    tags: [
      'barricade tape', 'caution tape', 'warning tape', 'construction barricade', 'high visibility tape',
      'danger caution tape', 'roadwork safety tape', 'hazard marking tape', 'weather resistant tape', 'polyethylene barricade',
      'red white caution', 'yellow black danger', 'temporary hazard tape', 'event safety tape', 'warehouse barricade',
      'emergency demarcation', 'reusable warning tape'
    ]
  },
  {
    id: 'barrier-gate-series',
    title: 'Barrier Gate Series',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.gatedrivesolutions.co.nz/site/proautomation/images/originals/SGDBARRIER.jpg',
    desc: 'Barrier Gate Series offers a full range of automatic boom barriers for various access needs.\n' +
          'Models include standard, heavy-duty, fence-type, and high-speed options.\n' +
          'Boom lengths from 3m to 8m with aluminum or steel construction.\n' +
          'Advanced brushless DC motor ensures quiet, reliable, and long-life operation.\n' +
          'Integrated control board supports loop detectors, RFID, remote, and ANPR integration.\n' +
          'Safety features include auto-reverse on obstruction and photocell protection.\n' +
          'LED boom lighting and reflective strips enhance night visibility.\n' +
          'Suitable for residential estates, commercial complexes, industrial sites, and toll roads.\n' +
          'Low maintenance with 5–10 million cycle durability rating.\n' +
          'Customizable solutions for high-security and high-traffic environments.',
    rating: 4.8,
    reviews: 67,
    sold: '90+',
    tags: [
      'barrier gate series', 'automatic boom gate', 'heavy duty barrier', 'high speed gate', 'fence type barrier',
      'brushless dc barrier', 'rfid barrier system', 'anpr integration gate', 'toll road barrier', 'residential barrier gate',
      'commercial access control', 'safety photocell gate', 'led boom barrier', 'low maintenance gate', 'high traffic barrier'
    ]
  },
  {
    id: 'cat-eye',
    title: 'Cat Eye',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/LIGHTDOME.JPG/1200px-LIGHTDOME.JPG',
    desc: 'Cat Eye Road Stud (reflective pavement marker) enhances nighttime road visibility and lane guidance.\n' +
          'High-brightness retro-reflective glass or plastic lens returns light to drivers.\n' +
          'Durable aluminum or polycarbonate body withstands heavy traffic and weather.\n' +
          'Solar-powered LED models flash for extra visibility in fog or rain.\n' +
          'Raised design provides tactile warning and audible rumble when crossed.\n' +
          'Available in single/double-sided, white, yellow, red, green for different uses.\n' +
          'Adhesive or anchor installation for asphalt, concrete, or temporary roads.\n' +
          'Essential for highways, curves, intersections, pedestrian crossings, and dark zones.\n' +
          'Meets ASTM D4280 or EN 1463 standards for road safety.\n' +
          'Low-cost, long-lasting solution for preventing lane departure accidents.',
    rating: 4.6,
    reviews: 789,
    sold: '1.5K+',
    tags: [
      'cat eye road stud', 'reflective pavement marker', 'solar led cat eye', 'road safety reflector', 'highway lane marker',
      'tactile road stud', 'rumble strip cat eye', 'night visibility stud', 'curve safety marker', 'intersection reflector',
      'pedestrian crossing stud', 'astm d4280 marker', 'en 1463 road stud', 'durable cat eye', 'lane guidance reflector'
    ]
  },
  {
    id: 'convex-mirror',
    title: 'Convex Mirror',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.reflectionproducts.com/images/View-car-200-feet-half.jpg',
    desc: 'Convex Mirror provides wide-angle visibility to eliminate blind spots at intersections and corners.\n' +
          '180°–360° viewing angle helps drivers and pedestrians see oncoming traffic.\n' +
          'High-quality acrylic or polycarbonate lens with shatterproof design.\n' +
          'Weather-resistant frame and mounting hardware for indoor/outdoor use.\n' +
          'Adjustable bracket allows precise positioning on walls, poles, or corners.\n' +
          'Available in sizes from 300mm to 1200mm diameter for different coverage needs.\n' +
          'Red/white or yellow/black border enhances visibility from a distance.\n' +
          'Ideal for parking lots, warehouses, factories, hospitals, and road junctions.\n' +
          'Reduces collision risk in high-traffic blind-spot areas.\n' +
          'Affordable, maintenance-free safety enhancement.',
    rating: 4.7,
    reviews: 234,
    sold: '400+',
    tags: [
      'convex safety mirror', 'blind spot mirror', 'wide angle mirror', 'road junction mirror', 'parking lot mirror',
      'warehouse convex mirror', 'factory safety mirror', 'shatterproof convex lens', 'adjustable wall mirror', 'pole mounted mirror',
      'high visibility mirror', 'collision prevention mirror', 'corner safety mirror', 'traffic blind spot', 'acrylic convex mirror'
    ]
  },
  {
    id: 'corner-guard',
    title: 'Corner Guard',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-q9ylq9/images/stencil/1280x1280/products/53856/107355/cg2-732x486__26496.1685123805.jpg?c=2',
    desc: 'Corner Guard protects walls, columns, and corners from vehicle and equipment damage.\n' +
          'High-impact rubber or PVC construction absorbs shocks and prevents dents.\n' +
          'Bright yellow/black or red/white stripes for high visibility.\n' +
          'Available in L-shape, U-shape, and full-column wrap designs.\n' +
          'Adhesive or mechanical fixing for easy installation on concrete or steel.\n' +
          'Flexible material returns to shape after impact.\n' +
          'UV-stabilized and weather-resistant for indoor and outdoor use.\n' +
          'Ideal for warehouses, parking garages, loading docks, and factories.\n' +
          'Reduces maintenance costs by protecting structural elements.\n' +
          'Essential passive protection for busy traffic areas.',
    rating: 4.5,
    reviews: 178,
    sold: '300+',
    tags: [
      'corner guard', 'wall corner protector', 'rubber corner guard', 'pvc column guard', 'parking garage protection',
      'warehouse corner safety', 'loading dock guard', 'high impact corner', 'yellow black guard', 'adhesive corner protector',
      'flexible safety guard', 'uv stabilized corner', 'vehicle impact protection', 'structural corner guard', 'maintenance reduction'
    ]
  },
  {
    id: 'manual-barrier',
    title: 'Manual Barrier',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-kh80nbh17m/images/stencil/500x659/products/5862/38254/gate1__21874.1615991632.jpg?c=2',
    desc: 'Manual Barrier provides cost-effective, simple vehicle access control.\n' +
          'Lightweight aluminum or steel boom with counterweight for easy lifting.\n' +
          'Lockable in both up and down positions for security.\n' +
          'Reflective red/white stripes and end light for night visibility.\n' +
          'Boom lengths from 3m to 6m to suit different driveway widths.\n' +
          'Durable powder-coated finish resists rust and weathering.\n' +
          'Quick manual operation ideal for low-traffic gates and temporary use.\n' +
          'Perfect for small parking areas, residential compounds, and construction sites.\n' +
          'No electricity or maintenance required.\n' +
          'Reliable, budget-friendly barrier solution.',
    rating: 4.6,
    reviews: 112,
    sold: '150+',
    tags: [
      'manual barrier gate', 'manual boom barrier', 'counterweight barrier', 'residential manual gate', 'low traffic barrier',
      'aluminum manual boom', 'reflective manual gate', 'construction site barrier', 'lockable manual barrier', 'no power gate',
      'budget barrier system', 'small parking barrier', 'durable powder coat', 'temporary access control', 'simple manual barrier'
    ]
  },
  {
    id: 'parking-block',
    title: 'Parking block',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://castechproducts.com/wp-content/uploads/2019/06/20190607_071825-scaled.jpg',
    desc: 'Parking Block (wheel stop) prevents vehicles from overrunning parking spaces.\n' +
          'Durable rubber or concrete construction absorbs impact from tires.\n' +
          'Bright yellow or white reflective stripes for high visibility.\n' +
          'Molded or extruded design with non-slip surface.\n' +
          'Easy installation with anchor bolts or adhesive on asphalt/concrete.\n' +
          'Available in 6ft, 4ft, and custom lengths for different bays.\n' +
          'UV-stabilized and weather-resistant for outdoor parking lots.\n' +
          'Ideal for malls, offices, residential complexes, and public parking.\n' +
          'Reduces damage to walls, curbs, landscaping, and vehicles.\n' +
          'Low-cost, low-maintenance parking organization tool.',
    rating: 4.4,
    reviews: 345,
    sold: '600+',
    tags: [
      'parking block', 'wheel stop', 'rubber parking block', 'concrete wheel stop', 'parking bay protector',
      'yellow parking block', 'reflective wheel stop', 'mall parking safety', 'office parking block', 'residential curb stop',
      'uv stabilized block', 'easy install wheel stop', 'vehicle overrun prevention', 'low maintenance parking', 'parking lot organization'
    ]
  },
  {
    id: 'que-pole',
    title: 'Que Pole',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/zhYAAOSwKX1gUwAj/s-l1200.jpg',
    desc: 'Queue Pole (crowd control post) organizes lines and directs pedestrian flow.\n' +
          'Heavy chrome or stainless steel pole with stable weighted base.\n' +
          'Retractable belt in red, black, blue, or yellow with safety locking.\n' +
          'Belt length 2m–3m with anti-tamper slow-retract mechanism.\n' +
          'Sign holder option for messages like "Please Queue Here" or "Wait Here".\n' +
          'Modular system connects multiple poles for long barriers.\n' +
          'Indoor/outdoor use with rust-resistant finish.\n' +
          'Ideal for banks, airports, retail stores, events, hospitals, and ticket counters.\n' +
          'Enhances crowd management and safety in high-traffic areas.\n' +
          'Durable, professional queuing solution.',
    rating: 4.5,
    reviews: 201,
    sold: '350+',
    tags: [
      'queue pole', 'crowd control post', 'retractable belt pole', 'queuing barrier', 'bank queue pole',
      'airport crowd control', 'retail line management', 'event queuing post', 'sign holder pole', 'weighted base pole',
      'anti tamper belt', 'indoor outdoor queue', 'modular queuing system', 'pedestrian flow control', 'professional queue post'
    ]
  },
  {
    id: 'reflective-tape',
    title: 'Reflective Tape',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://justintrend.com/cdn/shop/products/il_fullxfull.743884910_53o6.jpg?v=1611427852&width=1445',
    desc: 'Reflective Tape increases visibility of vehicles, equipment, and hazards at night.\n' +
          'High-intensity prismatic or glass bead technology reflects light up to 1000m.\n' +
          'Self-adhesive backing sticks firmly to metal, plastic, wood, and fabric.\n' +
          'Available in red, white, yellow, green, orange, and fluorescent colors.\n' +
          'Weatherproof and resistant to oil, grease, and UV fading.\n' +
          'Conforms to EN 12899, DOT-C2, or ASTM standards for road use.\n' +
          'Ideal for trucks, trailers, barriers, bollards, helmets, and clothing.\n' +
          'Widths from 1cm to 10cm and lengths up to 50m rolls.\n' +
          'Prevents accidents by making objects visible in low-light conditions.\n' +
          'Essential low-cost safety enhancement for vehicles and work zones.',
    rating: 4.7,
    reviews: 567,
    sold: '1K+',
    tags: [
      'reflective tape', 'high visibility tape', 'prismatic reflective', 'vehicle conspicuity tape', 'dot c2 tape',
      'truck reflective tape', 'trailer safety tape', 'barrier reflective', 'en 12899 tape', 'weatherproof reflective',
      'self adhesive tape', 'night visibility tape', 'low light safety', 'fluorescent reflective', 'road safety tape'
    ]
  },
  {
    id: 'road-blocker',
    title: 'Road Blocker',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.directindustry.com/images_di/photo-g/65750-2568855.jpg',
    desc: 'Road Blocker provides high-security vehicle access denial for sensitive sites.\n' +
          'Hydraulic or electromechanical rising plate blocks vehicles up to 60 tons.\n' +
          'Fast 3–5 second raise/lower time with emergency fast drop option.\n' +
          'Heavy-duty steel plate with anti-ram spikes or smooth surface.\n' +
          'Loop detectors, traffic lights, and remote control integration.\n' +
          'Crash-tested to PAS 68, IWA 14, or K12 standards for anti-terror protection.\n' +
          'Ideal for government buildings, military bases, embassies, and data centers.\n' +
          'PLC control system with backup power and manual override.\n' +
          'Low-maintenance design with corrosion-resistant coating.\n' +
          'Ultimate vehicle security solution for high-threat locations.',
    rating: 4.9,
    reviews: 78,
    sold: '100+',
    tags: [
      'road blocker', 'hydraulic road blocker', 'anti ram road blocker', 'high security blocker', 'vehicle access denial',
      'pas 68 blocker', 'iwa 14 road blocker', 'k12 crash rated', 'government security blocker', 'military base blocker',
      'embassy protection', 'fast raise blocker', 'plc control blocker', 'backup power blocker', 'anti terror barrier'
    ]
  },
  {
    id: 'road-safety-cons',
    title: 'Road safety cons',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://trafficsafety.nyc3.digitaloceanspaces.com/31/conversions/blog1-article_image.jpg',
    desc: 'Road Safety Cones (traffic cones) guide vehicles and pedestrians around hazards.\n' +
          'Bright fluorescent orange or lime with reflective collars for visibility.\n' +
          'Durable PVC or rubber construction withstands impacts and weather.\n' +
          'Stackable design for easy storage and transport.\n' +
          'Available in 30cm, 45cm, 70cm, 90cm heights for different uses.\n' +
          'Weighted bases prevent tipping in wind or traffic.\n' +
          'Reflective tape meets EN 13422 or MUTCD standards.\n' +
          'Essential for roadworks, construction zones, accidents, and events.\n' +
          'Creates safe work zones and channels traffic flow.\n' +
          'Low-cost, highly visible traffic management tool.',
    rating: 4.6,
    reviews: 890,
    sold: '2K+',
    tags: [
      'road safety cones', 'traffic cones', 'pvc safety cones', 'reflective traffic cone', 'construction zone cone',
      'roadwork safety cone', 'weighted base cone', 'en 13422 cone', 'mutcd traffic cone', 'stackable safety cone',
      'high visibility cone', 'event traffic cone', 'accident scene cone', 'channelizing cone', 'low cost traffic tool'
    ]
  },
  {
    id: 'road-safety-solar-warning-lamp',
    title: 'Road Safety Solar Warning Lamp',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img5217.weyesimg.com/uploads/www.litelsolar.com/images/15924766933353.jpg',
    desc: 'Road Safety Solar Warning Lamp flashes to alert drivers of hazards or work zones.\n' +
          'High-intensity LED with 360° visibility up to 1000m in darkness.\n' +
          'Solar panel charges built-in battery for 100% off-grid operation.\n' +
          'Automatic dusk-to-dawn sensor with multiple flash patterns.\n' +
          'IP65 waterproof and impact-resistant for harsh outdoor conditions.\n' +
          'Easy pole, fence, or barrier mounting with adjustable bracket.\n' +
          'Long life >5 years with low maintenance.\n' +
          'Ideal for roadworks, construction, curves, intersections, and temporary signs.\n' +
          'Increases safety in low-visibility and nighttime conditions.\n' +
          'Eco-friendly, cost-effective alternative to wired lights.',
    rating: 4.8,
    reviews: 145,
    sold: '250+',
    tags: [
      'solar warning lamp', 'road safety light', 'flashing solar lamp', 'solar led beacon', 'construction warning light',
      'dusk to dawn lamp', 'ip65 solar light', 'high intensity led', 'nighttime visibility light', 'roadwork solar beacon',
      'eco friendly safety light', 'low maintenance lamp', 'temporary road light', 'curve intersection beacon', 'off grid warning'
    ]
  },
  {
    id: 'road-safety-vehicle-mounted-led-arrow-sign',
    title: 'Road Safety Vehicle Mounted LED Arrow Sign',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://optraffic.com/wp-content/uploads/2023/11/1-Truck-Mount-VMAB-15-B.jpg',
    desc: 'Vehicle Mounted LED Arrow Sign guides traffic around work vehicles or hazards.\n' +
          'High-brightness LED modules with left, right, double arrow, and caution modes.\n' +
          'Weatherproof aluminum housing with anti-vibration mounting.\n' +
          'Wireless remote control for pattern selection from inside the vehicle.\n' +
          'Day/night brightness adjustment for optimal visibility.\n' +
          'Available in 120cm–180cm sizes for trucks, vans, and utility vehicles.\n' +
          '12/24V vehicle power connection with low energy consumption.\n' +
          'Essential for road maintenance, towing, emergency services, and construction.\n' +
          'Meets MUTCD or EN 12352 standards for mobile traffic control.\n' +
          'Improves safety for workers and motorists on busy roads.',
    rating: 4.9,
    reviews: 89,
    sold: '130+',
    tags: [
      'vehicle led arrow', 'truck mounted arrow sign', 'led traffic arrow', 'road maintenance sign', 'emergency arrow board',
      'wireless remote arrow', 'day night brightness', 'construction vehicle sign', 'mutcd compliant arrow', 'en 12352 sign',
      'towing safety arrow', 'utility vehicle arrow', 'mobile traffic control', 'worker safety sign', 'high brightness led'
    ]
  },
  {
    id: 'road-speed-breaker',
    title: 'Road Speed Breaker',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://media.trafficsafetystore.com/image/private/s--J8NhMJ0O--/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1/media/cms/media/1114/speed-hump.webp',
    desc: 'Road Speed Breaker (speed hump) effectively reduces vehicle speed in high-risk areas.\n' +
          'Durable rubber or asphalt construction with yellow reflective stripes.\n' +
          'Modular design allows easy installation and removal.\n' +
          'Gentle slope forces drivers to slow down without harsh jolts.\n' +
          'High-visibility markings and optional signage for driver awareness.\n' +
          'Weather-resistant and UV-stabilized for long outdoor life.\n' +
          'Available in 3m, 4m, 6m lengths and various heights.\n' +
          'Ideal for school zones, hospitals, residential areas, parking lots, and entrances.\n' +
          'Reduces accident risk and protects pedestrians.\n' +
          'Low-maintenance traffic calming solution.',
    rating: 4.7,
    reviews: 456,
    sold: '700+',
    tags: [
      'road speed breaker', 'speed hump', 'traffic calming hump', 'rubber speed breaker', 'school zone hump',
      'hospital speed reducer', 'residential speed breaker', 'parking lot hump', 'high visibility breaker', 'modular speed hump',
      'weather resistant hump', 'pedestrian safety breaker', 'accident reduction tool', 'low maintenance hump', 'yellow reflective hump'
    ]
  },
  {
    id: 'safety-signs',
    title: 'Safety Signs',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://c8.alamy.com/comp/2GE268G/set-of-road-safety-signs-warning-road-transport-symbol-vector-collection-2GE268G.jpg',
    desc: 'Safety Signs clearly communicate warnings, prohibitions, and mandatory instructions.\n' +
          'High-visibility colors and universal symbols meet ISO 7010 standards.\n' +
          'Durable aluminum, PVC, or self-adhesive vinyl for indoor/outdoor use.\n' +
          'UV-resistant inks prevent fading in sunlight.\n' +
          'Available in danger, warning, caution, mandatory, prohibition, and info types.\n' +
          'Sizes from 150mm to 1200mm for different viewing distances.\n' +
          'Reflective options for low-light and nighttime visibility.\n' +
          'Essential for construction sites, factories, warehouses, roads, and public areas.\n' +
          'Reduces accidents by improving hazard awareness.\n' +
          'Custom signs available for specific site needs.',
    rating: 4.6,
    reviews: 678,
    sold: '1.2K+',
    tags: [
      'safety signs', 'warning signs', 'road safety signage', 'iso 7010 signs', 'danger warning signs',
      'mandatory safety signs', 'prohibition signs', 'construction safety sign', 'factory hazard sign', 'reflective safety sign',
      'uv resistant signage', 'high visibility sign', 'custom safety sign', 'accident prevention sign', 'public area signage'
    ]
  },
  {
    id: 'spring-post',
    title: 'Spring post',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.aquatechtanks.com/files/images/products/spring.webp',
    desc: 'Spring Post (flexible delineator) guides traffic and protects fixed objects.\n' +
          'High-elasticity spring base returns post to upright after vehicle impact.\n' +
          'Reflective bands and bright colors provide excellent visibility day/night.\n' +
          'UV-stabilized polyethylene or polycarbonate withstands weather and impacts.\n' +
          'Available in 45cm–120cm heights for different applications.\n' +
          'Quick installation with ground anchor or surface mount.\n' +
          'Ideal for curves, medians, parking lots, bike lanes, and work zones.\n' +
          'Reduces damage to vehicles and roadside structures.\n' +
          'Low-maintenance, long-lasting traffic guidance solution.\n' +
          'Enhances safety by clearly defining lanes and hazards.',
    rating: 4.5,
    reviews: 234,
    sold: '400+',
    tags: [
      'spring post', 'flexible delineator', 'impact recovery post', 'reflective spring post', 'traffic guidance post',
      'curve delineator', 'parking lot post', 'bike lane marker', 'work zone spring', 'uv stabilized post',
      'quick install delineator', 'low maintenance post', 'vehicle impact post', 'lane definition post', 'roadside safety post'
    ]
  },
  {
    id: 'traffic-separator-barrier',
    title: 'Traffic Separator Barrier',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sorfan.de/en/media/catalog/product/cache/2083df1f13620aaecc2482a9f0e814ce/p/r/product-64.jpg',
    desc: 'Traffic Separator Barrier safely divides opposing traffic lanes or work zones.\n' +
          'Modular concrete or plastic design with interlocking system for stability.\n' +
          'High-visibility reflective strips and bright colors for driver awareness.\n' +
          'Water-filled or sand-filled options for temporary or permanent use.\n' +
          'Crash-tested to redirect vehicles and prevent crossover accidents.\n' +
          'Easy to transport, install, and relocate with lifting points.\n' +
          'Ideal for highway construction, roadworks, event traffic, and median separation.\n' +
          'Meets EN 1317 or MASH crash standards.\n' +
          'Reduces head-on collision risk in high-speed areas.\n' +
          'Versatile, durable traffic management solution.',
    rating: 4.7,
    reviews: 167,
    sold: '300+',
    tags: [
      'traffic separator', 'lane divider barrier', 'road separator barrier', 'crash tested barrier', 'modular traffic barrier',
      'water filled barrier', 'highway construction barrier', 'en 1317 barrier', 'mash rated separator', 'reflective traffic barrier',
      'temporary lane divider', 'median separation barrier', 'event traffic control', 'head on prevention', 'durable road barrier'
    ]
  },
  {
    id: 'traffic-signal-pole',
    title: 'Traffic Signal Pole',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hapco.com/wp-content/uploads/traffic-arm-thumbnail-1000x785-1.jpg',
    desc: 'Traffic Signal Pole securely supports traffic lights, signs, and cameras.\n' +
          'Hot-dip galvanized steel or aluminum construction for corrosion resistance.\n' +
          'Available in straight, mast arm, or span wire configurations.\n' +
          'Heights from 4m to 12m with custom outreach arms.\n' +
          'Flange or direct bury base for easy installation.\n' +
          'Wind-load rated to withstand storms and high-speed areas.\n' +
          'Powder-coated finish in black, grey, or green for urban aesthetics.\n' +
          'Ideal for intersections, pedestrian crossings, and highway signals.\n' +
          'Meets AASHTO, EN, or local structural standards.\n' +
          'Long-lasting infrastructure for safe traffic control.',
    rating: 4.8,
    reviews: 78,
    sold: '110+',
    tags: [
      'traffic signal pole', 'signal mast arm', 'traffic light pole', 'galvanized signal pole', 'span wire pole',
      'intersection signal pole', 'pedestrian crossing pole', 'highway signal support', 'wind load rated pole', 'aasthto signal pole',
      'flange base pole', 'direct bury pole', 'urban traffic pole', 'long lasting signal', 'safe traffic infrastructure'
    ]
  },
  {
    id: 'warning-try-angle',
    title: 'Warning Try Angle',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Triangle_de_pr%C3%A9signalisation.JPG/1200px-Triangle_de_pr%C3%A9signalisation.JPG',
    desc: 'Warning Triangle (emergency triangle) alerts oncoming traffic to stopped or broken-down vehicles.\n' +
          'High-visibility reflective sides with red border for maximum attention.\n' +
          'Foldable design with stable legs for easy storage in vehicle.\n' +
          'Meets ECE R27 or DIN standards for reflectivity and stability.\n' +
          'Compact size fits easily in trunk or under seat.\n' +
          'Quick setup in seconds to place 30–50m behind vehicle.\n' +
          'Essential for highways, rural roads, night driving, and breakdowns.\n' +
          'Reduces rear-end collision risk in emergency situations.\n' +
          'Mandatory safety item in many countries.\n' +
          'Simple, effective, and life-saving roadside tool.',
    rating: 4.6,
    reviews: 567,
    sold: '1K+',
    tags: [
      'warning triangle', 'emergency triangle', 'breakdown triangle', 'reflective safety triangle', 'ece r27 triangle',
      'highway emergency sign', 'vehicle breakdown tool', 'night visibility triangle', 'roadside safety sign', 'rear end prevention',
      'foldable warning sign', 'mandatory car safety', 'rural road triangle', 'quick setup triangle', 'life saving roadside'
    ]
  },
  {
    id: 'wet-floor-sign',
    title: 'Wet Floor Sign',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cwuzkkgiia.cloudimg.io/https://www.topregal.us/out/pictures/generated/product/1/1600_1100_100/208926_222289_US_Aufsteller-Wet-Floor.jpg?w=1600&h=1100&org_if_sml=1',
    desc: 'Wet Floor Sign warns pedestrians of slippery surfaces to prevent falls.\n' +
          'Bright yellow color with bold "Wet Floor" text and universal pictogram.\n' +
          'Foldable A-frame design for stable freestanding placement.\n' +
          'Double-sided printing for visibility from both directions.\n' +
          'Lightweight plastic construction resists water and easy to clean.\n' +
          'Non-slip rubber feet prevent sliding on wet floors.\n' +
          'Ideal for offices, malls, hotels, restaurants, hospitals, and cleaning areas.\n' +
          'Complies with ANSI/OSHA safety sign standards.\n' +
          'Quickly deployable and highly visible hazard alert.\n' +
          'Reduces slip-and-fall accidents and liability risks.',
    rating: 4.5,
    reviews: 890,
    sold: '1.8K+',
    tags: [
      'wet floor sign', 'caution wet floor', 'slip hazard sign', 'yellow safety sign', 'foldable a frame',
      'double sided wet sign', 'office safety sign', 'mall cleaning sign', 'hotel floor sign', 'hospital hazard sign',
      'ansi osha compliant', 'non slip feet sign', 'quick deploy sign', 'fall prevention sign', 'liability reduction sign'
    ]
  }
],


    
'Fire Fighting Vehicle': [
  {
    id: 'ambulance-with-medical-equipments',
    title: 'Ambulance with Medical Equipments',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ambulancemed.com/wp-content/uploads/2024/04/Ford-Van-Type-Ambulance-17-scaled.jpg',
    desc: 'Fully equipped Ambulance with Medical Equipments is built for rapid emergency medical response.\n' +
          'High-roof van chassis provides ample interior space for advanced life support.\n' +
          'Comprehensive medical kit includes oxygen, defibrillator, suction, trauma bag, and stretcher.\n' +
          'LED emergency lighting and siren system ensure quick passage through traffic.\n' +
          'Air-conditioned patient compartment maintains comfort during transport.\n' +
          'Secure cabinetry and anti-slip flooring for safe equipment storage and movement.\n' +
          'GPS tracking and communication radio for real-time coordination with dispatch.\n' +
          'Ideal for urban EMS, hospitals, fire stations, and industrial sites.\n' +
          'Customizable layouts to meet local EMS standards and requirements.\n' +
          'Reliable life-saving vehicle for critical patient transport.',
    rating: 5,
    reviews: 45,
    sold: '25+',
    tags: [
      'medical ambulance', 'emergency ambulance', 'als ambulance', 'high roof ambulance', 'life support vehicle',
      'ems response van', 'defibrillator ambulance', 'oxygen equipped ambulance', 'trauma ambulance', 'urban ems vehicle',
      'gps tracking ambulance', 'siren led ambulance', 'patient transport van', 'industrial ems unit', 'custom ambulance layout'
    ]
  },
  {
    id: 'fire-fighting-bike',
    title: 'Fire Fighting Bike',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://lexipol.brightspotcdn.com/dims4/default/73178de/2147483647/strip/true/crop/533x300+34+0/resize/1000x563!/quality/90/?url=https%3A%2F%2Fk1-prod-lexipol.s3.us-east-2.amazonaws.com%2Fbrightspot%2Fe5%2Ffc%2F686a42d90c497265dcf789678402%2Ffirebike.png',
    desc: 'Fire Fighting Bike enables ultra-fast response in congested urban areas and narrow streets.\n' +
          'Powerful engine with off-road capability reaches fire scenes quicker than trucks.\n' +
          'Compact water tank and foam system for initial fire attack and knockdown.\n' +
          'Portable extinguishers, rescue tools, and first-aid kit mounted for rapid use.\n' +
          'High-visibility lighting, siren, and reflective decals for rider safety.\n' +
          'Ergonomic design with protective gear storage for firefighter comfort.\n' +
          'Ideal for high-rise buildings, traffic jams, markets, and remote access points.\n' +
          'Reduces response time in first critical minutes of fire incidents.\n' +
          'Cost-effective rapid intervention unit for fire departments.\n' +
          'Proven to save lives and limit fire spread in dense environments.',
    rating: 4.8,
    reviews: 78,
    sold: '50+',
    tags: [
      'fire fighting bike', 'rapid response motorcycle', 'urban fire bike', 'quick attack bike', 'foam fire motorcycle',
      'congested area response', 'high rise fire bike', 'first aid fire bike', 'high visibility bike', 'off road fire motorcycle',
      'initial knockdown unit', 'cost effective fire response', 'narrow street bike', 'traffic jam fire unit', 'early intervention bike'
    ]
  },
  {
    id: 'fire-service',
    title: 'Fire service',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.piercemfg.com/hubfs/Blog/Blog%20-%20Fire%20Trucks%20and%20Features%20That%20Best%20Serve%20Rural%20Markets/rural-fire-trucks-featured.jpg',
    desc: 'Fire Service Vehicle is a versatile pumper and rescue truck for rural and suburban areas.\n' +
          'Large water tank and high-flow pump deliver strong firefighting capability.\n' +
          '4x4 chassis ensures access to off-road and difficult terrain.\n' +
          'Compartmentalized body stores hoses, nozzles, ladders, and rescue tools.\n' +
          'LED emergency lighting and siren package for maximum visibility.\n' +
          'Crew cab accommodates 4–6 firefighters with safety restraints.\n' +
          'Customizable configuration for structural, wildland, or rescue focus.\n' +
          'Ideal for rural fire departments, volunteer stations, and small municipalities.\n' +
          'Reliable performance in remote locations with limited hydrant access.\n' +
          'Essential multi-role vehicle for community fire protection.',
    rating: 4.9,
    reviews: 34,
    sold: '20+',
    tags: [
      'fire service vehicle', 'rural fire truck', '4x4 pumper truck', 'off road fire vehicle', 'wildland fire truck',
      'volunteer fire truck', 'small municipality unit', 'high flow pump truck', 'rescue pumper', 'crew cab fire truck',
      'remote access vehicle', 'structural fire truck', 'led emergency truck', 'multi role fire vehicle', 'community protection truck'
    ]
  },
  {
    id: 'fire-truck',
    title: 'Fire Truck',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://firesafetyusa.com/cdn/shop/files/FullSizeRender.jpg?v=1738699031&width=3600',
    desc: 'Fire Truck is a full-size pumper designed for high-volume urban firefighting.\n' +
          'Large water tank, powerful pump, and extensive hose bed capacity.\n' +
          'Aerial ladder or platform option for high-rise and rescue operations.\n' +
          'Compartmentalized storage for tools, SCBA, foam, and medical gear.\n' +
          'Advanced LED scene lighting and 360° visibility package.\n' +
          'Spacious crew cab with ergonomic seating and communication systems.\n' +
          'Custom chassis with automatic transmission and advanced braking.\n' +
          'Ideal for city fire departments, airports, and industrial complexes.\n' +
          'Meets NFPA 1901 standards for structural firefighting.\n' +
          'The backbone of professional urban fire suppression.',
    rating: 5,
    reviews: 89,
    sold: '40+',
    tags: [
      'full size fire truck', 'urban pumper truck', 'aerial ladder truck', 'high volume pump truck', 'nfpa 1901 truck',
      'city fire department', 'airport fire truck', 'industrial complex unit', 'scene lighting truck', 'crew cab pumper',
      'hose bed fire truck', 'foam capable truck', 'high rise rescue truck', 'professional suppression', 'advanced fire vehicle'
    ]
  },
  {
    id: 'suzuki-bolan',
    title: 'Suzuki Bolan',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://aeworkspvtltd.com/public/assets/images/ambulance4.webp',
    desc: 'Suzuki Bolan modified as a rapid response and rescue van offers compact versatility.\n' +
          'Lightweight and fuel-efficient for quick navigation in dense traffic.\n' +
          'Custom interior with medical cabinets, stretcher mount, and oxygen system.\n' +
          'LED emergency lights and siren for high-visibility response.\n' +
          'Rear double doors and side access for fast patient loading.\n' +
          'Basic firefighting kit, rescue tools, and first-aid supplies included.\n' +
          'Ideal for narrow streets, rural areas, and auxiliary fire/EMS roles.\n' +
          'Affordable solution for small departments and community stations.\n' +
          'Reliable daily driver with emergency capability.\n' +
          'Perfect multi-purpose vehicle for budget-conscious services.',
    rating: 4.7,
    reviews: 123,
    sold: '80+',
    tags: [
      'suzuki bolan ambulance', 'rapid response van', 'compact rescue vehicle', 'traffic navigation van', 'small department unit',
      'rural ems vehicle', 'medical rescue bolan', 'auxiliary fire van', 'narrow street response', 'affordable rescue unit',
      'led siren van', 'first aid bolan', 'multi purpose emergency', 'budget ems vehicle', 'community station van'
    ]
  },
  {
    id: 'toyota-hi-lux',
    title: 'Toyota Hi Lux',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://professionalvan.com/wp-content/uploads/2020/06/Toyota-Hilux-West-Yorkshire-Fire-and-Rescue-Service-2020-Professional-Pickup-and-4x4-01.jpg',
    desc: 'Toyota Hi Lux modified as Fire & Rescue Pickup is rugged and highly capable.\n' +
          '4x4 drivetrain excels on rough terrain, mud, and off-road access.\n' +
          'Reinforced bed with water tank, foam system, and tool storage.\n' +
          'Roof-mounted LED light bar and siren for emergency visibility.\n' +
          'Lockable side compartments for SCBA, hoses, and rescue gear.\n' +
          'Durable steel roll cage and bull bar for crew protection.\n' +
          'Ideal for rural fires, wildland response, and remote incidents.\n' +
          'High reliability and legendary Toyota durability.\n' +
          'Customizable for brush trucks, command units, or light rescue.\n' +
          'Versatile vehicle for tough fire and rescue environments.',
    rating: 4.9,
    reviews: 156,
    sold: '100+',
    tags: [
      'toyota hi lux fire', '4x4 rescue pickup', 'wildland fire truck', 'rural response vehicle', 'off road fire pickup',
      'brush truck hi lux', 'foam capable pickup', 'remote incident unit', 'toyota durability', 'light rescue vehicle',
      'roof light bar pickup', 'scba storage truck', 'rugged fire pickup', 'command unit vehicle', 'tough environment truck'
    ]
  },
  {
    id: 'toyota-hi-roof-ambulance',
    title: 'Toyota Hi Roof Ambulance',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://mena.rmaspecialvehicles.com/wp-content/uploads/2025/03/Toyota-Hiace-4x4-Ambulance-2.jpg',
    desc: 'Toyota Hi Roof Ambulance provides spacious patient care and medical equipment area.\n' +
          'High-roof Hiace chassis allows standing room inside for paramedics.\n' +
          'Fully equipped with stretcher, oxygen, defibrillator, suction, and trauma kits.\n' +
          'Air-conditioning and ventilation for patient comfort during transport.\n' +
          'LED emergency lights, siren, and reflective markings for visibility.\n' +
          'Secure cabinetry and anti-slip flooring for safe equipment handling.\n' +
          '4x4 option available for rural or adverse terrain access.\n' +
          'Ideal for hospitals, private EMS, fire stations, and event medical coverage.\n' +
          'Reliable Toyota platform with low operating costs.\n' +
          'Professional-grade ambulance for critical care and transport.',
    rating: 5,
    reviews: 101,
    sold: '60+',
    tags: [
      'toyota hi roof ambulance', 'high roof ems van', 'patient care ambulance', 'standing room ambulance', '4x4 hiace ambulance',
      'hospital ems vehicle', 'private ambulance service', 'event medical coverage', 'defibrillator ambulance', 'oxygen equipped van',
      'led emergency ambulance', 'reliable toyota ambulance', 'low cost ems unit', 'critical care transport', 'professional ems van'
    ]
  },
  {
    id: 'water-bowser',
    title: 'Water Bowser',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.csctrucks.com/uploads/21798/info/p20250414171401c0157.jpg',
    desc: 'Water Bowser (tanker) supplies large volumes of water for firefighting in hydrant-scarce areas.\n' +
          'Capacity from 5,000L to 20,000L with durable stainless or mild steel tank.\n' +
          'High-flow pump and multiple discharge outlets for rapid water delivery.\n' +
          'Hose reels, monitors, and foam proportioning for versatile use.\n' +
          'Heavy-duty chassis with 4x2 or 6x4 configuration for rough terrain.\n' +
          'LED lighting, siren, and reflective markings for emergency visibility.\n' +
          'Ideal for rural fires, wildland incidents, construction sites, and airports.\n' +
          'Gravity or pressure discharge options for flexible operation.\n' +
          'Reliable mobile water source for extended firefighting.\n' +
          'Essential support vehicle for large-scale fire suppression.',
    rating: 4.8,
    reviews: 67,
    sold: '45+',
    tags: [
      'water bowser', 'fire tanker truck', 'water tanker fire', 'high capacity bowser', 'rural fire tanker',
      'wildland water supply', 'airport fire bowser', 'foam proportioning tanker', 'high flow pump bowser', '6x4 fire tanker',
      'mobile water source', 'extended firefighting unit', 'construction site tanker', 'gravity discharge bowser', 'large scale suppression'
    ]
  },
  {
    id: 'water-rescue-vehicle',
    title: 'Water Rescue Vehicle',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd70a6a1c4',
    desc: 'Water Rescue Vehicle is specialized for flood, river, and swiftwater emergency response.\n' +
          'Amphibious or high-ground-clearance chassis for flooded and wet terrain.\n' +
          'Inflatable or rigid-hull boat with outboard motor stored onboard.\n' +
          'Life jackets, throw bags, ropes, and rescue harnesses for victim extraction.\n' +
          'LED floodlights, siren, and PA system for night and coordination work.\n' +
          'Medical kit, oxygen, and defibrillator for casualty care.\n' +
          'Winch and recovery gear for vehicle and victim extrication.\n' +
          'Ideal for flood-prone areas, coastal regions, and monsoon seasons.\n' +
          'Customizable for fire, police, and disaster response teams.\n' +
          'Critical asset for saving lives in water-related emergencies.',
    rating: 4.9,
    reviews: 56,
    sold: '35+',
    tags: [
      'water rescue vehicle', 'flood rescue truck', 'swiftwater rescue unit', 'amphibious rescue vehicle', 'boat rescue truck',
      'river rescue vehicle', 'life jacket storage', 'throw bag rescue', 'floodlight rescue truck', 'monsoon response unit',
      'disaster response vehicle', 'winch recovery truck', 'coastal rescue unit', 'victim extrication vehicle', 'water emergency asset'
    ]
  }
],



   'Fire Alarm System': [
  {
    id: 'alpha-2-2-zones-fire-detection-conventional-panel',
    title: 'ALPHA 2 – 2 zones fire detection conventional panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://innxeon.com/wp-content/uploads/2025/09/Conventional-Fire-Alarm-Control-Panel-Wiring-Diagram.webp',
    desc: 'ALPHA 2 is a compact 2-zone conventional fire detection control panel designed for small premises.\n' +
          'Simple LED display shows zone status, faults, and alarm conditions clearly.\n' +
          'Supports standard smoke, heat, and manual call point detectors.\n' +
          'Built-in sounder circuits with selectable tones for immediate alert.\n' +
          'Relay outputs for fire and fault signaling to external systems.\n' +
          'Battery backup ensures operation during power failure.\n' +
          'Easy installation with removable terminal blocks and clear labeling.\n' +
          'Ideal for shops, small offices, apartments, and garages.\n' +
          'Meets EN54-2/4 standards for reliable conventional detection.\n' +
          'Cost-effective entry-level panel for basic fire safety needs.',
    rating: 4.8,
    reviews: 67,
    sold: '90+',
    tags: [
      '2 zone conventional panel', 'alpha 2 fire panel', 'small premises panel', 'led status panel', 'en54 conventional panel',
      'basic fire detection', 'shop fire alarm', 'apartment safety panel', 'garage fire system', 'battery backup panel',
      'relay output panel', 'easy install fire panel', 'cost effective panel', 'entry level fire control', 'conventional zone panel'
    ]
  },
  
  {
    id: 'avs2000-r-sound',
    title: 'AVS2000-R Sound',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ampac.net/wp-content/uploads/2017/02/I.S.-Sounder-Beacon.png',
    desc: 'AVS2000-R Sound is a high-output conventional fire alarm sounder for clear audible alerts.\n' +
          'Up to 105 dB(A) sound level ensures warning is heard in noisy environments.\n' +
          'Multiple selectable tones including continuous, pulsed, and sweeping patterns.\n' +
          'Red body with deep base for surface or flush mounting.\n' +
          'Low current consumption allows more devices per circuit.\n' +
          'IP65 weatherproof version available for outdoor or wet areas.\n' +
          'Synchronized operation when used with compatible control panels.\n' +
          'Ideal for factories, warehouses, schools, and public buildings.\n' +
          'Meets EN54-3 standards for reliable acoustic signaling.\n' +
          'Robust, high-performance sounder for effective evacuation.',
    rating: 4.7,
    reviews: 89,
    sold: '120+',
    tags: [
      'avs2000 sounder', 'high output fire sounder', '105 db fire alarm', 'conventional sounder', 'selectable tone sounder',
      'ip65 weatherproof sounder', 'factory sounder', 'warehouse alert device', 'en54-3 sounder', 'synchronized sounder',
      'evacuation sounder', 'low current sounder', 'red fire sounder', 'public building alert', 'robust alarm sounder'
    ]
  },
  
  {
    id: 'hephais-1600-400-l',
    title: 'HEPHAIS 1600-400-L',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hochikiamerica.com/wp-content/uploads/2023/06/FireNET-Latitude.jpg',
    desc: 'HEPHAIS 1600-400-L (FireNET Latitude) is a high-end addressable fire alarm control panel.\n' +
          'Supports up to 400 addresses per loop with multiple loop options.\n' +
          'Large color touchscreen interface for intuitive operation and status viewing.\n' +
          'Advanced networking capability for campus-wide or multi-building systems.\n' +
          'Programmable logic equations and time-based functions for custom control.\n' +
          'High-integrity loop wiring with short-circuit isolators per device.\n' +
          'Integrated voice evacuation and PA system options available.\n' +
          'Perfect for airports, universities, large hospitals, and commercial towers.\n' +
          'Fully compliant with EN54 and UL standards for global projects.\n' +
          'Top-tier addressable panel for complex, high-security environments.',
    rating: 4.9,
    reviews: 34,
    sold: '50+',
    tags: [
      'hephais 1600 400 l', 'firenet latitude panel', 'touchscreen fire panel', '400 address loop', 'campus fire system',
      'airport addressable panel', 'university fire control', 'voice evacuation panel', 'en54 ul certified', 'network fire panel',
      'logic equation panel', 'short circuit isolator', 'high security panel', 'commercial tower system', 'advanced addressable control'
    ]
  },
  {
    id: 'oa05-intelligent-optical-smoke-detector',
    title: 'OA05 Intelligent Optical Smoke Detector',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.argussecurity.it/wp-content/uploads/2021/08/8d40d6fc1e4ef07.jpg',
    desc: 'OA05 Intelligent Optical Smoke Detector uses advanced sensing for precise detection.\n' +
          'Addressable protocol allows exact location identification on panel.\n' +
          'High-sensitivity optical chamber detects smoldering fires early.\n' +
          'Drift compensation automatically adjusts for dust and aging.\n' +
          'LED indicator shows polling, alarm, and fault status.\n' +
          'Removable chamber for easy cleaning and maintenance.\n' +
          'Compatible with major addressable panels via standard protocol.\n' +
          'Ideal for offices, hotels, schools, hospitals, and commercial buildings.\n' +
          'Meets EN54-7 standards for reliable intelligent detection.\n' +
          'Smart, low-false-alarm smoke sensing for modern systems.',
    rating: 4.8,
    reviews: 112,
    sold: '150+',
    tags: [
      'oa05 smoke detector', 'intelligent optical detector', 'addressable smoke sensor', 'drift compensation detector', 'smoldering fire detector',
      'en54-7 smoke', 'office addressable smoke', 'hotel fire sensor', 'hospital intelligent detector', 'removable chamber smoke',
      'low false alarm detector', 'smart smoke sensing', 'commercial addressable', 'precise smoke detection', 'maintenance friendly detector'
    ]
  },
  {
    id: 'relay-beam-detector',
    title: 'Relay beam detector',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.ornicom.com/images/stories/virtuemart/product/Detecteur_a_Rayo_4f79b1d91d4bd.png',
    desc: 'Relay Beam Detector uses reflective infrared beam for large-area smoke detection.\n' +
          'Single unit transmitter/receiver with reflector for easy installation.\n' +
          'Coverage up to 100m with automatic alignment compensation.\n' +
          'Fire and fault relays for direct connection to conventional panels.\n' +
          'Sensitivity adjustment and test function for commissioning.\n' +
          'Dust and building movement compensation reduces false alarms.\n' +
          'IP65 rated housing for indoor/outdoor or harsh environments.\n' +
          'Ideal for warehouses, factories, atriums, sports arenas, and hangars.\n' +
          'Meets EN54-12 standards for dependable beam detection.\n' +
          'Economical alternative to multiple point detectors in open spaces.',
    rating: 4.7,
    reviews: 67,
    sold: '90+',
    tags: [
      'relay beam detector', 'reflective beam smoke', 'conventional beam detector', '100m beam coverage', 'en54-12 beam',
      'warehouse beam detector', 'factory smoke beam', 'atrium fire detection', 'ip65 beam unit', 'dust compensation beam',
      'large area detector', 'economic smoke solution', 'open space detection', 'alignment compensation', 'harsh environment beam'
    ]
  },
  {
    id: 'remote-user-interface-panel',
    title: 'Remote user interface panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://honeywell.scene7.com/is/image/Honeywell65/HBT-Fire-ANN-80-STRAIGHT-HiRes1',
    desc: 'Remote User Interface Panel provides system status and control at additional locations.\n' +
          'Mimics main fire panel display with LED zone indicators and LCD text.\n' +
          'Allows acknowledge, silence, reset, and disable functions remotely.\n' +
          'Networked via RS485 or fiber for distances up to several kilometers.\n' +
          'Password-protected access prevents unauthorized operation.\n' +
          'Compact flush or surface mount design for lobbies and guard stations.\n' +
          'Ideal for large buildings, campuses, hospitals, and multi-site facilities.\n' +
          'Enhances response time by providing local information and control.\n' +
          'Compatible with major addressable and conventional panels.\n' +
          'Essential for efficient multi-point fire system management.',
    rating: 4.6,
    reviews: 45,
    sold: '70+',
    tags: [
      'remote fire panel', 'annunciator panel', 'remote interface unit', 'system status panel', 'rs485 fire network',
      'hospital remote panel', 'campus fire interface', 'acknowledge reset panel', 'multi site fire control', 'lobby annunciator',
      'guard station panel', 'password protected panel', 'flush mount annunciator', 'multi point management', 'efficient fire interface'
    ]
  },
  {
    id: 'vesta-stan-alone-smoke-detector',
    title: 'Vesta Stan Alone Smoke Detector',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://innxeon.com/wp-content/uploads/2025/07/S-9102N.-Angle-1.png',
    desc: 'Vesta Stand Alone Smoke Detector operates independently with battery power.\n' +
          'Photoelectric sensor detects smoldering fires with high reliability.\n' +
          'Loud 85 dB piezo alarm alerts occupants when smoke is detected.\n' +
          '9V battery included with low-battery warning chirp.\n' +
          'Test/hush button for easy testing and temporary silencing.\n' +
          'Ceiling or wall mount with simple twist-lock base.\n' +
          'Ideal for homes, apartments, caravans, and small non-wired premises.\n' +
          'Meets EN14604 standard for standalone smoke detection.\n' +
          'Affordable, no-wiring solution for basic fire safety.\n' +
          'Essential personal protection device for sleeping areas.',
    rating: 4.6,
    reviews: 345,
    sold: '600+',
    tags: [
      'vesta standalone detector', 'battery smoke detector', 'photoelectric standalone', 'home smoke alarm', 'en14604 detector',
      '85 db smoke alarm', 'test hush button', 'low battery chirp', 'apartment safety detector', 'no wiring smoke',
      'ceiling mount detector', 'personal fire protection', 'sleeping area alarm', 'affordable smoke unit', 'independent smoke sensor'
    ]
  },
  {
    id: 'wireless-optical-smoke-detector',
    title: 'wireless Optical Smoke Detector',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ampac.net/wp-content/uploads/2023/04/Reach-Wireless-Optical-Smoke-Detector-new-picture.png',
    desc: 'Wireless Optical Smoke Detector eliminates wiring for flexible installation.\n' +
          'Photoelectric chamber detects smoldering fires with low false alarms.\n' +
          'Long-range wireless mesh network for reliable communication.\n' +
          'Battery-powered with 5–10 year life depending on model.\n' +
          'Low battery alert and supervision signal to control panel.\n' +
          'LED indicator for alarm, polling, and fault status.\n' +
          'Ideal for historic buildings, offices, hotels, and retrofit projects.\n' +
          'Compatible with wireless addressable fire panels.\n' +
          'Meets EN54-25 or equivalent wireless standards.\n' +
          'Modern, easy-to-install smoke detection without cables.',
    rating: 4.7,
    reviews: 189,
    sold: '300+',
    tags: [
      'wireless smoke detector', 'optical wireless sensor', 'mesh network smoke', 'battery wireless detector', 'retrofit smoke alarm',
      'historic building detector', 'en54-25 wireless', 'low false alarm smoke', 'long range wireless', 'hotel wireless unit',
      'office retrofit detector', 'no cable smoke', 'easy install wireless', 'addressable wireless sensor', 'modern fire detection'
    ]
  },
  {
    id: 'conventional-optical-smoke-detector-ul-listed',
    title: 'Conventional Optical smoke detector (UL Listed)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img001.video2b.com/906/file_01631940328957.jpg',
    desc: 'Conventional Optical Smoke Detector with UL Listing ensures trusted performance.\n' +
          'Photoelectric sensing detects visible smoke particles from smoldering fires.\n' +
          'Low-profile design with LED alarm indicator for easy status viewing.\n' +
          'Compatible with 2-wire conventional bases and panels.\n' +
          'Built-in test switch and remote test capability for maintenance.\n' +
          'Dust and insect screen reduces nuisance alarms in normal conditions.\n' +
          'UL 268 listed for reliable use in North American and global projects.\n' +
          'Ideal for offices, schools, hotels, apartments, and commercial spaces.\n' +
          'Proven, cost-effective point detection for general applications.\n' +
          'UL-certified quality for peace of mind.',
    rating: 4.7,
    reviews: 150,
    sold: '800+',
    tags: [
      'ul listed smoke detector', 'conventional optical ul', 'photoelectric ul detector', 'low profile smoke', '2 wire conventional',
      'office ul smoke', 'school safety detector', 'hotel ul listed', 'remote test smoke', 'dust insect screen',
      'ul 268 certified', 'general purpose detector', 'cost effective ul', 'north american smoke', 'reliable point detection'
    ]
  },
  {
    id: 'addressable-optical-smoke-detector-ul-listed',
    title: 'Addressable Optical Smoke Detector (UL Listed)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://honeywell.scene7.com/is/image/Honeywell65/hbt-Security-P1907343-primaryimage',
    desc: 'Addressable Optical Smoke Detector with UL Listing provides pinpoint location.\n' +
          'Photoelectric sensor detects smoldering fires with high accuracy.\n' +
          'Unique address allows exact identification on control panel.\n' +
          'Drift compensation automatically adjusts for dust and aging.\n' +
          'LED status ring shows polling, alarm, and trouble conditions.\n' +
          'Removable chamber for cleaning and maintenance.\n' +
          'UL 268 listed for compliance in US and international projects.\n' +
          'Ideal for high-rise buildings, hospitals, data centers, and offices.\n' +
          'Advanced, reliable addressable detection for modern systems.\n' +
          'UL-certified precision for critical applications.',
    rating: 4.8,
    reviews: 120,
    sold: '600+',
    tags: [
      'addressable smoke ul', 'ul listed optical detector', 'photoelectric addressable', 'drift compensation smoke', 'unique address detector',
      'high rise smoke sensor', 'hospital addressable unit', 'data center detection', 'removable chamber ul', 'led status ring',
      'ul 268 smoke', 'modern addressable system', 'critical application detector', 'precise smoke location', 'advanced ul detection'
    ]
  },
  {
    id: 'tx7100-intelligent-addressable-optical-smoke-detector',
    title: 'TX7100 Intelligent Addressable Optical Smoke Detector',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://apollo-fire.co.uk/wp-content/uploads/2025/10/E0000411_0001.jpg',
    desc: 'TX7100 Intelligent Addressable Optical Smoke Detector uses microprocessor technology.\n' +
          'Advanced optical sensing for fast detection of smoldering fires.\n' +
          'Automatic drift compensation maintains sensitivity over time.\n' +
          'Unique addressable protocol for precise device identification.\n' +
          'Multi-color LED indicator for polling, alarm, and fault status.\n' +
          'Self-test feature and chamber contamination monitoring.\n' +
          'Compatible with major addressable fire alarm systems.\n' +
          'Ideal for commercial offices, hotels, retail, and institutional buildings.\n' +
          'Meets EN54-7 and LPCB standards for high reliability.\n' +
          'Intelligent, low-maintenance smoke detection solution.',
    rating: 4.9,
    reviews: 90,
    sold: '400+',
    tags: [
      'tx7100 smoke detector', 'intelligent addressable smoke', 'microprocessor smoke', 'drift compensation tx7100', 'multi color led detector',
      'self test smoke sensor', 'commercial addressable detector', 'hotel intelligent smoke', 'en54-7 lpcb detector', 'low maintenance smoke',
      'precise identification smoke', 'retail fire detection', 'institutional safety unit', 'advanced optical detector', 'reliable addressable sensor'
    ]
  },
  {
    id: 'tx7004-intelligent-fire-alarm-contro-panel',
    title: 'TX7004 Intelligent Fire Alarm Contro Panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.alicdn.com/imgextra/i3/6000000007376/O1CN01KWvCv824MG82ZOeCi_!!6000000007376-0-tbvideo.jpg',
    desc: 'TX7004 Intelligent Fire Alarm Control Panel supports 4 loops with full addressable capability.\n' +
          'Large color touchscreen display shows graphical maps, zone status, and event history.\n' +
          'Up to 200 addresses per loop for high-density installations.\n' +
          'Advanced cause-and-effect logic, time schedules, and group control functions.\n' +
          'Built-in network ports for peer-to-peer or fiber-optic multi-panel networking.\n' +
          'Integrated EN54-4 power supply with intelligent battery management.\n' +
          'USB and Ethernet connectivity for programming and remote monitoring.\n' +
          'Ideal for large commercial buildings, hospitals, universities, and industrial plants.\n' +
          'Certified to EN54-2/4 and many international approvals.\n' +
          'High-end intelligent panel for complex, large-scale fire safety systems.',
    rating: 4.9,
    reviews: 50,
    sold: '150+',
    tags: [
      'tx7004 fire panel', '4 loop intelligent panel', 'touchscreen addressable', '200 address loop', 'large building panel',
      'hospital fire control', 'university addressable', 'cause effect logic', 'en54-4 power supply', 'network multi panel',
      'usb ethernet panel', 'graphical map panel', 'high density installation', 'complex fire system', 'premium intelligent control'
    ]
  },
  {
    id: 'tx7002-intelligent-fire-alarm-control-panel',
    title: 'TX7002 Intelligent Fire Alarm Control Panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.lltsecurity.com/ups/products/packing1.jpg',
    desc: 'TX7002 Intelligent Fire Alarm Control Panel is a powerful 2-loop addressable system.\n' +
          'Supports up to 200 devices per loop with flexible configuration.\n' +
          'Color LCD display provides clear event details, device status, and diagnostics.\n' +
          'Programmable zones, groups, and output logic for custom site needs.\n' +
          'High-speed polling and response for fast alarm activation.\n' +
          'Built-in power supply with battery monitoring and charger.\n' +
          'USB programming port and optional Ethernet for remote access.\n' +
          'Perfect for medium-sized offices, hotels, schools, and retail complexes.\n' +
          'Certified to EN54-2/4 standards for reliable performance.\n' +
          'Balanced, intelligent panel for mid-scale fire safety projects.',
    rating: 4.8,
    reviews: 40,
    sold: '120+',
    tags: [
      'tx7002 fire panel', '2 loop addressable', 'lcd intelligent panel', '200 device loop', 'medium office panel',
      'hotel fire system', 'school addressable control', 'programmable logic panel', 'en54 certified panel', 'high speed polling',
      'usb programming panel', 'remote access fire', 'mid scale safety', 'balanced intelligent unit', 'retail fire panel'
    ]
  },
  {
    id: 'fire-resistance-cable-3-core-1-5mm-lpcb-certified',
    title: 'Fire Resistance Cable 3 Core 1.5mm LPCB Certified',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00yqhYRETdYpbe/Fire-Resistance-2-Core-X-1-5mm2-Fire-Alarm-Cable.webp',
    desc: 'Fire Resistance Cable 3 Core 1.5mm LPCB Certified maintains circuit integrity during fire.\n' +
          'Enhanced insulation withstands 830°C for 120 minutes (PH120 rating).\n' +
          'Low smoke zero halogen (LSZH) sheath reduces toxic fumes.\n' +
          '3-core design ideal for sounder circuits, call points, and detectors.\n' +
          'Copper conductors with mica tape and XLPE insulation for high performance.\n' +
          'LPCB certified to BS 5839 and EN50200 standards.\n' +
          'UV and oil resistant for indoor/outdoor fire alarm installations.\n' +
          'Flexible yet robust for easy pulling through conduits.\n' +
          'Essential for life-safety circuits that must function under fire conditions.\n' +
          'Trusted cable for compliant fire detection systems.',
    rating: 4.6,
    reviews: 200,
    sold: '1000+',
    tags: [
      'fire resistant cable', 'lpcb certified cable', '3 core 1.5mm', 'ph120 fire cable', 'lszh fire alarm cable',
      'bs 5839 cable', 'en50200 fire cable', 'mica tape cable', 'life safety circuit', 'low smoke cable',
      'xlpe insulation cable', 'uv resistant fire cable', 'fire alarm wiring', 'compliant fire cable', 'robust fire resistant'
    ]
  },
  {
    id: 'fire-resistance-cable-2-core-1-5mm-ul-listed-certified',
    title: 'Fire Resistance Cable 2 Core 1.5mm UL Listed Certified',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.prod.website-files.com/65587e079e315820aa5d3b65/685126c0dd6c482646156846_nav-image9.jpg',
    desc: 'Fire Resistance Cable 2 Core 1.5mm UL Listed Certified ensures circuit survival in fire.\n' +
          'UL 2196 certified for 2-hour fire resistive performance.\n' +
          'Low smoke zero halogen jacket minimizes toxic gas emission.\n' +
          '2-core design perfect for power supply to detectors and sounders.\n' +
          'Stranded copper conductors with fire-resistant insulation layers.\n' +
          'Flexible construction for easy installation in conduits and trays.\n' +
          'Suitable for addressable and conventional fire alarm systems.\n' +
          'Ideal for high-rise buildings, hospitals, and commercial complexes.\n' +
          'UL listed for North American and international compliance.\n' +
          'Critical cable for maintaining alarm functionality during emergencies.',
    rating: 4.5,
    reviews: 180,
    sold: '900+',
    tags: [
      'ul listed fire cable', '2 core 1.5mm fire resistant', 'ul 2196 certified', 'lszh fire cable', '2 hour fire cable',
      'stranded copper fire', 'high rise fire wiring', 'hospital fire cable', 'commercial fire resistant', 'flexible fire cable',
      'addressable cable', 'conventional fire wiring', 'emergency circuit cable', 'north american compliant', 'critical fire cable'
    ]
  },
  {
    id: 'extinguishant-hold-off-abort-button-single-gang',
    title: 'Extinguishant hold off/abort button, single gang',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://apollo-fire.co.uk/wp-content/uploads/2025/10/E0000411_0001.jpg',
    desc: 'Extinguishant Hold Off/Abort Button allows manual override of gas suppression release.\n' +
          'Single-gang flush or surface mount with red mushroom head for visibility.\n' +
          'Momentary or latching operation depending on system configuration.\n' +
          'Prevents accidental discharge during maintenance or false alarms.\n' +
          'LED indication shows hold-off status and system readiness.\n' +
          'Key-reset or push-reset models for secure re-arming.\n' +
          'Compatible with most gaseous extinguishing control panels.\n' +
          'Ideal for server rooms, data centers, archives, and clean agent systems.\n' +
          'Meets EN12094-3 standards for extinguishant release abort devices.\n' +
          'Essential safety device for suppression-protected areas.',
    rating: 4.7,
    reviews: 30,
    sold: '100+',
    tags: [
      'extinguishant abort button', 'gas suppression abort', 'hold off button', 'single gang abort', 'mushroom head abort',
      'server room abort', 'data center safety button', 'clean agent override', 'en12094-3 button', 'led status abort',
      'key reset abort', 'false alarm prevention', 'suppression control button', 'gaseous system abort', 'critical area safety'
    ]
  },
  {
    id: 'multisensor-optical-smoke-heat-detector-head-only-xpert-card-style-lpcb-approved',
    title: 'Multisensor (Optical smoke & Heat) detector HEAD ONLY (Xpert card Style- )- LPCB APPROVED',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.fike.com/wp-content/uploads/2020/07/SHP-PRO.png',
    desc: 'Multisensor Detector Head (Optical + Heat) with Xpert card style offers dual detection.\n' +
          'Combines photoelectric smoke and fixed/rate-of-rise heat sensing.\n' +
          'LPCB approved for high reliability in challenging environments.\n' +
          'Xpert addressing card for easy loop insertion and unique ID.\n' +
          'Advanced algorithms reduce false alarms from dust or cooking fumes.\n' +
          'Removable head for cleaning while base remains wired.\n' +
          'LED indicator ring shows alarm and fault conditions.\n' +
          'Ideal for kitchens, canteens, hotels, and areas with cooking vapors.\n' +
          'Compatible with major addressable fire panels.\n' +
          'Intelligent dual-sensor head for faster, more accurate detection.',
    rating: 4.8,
    reviews: 50,
    sold: '200+',
    tags: [
      'multisensor detector head', 'optical heat detector', 'lpcb multisensor', 'xpert card detector', 'dual detection head',
      'kitchen fire detector', 'canteen smoke heat', 'false alarm reduction', 'removable multisensor', 'addressable head only',
      'led ring detector', 'advanced algorithm sensor', 'hotel multisensor', 'accurate fire head', 'intelligent dual sensor'
    ]
  },
  {
    id: '3-zone-fire-extinguishant-control-panel-to-bs-en12094-1-c-w-3a-en54-4-psu-128-x64-pixel-graphical-lcd-display-lpcb-approved',
    title: '3 zone Fire Extinguishant control panel (to BS/EN12094-1) c/w 3A EN54-4 PSU & 128 x64 pixel graphical LCD display. LPCB Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hochikiamerica.com/wp-content/uploads/2020/07/Input-Output-Module.png',
    desc: '3-Zone Fire Extinguishant Control Panel meets BS EN12094-1 for gas suppression systems.\n' +
          'Graphical LCD display shows detailed status, countdown, and fault information.\n' +
          '3A EN54-4 power supply with battery backup for reliable operation.\n' +
          'LPCB approved for compliance in UK and international projects.\n' +
          'Controls release of clean agent, CO2, or inert gas systems.\n' +
          'Hold, abort, and manual release inputs for safety overrides.\n' +
          'Programmable delay and coincidence detection modes.\n' +
          'Ideal for server rooms, data centers, archives, and telecom facilities.\n' +
          'Comprehensive monitoring of cylinders, solenoids, and pressure switches.\n' +
          'Professional-grade panel for total flooding suppression control.',
    rating: 4.9,
    reviews: 40,
    sold: '150+',
    tags: [
      'extinguishant control panel', '3 zone suppression panel', 'en12094-1 panel', 'lpcb gas panel', 'graphical lcd panel',
      'clean agent control', 'server room suppression', 'data center panel', 'co2 release panel', 'hold abort panel',
      'coincidence detection panel', 'cylinder monitoring', 'en54-4 psu', 'telecom fire panel', 'total flooding control'
    ]
  },
  {
    id: 'input-output-unit-with-back-box-with-built-in-20-devices-isolator-lpcb-approved',
    title: 'Input/Output unit with Back Box & with built-in 20 devices isolator- LPCB APPROVED',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://contextplus.co.uk/wp-content/uploads/2019/06/FF516.IMG_SLM.jpg',
    desc: 'Input/Output Unit with 20-device isolator provides flexible control and monitoring.\n' +
          'LPCB approved for use in addressable fire alarm loops.\n' +
          'Single input monitors switches, flow switches, or contacts.\n' +
          'Single output controls relays, shutdowns, or auxiliary devices.\n' +
          'Built-in short-circuit isolator protects loop integrity up to 20 devices.\n' +
          'Surface or flush back box for neat installation.\n' +
          'LED indicators for input activation and output status.\n' +
          'Ideal for interfacing with fire doors, HVAC, lifts, and dampers.\n' +
          'Compact module enhances system flexibility and safety.\n' +
          'Reliable I/O solution for complex addressable installations.',
    rating: 4.7,
    reviews: 35,
    sold: '120+',
    tags: [
      'input output unit', 'lpcb io module', '20 device isolator', 'addressable io unit', 'fire door interface',
      'hvac shutdown module', 'lift control io', 'short circuit isolator', 'led status io', 'compact addressable module',
      'surface mount io', 'flush back box unit', 'system flexibility io', 'complex installation module', 'reliable io control'
    ]
  },
  {
    id: '16-zone-mfp-fire-panel-expandable-to-28',
    title: '16 zone MFP fire panel expandable to 28',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img001.video2b.com/906/file_01639530785635.jpg',
    desc: '16-Zone MFP Fire Panel is expandable up to 28 zones for growing installations.\n' +
          'Conventional design with clear zone LED indicators and fault display.\n' +
          'Built-in sounder circuits with selectable tones and delay options.\n' +
          'Fire, fault, and auxiliary relays for external signaling.\n' +
          'Battery backup and intelligent charger for reliable power.\n' +
          'Easy zone programming and end-of-line monitoring.\n' +
          'Suitable for medium to large buildings with phased expansion.\n' +
          'Ideal for schools, offices, retail complexes, and industrial sites.\n' +
          'Compliant with EN54-2/4 for certified conventional detection.\n' +
          'Flexible, expandable panel for future-proof fire safety.',
    rating: 4.8,
    reviews: 45,
    sold: '180+',
    tags: [
      '16 zone fire panel', 'expandable mfp panel', '28 zone conventional', 'led zone panel', 'medium building panel',
      'school fire control', 'office expandable panel', 'retail conventional', 'en54 compliant panel', 'sounder delay mfp',
      'auxiliary relay panel', 'battery backup mfp', 'phased expansion panel', 'future proof fire', 'flexible zone panel'
    ]
  },
  {
    id: 'fire-alarm-system-cp100-6-zone-conventional-facp-fire-alarm-control-panel',
    title: 'Fire Alarm System CP100 – 6 Zone Conventional FACP Fire Alarm Control Panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.vedardsecurity.com/images/alarm%20panel/CP1004.jpg',
    desc: 'CP100 6-Zone Conventional FACP is a cost-effective fire alarm control panel.\n' +
          '6 detection zones with individual LED status indicators.\n' +
          'Built-in sounder circuits and selectable alarm tones.\n' +
          'Fire and fault relays for integration with building systems.\n' +
          '24V battery backup maintains operation during power outage.\n' +
          'Simple wiring and commissioning for fast installation.\n' +
          'Ideal for small to medium premises like shops, offices, and villas.\n' +
          'Reliable conventional detection at an economical price.\n' +
          'Meets basic EN54 or local standards for fire safety.\n' +
          'Practical choice for budget-conscious fire protection.',
    rating: 4.6,
    reviews: 60,
    sold: '250+',
    tags: [
      'cp100 6 zone panel', 'conventional facp', '6 zone fire control', 'led status facp', 'budget fire panel',
      'shop conventional panel', 'office small panel', 'villa fire system', 'sounder circuit panel', 'battery backup cp100',
      'easy install facp', 'economical fire alarm', 'basic en54 panel', 'reliable conventional', 'cost conscious protection'
    ]
  },
  {
    id: 'fire-alarm-system-cp100-4-zone-conventional-facp-fire-alarm-control-panel',
    title: 'Fire Alarm System CP100 – 4 Zone Conventional FACP Fire Alarm Control Panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cctvpinoy.com/wp-content/uploads/2023/01/AW-CFP2166-2C.jpg',
    desc: 'CP100 4-Zone Conventional FACP is a compact and affordable fire panel.\n' +
          '4 detection zones with clear LED zone status indicators.\n' +
          'Integrated sounder circuits with adjustable tones.\n' +
          'Fire and fault relay outputs for external signaling.\n' +
          '24V battery backup for continuous operation.\n' +
          'User-friendly terminal layout and quick setup.\n' +
          'Perfect for very small premises, apartments, shops, and garages.\n' +
          'Reliable basic fire detection at minimal cost.\n' +
          'Compliant with EN54 or local fire standards.\n' +
          'Simple, effective entry-level fire alarm solution.',
    rating: 4.6,
    reviews: 55,
    sold: '220+',
    tags: [
      'cp100 4 zone', 'compact conventional panel', '4 zone facp', 'led zone indicator', 'small premises panel',
      'apartment fire control', 'shop basic panel', 'garage conventional', 'battery backup 4 zone', 'easy setup facp',
      'minimal cost panel', 'entry level fire', 'en54 compliant small', 'simple fire alarm', 'affordable 4 zone'
    ]
  },
  {
    id: 'fire-alarm-system-cp100-2-zone-conventional-facp-fire-alarm-control-panel',
    title: 'Fire Alarm System CP100 – 2 Zone Conventional FACP Fire Alarm Control Panel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://s7d1.scene7.com/is/image/Honeywell65/hbt-fire-p1907192-300-series-photoelectric-smoke-detector-primaryimage',
    desc: 'CP100 2-Zone Conventional FACP is the smallest and most economical panel in the range.\n' +
          '2 detection zones with individual LED status lights.\n' +
          'Built-in sounder circuit for direct siren connection.\n' +
          'Fire and fault relays for simple integration.\n' +
          'Battery backup ensures operation during power loss.\n' +
          'Very easy wiring and commissioning for fast deployment.\n' +
          'Ideal for tiny shops, single rooms, garages, and small homes.\n' +
          'Reliable conventional detection at the lowest cost.\n' +
          'Meets basic EN54 or local standards.\n' +
          'Perfect starter panel for minimal fire safety needs.',
    rating: 4.5,
    reviews: 50,
    sold: '200+',
    tags: [
      'cp100 2 zone', 'smallest conventional panel', '2 zone facp', 'led status small panel', 'tiny shop panel',
      'garage fire control', 'single room alarm', 'battery backup 2 zone', 'fast install facp', 'lowest cost panel',
      'starter fire alarm', 'basic en54 panel', 'minimal safety unit', 'economical 2 zone', 'simple conventional'
    ]
  },
  {
    id: 'ce-list-photoelectronic-smoke-detector',
    title: 'Ce List Photoelectronic Smoke Detector',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://buildings.honeywell.com/content/dam/honeywellbt/hbt/fire/images/products/detectors/5151.jpg',
    desc: 'CE Listed Photoelectronic Smoke Detector offers dependable smoke sensing.\n' +
          'Photoelectric chamber detects smoldering fires with good stability.\n' +
          'Low-profile design with bright LED alarm indicator.\n' +
          'Compatible with conventional 2-wire bases and panels.\n' +
          'Test button for easy monthly testing and maintenance.\n' +
          'Insect guard and dust compensation reduce false alarms.\n' +
          'CE certified for European and international compliance.\n' +
          'Suitable for homes, apartments, offices, and light commercial use.\n' +
          'Affordable, reliable point-type smoke detection.\n' +
          'Proven performance in everyday fire safety applications.',
    rating: 4.5,
    reviews: 100,
    sold: '500+',
    tags: [
      'ce listed smoke detector', 'photoelectronic smoke', 'low profile ce detector', '2 wire conventional ce', 'test button smoke',
      'home ce smoke', 'apartment safety detector', 'office ce listed', 'dust compensation ce', 'insect guard detector',
      'european compliance smoke', 'affordable ce unit', 'reliable point detector', 'everyday fire sensor', 'stable smoke detection'
    ]
  },
  {
    id: 'rate-of-rise-heat-detector-sec-rtd',
    title: 'Rate Of Rise Heat Detector | SEC RTD',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img001.video2b.com/906/file_01632118585796.jpg?x-oss-process=image/resize,m_lfit,w_768/format,webp',
    desc: 'Rate of Rise Heat Detector SEC RTD responds quickly to rapid temperature increases.\n' +
          'Detects fast-developing fires before smoke becomes visible.\n' +
          'Fixed temperature element provides backup protection.\n' +
          'Low-profile design with LED alarm indicator.\n' +
          'Compatible with conventional 2-wire bases.\n' +
          'Test button for easy servicing and verification.\n' +
          'Suitable for kitchens, garages, workshops, and areas with dust or steam.\n' +
          'Reduces false alarms in environments unsuitable for smoke detectors.\n' +
          'Meets EN54-5 standards for reliable heat detection.\n' +
          'Essential complement to smoke detection in high-risk zones.',
    rating: 4.6,
    reviews: 90,
    sold: '450+',
    tags: [
      'rate of rise heat', 'sec rtd detector', 'fast response heat', 'fixed temperature backup', 'kitchen heat detector',
      'garage fire sensor', 'workshop heat unit', 'dust steam resistant', 'en54-5 heat detector', 'low profile heat',
      '2 wire conventional heat', 'test button heat', 'complement smoke detector', 'high risk heat sensor', 'reliable heat detection'
    ]
  },
  {
    id: 'conventional-fire-alarm-system-strobe-sounder-alarm-siren',
    title: 'Conventional Fire Alarm System Strobe Sounder Alarm Siren',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/yKUAAOSw8d9Uu1QL/s-l1200.jpg',
    desc: 'Conventional Fire Alarm Strobe Sounder combines audible and visual alerts.\n' +
          'High-intensity strobe with 1 Hz flash rate for maximum visibility.\n' +
          'Loud 95–105 dB sounder with multiple selectable tones.\n' +
          'Red body with clear lens for standard fire alarm recognition.\n' +
          'Low current draw allows many units per circuit.\n' +
          'Surface or flush mount with deep base option.\n' +
          'IP65 weatherproof models available for outdoor use.\n' +
          'Ideal for factories, warehouses, schools, and public buildings.\n' +
          'Meets EN54-3 and EN54-23 standards for combined signaling.\n' +
          'Effective dual-alert device for complete evacuation.',
    rating: 4.7,
    reviews: 110,
    sold: '550+',
    tags: [
      'strobe sounder', 'combined fire alarm', 'high intensity strobe', '95 db sounder', 'conventional strobe siren',
      'factory strobe sounder', 'warehouse alert device', 'en54-3 en54-23', 'ip65 strobe', 'low current sounder strobe',
      'red fire strobe', 'public building siren', 'dual alert device', 'evacuation strobe', 'weatherproof sounder strobe'
    ]
  }
],



    'Fall Arrest System': [
  {
    id: '8-link',
    title: '8 LINK',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.liftingsafety.co.uk/images/product/5591/average/fall-arrest-traveller.webp',
    desc: '8 Link is a robust fall arrest traveller for horizontal lifeline systems.\n' +
          'Constructed from high-tensile steel with corrosion-resistant coating.\n' +
          'Dual stainless steel rollers ensure smooth, low-friction travel along cable.\n' +
          'Auto-locking dual-action karabiner for secure harness connection.\n' +
          'Rated for 140 kg user weight including tools and equipment.\n' +
          'Suitable for rooftop safety lines, crane runways, and bridge maintenance.\n' +
          'Conforms to EN 795 Class B and ANSI Z359.15 for mobile anchor devices.\n' +
          'Reduces pendulum effect by following user movement precisely.\n' +
          'Easy to inspect and maintain with visible serial numbering.\n' +
          'Essential mobile anchorage component for safe horizontal fall protection.',
    rating: 4.6,
    reviews: 56,
    sold: '80+',
    tags: [
      'fall arrest traveller', 'horizontal lifeline link', '8 link traveller', 'rooftop safety traveller', 'crane runway anchor',
      'en 795 class b', 'ansi z359 traveller', 'stainless roller link', 'dual action karabiner', '140 kg rated traveller',
      'bridge maintenance safety', 'mobile anchor device', 'low friction traveller', 'pendulum reduction link', 'horizontal fall protection'
    ]
  },
  {
    id: 'accessory-belt',
    title: 'ACCESSORY BELT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/513YjrIuwuL.jpg',
    desc: 'Accessory Belt adds tool-carrying capacity to any full-body fall arrest harness.\n' +
          'Wide padded lumbar support minimizes back strain during extended wear.\n' +
          'Multiple reinforced D-rings and gear loops for lanyards, tools, and pouches.\n' +
          'Breathable mesh panels and adjustable waist buckle for comfort.\n' +
          'Quick-release buckles allow fast attachment/removal from harness.\n' +
          'High-strength webbing rated for load-bearing accessory use.\n' +
          'Ideal for tower technicians, linemen, window cleaners, and riggers.\n' +
          'Enhances productivity by keeping essential tools within arm’s reach.\n' +
          'Compatible with most EN 361 certified full-body harnesses.\n' +
          'Practical, durable belt for efficient work at height.',
    rating: 4.5,
    reviews: 78,
    sold: '100+',
    tags: [
      'accessory belt', 'tool belt fall arrest', 'padded lumbar belt', 'd ring accessory', 'tower climbing belt',
      'lineman support belt', 'breathable gear belt', 'quick release belt', 'work positioning belt', 'rigger tool belt',
      'harness add-on belt', 'high strength webbing belt', 'arm reach tools', 'productivity belt', 'fall protection accessory'
    ]
  },
  {
    id: 'adjustable-lanyard',
    title: 'ADJUSTABLE LANYARD',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.directindustry.com/images_di/photo-g/31865-4654491.jpg',
    desc: 'Adjustable Lanyard offers variable length from 0.5 m to 2 m for work positioning.\n' +
          'Integrated shock absorber limits impact force to under 6 kN in case of fall.\n' +
          'Smooth cam-lock adjuster allows quick, secure length changes under load.\n' +
          'Double-locking snap hooks or scaffold hooks at both ends.\n' +
          'High-visibility webbing with reflective stitching for night work.\n' +
          'Rated for users up to 140 kg including tools and clothing.\n' +
          'Perfect for roofing, steel erection, tree trimming, and scaffolding.\n' +
          'Certified to EN 355 and ANSI Z359 for energy-absorbing lanyards.\n' +
          'Eliminates excess slack to reduce trip hazards.\n' +
          'Versatile, reliable connecting device for fall arrest and restraint.',
    rating: 4.7,
    reviews: 134,
    sold: '200+',
    tags: [
      'adjustable fall lanyard', 'shock absorbing adjustable', 'cam lock lanyard', 'roofing adjustable lanyard', 'scaffolding lanyard',
      'en 355 lanyard', 'ansi z359 adjustable', 'high visibility lanyard', '6 kn impact limit', 'scaffold hook lanyard',
      'snap hook adjustable', 'tree work lanyard', 'steel erection safety', 'work positioning lanyard', 'trip hazard reduction'
    ]
  },
  {
    id: 'anchorage-connector',
    title: 'ANCHORAGE CONNECTOR',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-bh2eowrnub/images/stencil/1280x1280/products/3584/4476/4548743__26695.1647383331.png?c=2',
    desc: 'Anchorage Connector creates a secure, rated attachment point for fall protection.\n' +
          '5,000 lb (22 kN) minimum breaking strength steel D-ring or O-ring.\n' +
          'Corrosion-resistant zinc plating or stainless steel for long life.\n' +
          'Models include rebar hook, I-beam clamp, concrete anchor, and sling.\n' +
          'Double-locking gate for fast, safe connection to lanyard or lifeline.\n' +
          'Suitable for temporary or permanent anchors on steel, concrete, and wood.\n' +
          'Ideal for construction, roofing, maintenance, and rescue operations.\n' +
          'Conforms to EN 795 Class A1/B/C and ANSI Z359 anchorage standards.\n' +
          'Critical component for building safe fall arrest anchor points.\n' +
          'Durable, versatile connector trusted by professionals.',
    rating: 4.8,
    reviews: 89,
    sold: '120+',
    tags: [
      'anchorage connector', 'fall arrest anchor', 'steel d ring anchor', 'beam clamp connector', 'rebar hook anchor',
      'en 795 anchorage', 'ansi z359 connector', 'temporary anchor point', 'permanent anchorage', 'construction anchor',
      'roof anchor connector', '22 kn rated anchor', 'corrosion resistant connector', 'quick connect anchor', 'life safety anchor'
    ]
  },
  {
    id: 'best-harness',
    title: 'Best Harness',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://quickonesafety.com/wp-content/uploads/2021/08/AFP702S_M-_-AFP702L_XL-HARNESS-descripcion-1.jpg',
    desc: 'Best Harness is a premium full-body fall arrest harness built for comfort and performance.\n' +
          'Five-point adjustment system with quick-connect buckles for fast donning.\n' +
          'Padded shoulder straps and wide lumbar belt reduce pressure and fatigue.\n' +
          'Dorsal D-ring for fall arrest + front and side D-rings for positioning/rescue.\n' +
          'Breathable mesh back pad and moisture-wicking lining for hot climates.\n' +
          'Trauma straps for suspension relief after a fall incident.\n' +
          'High-strength polyester webbing rated for 140 kg user weight.\n' +
          'Perfect for tower climbing, roofing, scaffolding, and industrial work.\n' +
          'Certified to EN 361 and ANSI Z359 for global compliance.\n' +
          'Top-quality harness trusted by professionals working at height daily.',
    rating: 4.9,
    reviews: 167,
    sold: '250+',
    tags: [
      'best full body harness', 'premium fall arrest', 'five point adjustment', 'padded lumbar harness', 'dorsal front side d ring',
      'trauma relief harness', 'tower climbing harness', 'roofing premium harness', 'en 361 ansi z359', 'breathable mesh harness',
      'quick connect buckles', 'long shift comfort', 'industrial fall harness', 'professional height harness', 'high strength webbing'
    ]
  },
  {
    id: 'cobra-d-uniform-rappel-belt',
    title: 'COBRA-D UNIFORM RAPPEL BELT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cmcpro.com/wp-content/uploads/wd/products/20242X_Uniform_Rappel_Belt_01.jpg?ver=1692515948',
    desc: 'COBRA-D Uniform Rappel Belt is built for rescue, tactical rappelling, and rope access.\n' +
          'COBRA quick-release buckle allows fast, secure fastening under stress.\n' +
          'Padded waist belt with lumbar support for comfort during long rappels.\n' +
          'Multiple gear loops and accessory D-rings for carabiners, descenders, and tools.\n' +
          'High-strength nylon webbing rated for rescue and dynamic loads.\n' +
          'Adjustable leg loops with quick-connect buckles for proper fit.\n' +
          'Ideal for firefighters, search & rescue, industrial rope access, and military.\n' +
          'Conforms to EN 358 and NFPA 1983 for work positioning and rescue.\n' +
          'Lightweight and compact – integrates perfectly with full-body harnesses.\n' +
          'Professional belt for demanding vertical operations.',
    rating: 4.8,
    reviews: 45,
    sold: '60+',
    tags: [
      'cobra rappel belt', 'uniform rescue belt', 'quick release rappel', 'padded lumbar rescue', 'gear loop belt',
      'en 358 work belt', 'nfpa 1983 rescue', 'search rescue belt', 'firefighter rappel belt', 'rope access belt',
      'vertical rescue belt', 'tactical rope belt', 'd ring rescue belt', 'lightweight rappel belt', 'professional vertical belt'
    ]
  },
  {
    id: 'connecting-device',
    title: 'Connecting Device',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.mazzellacompanies.com/wp-content/uploads/2021/05/article-fall-protection-common-terms-systems-osha-regulations-lanyards.jpg',
    desc: 'Connecting Device is the critical link between harness and anchorage in fall arrest.\n' +
          'Available as shock-absorbing lanyards or self-retracting lifelines (SRL).\n' +
          'Energy absorber limits fall arrest forces to safe levels (≤6 kN).\n' +
          'Double-locking snap hooks or scaffold hooks at connection ends.\n' +
          'High-visibility webbing or stainless cable with reflective markers.\n' +
          'Lengths from 1.8 m fixed to 3–6 m retractable models.\n' +
          'Rated for 140 kg user weight including tools and equipment.\n' +
          'Essential for construction, roofing, maintenance, and industrial work at height.\n' +
          'Conforms to EN 355 / EN 360 and ANSI Z359 standards.\n' +
          'Reliable, life-saving component for every fall protection setup.',
    rating: 4.6,
    reviews: 67,
    sold: '90+',
    tags: [
      'fall arrest connector', 'shock absorbing connector', 'self retracting lifeline', 'energy absorbing device', 'double lock snap',
      'scaffold hook connector', 'high visibility lanyard', 'construction connecting', 'roofing fall connector', 'en 355 connector',
      'ansi z359 lanyard', '140 kg rated connector', 'industrial fall link', 'reliable fall connector', 'critical fall component'
    ]
  },
  {
    id: 'descent-and-rescue-kit',
    title: 'Decent and Rescue Kit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://syndicate.synthrone.com/ce0gp5ri2yb3/V100324139/latest/assets/85026.png',
    desc: 'Descent and Rescue Kit enables safe controlled descent and victim rescue.\n' +
          '8 mm static kernmantle rope with auto-locking descender device.\n' +
          'Full-body harness with front and dorsal attachment points.\n' +
          'Portable tripod or anchor sling for edge setup.\n' +
          'Pulley, carabiners, and rope grab for pick-off or haul systems.\n' +
          'Compact backpack-style carry bag for rapid deployment.\n' +
          'Ideal for towers, roofs, confined spaces, and high-angle emergencies.\n' +
          'Conforms to EN 341 descent and EN 1497 rescue standards.\n' +
          'Essential kit for trained personnel performing self or assisted rescue.\n' +
          'Life-saving vertical rescue system for work at height.',
    rating: 5,
    reviews: 34,
    sold: '50+',
    tags: [
      'descent rescue kit', 'controlled descent kit', 'high angle rescue', 'auto locking descender', 'kernmantle rescue rope',
      'tower rescue kit', 'roof descent system', 'confined space rescue', 'en 341 rescue', 'victim pick off kit',
      'portable tripod rescue', 'rescue pulley system', 'carry bag rescue', 'self rescue vertical', 'emergency descent kit'
    ]
  },
  {
    id: 'fall-protection-kit',
    title: 'FALL PROTECTION KIT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://us.evocdn.io/supplier/catalog/1252/product/original/hw-TFPK-6U6FTAK.jpg',
    desc: 'Fall Protection Kit delivers a complete ready-to-work fall arrest solution.\n' +
          'Full-body harness with quick-connect buckles and padded straps.\n' +
          '6 ft (1.8 m) shock-absorbing lanyard with double-locking snap hooks.\n' +
          'Temporary anchor sling or rebar hook for immediate anchorage.\n' +
          'High-visibility orange and reflective components for safety.\n' +
          'Compact carry bag keeps everything organized on site.\n' +
          'Perfect for construction, roofing, maintenance, and general height work.\n' +
          'Conforms to EN 361, EN 355, EN 795, and ANSI Z359 standards.\n' +
          'Ideal starter kit for workers beginning fall protection programs.\n' +
          'All-in-one compliant package for immediate safety compliance.',
    rating: 4.9,
    reviews: 112,
    sold: '180+',
    tags: [
      'fall protection kit', 'complete fall arrest kit', 'full body lanyard kit', 'shock absorbing kit', 'temporary anchor kit',
      'construction fall kit', 'roofing safety package', 'en 361 en 355 kit', 'ready to work fall', 'high visibility kit',
      'carry bag fall kit', 'starter fall protection', 'compliant height kit', 'maintenance fall kit', 'all in one safety'
    ]
  },
  {
    id: 'fall-tech-harness',
    title: 'Fall Tech Harness',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/00/s/MTIwMFgxNTk5/z/yPIAAOSwBhRi8bK3/$_57.JPG?set_id=880000500F',
    desc: 'Fall Tech Harness is a professional-grade full-body fall arrest harness.\n' +
          'Tongue buckle leg straps and quick-connect chest strap for fast fitting.\n' +
          'Padded shoulder straps and breathable back pad for extended comfort.\n' +
          'Dorsal D-ring for fall arrest + side D-rings for positioning.\n' +
          'Front D-ring option for rescue and ladder climbing.\n' +
          'Trauma straps for post-fall suspension relief.\n' +
          'High-strength polyester webbing rated for 140 kg users.\n' +
          'Perfect for construction, scaffolding, tower work, and industrial access.\n' +
          'Certified to EN 361 and ANSI Z359 standards.\n' +
          'Trusted, comfortable harness for daily work at height.',
    rating: 4.8,
    reviews: 145,
    sold: '220+',
    tags: [
      'fall tech harness', 'full body fall tech', 'tongue buckle fall tech', 'padded fall tech harness', 'dorsal side d ring',
      'trauma relief fall tech', 'construction fall tech', 'scaffolding harness tech', 'en 361 fall tech', 'ansi z359 harness',
      'tower work harness', 'breathable fall tech', 'quick connect fall tech', 'professional height harness', 'durable fall tech'
    ]
  },
  {
    id: 'fire-rescue-harness',
    title: 'FIRE RESCUE HARNESS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cmcpro.com/wp-content/uploads/wd/products/501108_Rescuer_Personal_Kit-scaled.jpg?ver=1667434608',
    desc: 'Fire Rescue Harness is engineered for rapid victim extraction and rescuer safety.\n' +
          'Quick-donning full-body design with fast-adjust buckles.\n' +
          'Multiple D-rings: dorsal, front, and side for versatile attachment.\n' +
          'Integrated rescue handle and strap for drag or lift operations.\n' +
          'Padded straps and lumbar support for comfort during heavy rescue.\n' +
          'High-visibility reflective trim for low-light firefighting.\n' +
          'Fully compatible with SCBA packs and rope rescue systems.\n' +
          'Ideal for structural fires, confined space, and high-angle rescue.\n' +
          'Certified to EN 361 and NFPA 1983 for fire & rescue use.\n' +
          'Critical harness for professional fire rescue teams.',
    rating: 5,
    reviews: 78,
    sold: '100+',
    tags: [
      'fire rescue harness', 'rescue full body harness', 'quick donning rescue', 'victim extraction harness', 'nfpa 1983 rescue',
      'structural fire harness', 'confined space rescue', 'high angle rescue harness', 'reflective rescue trim', 'scba compatible harness',
      'padded rescue harness', 'multiple d ring rescue', 'emergency rescue harness', 'professional fire harness', 'lift drag rescue'
    ]
  },
  {
    id: 'handled-ascenders',
    title: 'HANDLED ASCENDERS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://rocorescue.com/wp-content/uploads/2021/01/B17ARA-Ascension-right-focus-3_LowRes.jpeg',
    desc: 'Handled Ascenders enable efficient, secure rope climbing for work and rescue.\n' +
          'Ergonomic handle with thumb rest reduces hand fatigue during ascent.\n' +
          'Toothed cam grips ropes from 8–13 mm securely under load.\n' +
          'Left- and right-hand versions for simultaneous dual ascender use.\n' +
          'Safety catch prevents accidental cam opening.\n' +
          'Lightweight aluminum body with stainless steel cam and springs.\n' +
          'Ideal for tower climbing, rope access, confined space, and rescue.\n' +
          'Certified to EN 567 and ANSI Z359 for ascenders.\n' +
          'Essential tool for safe vertical progression and self-rescue.\n' +
          'Durable, professional-grade ascender for rope work.',
    rating: 4.7,
    reviews: 56,
    sold: '80+',
    tags: [
      'handled ascender', 'rope climbing ascender', 'ergonomic handle ascender', 'cam ascender rope', 'tower climbing ascender',
      'rope access ascender', 'en 567 ascender', 'ansi z359 ascender', 'confined space ascender', 'rescue rope ascender',
      'dual ascender pair', 'lightweight aluminum ascender', 'safety catch ascender', 'vertical progression tool', 'self rescue ascender'
    ]
  },
  {
    id: 'harness-combo',
    title: 'HARNESS COMBO',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.jimslimstools.com/Images/products/Safewaze/FFS-0193030.png',
    desc: 'Harness Combo is a complete fall arrest package with harness and lanyard.\n' +
          'Full-body harness featuring quick-connect buckles and padded straps.\n' +
          '6 ft shock-absorbing lanyard with double-locking snap hooks.\n' +
          'Temporary anchor sling or rebar hook included for immediate use.\n' +
          'High-visibility orange components with reflective stitching.\n' +
          'Compact carry bag for easy transport to work sites.\n' +
          'Ideal for construction workers, roofers, maintenance, and new height workers.\n' +
          'Conforms to EN 361, EN 355, EN 795, and ANSI Z359 standards.\n' +
          'Ready-to-go kit for instant compliance and safety.\n' +
          'All-in-one affordable fall protection solution.',
    rating: 4.8,
    reviews: 89,
    sold: '130+',
    tags: [
      'harness combo kit', 'complete fall arrest package', 'full body lanyard combo', 'shock absorbing combo', 'construction fall kit',
      'roofing harness combo', 'temporary anchor combo', 'quick connect fall kit', 'en 361 en 355 combo', 'carry bag fall kit',
      'high visibility fall kit', 'starter fall protection kit', 'compliant height work', 'maintenance fall combo', 'ready to go safety'
    ]
  },
  {
    id: 'harness-mounted-self-retracting-life-line',
    title: 'Harness Mounted Self Retracting Life Line',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sbc-content.s3.amazonaws.com/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/H/o/How_does_a_Self-Retracting_Lifeline_Work-_1.jpg',
    desc: 'Harness Mounted Self Retracting Lifeline (SRL) attaches directly to dorsal D-ring.\n' +
          'Automatic retraction eliminates slack and trip hazards.\n' +
          'Internal energy absorber limits fall arrest forces to safe levels.\n' +
          '3–6 m working length with steel or Kevlar lifeline options.\n' +
          'Swivel top prevents lifeline twisting during use.\n' +
          'Impact indicator shows if device has been involved in a fall.\n' +
          'Rated for users up to 140 kg and leading-edge capability.\n' +
          'Ideal for roofing, steel erection, scaffolding, and mobile elevated work.\n' +
          'Certified to EN 360 and ANSI Z359 for self-retracting lifelines.\n' +
          'Compact, lightweight SRL for maximum mobility and safety.',
    rating: 4.9,
    reviews: 101,
    sold: '150+',
    tags: [
      'harness mounted srl', 'self retracting lifeline', 'dorsal srl', 'automatic retraction lifeline', 'energy absorbing srl',
      'roofing self retracting', 'steel erection srl', 'en 360 lifeline', 'ansi z359 srl', 'leading edge srl',
      'swivel top lifeline', 'impact indicator srl', '140 kg srl', 'mobile elevated srl', 'compact fall protection'
    ]
  },
  {
    id: 'hock-absorbing-lanyard',
    title: 'hock-Absorbing Lanyard',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://reliable-electric.com/media/catalog/product/cache/dd4850ad4231b6306bceadf38a0bbeed/1/2/1247553.jpg',
    desc: 'Shock-Absorbing Lanyard limits fall arrest forces to protect the user.\n' +
          'Tear-away energy absorber deploys to keep forces below 6 kN.\n' +
          'Double-locking snap hooks or scaffold hooks at each end.\n' +
          'High-visibility webbing with reflective stitching for night work.\n' +
          'Lengths from 1.8 m to 3 m for different working distances.\n' +
          'Rated for users up to 140 kg including tools and gear.\n' +
          'Ideal for construction, roofing, maintenance, and general fall arrest.\n' +
          'Certified to EN 355 and ANSI Z359 standards.\n' +
          'Reliable, cost-effective fall arrest connecting device.\n' +
          'Essential for safe arrest and reduced injury risk.',
    rating: 4.7,
    reviews: 134,
    sold: '200+',
    tags: [
      'shock absorbing lanyard', 'energy absorbing lanyard', 'tear away lanyard', '6 kn limit lanyard', 'construction lanyard',
      'roofing shock lanyard', 'en 355 lanyard', 'ansi z359 shock', 'high visibility lanyard', 'double lock hook lanyard',
      'maintenance fall lanyard', 'general fall arrest', 'reliable shock device', 'reduced injury lanyard', 'cost effective fall link'
    ]
  },
  {
    id: 'ladder-belt',
    title: 'LADDER BELT',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.shgcdn.com/4ff8179f-3f32-4a39-ba84-dca3f664c991/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
    desc: 'Ladder Belt provides work positioning and restraint on ladders and poles.\n' +
          'Wide padded belt with quick-release buckle for fast use.\n' +
          'Adjustable side D-rings for rope or strap attachment.\n' +
          'Tool loops and accessory D-rings for pouches and equipment.\n' +
          'High-strength webbing rated for positioning loads.\n' +
          'Breathable lining and lumbar support for extended comfort.\n' +
          'Ideal for linemen, arborists, window cleaners, and maintenance.\n' +
          'Conforms to EN 358 standards for work positioning belts.\n' +
          'Must be used with separate fall arrest system.\n' +
          'Simple, effective belt for safe ladder and pole work.',
    rating: 4.6,
    reviews: 67,
    sold: '90+',
    tags: [
      'ladder safety belt', 'work positioning belt', 'ladder restraint belt', 'padded ladder belt', 'side d ring belt',
      'lineman ladder belt', 'arborist positioning', 'en 358 belt', 'tool loop belt', 'maintenance ladder belt',
      'quick release ladder', 'breathable ladder belt', 'pole climbing belt', 'window cleaning belt', 'safe ladder work'
    ]
  },
  {
    id: 'lanyard',
    title: 'LANYARD',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn4.volusion.store/mmmar-lwpuu/v/vspfiles/photos/21300-2.jpg?v-cache=1556100796',
    desc: 'Lanyard is a standard fixed-length fall arrest connecting device.\n' +
          '1.8 m or 2 m length with shock-absorbing inner core.\n' +
          'Limits fall arrest forces to under 6 kN for user safety.\n' +
          'Double-locking snap hooks or scaffold hooks at both ends.\n' +
          'High-visibility yellow or orange webbing for easy identification.\n' +
          'Rated for users up to 140 kg including tools.\n' +
          'Ideal for general construction, maintenance, and access work.\n' +
          'Certified to EN 355 and ANSI Z359 standards.\n' +
          'Reliable, economical solution for basic fall arrest.\n' +
          'Essential link in every fall protection system.',
    rating: 4.7,
    reviews: 189,
    sold: '300+',
    tags: [
      'standard lanyard', 'fixed length lanyard', 'shock absorbing lanyard', '6 kn lanyard', 'construction lanyard',
      'maintenance fall lanyard', 'en 355 lanyard', 'ansi z359 lanyard', 'high visibility lanyard', 'snap hook lanyard',
      'scaffold hook lanyard', '140 kg lanyard', 'basic fall arrest', 'economical lanyard', 'reliable fall link'
    ]
  },
  {
    id: 'lifesaver-victim-chest-harness',
    title: 'LIFESAVER VICTIM CHEST HARNESS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cmcpro.com/wp-content/uploads/wd/products/500108_Victim_Pick-Off_Kit-1024x791.jpg?ver=1667516333',
    desc: 'Lifesaver Victim Chest Harness enables safe and rapid victim extraction.\n' +
          'Quick-donning chest harness with fast-adjust buckles.\n' +
          'Multiple attachment points for rope, stretcher, or drag strap.\n' +
          'Padded chest plate and straps for comfort during lift.\n' +
          'High-visibility reflective trim for low-light rescue.\n' +
          'Lightweight and compact – fits in rescue bags.\n' +
          'Ideal for confined space, trench, high-angle, and structural rescue.\n' +
          'Conforms to EN 1497 and NFPA 1983 for victim rescue harnesses.\n' +
          'Essential tool for professional rescue teams.\n' +
          'Simple, effective harness for saving lives.',
    rating: 5,
    reviews: 56,
    sold: '80+',
    tags: [
      'victim chest harness', 'lifesaver rescue harness', 'quick donning victim', 'confined space harness', 'high angle victim',
      'en 1497 rescue', 'nfpa 1983 victim', 'reflective rescue harness', 'trench rescue harness', 'structural rescue harness',
      'lightweight victim harness', 'rescue team harness', 'lift drag victim', 'emergency extraction', 'life saving harness'
    ]
  },
  {
    id: 'load-arrestor',
    title: 'Load Arrestor',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.ashsafety.com/images/products/loadArrestor/la-10.jpg',
    desc: 'Load Arrestor automatically stops falling loads to prevent injury or damage.\n' +
          'Self-retracting cable with inertial locking mechanism.\n' +
          'Capacity from 300 kg to 2000 kg depending on model.\n' +
          'Cable lengths 3 m to 20 m with swivel snap hook.\n' +
          'Independent secondary safety line for redundant protection.\n' +
          'Easy ceiling or overhead mounting with adjustable bracket.\n' +
          'Ideal for stage rigging, material handling, and overhead tools.\n' +
          'Complements fall arrest systems for personnel safety.\n' +
          'Reduces risk of dropped tools or equipment accidents.\n' +
          'Reliable load safety device for overhead work.',
    rating: 4.8,
    reviews: 45,
    sold: '70+',
    tags: [
      'load arrestor', 'falling load stopper', 'inertial locking arrestor', 'overhead load safety', 'stage rigging arrestor',
      'material handling safety', 'self retracting cable', 'redundant safety line', 'dropped tool prevention', 'ceiling mount arrestor',
      'high capacity arrestor', 'long cable arrestor', 'overhead tool safety', 'secondary safety arrestor', 'reliable load device'
    ]
  },
  {
    id: 'protecta-pro-harness',
    title: 'Protecta Pro Harness',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.worksitesafety.ca/app/20231129092559/Protecta-Pro-Full-Body-Harness-Class-A.png',
    desc: 'Protecta Pro Harness is a durable full-body fall arrest harness.\n' +
          'Tongue buckle leg straps and quick-connect chest strap for fast fit.\n' +
          'Padded shoulder straps and back pad for all-day comfort.\n' +
          'Dorsal D-ring for fall arrest + side D-rings for positioning.\n' +
          'Front D-ring option for rescue and ladder climbing.\n' +
          'High-strength polyester webbing with 140 kg rating.\n' +
          'Ideal for construction, scaffolding, maintenance, and general access.\n' +
          'Certified to EN 361 and ANSI Z359 standards.\n' +
          'Trusted, no-frills harness for professional use.\n' +
          'Reliable protection for everyday work at height.',
    rating: 4.9,
    reviews: 123,
    sold: '180+',
    tags: [
      'protecta pro harness', 'full body protecta', 'tongue buckle harness', 'padded pro harness', 'dorsal side d ring',
      'construction protecta', 'scaffolding harness pro', 'en 361 protecta', 'ansi z359 harness', 'maintenance harness',
      'quick connect pro', 'high strength webbing', 'professional fall harness', 'reliable height harness', 'everyday fall protection'
    ]
  },
  {
    id: 'ranger-harness',
    title: 'RANGER HARNESS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.columbussupply.com/wp-content/uploads/2021/03/w-out_RangerQuickHarness_05-600x487.png',
    desc: 'Ranger Harness is a rugged full-body fall arrest harness for tough conditions.\n' +
          'Quick-connect buckles and adjustable straps for fast donning.\n' +
          'Padded back pad and shoulder straps reduce fatigue.\n' +
          'Dorsal D-ring for fall arrest and side D-rings for work positioning.\n' +
          'High-visibility reflective trim for low-light safety.\n' +
          'Heavy-duty polyester webbing rated for 140 kg users.\n' +
          'Ideal for construction, oil & gas, utilities, and industrial work.\n' +
          'Certified to EN 361 and ANSI Z359 standards.\n' +
          'Built tough for daily heavy-duty use at height.\n' +
          'Dependable harness for demanding work environments.',
    rating: 4.8,
    reviews: 89,
    sold: '130+',
    tags: [
      'ranger full body harness', 'rugged fall harness', 'quick connect ranger', 'padded ranger harness', 'dorsal side ranger',
      'construction ranger harness', 'oil gas safety harness', 'en 361 ranger', 'ansi z359 ranger', 'utility harness',
      'high visibility ranger', 'heavy duty webbing', 'industrial fall harness', 'demanding environment harness', 'tough work harness'
    ]
  },
  {
    id: 'safety-harness',
    title: 'Safety Harness',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.worksitesafety.ca/app/20230111142657/CHK201-Main-Image.jpg',
    desc: 'Safety Harness is a general-purpose full-body fall arrest harness.\n' +
          'Adjustable leg and shoulder straps with tongue or quick-connect buckles.\n' +
          'Dorsal D-ring for standard fall arrest connection.\n' +
          'Breathable back pad and padded straps for basic comfort.\n' +
          'High-strength polyester webbing rated for 140 kg users.\n' +
          'Side D-rings available on select models for positioning.\n' +
          'Ideal for construction, maintenance, roofing, and general height work.\n' +
          'Certified to EN 361 and ANSI Z359 standards.\n' +
          'Affordable, reliable harness for everyday fall protection.\n' +
          'Solid entry-level choice for work at height.',
    rating: 4.7,
    reviews: 234,
    sold: '400+',
    tags: [
      'general safety harness', 'full body fall harness', 'adjustable safety harness', 'dorsal d ring harness', 'construction harness',
      'maintenance fall harness', 'roofing safety harness', 'en 361 harness', 'ansi z359 safety', 'breathable back pad',
      'affordable fall harness', 'everyday height work', 'reliable basic harness', 'entry level fall protection', 'solid work harness'
    ]
  },
  {
    id: 'safety-lane-yard',
    title: 'Safety Lane Yard',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ils.org.uk/wordpress/wp-content/uploads/2023/11/1.-WHAT-IS-A-FALL-ARREST-SYSTEM.jpg',
    desc: 'Safety Lanyard is a standard connecting device for fall arrest systems.\n' +
          'Fixed-length 1.8 m or 2 m webbing with energy-absorbing core.\n' +
          'Limits fall arrest forces to safe levels (≤6 kN).\n' +
          'Double-locking snap hooks or scaffold hooks at both ends.\n' +
          'High-visibility yellow webbing with reflective stitching.\n' +
          'Rated for users up to 140 kg including tools.\n' +
          'Suitable for construction, maintenance, roofing, and general access.\n' +
          'Certified to EN 355 and ANSI Z359 standards.\n' +
          'Reliable, economical link for basic fall arrest.\n' +
          'Essential component in every fall protection setup.',
    rating: 4.6,
    reviews: 78,
    sold: '110+',
    tags: [
      'safety lanyard', 'fall arrest lanyard', 'shock absorbing lanyard', 'fixed length lanyard', 'construction safety lanyard',
      'maintenance lanyard', 'roofing fall lanyard', 'en 355 lanyard', 'ansi z359 lanyard', 'high visibility lanyard',
      'snap hook lanyard', 'scaffold hook lanyard', '140 kg lanyard', 'basic fall link', 'economical safety lanyard'
    ]
  },
  {
    id: 'self-retracting-lifeline',
    title: 'SELF RETRACTING LIFELINE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.engineeredfallprotection.com/images/guardian-diablo-side-extended-view-thumb.jpg',
    desc: 'Self Retracting Lifeline (SRL) automatically retracts to eliminate slack.\n' +
          'Internal energy absorber limits fall arrest forces to under 6 kN.\n' +
          'Steel or Kevlar cable lengths from 3 m to 20 m.\n' +
          'Swivel top prevents twisting during use.\n' +
          'Impact indicator shows if device has arrested a fall.\n' +
          'Leading-edge capability for sharp edge applications.\n' +
          'Rated for users up to 140 kg and overhead or foot-level tie-off.\n' +
          'Ideal for roofing, steel erection, scaffolding, and elevated platforms.\n' +
          'Certified to EN 360 and ANSI Z359 standards.\n' +
          'Compact, lightweight SRL for maximum mobility and safety.',
    rating: 4.9,
    reviews: 167,
    sold: '250+',
    tags: [
      'self retracting lifeline', 'srl fall protection', 'automatic retraction lifeline', 'energy absorbing srl', 'leading edge srl',
      'roofing self retracting', 'steel erection srl', 'en 360 lifeline', 'ansi z359 srl', 'impact indicator lifeline',
      'swivel top srl', '140 kg srl', 'overhead tie off', 'elevated platform srl', 'compact mobility lifeline'
    ]
  },
  {
    id: 'shock-absorber',
    title: 'SHOCK ABSORBER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://blog.falltech.com/hubfs/Free%20Fall%20Clearance%20EAL%20v2%203-21.svg',
    desc: 'Shock Absorber is a standalone energy-absorbing device for fall arrest.\n' +
          'Tear-web or rip-stitch design deploys to limit forces to ≤6 kN.\n' +
          'Compatible with fixed lanyards, rope grabs, and positioning lines.\n' +
          'High-visibility cover with deployment indicator.\n' +
          'Rated for users up to 140 kg including tools.\n' +
          'Compact and lightweight for easy integration.\n' +
          'Ideal for construction, roofing, maintenance, and rescue.\n' +
          'Certified to EN 355 and ANSI Z359 for energy absorbers.\n' +
          'Reduces injury risk during fall arrest events.\n' +
          'Essential safety component for fall protection systems.',
    rating: 4.8,
    reviews: 112,
    sold: '160+',
    tags: [
      'shock absorber fall', 'energy absorber device', 'tear web shock', '6 kn limit absorber', 'construction shock absorber',
      'roofing fall absorber', 'en 355 shock', 'ansi z359 absorber', 'high visibility shock', 'deployment indicator',
      '140 kg rated absorber', 'compact energy absorber', 'maintenance fall safety', 'rescue shock device', 'injury reduction absorber'
    ]
  },
  {
    id: 'spreader-bar',
    title: 'SPREADER BAR',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.ferno.com.au/media/0wxjnj0d/ferno-spreader-bar.jpg?rmode=max&width=1000&height=1000',
    desc: 'Spreader Bar is used in rescue to keep harness straps apart during lift.\n' +
          'Aluminum or steel bar with multiple attachment points.\n' +
          'Prevents compression injury to chest and shoulders during extraction.\n' +
          'Quick-connect carabiners or shackles for fast rigging.\n' +
          'Adjustable length or fixed models for different victims.\n' +
          'High-visibility yellow powder coating for easy identification.\n' +
          'Ideal for confined space, high-angle, and stretcher rescue.\n' +
          'Conforms to EN 1497 or NFPA 1983 rescue standards.\n' +
          'Essential tool for safe vertical or horizontal victim transport.\n' +
          'Increases comfort and safety during rescue lifting.',
    rating: 4.7,
    reviews: 56,
    sold: '80+',
    tags: [
      'spreader bar rescue', 'victim lift bar', 'confined space spreader', 'high angle rescue bar', 'en 1497 spreader',
      'nfpa 1983 rescue', 'shoulder protection bar', 'quick connect spreader', 'yellow rescue bar', 'stretcher rescue bar',
      'vertical lift spreader', 'horizontal extraction bar', 'safe rescue lifting', 'comfort rescue tool', 'professional rescue bar'
    ]
  },
  {
    id: 'steel-two-stage-quik-lok-carabiner',
    title: 'STEEL TWO-STAGE QUIK-LOK CARABINER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://backyardziplines.com/cdn/shop/products/db_file_img_1654_1020x765_1400x_bbdc006d-3dc6-4f60-a206-322a994658db.jpg?v=1510163564',
    desc: 'Steel Two-Stage Quik-Lok Carabiner offers fast, secure connection.\n' +
          'Double-auto-locking gate with two-stage push-and-twist mechanism.\n' +
          'High-strength forged steel with zinc plating for corrosion resistance.\n' +
          'Gate strength 40 kN, major axis 50 kN, minor axis 20 kN.\n' +
          'Wide gate opening for easy attachment to large anchors.\n' +
          'Screw gate and auto-lock models available.\n' +
          'Ideal for fall arrest, rescue, rope access, and rigging.\n' +
          'Conforms to EN 362 and ANSI Z359 standards.\n' +
          'Durable, professional-grade connector for critical use.\n' +
          'Reliable locking carabiner for life-safety applications.',
    rating: 4.9,
    reviews: 134,
    sold: '200+',
    tags: [
      'quik lok carabiner', 'steel two stage carabiner', 'double auto lock', '40 kn gate carabiner', 'fall arrest carabiner',
      'rescue connector', 'rope access carabiner', 'en 362 carabiner', 'ansi z359 connector', 'wide gate carabiner',
      'corrosion resistant steel', 'high strength carabiner', 'rigging carabiner', 'professional lock carabiner', 'life safety connector'
    ]
  },
  {
    id: 'tie-back-lanyard',
    title: 'TIE-BACK LANYARD',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-e163lt99/images/stencil/1280x1280/products/5012/10209/940B_6FTGN.jpg__14952.1470258364.jpg?c=2',
    desc: 'Tie-Back Lanyard features large snap hook that wraps around beams and columns.\n' +
          'Eliminates need for separate anchorage connector in many situations.\n' +
          'Shock-absorbing inner core limits fall arrest forces to ≤6 kN.\n' +
          'High-visibility webbing with reflective stitching for safety.\n' +
          'Lengths 1.8 m to 2 m with energy absorber pack.\n' +
          'Rated for users up to 140 kg including tools.\n' +
          'Ideal for steel erection, scaffolding, and structural work.\n' +
          'Certified to EN 355 and ANSI Z359 standards.\n' +
          'Convenient, time-saving fall arrest connecting device.\n' +
          'Reduces setup time and equipment needed on site.',
    rating: 4.7,
    reviews: 89,
    sold: '130+',
    tags: [
      'tie back lanyard', 'large hook lanyard', 'beam wrap lanyard', 'shock absorbing tie back', 'steel erection lanyard',
      'scaffolding tie back', 'en 355 tie back', 'ansi z359 lanyard', 'high visibility tie back', '6 kn limit tie back',
      'energy absorber tie back', 'structural work lanyard', 'time saving connector', 'convenient fall lanyard', 'site setup lanyard'
    ]
  },
  {
    id: 'tower-climbing-harness',
    title: 'Tower Climbing Harness',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://pksafety.com/cdn/shop/articles/Blog_TowerClimbingHarnessFC_1_2f73d91f-1a63-445a-8e25-8d9b67be3658.png?v=1765860613&width=800',
    desc: 'Tower Climbing Harness is specialized for vertical work on towers and masts.\n' +
          'Multiple D-rings: dorsal, front, side, and waist for versatile positioning.\n' +
          'Padded shoulder straps and seat board for long-duration comfort.\n' +
          'Quick-connect buckles and adjustable leg/chest straps.\n' +
          'High-visibility reflective trim for aerial work safety.\n' +
          'Tool loops and accessory D-rings for climbing gear and radios.\n' +
          'Trauma straps for post-fall suspension relief.\n' +
          'Ideal for telecom towers, wind turbines, power poles, and broadcast masts.\n' +
          'Certified to EN 361, EN 813, and ANSI Z359 standards.\n' +
          'Professional-grade harness for safe, comfortable tower climbing.',
    rating: 5,
    reviews: 78,
    sold: '110+',
    tags: [
      'tower climbing harness', 'vertical work harness', 'telecom tower harness', 'wind turbine harness', 'padded tower harness',
      'multiple d ring tower', 'trauma relief tower', 'en 361 en 813', 'ansi z359 tower', 'reflective tower harness',
      'tool loop tower', 'long duration harness', 'mast climbing harness', 'power pole safety', 'professional tower harness'
    ]
  },
  {
    id: 'x-large-steel-d-carabiner',
    title: 'X-LARGE STEEL D CARABINER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://myalphapak.com/cdn/shop/products/Large_carabiner.jpg?v=1581916103',
    desc: 'X-Large Steel D Carabiner is designed for large connections and heavy loads.\n' +
          'Extra-wide gate opening for thick ropes, beams, and anchor points.\n' +
          'High-strength forged steel with auto-locking or screw-lock gate.\n' +
          'Major axis strength 50 kN, minor axis 20 kN, gate 40 kN.\n' +
          'Zinc plating or stainless steel for corrosion resistance.\n' +
          'Smooth nose reduces snagging on ropes and harnesses.\n' +
          'Ideal for rescue, rigging, rope access, and heavy fall arrest.\n' +
          'Conforms to EN 362 and ANSI Z359 standards.\n' +
          'Durable connector for demanding life-safety applications.\n' +
          'Oversized, reliable D carabiner for professional use.',
    rating: 4.8,
    reviews: 101,
    sold: '150+',
    tags: [
      'x large steel carabiner', 'extra wide gate carabiner', '50 kn steel d', 'auto locking carabiner', 'rescue large carabiner',
      'rigging heavy connector', 'rope access carabiner', 'en 362 carabiner', 'ansi z359 large', 'corrosion resistant d',
      'smooth nose carabiner', 'fall arrest connector', 'heavy load carabiner', 'professional d carabiner', 'oversized life safety'
    ]
  },
  {
    id: 'y-shok-lanyard',
    title: 'Y-SHOK LANYARD',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-e163lt99/images/stencil/1280x1280/products/8154/21879/1342250__24663.1496234784.jpg?c=2',
    desc: 'Y-Shok Lanyard provides dual anchorage with Y-shaped energy-absorbing design.\n' +
          'Two legs allow 100% tie-off – one leg always connected during movement.\n' +
          'Shock-absorbing pack limits fall forces to under 6 kN.\n' +
          'Double-locking snap hooks or scaffold hooks on all three ends.\n' +
          'High-visibility webbing with reflective stitching.\n' +
          'Length 1.8 m per leg for typical working distances.\n' +
          'Rated for users up to 140 kg including tools.\n' +
          'Ideal for steel erection, roofing, scaffolding, and ladder work.\n' +
          'Certified to EN 355 and ANSI Z359 standards.\n' +
          'Continuous tie-off solution for maximum safety.',
    rating: 4.9,
    reviews: 123,
    sold: '180+',
    tags: [
      'y shok lanyard', 'dual leg lanyard', '100 tie off lanyard', 'shock absorbing y', 'continuous tie off',
      'steel erection y lanyard', 'roofing safety y', 'en 355 y lanyard', 'ansi z359 dual leg', 'high visibility y lanyard',
      'scaffold hook y', 'snap hook dual lanyard', '140 kg y lanyard', 'maximum safety lanyard', 'work movement lanyard'
    ]
  }
],



'Personal Protective Wear': [
  {
    id: 'aluminize-fire-suit',
    title: 'Aluminize Fire Suit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Fire_fighters_practice_with_spraying_equipment%2C_March_1981.jpg',
    desc: 'Aluminized Fire Suit provides extreme radiant heat protection for high-temperature environments.\n' +
          'Multi-layer construction with aluminized outer fabric reflects up to 95% of radiant heat.\n' +
          'Inner thermal barrier and moisture barrier prevent heat transfer and steam burns.\n' +
          'Reinforced knees, elbows, and shoulders for durability during firefighting.\n' +
          'Gold or silver aluminized finish with high-visibility reflective trim.\n' +
          'Breathable inner lining and adjustable closures for comfort in intense heat.\n' +
          'Includes hood, gloves, and boots integration options.\n' +
          'Ideal for furnace work, metal foundries, petrochemical plants, and flash fire rescue.\n' +
          'Certified to EN 366 and NFPA 2112 standards for radiant heat protection.\n' +
          'Life-saving suit for extreme thermal hazards.',
    rating: 4.8,
    reviews: 89,
    sold: '120+',
    tags: [
      'aluminized fire suit', 'radiant heat protection', 'high temperature suit', 'furnace work suit', 'metal foundry ppe',
      'petrochemical fire suit', 'flash fire rescue', 'en 366 certified', 'nfpa 2112 suit', 'reflective aluminized',
      'multi layer thermal', 'breathable fire suit', 'reinforced fire gear', 'extreme heat ppe', 'industrial fire protection'
    ]
  },
  {
    id: 'chemical-disposable-dress',
    title: 'Chemical Disposable Dress',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.medicalkingfa.com/u_file/fileUpload/2025-06/26/2025062674074.jpg',
    desc: 'Chemical Disposable Dress offers single-use protection against hazardous liquids and splashes.\n' +
          'Lightweight microporous or laminated fabric blocks chemicals and particulates.\n' +
          'Elastic cuffs, hood, and boot covers for full-body coverage.\n' +
          'Zipper front with storm flap to prevent ingress of contaminants.\n' +
          'Breathable yet impermeable material reduces heat stress.\n' +
          'Anti-static treatment for safe use in flammable environments.\n' +
          'Available in sizes S–XXXL for proper fit.\n' +
          'Ideal for chemical handling, painting, cleaning, and spill response.\n' +
          'Meets EN 13034 Type PB or EN 14605 standards for limited chemical protection.\n' +
          'Cost-effective, hygienic disposable solution for one-time exposure.',
    rating: 4.6,
    reviews: 134,
    sold: '200+',
    tags: [
      'chemical disposable suit', 'single use chemical dress', 'microporous protective dress', 'liquid splash suit', 'chemical handling ppe',
      'spill response dress', 'anti static disposable', 'en 13034 suit', 'en 14605 chemical', 'breathable disposable suit',
      'elastic cuff dress', 'hooded chemical wear', 'painting protection suit', 'cleaning chemical dress', 'hygienic disposable ppe'
    ]
  },
  {
    id: 'chemical-resistant-suit',
    title: 'Chemical resistant suit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.kappler.com/img/main-suit-image.png',
    desc: 'Chemical Resistant Suit provides full-body barrier against hazardous chemicals and gases.\n' +
          'Multi-layer fabric (PVC, neoprene, or Viton) resists permeation of acids, alkalis, and solvents.\n' +
          'Fully sealed seams and taped zippers prevent liquid ingress.\n' +
          'Attached hood, gloves, and booties for complete encapsulation.\n' +
          'Reinforced knees and elbows for durability in confined spaces.\n' +
          'Airline connection port for supplied-air respirator compatibility.\n' +
          'Available in reusable or limited-use versions.\n' +
          'Ideal for hazmat operations, chemical plants, laboratories, and decontamination.\n' +
          'Certified to EN 14605 Type 3/4 or NFPA 1992 standards.\n' +
          'Critical PPE for high-risk chemical exposure scenarios.',
    rating: 4.9,
    reviews: 67,
    sold: '90+',
    tags: [
      'chemical resistant suit', 'full body chemical ppe', 'hazmat protective suit', 'permeation resistant suit', 'encapsulated chemical suit',
      'en 14605 type 3/4', 'nfpa 1992 suit', 'chemical plant ppe', 'laboratory chemical suit', 'decontamination suit',
      'airline respirator suit', 'sealed seam suit', 'reinforced chemical wear', 'high risk chemical protection', 'reusable hazmat suit'
    ]
  },
  {
    id: 'cold-suit',
    title: 'Cold Suit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.occunomix.com/cdn/shop/files/c1a87d0f03a376083fe4ba676233.webp?v=1748446151',
    desc: 'Cold Suit delivers thermal insulation for extreme low-temperature environments.\n' +
          'Multi-layer design with synthetic insulation and windproof outer shell.\n' +
          'Water-repellent and breathable fabric prevents moisture buildup.\n' +
          'Attached insulated hood, adjustable cuffs, and drawstring hem.\n' +
          'Reinforced knees and seat for durability in kneeling or sitting positions.\n' +
          'High-visibility reflective strips for safety in low-light cold storage.\n' +
          'Inner fleece lining for added warmth and comfort.\n' +
          'Ideal for cold storage warehouses, freezers, arctic work, and winter outdoor tasks.\n' +
          'Meets EN 342 standards for cold-weather protective clothing.\n' +
          'Keeps workers warm, dry, and productive in sub-zero conditions.',
    rating: 4.7,
    reviews: 78,
    sold: '100+',
    tags: [
      'cold suit', 'thermal insulated suit', 'extreme cold ppe', 'cold storage suit', 'freezer protective wear',
      'en 342 cold suit', 'windproof cold suit', 'breathable thermal suit', 'reflective cold suit', 'winter work suit',
      'arctic clothing ppe', 'reinforced cold suit', 'insulated hood suit', 'sub zero protection', 'warehouse cold wear'
    ]
  },
  {
    id: 'cotton-cover-all',
    title: 'Cotton Cover All',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://assets.fishersci.com/TFS-Assets/CCG/product-images/DSC01462-F.JPG-650.jpg',
    desc: 'Cotton Cover All provides basic protection against dirt, dust, and light splashes.\n' +
          'Breathable 100% cotton fabric for comfort in warm environments.\n' +
          'Full-length zipper front with snap closures for easy wear.\n' +
          'Multiple pockets for tools, pens, and small items.\n' +
          'Elastic waist and adjustable cuffs for secure fit.\n' +
          'Reinforced stitching at stress points for durability.\n' +
          'Machine-washable and long-lasting for daily use.\n' +
          'Ideal for mechanics, painters, warehouse workers, and general maintenance.\n' +
          'Meets basic EN ISO 13688 standards for protective clothing.\n' +
          'Affordable, comfortable all-purpose workwear.',
    rating: 4.5,
    reviews: 234,
    sold: '400+',
    tags: [
      'cotton coverall', 'general protective wear', 'breathable cotton suit', 'mechanic cover all', 'warehouse workwear',
      'en iso 13688 suit', 'tool pocket coverall', 'elastic waist cover', 'daily use coverall', 'maintenance ppe',
      'painter cover all', 'reinforced stitching suit', 'comfortable workwear', 'affordable cotton suit', 'all purpose coverall'
    ]
  },
  {
    id: 'fire-entry-suit',
    title: 'Fire Entry suit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Fire_fighters_practice_with_spraying_equipment%2C_March_1981.jpg',
    desc: 'Fire Entry Suit allows brief entry into intense fire environments for rescue or shutdown.\n' +
          'Multi-layer aluminized outer shell reflects extreme radiant heat.\n' +
          'Nomex inner layers and thermal barrier protect against conductive heat.\n' +
          'Fully enclosed design with integrated hood, gloves, and boots.\n' +
          'Self-contained breathing apparatus (SCBA) compatibility port.\n' +
          'Reinforced knees, elbows, and hands for crawling and gripping.\n' +
          'High-visibility reflective trim for rescuer location.\n' +
          'Ideal for flash fire entry, furnace rescue, and petrochemical incidents.\n' +
          'Certified to EN 1486 or NFPA 1991 standards for proximity firefighting.\n' +
          'Specialized suit for short-duration extreme heat exposure.',
    rating: 5,
    reviews: 45,
    sold: '60+',
    tags: [
      'fire entry suit', 'extreme heat entry', 'aluminized entry suit', 'nomex fire suit', 'flash fire rescue',
      'furnace entry suit', 'en 1486 suit', 'nfpa 1991 entry', 'scba compatible suit', 'reinforced fire entry',
      'petrochemical rescue', 'reflective entry suit', 'short duration heat', 'proximity firefighting', 'specialized fire suit'
    ]
  },
  {
    id: 'fire-fighting-suit',
    title: 'Fire fighting suit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-rv2sbmgv37/images/stencil/original/image-manager/veridian-firefighter-turnout-gear.jpg?t=1674655816',
    desc: 'Fire Fighting Suit (turnout gear) protects firefighters during structural firefighting.\n' +
          'Three-layer system: outer shell, moisture barrier, and thermal liner.\n' +
          'Nomex, Kevlar, or PBI fabric resists flame, heat, and abrasion.\n' +
          'Reflective trim and high-visibility panels for scene safety.\n' +
          'Reinforced knees, elbows, and drag rescue device for extrication.\n' +
          'Integrated pockets for radio, gloves, and tools.\n' +
          'Breathable yet waterproof to reduce heat stress.\n' +
          'Ideal for interior structural attacks, search & rescue, and overhaul.\n' +
          'Certified to EN 469 or NFPA 1971 standards.\n' +
          'Life-saving PPE trusted by fire services worldwide.',
    rating: 4.9,
    reviews: 112,
    sold: '150+',
    tags: [
      'fire fighting suit', 'turnout gear', 'nomex firefighter suit', 'structural firefighting ppe', 'en 469 suit',
      'nfpa 1971 turnout', 'reflective firefighter suit', 'drag rescue device', 'breathable fire suit', 'interior attack ppe',
      'search rescue gear', 'overhaul turnout', 'professional firefighter suit', 'high visibility turnout', 'flame resistant ensemble'
    ]
  },
  {
    id: 'fire-retardant',
    title: 'Fire Retardant',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hazchemsafety.com/wp-content/uploads/2023/03/flame-retardant-overalls-standards.jpg',
    desc: 'Fire Retardant clothing resists ignition and self-extinguishes small flames.\n' +
          'Inherently flame-resistant fabrics like Nomex or treated cotton blends.\n' +
          'Coveralls, jackets, or pants with high-visibility reflective strips.\n' +
          'Reinforced seams and pockets for durability and tool storage.\n' +
          'Breathable material reduces heat stress in hot environments.\n' +
          'Available in hi-vis orange or navy for different work settings.\n' +
          'Ideal for welders, electricians, oil & gas workers, and foundry staff.\n' +
          'Certified to EN ISO 11612 or NFPA 2112 for flame resistance.\n' +
          'Prevents clothing ignition and burn injuries from sparks.\n' +
          'Essential PPE for industries with flash fire or arc flash risks.',
    rating: 4.7,
    reviews: 56,
    sold: '80+',
    tags: [
      'fire retardant clothing', 'flame resistant suit', 'nomex fire retardant', 'en iso 11612 garment', 'nfpa 2112 clothing',
      'welder fire retardant', 'oil gas fr suit', 'arc flash protection', 'hi vis fire retardant', 'breathable fr wear',
      'spark resistant clothing', 'foundry fr suit', 'electrician fr garment', 'self extinguishing fabric', 'flash fire ppe'
    ]
  },
  {
    id: 'nomex-coverall',
    title: 'Nomex Coverall',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cgprotection.com/d/file/knowledge/2017-11-21/bb9fa2be4861b4e046c4ca75ce04b192.webp',
    desc: 'Nomex Coverall is made from inherently flame-resistant Nomex fabric.\n' +
          'Does not melt, drip, or support combustion when exposed to flame.\n' +
          'Two-way zipper front with snap storm flap for secure closure.\n' +
          'Multiple pockets including chest, hip, and tool loops.\n' +
          'Elastic waist and adjustable cuffs for comfortable fit.\n' +
          'High-visibility reflective trim available on select models.\n' +
          'Breathable and moisture-wicking for extended wear in hot conditions.\n' +
          'Ideal for oil & gas, welding, electrical, and petrochemical industries.\n' +
          'Certified to EN ISO 11612 and NFPA 2112 for arc flash and flash fire.\n' +
          'Durable, long-lasting flame-resistant workwear.',
    rating: 4.8,
    reviews: 101,
    sold: '140+',
    tags: [
      'nomex coverall', 'flame resistant coverall', 'inherent fr nomex', 'en iso 11612 coverall', 'nfpa 2112 nomex',
      'oil gas nomex suit', 'welding fr coverall', 'arc flash nomex', 'breathable nomex wear', 'reflective nomex option',
      'petrochemical fr suit', 'tool pocket coverall', 'elastic waist nomex', 'long lasting fr', 'professional nomex garment'
    ]
  },
  {
    id: 'rain-coat',
    title: 'Rain Coat',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.safetywearhouse.net/media/catalog/product/cache/9c412636ba548b811054aafc7c3f6c07/rdi/rdi/portwest-s438-classic-raincoat-s438-c_1.png',
    desc: 'Rain Coat provides waterproof protection against rain and light chemical splashes.\n' +
          'PVC-coated polyester fabric with welded seams for complete water resistance.\n' +
          'Attached hood with drawstring and storm flap over zipper.\n' +
          'High-visibility reflective tape for low-light safety.\n' +
          'Ventilated back and underarm eyelets to reduce condensation.\n' +
          'Two large pockets with flaps and inner pocket for storage.\n' +
          'Adjustable cuffs and hem for secure fit in wind.\n' +
          'Ideal for construction, roadwork, agriculture, and outdoor maintenance.\n' +
          'Meets EN 343 standards for water penetration and breathability.\n' +
          'Durable, lightweight rain protection for wet weather work.',
    rating: 4.6,
    reviews: 189,
    sold: '300+',
    tags: [
      'rain coat', 'waterproof raincoat', 'high visibility rain', 'pvc rain coat', 'construction rainwear',
      'en 343 rain coat', 'reflective rain coat', 'ventilated rain suit', 'outdoor maintenance coat', 'agriculture rainwear',
      'storm flap rain coat', 'adjustable cuff rain', 'welded seam rainwear', 'light chemical resistant', 'wet weather ppe'
    ]
  },
  {
    id: 'rain-suit-chemical-suit',
    title: 'Rain Suit /Chemical Suit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61z0UOPJRDL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg',
    desc: 'Rain Suit / Chemical Suit offers dual protection from water and light chemicals.\n' +
          'Heavy-duty PVC or PU-coated fabric with sealed seams.\n' +
          'Two-piece design (jacket + bib pants) for easy donning.\n' +
          'Attached hood and adjustable cuffs to keep rain and splashes out.\n' +
          'High-visibility reflective strips for road and outdoor safety.\n' +
          'Reinforced knees and elbows for durability in rough conditions.\n' +
          'Breathable yet waterproof material reduces internal condensation.\n' +
          'Ideal for construction, agriculture, firefighting standby, and spill cleanup.\n' +
          'Meets EN 343 and EN 14605 standards for weather and chemical resistance.\n' +
          'Versatile, all-weather protective suit for demanding jobs.',
    rating: 4.7,
    reviews: 78,
    sold: '110+',
    tags: [
      'rain chemical suit', 'dual purpose rain suit', 'pvc rain chemical', 'high visibility rain suit', 'construction rain ppe',
      'en 343 en 14605 suit', 'bib pants rain suit', 'reinforced rain suit', 'agriculture chemical suit', 'spill cleanup suit',
      'breathable rain chemical', 'reflective rain suit', 'all weather protective', 'firefighting standby suit', 'versatile rain ppe'
    ]
  },
  {
    id: 'reflective-jacket',
    title: 'reflective Jacket',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hivissupply.com/media/wysiwyg/HVS_Landing_Pages/Category-Banner-Long-Coats-Parkas-MOB_-COLORCORRECTED.jpg',
    desc: 'Reflective Jacket provides high-visibility protection for low-light work environments.\n' +
          'Fluorescent background with wide retro-reflective strips on shoulders, sleeves, and torso.\n' +
          'Durable polyester or PU-coated fabric resists water and abrasion.\n' +
          'Zipper front with storm flap and adjustable cuffs.\n' +
          'Multiple pockets including chest, hand warmer, and inner security pocket.\n' +
          'Concealed hood or detachable hood options for weather protection.\n' +
          'Ideal for roadwork, construction, traffic control, and night shifts.\n' +
          'Meets EN ISO 20471 Class 2 or Class 3 for visibility standards.\n' +
          'Keeps workers seen and safe in high-risk traffic areas.\n' +
          'Essential hi-vis outerwear for outdoor and roadside safety.',
    rating: 4.8,
    reviews: 167,
    sold: '250+',
    tags: [
      'reflective jacket', 'high visibility jacket', 'en iso 20471 jacket', 'class 3 reflective', 'roadwork hi vis',
      'construction reflective coat', 'traffic control jacket', 'fluorescent reflective', 'retro reflective strips', 'night shift safety',
      'water resistant hi vis', 'storm flap jacket', 'multiple pocket hi vis', 'outdoor visibility jacket', 'roadside safety wear'
    ]
  }
],


  'Medical Equipment For Ambulance': [
  {
    id: 'automatic-digital-bp-monitor',
    title: 'Automatic Digital Bp Monitor',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/818uE57mT8L._AC_UF1000,1000_QL80_.jpg',
    desc: 'Automatic Digital BP Monitor delivers fast, accurate blood pressure readings in emergency settings.\n' +
          'One-touch operation with large backlit LCD display for quick viewing in low-light ambulances.\n' +
          'Oscillometric measurement technology ensures reliable systolic, diastolic, and pulse readings.\n' +
          'Memory storage for multiple patient profiles or recent readings during transport.\n' +
          'Irregular heartbeat detection alerts paramedics to potential arrhythmias.\n' +
          'Cuff fits adult arm sizes with comfortable, durable material for repeated use.\n' +
          'Portable, battery-powered design with optional AC adapter for long shifts.\n' +
          'Ideal for pre-hospital assessment, en-route monitoring, and handover to hospital staff.\n' +
          'Meets clinical validation standards for accuracy in mobile medical environments.\n' +
          'Essential vital signs tool for every ambulance kit.',
    rating: 4.7,
    reviews: 134,
    sold: '200+',
    tags: [
      'automatic bp monitor', 'digital blood pressure device', 'ambulance bp monitor', 'oscillometric bp', 'irregular heartbeat detection',
      'backlit bp display', 'portable vital signs', 'pre hospital bp', 'en route monitoring', 'clinical bp accuracy',
      'adult cuff monitor', 'battery bp device', 'emergency bp tool', 'paramedic bp monitor', 'vital signs equipment'
    ]
  },
  {
    id: 'blood-pressure-monitor',
    title: 'Blood Pressure Monitor',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71BvvTFOFaL._AC_UF894,1000_QL80_.jpg',
    desc: 'Blood Pressure Monitor is a compact, reliable device for rapid patient assessment in ambulances.\n' +
          'Fully automatic inflation and deflation for hands-free operation during transport.\n' +
          'Clear digital readout shows systolic, diastolic, pulse rate, and time stamp.\n' +
          'Clinically validated accuracy for use in high-stress emergency situations.\n' +
          'Adjustable cuff for adult and large-arm patients with secure Velcro closure.\n' +
          'Arrhythmia detection warns of potential cardiac irregularities.\n' +
          'Memory function stores last readings for trend analysis or handover notes.\n' +
          'Lightweight and portable with long battery life for extended shifts.\n' +
          'Essential for monitoring hypertension, shock, or cardiac events on scene.\n' +
          'Trusted vital signs tool for paramedics and EMTs.',
    rating: 4.6,
    reviews: 189,
    sold: '300+',
    tags: [
      'blood pressure monitor', 'ambulance bp device', 'automatic bp cuff', 'clinical bp accuracy', 'arrhythmia bp monitor',
      'digital bp readout', 'portable bp equipment', 'emergency bp assessment', 'hypertension monitoring', 'shock detection bp',
      'large arm cuff', 'memory bp monitor', 'paramedic vital tool', 'emt bp device', 'handover bp readings'
    ]
  },
  {
    id: 'bp-apparatus',
    title: 'Bp Apparatus',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.prestigemedical.com/products/gallery/882-th_01.jpg',
    desc: 'BP Apparatus is a classic manual sphygmomanometer for accurate blood pressure measurement.\n' +
          'High-quality aneroid gauge with large, easy-to-read dial for quick readings.\n' +
          'Durable nylon cuff with Velcro closure fits adult arms comfortably.\n' +
          'Latex-free inflation bulb and valve for smooth, precise pressure control.\n' +
          'Chrome-plated brass air-release valve for fine adjustment.\n' +
          'Carry case included for protection during ambulance transport.\n' +
          'Ideal as backup device or for use when digital monitors fail.\n' +
          'Trusted by paramedics for reliability in noisy or low-battery situations.\n' +
          'Meets clinical standards for manual BP measurement accuracy.\n' +
          'Essential traditional tool in every emergency medical kit.',
    rating: 4.5,
    reviews: 78,
    sold: '100+',
    tags: [
      'bp apparatus', 'manual sphygmomanometer', 'aneroid bp gauge', 'nylon cuff bp', 'latex free bp apparatus',
      'ambulance manual bp', 'backup bp device', 'paramedic bp tool', 'clinical manual bp', 'easy read dial',
      'carry case bp', 'emergency bp measurement', 'traditional bp apparatus', 'reliable manual bp', 'vital signs backup'
    ]
  },
  {
    id: 'cardiac-powerheart-st-g5-aed',
    title: 'Cardiac Powerheart ST-G5 AED',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://tigermedical.com/cdn/shop/files/CARG5A-80A-P-20160827-144649-713_868x700.jpg?v=1756199670',
    desc: 'Cardiac Powerheart ST-G5 AED is a fully automatic defibrillator for sudden cardiac arrest.\n' +
          'Real-time CPR feedback guides rescuers on compression rate and depth.\n' +
          'Intuitive voice and visual prompts for easy use by laypersons or professionals.\n' +
          'Fast shock delivery with biphasic waveform for higher success rates.\n' +
          'Rugged design with IP55 rating withstands ambulance transport and rough handling.\n' +
          'Long-life battery and pads with 5-year shelf life reduce maintenance costs.\n' +
          'Pediatric mode with attenuator for child rescue without changing pads.\n' +
          'Ideal for ambulances, public access, fire trucks, and workplace emergency kits.\n' +
          'Meets AHA/ERC guidelines and certified to IEC standards.\n' +
          'Life-saving AED trusted for rapid response in cardiac emergencies.',
    rating: 4.9,
    reviews: 56,
    sold: '80+',
    tags: [
      'powerheart g5 aed', 'automatic defibrillator', 'cpr feedback aed', 'biphasic aed', 'ambulance aed',
      'public access defibrillator', 'rugged ip55 aed', 'pediatric aed mode', 'aha guidelines aed', 'fast shock aed',
      'long life battery aed', 'voice prompt aed', 'emergency cardiac device', 'rescue aed', 'workplace defibrillator'
    ]
  },
  {
    id: 'diagnostic-wall-unit',
    title: 'Diagnostic Wall Unit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://tigermedical.com/cdn/shop/files/AMIDS-ULG-CHFH-DXX--20191224-002949-177_868x700.jpg?v=1692087678',
    desc: 'Diagnostic Wall Unit integrates essential tools for quick patient assessment in ambulances.\n' +
          'Includes otoscope, ophthalmoscope, thermometer, and BP gauge mounts.\n' +
          'Wall-mounted or portable design saves space in tight ambulance interiors.\n' +
          'LED illumination in diagnostic heads for clear viewing of eyes, ears, and throat.\n' +
          'Coaxial optical system provides shadow-free, high-resolution examination.\n' +
          'Multiple specula sizes and reusable tips for hygiene and versatility.\n' +
          'Quick-release handles with rechargeable batteries for continuous use.\n' +
          'Ideal for en-route ENT exams, pupil checks, and basic diagnostics.\n' +
          'Meets clinical standards for pre-hospital patient evaluation.\n' +
          'Compact, all-in-one diagnostic solution for paramedics.',
    rating: 4.8,
    reviews: 89,
    sold: '120+',
    tags: [
      'diagnostic wall unit', 'ambulance diagnostic tools', 'otoscope ophthalmoscope', 'led diagnostic heads', 'pre hospital exam',
      'ent diagnostic unit', 'pupil check device', 'compact ambulance unit', 'rechargeable diagnostic', 'coaxial optical system',
      'wall mount diagnostic', 'paramedic assessment tool', 'clinical diagnostic kit', 'en route exam', 'all in one diagnostics'
    ]
  },
  {
    id: 'ecg-machine-st402',
    title: 'ECG Machine ST402',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.creative-sz.com/uploads/image/20230505/11/hand-held-ecg-reader.webp',
    desc: 'ECG Machine ST402 is a portable 12-lead electrocardiograph for ambulance use.\n' +
          'High-resolution color touchscreen displays real-time ECG waveforms.\n' +
          'Automatic interpretation with arrhythmia detection and STEMI alerts.\n' +
          'Built-in rechargeable battery supports hours of operation on scene.\n' +
          'Bluetooth and USB connectivity for instant data transfer to hospital.\n' +
          'Compact, lightweight design fits easily in ambulance kits.\n' +
          'Thermal printer provides immediate hard-copy ECG strips.\n' +
          'Ideal for pre-hospital cardiac assessment and STEMI identification.\n' +
          'Meets AHA/ESC guidelines for diagnostic ECG accuracy.\n' +
          'Critical tool for early detection of heart attacks in the field.',
    rating: 4.9,
    reviews: 112,
    sold: '150+',
    tags: [
      'ecg machine st402', 'portable 12 lead ecg', 'ambulance ecg device', 'touchscreen ecg', 'arrhythmia detection ecg',
      'stemi alert ecg', 'pre hospital ecg', 'bluetooth ecg transfer', 'thermal print ecg', 'rechargeable ecg machine',
      'aha ecg guidelines', 'early heart attack detection', 'field cardiac assessment', 'compact ambulance ecg', 'diagnostic ecg tool'
    ]
  },
  {
    id: 'emergency-portable-suction-unit',
    title: 'Emergency Portable Suction Unit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-iesovaw/images/stencil/original/products/113/625/DUET-with-duet-content-charging-statement__34670.1729409923.png?c=2&imbypass=on&imbypass=on',
    desc: 'Emergency Portable Suction Unit clears airways quickly in pre-hospital care.\n' +
          'Powerful vacuum up to 600 mmHg for effective secretion removal.\n' +
          'Rechargeable battery or 12V vehicle power for continuous use.\n' +
          'Adjustable suction levels with one-hand operation.\n' +
          'Large collection canister with overflow protection valve.\n' +
          'Includes multiple catheter sizes for adult and pediatric patients.\n' +
          'Compact, lightweight design with carry handle for easy transport.\n' +
          'Ideal for choking, trauma, drowning, and unconscious patients.\n' +
          'Meets ISO 10079-1 standards for portable suction devices.\n' +
          'Essential life-saving tool for ambulance airway management.',
    rating: 4.7,
    reviews: 67,
    sold: '90+',
    tags: [
      'portable suction unit', 'emergency airway suction', 'ambulance suction device', '600 mmhg suction', 'rechargeable suction',
      'airway clearance tool', 'pediatric suction catheter', 'trauma suction unit', 'iso 10079 suction', 'one hand suction',
      'overflow protection canister', 'choking emergency tool', 'drowning rescue suction', 'unconscious patient suction', 'life saving airway'
    ]
  },
  {
    id: 'first-aid-ambulance-ventilator',
    title: 'First Aid Ambulance Ventilator',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiaGFtaWx0b24tbWVkaWNhbC1hZ1wvZmlsZVwvNkhUelk3U1o4WURFZWdTa0pRengucG5nIn0:hamilton-medical-ag:4jCKC4WWYw96vauJVopCcdRWA0YGg-p0hREfnRvinnQ?width=640&quality=50',
    desc: 'First Aid Ambulance Ventilator provides emergency mechanical ventilation on scene.\n' +
          'Simple controls with volume-controlled or pressure-controlled modes.\n' +
          'Built-in turbine for air supply – no oxygen tank required for basic use.\n' +
          'Oxygen enrichment up to 100% with adjustable FiO2.\n' +
          'Alarms for low pressure, high pressure, and apnea detection.\n' +
          'Compact, lightweight design with carry handle and vehicle mount.\n' +
          'Suitable for adult and pediatric patients with appropriate settings.\n' +
          'Ideal for trauma, cardiac arrest, respiratory failure, and transport.\n' +
          'Meets AHA/ERC guidelines for pre-hospital ventilation.\n' +
          'Reliable ventilator for critical airway support in ambulances.',
    rating: 5,
    reviews: 45,
    sold: '60+',
    tags: [
      'ambulance ventilator', 'first aid ventilator', 'emergency mechanical ventilation', 'volume controlled ventilator', 'portable ambulance vent',
      'trauma ventilator', 'respiratory failure vent', 'aha ventilation guidelines', 'oxygen enrichment vent', 'apnea alarm ventilator',
      'compact vent device', 'adult pediatric vent', 'critical airway support', 'pre hospital vent', 'transport ventilator'
    ]
  },
  {
    id: 'pad-st500p-aed-defibrillator',
    title: 'PAD ST500P AED Defibrillator',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.redcross.org/content/dam/redcross/training-services/b2b/AEDs-Collage-updated-071823.jpg',
    desc: 'PAD ST500P AED Defibrillator is designed for public access and ambulance use.\n' +
          'Fully automatic or semi-automatic operation with clear voice prompts.\n' +
          'Biphasic waveform delivers effective shocks with low energy.\n' +
          'Quick self-test and long-life battery reduce maintenance needs.\n' +
          'Rugged IP55-rated casing withstands drops and harsh conditions.\n' +
          'Pediatric pads included or optional for child rescue.\n' +
          'Real-time CPR feedback guides compression rate and depth.\n' +
          'Ideal for ambulances, fire vehicles, schools, offices, and public places.\n' +
          'Meets AHA/ERC guidelines and IEC standards for AEDs.\n' +
          'Simple, reliable defibrillator for sudden cardiac arrest response.',
    rating: 4.8,
    reviews: 101,
    sold: '140+',
    tags: [
      'pad st500p aed', 'public access defibrillator', 'automatic aed', 'biphasic aed', 'cpr feedback aed',
      'rugged ip55 aed', 'pediatric aed pads', 'ambulance aed unit', 'aha guidelines aed', 'low maintenance aed',
      'voice prompt aed', 'sudden cardiac arrest', 'fire vehicle aed', 'school public aed', 'reliable emergency defibrillator'
    ]
  },
  {
    id: 'physio-control-lifepak-cr-aed',
    title: 'Physio-Control Lifepak CR AED',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i1.wp.com/northwestmaritimeacademy.com/wp-content/uploads/2016/11/LPCRP_ffw.jpg?ssl=1',
    desc: 'Physio-Control Lifepak CR AED is a rugged, reliable defibrillator for emergency use.\n' +
          'Fully automatic shock delivery with simple 1-2-3 operation.\n' +
          'Biphasic waveform with escalating energy for better conversion rates.\n' +
          'Quick-access electrode pads with long shelf life.\n' +
          'Durable design withstands drops, dust, and water exposure.\n' +
          'Voice instructions and visual prompts guide untrained rescuers.\n' +
          'Pediatric attenuation capability for child rescue.\n' +
          'Ideal for ambulances, fire trucks, EMS, and public access locations.\n' +
          'Meets AHA/ERC and IEC standards for professional-grade AEDs.\n' +
          'Trusted Lifepak quality for cardiac arrest response.',
    rating: 4.9,
    reviews: 78,
    sold: '110+',
    tags: [
      'lifepak cr aed', 'physio control aed', 'automatic lifepak', 'biphasic defibrillator', 'rugged aed device',
      'ems aed unit', 'public access lifepak', 'pediatric attenuation aed', 'aha erc aed', 'voice guided aed',
      'durable aed', 'cardiac arrest response', 'fire truck aed', 'professional aed', 'trusted defibrillator'
    ]
  },
  {
    id: 'portable-ambulance-ventilator-812a',
    title: 'Portable Ambulance Ventilator 812A',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoiaGFtaWx0b24tbWVkaWNhbC1hZ1wvZmlsZVwvNkhUelk3U1o4WURFZWdTa0pRengucG5nIn0:hamilton-medical-ag:4jCKC4WWYw96vauJVopCcdRWA0YGg-p0hREfnRvinnQ?width=640&quality=50',
    desc: 'Portable Ambulance Ventilator 812A provides advanced ventilation in compact form.\n' +
          'Pressure-controlled and volume-controlled modes for adult and pediatric use.\n' +
          'Built-in compressor eliminates need for oxygen tanks in basic mode.\n' +
          'Adjustable FiO2 from 21% to 100% with oxygen enrichment.\n' +
          'Alarms for disconnection, low pressure, high pressure, and apnea.\n' +
          'Lightweight design with carry handle and vehicle mounting options.\n' +
          'Long battery runtime for extended pre-hospital care.\n' +
          'Ideal for trauma, respiratory failure, and inter-hospital transfers.\n' +
          'Meets AHA/ERC and ISO 10651 standards for emergency ventilators.\n' +
          'Reliable ventilation support for critical ambulance patients.',
    rating: 4.7,
    reviews: 167,
    sold: '250+',
    tags: [
      'portable ventilator 812a', 'ambulance ventilator', 'pressure controlled vent', 'volume controlled vent', 'built in compressor',
      'trauma ventilation', 'respiratory failure vent', 'aha erc ventilator', 'iso 10651 vent', 'long battery ventilator',
      'oxygen enrichment vent', 'apnea alarm ventilator', 'critical patient vent', 'pre hospital ventilation', 'compact ambulance vent'
    ]
  },
  {
    id: 'portable-biphasic-aed-defibrillator',
    title: 'Portable Biphasic AED Defibrillator',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.orthopedicdrills.com/wp-content/uploads/2020/03/Xpress-is-a-defibrillator-Monitor.jpg',
    desc: 'Portable Biphasic AED Defibrillator combines AED and manual defibrillation modes.\n' +
          'Biphasic truncated exponential waveform for effective shock delivery.\n' +
          'Color touchscreen for clear ECG display and operation guidance.\n' +
          'Manual mode allows energy selection up to 360 J for advanced providers.\n' +
          'Synchronized cardioversion and pacing capabilities in some models.\n' +
          'Rugged IP54-rated design withstands ambulance vibrations and drops.\n' +
          'Long-life battery and quick-swap pads for continuous readiness.\n' +
          'Ideal for advanced EMS, critical care transport, and hospital handover.\n' +
          'Meets AHA/ERC guidelines and IEC standards for portable defibrillators.\n' +
          'Versatile life-saving device for professional responders.',
    rating: 4.8,
    reviews: 234,
    sold: '400+',
    tags: [
      'portable biphasic aed', 'manual defibrillator aed', 'touchscreen defibrillator', '360 j energy device', 'ems biphasic defib',
      'critical care transport', 'synchronized cardioversion', 'rugged ip54 defib', 'aha erc defibrillator', 'quick swap pads',
      'advanced ems device', 'ecg display defib', 'hospital handover unit', 'professional responder defib', 'life saving portable defib'
    ]
  }
],



    'Personal Protective Equipments': [
  {
    id: 'bulldog-pups-safety-glasses',
    title: 'BULLDOG PUPS SAFETY GLASSES',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.uvex-safety.com/blog/wp-content/uploads/2020/02/UK3-uai-2064x1378.jpg',
    desc: 'Bulldog Pups Safety Glasses combine fun design with serious eye protection.\n' +
          'Impact-resistant polycarbonate lenses meet ANSI Z87.1 and EN166 standards.\n' +
          'UV400 protection blocks 99.9% of harmful UVA/UVB rays.\n' +
          'Wrap-around frame with soft nose pads and temple tips for all-day comfort.\n' +
          'Anti-fog and scratch-resistant coating keeps lenses clear in tough conditions.\n' +
          'Lightweight design reduces fatigue during long shifts.\n' +
          'Fun bulldog pups graphic appeals to younger workers and teams.\n' +
          'Ideal for construction, workshops, labs, and general industrial use.\n' +
          'High-visibility frame color for easy spotting in busy environments.\n' +
          'Affordable, stylish safety eyewear that workers actually enjoy wearing.',
    rating: 4.6,
    reviews: 189,
    sold: '300+',
    tags: [
      'bulldog safety glasses', 'fun design eyewear', 'impact resistant glasses', 'ansi z87.1 glasses', 'en166 safety glasses',
      'uv400 protection', 'anti fog safety glasses', 'scratch resistant lenses', 'wrap around frame', 'construction eyewear',
      'workshop safety glasses', 'lightweight eye protection', 'high visibility frame', 'stylish ppe glasses', 'industrial eye wear'
    ]
  },
  {
    id: 'construction-safety-helmets',
    title: 'Construction Safety Helmets',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://defendersafety.com/cdn/shop/articles/new-generation-of-hard-hats-is-here-theyre-safety-helmets-433561.jpg?v=1690825108&width=2048',
    desc: 'Construction Safety Helmets provide reliable head protection on demanding job sites.\n' +
          'High-density polyethylene shell resists penetration and impact up to 50J.\n' +
          '6-point textile suspension system absorbs shock and improves comfort.\n' +
          'Ratchet or slip adjustment for secure, personalized fit.\n' +
          'Short peak design improves upward visibility and reduces snag risk.\n' +
          'Accessory slots for earmuffs, visors, and headlamps.\n' +
          'High-visibility reflective strips available on select models.\n' +
          'Ideal for construction, civil engineering, mining, and industrial work.\n' +
          'Certified to EN 397 and ANSI/ISEA Z89.1 standards.\n' +
          'Tough, trusted helmets built to protect workers every day.',
    rating: 4.8,
    reviews: 345,
    sold: '600+',
    tags: [
      'construction helmet', 'safety hard hat', 'en 397 helmet', 'ansi z89.1 hard hat', 'high density polyethylene',
      '6 point suspension helmet', 'ratchet adjustment helmet', 'short peak hard hat', 'accessory slot helmet', 'reflective safety helmet',
      'civil engineering ppe', 'mining hard hat', 'industrial head protection', 'tough construction helmet', 'worker safety helmet'
    ]
  },
  {
    id: 'double-filter-face-mask',
    title: 'Double Filter Face Mask',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41u0SylnevL._AC_UF894,1000_QL80_.jpg',
    desc: 'Double Filter Face Mask offers enhanced filtration for dust, fumes, and particles.\n' +
          'Dual-layer filter system with activated carbon and electrostatic media.\n' +
          'Adjustable nose clip and soft ear loops for secure, comfortable fit.\n' +
          'Breathable outer layer reduces heat buildup during long wear.\n' +
          'Reusable design with replaceable filters for cost savings.\n' +
          'High filtration efficiency against PM2.5, dust, and non-oil aerosols.\n' +
          'Ideal for construction, woodworking, painting, and general dusty environments.\n' +
          'Meets KN95 or FFP2 equivalent standards for respiratory protection.\n' +
          'Lightweight and foldable for easy storage in tool bags.\n' +
          'Reliable face protection for everyday hazardous tasks.',
    rating: 4.7,
    reviews: 456,
    sold: '800+',
    tags: [
      'double filter mask', 'activated carbon face mask', 'reusable dust mask', 'pm2.5 protection', 'kn95 equivalent mask',
      'construction face mask', 'woodworking respirator', 'painting dust mask', 'breathable face protection', 'replaceable filter mask',
      'adjustable nose clip', 'soft ear loop mask', 'general dust protection', 'industrial face mask', 'everyday respiratory ppe'
    ]
  },
  {
    id: 'dust-mask',
    title: 'Dust Mask',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Cone-88240_1920.jpg/1200px-Cone-88240_1920.jpg',
    desc: 'Dust Mask provides basic, affordable protection against non-toxic dust and particles.\n' +
          'Lightweight cone shape with adjustable aluminum nose bridge for fit.\n' +
          'Elastic ear loops or head straps for secure wear.\n' +
          'Multi-layer filtration media blocks large dust particles effectively.\n' +
          'Breathable design minimizes breathing resistance.\n' +
          'Foldable for easy pocket storage between uses.\n' +
          'Ideal for woodworking, sanding, sweeping, and light construction tasks.\n' +
          'Meets basic NIOSH N95 or EN149 FFP1 standards.\n' +
          'Cost-effective solution for everyday dust exposure.\n' +
          'Simple, reliable entry-level respiratory protection.',
    rating: 4.5,
    reviews: 567,
    sold: '1K+',
    tags: [
      'dust mask', 'basic dust protection', 'cone dust mask', 'niosh n95 mask', 'en149 ffp1 mask',
      'woodworking dust mask', 'sanding respiratory', 'light construction mask', 'breathable dust mask', 'elastic ear loop mask',
      'adjustable nose bridge', 'foldable dust mask', 'everyday dust ppe', 'affordable respiratory', 'entry level dust protection'
    ]
  },
  {
    id: 'ear-muff',
    title: 'Ear Muff',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.echo-usa.com/getattachment/ee7422ec-e220-4ec5-bee2-22925f01d344/v2_ECHO_PersonalProtection_99988801520_StaticShot1.jpg',
    desc: 'Ear Muff provides reliable hearing protection in noisy work environments.\n' +
          'Over-the-head design with soft foam cushions for comfort.\n' +
          'NRR 25–30 dB noise reduction rating depending on model.\n' +
          'Adjustable headband with steel wire for secure fit.\n' +
          'Lightweight ABS cups resist impact and chemicals.\n' +
          'Foldable for easy storage in tool bags or pockets.\n' +
          'Ideal for construction, manufacturing, mowing, and shooting ranges.\n' +
          'Certified to ANSI S3.19 and EN 352 standards.\n' +
          'Durable, comfortable solution for long-shift noise exposure.\n' +
          'Essential PPE for preventing hearing loss on the job.',
    rating: 4.6,
    reviews: 234,
    sold: '400+',
    tags: [
      'ear muff', 'hearing protection muff', 'over the head earmuff', 'nrr 25 earmuff', 'en 352 hearing protection',
      'construction ear muff', 'manufacturing noise muff', 'foldable earmuff', 'adjustable headband muff', 'lightweight ear protection',
      'abs cup earmuff', 'long shift hearing ppe', 'noise reduction earmuff', 'prevent hearing loss', 'essential noise ppe'
    ]
  },
  {
    id: 'ear-muff-h10',
    title: 'Ear Muff H10',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.industrialsolution.ae/media_library/original_industrial-product-erop85.jpg',
    desc: 'Ear Muff H10 delivers high-attenuation hearing protection for extreme noise.\n' +
          'SNR 30–35 dB reduction for very loud industrial environments.\n' +
          'Large ear cups with thick foam cushions for superior comfort.\n' +
          'Sturdy steel headband with adjustable height settings.\n' +
          'Dielectric design safe around electrical hazards.\n' +
          'Foldable and lightweight for easy transport.\n' +
          'Ideal for heavy machinery, shooting ranges, airports, and demolition.\n' +
          'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
          'Premium earmuff for maximum noise isolation.\n' +
          'Trusted choice for professionals in high-decibel settings.',
    rating: 4.8,
    reviews: 178,
    sold: '300+',
    tags: [
      'h10 ear muff', 'high attenuation earmuff', 'snr 30 earmuff', 'dielectric hearing protection', 'heavy machinery muff',
      'en 352-1 earmuff', 'ansi s3.19 hearing', 'large ear cup muff', 'foldable high noise muff', 'demolition ear protection',
      'shooting range earmuff', 'airport noise muff', 'premium hearing ppe', 'maximum noise isolation', 'professional earmuff'
    ]
  },
  {
    id: 'ear-plug',
    title: 'Ear plug',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71-9mJKFe7L._AC_UF1000,1000_QL80_.jpg',
    desc: 'Ear Plug is a disposable foam earplug for effective hearing protection.\n' +
          'High NRR 32–33 dB noise reduction for loud environments.\n' +
          'Slow-recovery foam expands to fit ear canal comfortably.\n' +
          'Smooth, tapered shape for easy insertion and removal.\n' +
          'Corded or uncorded options for different work needs.\n' +
          'Individually wrapped for hygiene and portability.\n' +
          'Ideal for construction, manufacturing, mowing, and shooting.\n' +
          'Certified to ANSI S3.19 and EN 352-2 standards.\n' +
          'Low-cost, high-performance solution for daily noise exposure.\n' +
          'Essential disposable PPE for preventing hearing damage.',
    rating: 4.5,
    reviews: 678,
    sold: '1.2K+',
    tags: [
      'disposable ear plug', 'foam earplug', 'nrr 32 ear plug', 'en 352-2 earplug', 'construction hearing protection',
      'manufacturing ear plug', 'slow recovery foam', 'corded earplug', 'uncorded disposable', 'individually wrapped plug',
      'shooting range earplug', 'prevent hearing damage', 'low cost ppe', 'high performance earplug', 'daily noise protection'
    ]
  },
  {
    id: 'economy-goggles',
    title: 'ECONOMY GOGGLES',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.coopersafety.com/pub/media/catalog/product/cache/0f2e77eff41cbf2d08923f74a2a4bc21/2/2/2220.jpg',
    desc: 'Economy Goggles offer affordable eye protection for light-duty tasks.\n' +
          'Impact-resistant polycarbonate lens meets ANSI Z87.1 standards.\n' +
          'Indirect vent design reduces fogging in humid conditions.\n' +
          'Soft PVC frame with adjustable elastic strap for secure fit.\n' +
          'Clear or tinted lens options for different lighting.\n' +
          'Lightweight and comfortable for all-day wear.\n' +
          'Ideal for general workshop, cleaning, painting, and light construction.\n' +
          'UV protection blocks harmful rays during outdoor use.\n' +
          'Cost-effective solution for basic splash and impact hazards.\n' +
          'Reliable entry-level goggles for everyday safety.',
    rating: 4.6,
    reviews: 289,
    sold: '500+',
    tags: [
      'economy safety goggles', 'impact resistant goggles', 'ansi z87.1 goggles', 'indirect vent goggles', 'workshop eye protection',
      'clear lens goggles', 'tinted safety goggles', 'elastic strap goggles', 'lightweight eye wear', 'painting goggles',
      'cleaning ppe goggles', 'uv protection goggles', 'basic splash goggles', 'affordable eye safety', 'entry level goggles'
    ]
  },
  {
    id: 'electrical-rubber-hand-gloves',
    title: 'Electrical Rubber Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ils.org.uk/wordpress/wp-content/uploads/2024/04/electrical-insulation-gloves.jpg',
    desc: 'Electrical Rubber Hand Gloves provide dielectric protection against electric shock.\n' +
          'Natural latex with rolled cuff for secure fit and easy donning.\n' +
          'Class 00 to Class 4 ratings (up to 36,000V AC) for different voltage levels.\n' +
          'Tested and certified to EN 60903 and ASTM D120 standards.\n' +
          'Inner cotton liner absorbs moisture and improves comfort.\n' +
          'Ergonomic shape reduces hand fatigue during long use.\n' +
          'Ideal for electricians, linemen, substation workers, and utility crews.\n' +
          'High-visibility color options for safety in low-light.\n' +
          'Must be inspected and tested before each use.\n' +
          'Life-critical PPE for working on or near live electrical equipment.',
    rating: 4.9,
    reviews: 134,
    sold: '200+',
    tags: [
      'electrical rubber gloves', 'dielectric hand gloves', 'en 60903 gloves', 'astm d120 insulated', 'class 00 gloves',
      'electrician safety gloves', 'lineman rubber gloves', 'high voltage protection', 'cotton liner gloves', 'ergonomic electrical gloves',
      'substation ppe', 'utility crew gloves', 'live electrical ppe', 'insulated hand protection', 'critical electrical safety'
    ]
  },
  {
    id: 'face-protection-shield',
    title: 'Face Protection Shield',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://esseyepro.com/media/catalog/product/cache/e26e41ce13fc7450224a4a65305930ca/e/s/ess_face_shield_ppe_down_1.png',
    desc: 'Face Protection Shield guards against flying debris, splashes, and UV exposure.\n' +
          'Clear polycarbonate visor with anti-fog and anti-scratch coating.\n' +
          'Adjustable ratchet headgear for secure, comfortable fit.\n' +
          'Lightweight design reduces neck strain during long shifts.\n' +
          'Chin guard and brow guard for full facial coverage.\n' +
          'Compatible with hard hats via universal slots.\n' +
          'Ideal for grinding, sanding, woodworking, and light chemical work.\n' +
          'Meets ANSI Z87.1 and EN166 standards for impact and splash protection.\n' +
          'Replaceable visor for extended service life.\n' +
          'Essential face PPE for high-risk eye and face hazards.',
    rating: 4.7,
    reviews: 312,
    sold: '550+',
    tags: [
      'face protection shield', 'polycarbonate face shield', 'anti fog visor', 'ratchet headgear shield', 'grinding face protection',
      'ansi z87.1 shield', 'en166 face shield', 'hard hat compatible shield', 'lightweight face ppe', 'replaceable visor',
      'sanding face guard', 'woodworking shield', 'chemical splash shield', 'brow chin guard', 'essential face safety'
    ]
  },
  {
    id: 'full-face-mask',
    title: 'Full Face Mask',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41SjgT8vM9L._AC_UY1000_.jpg',
    desc: 'Full Face Mask provides complete respiratory and eye protection in one unit.\n' +
          'Panoramic visor offers wide field of vision with anti-fog coating.\n' +
          'Silicone face seal conforms to face for secure, comfortable fit.\n' +
          'Twin cartridge bayonet connection for easy filter changes.\n' +
          'Speech diaphragm for clear communication while wearing.\n' +
          'Adjustable head harness with 5-point suspension.\n' +
          'Ideal for painting, chemical handling, welding fumes, and asbestos work.\n' +
          'Compatible with most standard filters and cartridges.\n' +
          'Certified to EN 136 and NIOSH standards for full-face respirators.\n' +
          'Professional-grade mask for high-hazard respiratory environments.',
    rating: 4.8,
    reviews: 223,
    sold: '380+',
    tags: [
      'full face respirator', 'panoramic visor mask', 'silicone full face', 'bayonet cartridge mask', 'painting respirator',
      'en 136 full face', 'niosh certified mask', 'chemical handling mask', 'welding fume protection', 'speech diaphragm mask',
      'adjustable head harness', 'high hazard respiratory', 'asbestos work mask', 'professional full face', 'wide vision mask'
    ]
  },
  {
    id: 'german-helmet',
    title: 'German Helmet',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.elite-gss.com/wp-content/uploads/2023/12/JSP-EVO2%C2%AE-Vented-Safety-Helmet-with-Slip-Ratchet-White.webp',
    desc: 'German Helmet (JSP EVO2 style) offers advanced head protection with modern design.\n' +
          'High-impact ABS shell with 6-point terylene suspension system.\n' +
          'Slip ratchet adjustment for precise, secure fit.\n' +
          'Vented or unvented models for different work environments.\n' +
          'Accessory slots for earmuffs, visors, and headlamps.\n' +
          'Wheel ratchet for one-handed adjustment even with gloves.\n' +
          'Chin strap included for secure wear in windy conditions.\n' +
          'Ideal for construction, civil works, manufacturing, and utilities.\n' +
          'Certified to EN 397 and ANSI Z89.1 standards.\n' +
          'Ergonomic, lightweight helmet for all-day comfort and safety.',
    rating: 4.9,
    reviews: 167,
    sold: '280+',
    tags: [
      'german safety helmet', 'jsp evo2 helmet', 'vented hard hat', 'slip ratchet helmet', '6 point suspension helmet',
      'en 397 certified helmet', 'ansi z89.1 hard hat', 'construction german helmet', 'wheel ratchet helmet', 'accessory slot helmet',
      'chin strap helmet', 'lightweight safety helmet', 'civil work helmet', 'manufacturing head protection', 'ergonomic hard hat'
    ]
  },
  {
    id: 'headband-earmuff-h9a',
    title: 'Headband Earmuff H9A',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://syndicate.synthrone.com/ce0gp5ri2yb3/V000062875/latest/assets/6022_opt.png',
    desc: 'Headband Earmuff H9A delivers high-performance hearing protection.\n' +
          'SNR 28–30 dB noise reduction for medium to high noise levels.\n' +
          'Large ear cups with soft foam cushions for superior comfort.\n' +
          'Adjustable stainless steel headband with secure fit.\n' +
          'Foldable design for easy storage in tool bags.\n' +
          'Lightweight construction reduces fatigue during long shifts.\n' +
          'Ideal for woodworking, metalworking, mowing, and general industry.\n' +
          'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
          'Reliable, comfortable earmuff for daily noise exposure.\n' +
          'Essential PPE for preventing hearing loss on the job.',
    rating: 4.7,
    reviews: 145,
    sold: '240+',
    tags: [
      'h9a earmuff', 'headband hearing protection', 'snr 30 earmuff', 'large cup earmuff', 'en 352-1 earmuff',
      'woodworking hearing muff', 'metalworking noise protection', 'foldable earmuff', 'lightweight hearing ppe', 'adjustable headband muff',
      'general industry earmuff', 'comfortable noise muff', 'prevent hearing loss', 'daily noise protection', 'essential hearing ppe'
    ]
  },
  {
    id: 'heat-resistant-knitted-gloves',
    title: 'Heat Resistant Knitted Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.airgas.com/medias/1200Wx1200H-Ansell-43-113.png?context=bWFzdGVyfHByb2R1Y3R8ODg2NzAzfGltYWdlL3BuZ3xwcm9kdWN0L2hmZS9oNTMvMTIxMzM1OTY3OTA4MTQucG5nfGEzYzk3YjlkNWIzMDUyOGJjZGM5NjBiNGVlOThlODk5YjA5NDQ2MzFhMmVkMDNjZDY3ODlmYzIzNGI3MzUzNWQ>',
    desc: 'Heat Resistant Knitted Gloves protect hands from high temperatures and sparks.\n' +
          'Kevlar or fiberglass core yarn with cotton/aramid blend for comfort.\n' +
          'Withstands contact heat up to 250–500°C depending on model.\n' +
          'Cut level A3–A5 resistance for added protection against sharp edges.\n' +
          'Flexible knit construction allows good dexterity.\n' +
          'Grip coating on palm for secure handling of hot objects.\n' +
          'Ideal for foundries, welding, glass handling, and metalworking.\n' +
          'Certified to EN 407 and EN 388 standards for heat and cut resistance.\n' +
          'Long cuff options available for forearm protection.\n' +
          'Durable gloves for safe handling in hot industrial environments.',
    rating: 4.8,
    reviews: 189,
    sold: '320+',
    tags: [
      'heat resistant gloves', 'knitted heat gloves', 'kevlar heat gloves', 'en 407 heat resistant', 'en 388 cut resistant',
      'foundry hand protection', 'welding heat gloves', 'glass handling gloves', 'metalworking ppe', 'grip palm gloves',
      'flexible knit gloves', 'long cuff heat gloves', 'industrial hot work', 'dexterity heat gloves', 'safe hot handling'
    ]
  },
  {
    id: 'helmet-with-torch',
    title: 'Helmet with torch',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.fenixlighting.com/cdn/shop/products/fenix-ald-05-helmet-flashlight-holder-plus-flashlight.jpg?v=1664307551',
    desc: 'Helmet with Torch integrates a powerful LED light for hands-free illumination.\n' +
          'ABS safety shell with 6-point suspension and ratchet adjustment.\n' +
          'Built-in or clip-on torch with 200–1000 lumens output options.\n' +
          'Rechargeable battery or AAA compatibility for long runtime.\n' +
          'Multiple lighting modes: high, medium, low, strobe, and red light.\n' +
          'Waterproof and impact-resistant torch housing.\n' +
          'Ideal for night construction, mining, inspection, and rescue work.\n' +
          'Certified to EN 397 for head protection and IPX standards for torch.\n' +
          'Increases visibility and safety in dark or confined spaces.\n' +
          'All-in-one helmet solution for low-light work environments.',
    rating: 4.9,
    reviews: 112,
    sold: '180+',
    tags: [
      'helmet with torch', 'safety helmet light', 'led hard hat torch', 'rechargeable helmet light', 'en 397 helmet',
      'night construction helmet', 'mining safety light', 'inspection helmet torch', 'rescue work helmet', 'hands free illumination',
      'multiple mode torch', 'waterproof helmet light', 'impact resistant light', 'low light visibility', 'all in one safety helmet'
    ]
  },
  {
    id: 'knitted-hand-gloves',
    title: 'Knitted Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://eco-mdsassociates.com/cdn/shop/products/S7NT.jpg?v=1712334314',
    desc: 'Knitted Hand Gloves offer basic protection with excellent dexterity.\n' +
          'Seamless cotton or polyester knit for breathable comfort.\n' +
          'PVC or nitrile dotted palm for improved grip on dry surfaces.\n' +
          'Elastic knit wrist prevents dirt entry and keeps gloves secure.\n' +
          'Lightweight design reduces hand fatigue during long tasks.\n' +
          'Washable and reusable for cost-effective daily use.\n' +
          'Ideal for general handling, assembly, warehousing, and light maintenance.\n' +
          'Meets EN 388 standards for abrasion and tear resistance.\n' +
          'Affordable, comfortable gloves for everyday work.\n' +
          'Versatile basic PPE for a wide range of industries.',
    rating: 4.6,
    reviews: 234,
    sold: '400+',
    tags: [
      'knitted hand gloves', 'dotted palm gloves', 'cotton knit gloves', 'en 388 gloves', 'general handling gloves',
      'warehouse work gloves', 'assembly ppe gloves', 'breathable knit gloves', 'elastic wrist gloves', 'light maintenance gloves',
      'washable work gloves', 'reusable knit gloves', 'dexterity gloves', 'affordable hand protection', 'versatile basic ppe'
    ]
  },
  {
    id: 'leather-heat-resistance-hand-gloves',
    title: 'Leather Heat Resistance Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cooksongold.com/images-prod/999_7231_12.jpg',
    desc: 'Leather Heat Resistance Hand Gloves protect against high temperatures and sparks.\n' +
          'Premium split cowhide leather with reinforced palm and thumb.\n' +
          'Withstands contact heat up to 250–350°C for short durations.\n' +
          'Kevlar stitching for extra strength and heat resistance.\n' +
          'Long gauntlet cuff protects forearm from radiant heat.\n' +
          'Inner cotton lining absorbs moisture and improves comfort.\n' +
          'Ideal for welding, foundry work, forging, and metal handling.\n' +
          'Certified to EN 407 and EN 388 for heat and mechanical risks.\n' +
          'Durable gloves for safe handling of hot materials.\n' +
          'Professional-grade heat protection for heavy-duty tasks.',
    rating: 4.8,
    reviews: 156,
    sold: '260+',
    tags: [
      'leather heat gloves', 'cowhide heat resistant', 'en 407 heat gloves', 'welding leather gloves', 'foundry hand protection',
      'long gauntlet gloves', 'kevlar stitched gloves', 'hot material handling', 'split leather gloves', 'radiant heat protection',
      'cotton lined gloves', 'forging safety gloves', 'metal handling ppe', 'durable heat gloves', 'professional heat ppe'
    ]
  },
  {
    id: 'leather-reversible-hand-gloves',
    title: 'Leather Reversible Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://beyondclothing.com/cdn/shop/products/GuideLite_Coy_CowbellyLeather_ConductiveGoatLeather_WEB.jpg?v=1605235549&width=1445',
    desc: 'Leather Reversible Hand Gloves offer dual-sided wear for extended life.\n' +
          'Full-grain leather on one side, split leather on reverse.\n' +
          'Reversible design doubles glove lifespan by switching sides.\n' +
          'Elastic wrist for secure fit and easy on/off.\n' +
          'Good abrasion and puncture resistance for general handling.\n' +
          'Breathable leather reduces hand sweat during work.\n' +
          'Ideal for construction, landscaping, material handling, and farming.\n' +
          'Meets EN 388 standards for mechanical protection.\n' +
          'Economical, long-lasting gloves for everyday tasks.\n' +
          'Versatile leather PPE that adapts to wear patterns.',
    rating: 4.7,
    reviews: 134,
    sold: '220+',
    tags: [
      'reversible leather gloves', 'dual side hand gloves', 'full grain leather gloves', 'en 388 leather gloves', 'construction reversible',
      'landscaping gloves', 'material handling gloves', 'farming leather gloves', 'elastic wrist gloves', 'breathable leather ppe',
      'abrasion resistant gloves', 'puncture resistant gloves', 'long lasting gloves', 'economical leather ppe', 'versatile work gloves'
    ]
  },
  {
    id: 'leather-welding-hand-gloves',
    title: 'Leather Welding Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://store.eos.info/cdn/shop/products/1WEP3rPJLxim45CruChbdUU1TtP-z-lB0.jpg?v=1745941965',
    desc: 'Leather Welding Hand Gloves protect against sparks, slag, and high heat.\n' +
          'Heavy-duty cowhide leather with double palm reinforcement.\n' +
          'Kevlar stitching withstands molten metal splatter.\n' +
          'Gauntlet cuff shields forearm from radiant heat and sparks.\n' +
          'Wing thumb design improves grip and reduces fatigue.\n' +
          'Soft cotton lining wicks moisture for comfort.\n' +
          'Ideal for arc welding, MIG/TIG, plasma cutting, and foundry work.\n' +
          'Certified to EN 12477 Type A and EN 388/407 standards.\n' +
          'Durable, professional gloves for safe welding operations.\n' +
          'Essential PPE for welders working with hot materials.',
    rating: 4.9,
    reviews: 178,
    sold: '300+',
    tags: [
      'welding leather gloves', 'cowhide welding gloves', 'en 12477 gloves', 'kevlar stitched welding', 'gauntlet cuff gloves',
      'arc welding ppe', 'mig tig gloves', 'plasma cutting gloves', 'foundry welding gloves', 'wing thumb gloves',
      'cotton lined welding', 'molten metal protection', 'spark resistant gloves', 'professional welding ppe', 'hot work gloves'
    ]
  },
  {
    id: 'mask-n95',
    title: 'Mask N95',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://envomask.com/cdn/shop/files/d47be859-ventless_respiratorkit_03_noBGR2.png?v=1731069021&width=1445',
    desc: 'Mask N95 filters at least 95% of airborne particles including dust and aerosols.\n' +
          'NIOSH-approved N95 respirator with head straps for secure fit.\n' +
          'Molded shape with adjustable nose clip for comfort and seal.\n' +
          'Breathable non-woven fabric reduces breathing resistance.\n' +
          'Lightweight and foldable for easy storage in pockets.\n' +
          'Ideal for construction, woodworking, sanding, and pandemic use.\n' +
          'Meets NIOSH 42 CFR Part 84 and KN95 equivalent standards.\n' +
          'Essential respiratory protection for non-oil based particulates.\n' +
          'Trusted disposable mask for high-exposure environments.\n' +
          'Critical PPE for worker safety in dusty conditions.',
    rating: 4.8,
    reviews: 789,
    sold: '1.5K+',
    tags: [
      'n95 mask', 'niosh n95 respirator', 'dust particle mask', 'construction n95', 'woodworking respirator',
      'sanding n95 mask', 'pandemic protection', 'breathable n95', 'adjustable nose clip', 'head strap n95',
      'foldable disposable mask', 'high exposure ppe', 'non oil particulate', 'trusted respiratory mask', 'worker safety mask'
    ]
  },
  {
    id: 'metal-mesh-gloves',
    title: 'Metal Mesh Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.cfsbrands.com/_next/image?url=https%3A%2F%2Fthewalkin.cfsbrands.com%2Ftransform%2FProductPage655x658%2Fbceeee79-fe5f-46e0-8d50-eeea27494496%2FMGA515-tif&w=2048&q=75',
    desc: 'Metal Mesh Gloves provide maximum cut and puncture resistance.\n' +
          'Stainless steel ring mesh construction for superior protection.\n' +
          'Cut level 5 / A5 resistance to knives, blades, and sharp edges.\n' +
          'Ambidextrous design with adjustable wrist strap.\n' +
          'Hygienic and easy to clean – ideal for food processing.\n' +
          'Lightweight yet extremely durable for long-term use.\n' +
          'Ideal for meat cutting, fish processing, glass handling, and butchery.\n' +
          'Certified to EN 388 and ANSI/ISEA 105 for cut resistance.\n' +
          'Essential PPE for high-cut-risk tasks.\n' +
          'Professional-grade gloves for maximum hand safety.',
    rating: 4.9,
    reviews: 89,
    sold: '140+',
    tags: [
      'metal mesh gloves', 'stainless steel mesh', 'cut level 5 gloves', 'en 388 gloves', 'ansi cut resistant',
      'meat cutting gloves', 'fish processing ppe', 'glass handling gloves', 'butchery safety gloves', 'ambidextrous mesh',
      'hygienic gloves', 'easy clean mesh gloves', 'high cut risk ppe', 'durable hand protection', 'professional mesh gloves'
    ]
  },
  {
    id: 'msa-classic-mask',
    title: 'MSA Classic Mask',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-mb827g/images/stencil/1280x1280/products/1278/1598/thumbs.aspx_rel_path_hiresimages%252frespiratory_protection%252fair-purifying%252fadvantage%252fadvantage_200_ls%252f815452_adv_200_ls__71494.1447695478.jpg?c=2',
    desc: 'MSA Classic Mask is a reusable half-face respirator for reliable protection.\n' +
          'Soft silicone facepiece conforms to face for excellent seal.\n' +
          'Cradle suspension head harness for secure, comfortable fit.\n' +
          'Twin bayonet cartridge connection for easy filter changes.\n' +
          'Low-profile design improves downward visibility.\n' +
          'Available with multiple cartridge/filter options for gases, vapors, and particulates.\n' +
          'Ideal for painting, chemical handling, welding fumes, and dust.\n' +
          'Certified to NIOSH and EN 140 standards.\n' +
          'Durable, long-lasting mask for repeated industrial use.\n' +
          'Trusted MSA quality for respiratory safety.',
    rating: 4.8,
    reviews: 101,
    sold: '160+',
    tags: [
      'msa classic mask', 'half face respirator', 'silicone facepiece', 'cradle suspension mask', 'bayonet cartridge mask',
      'painting respirator', 'chemical handling mask', 'niosh en 140 mask', 'low profile respirator', 'reusable half mask',
      'welding fume protection', 'dust vapor mask', 'durable industrial mask', 'trusted msa respirator', 'comfortable half face'
    ]
  },
  {
    id: 'neoprene-dipped-supported-gloves',
    title: 'Neoprene Dipped Supported Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-y180xghw1r/images/stencil/1080w/products/34955/46626/08-352__97714.1673041495.png>',
    desc: 'Neoprene Dipped Supported Gloves provide excellent chemical and abrasion resistance.\n' +
          'Cotton jersey liner with full neoprene coating for liquid protection.\n' +
          'Good grip in wet and oily conditions with textured palm.\n' +
          'Elastic knit wrist prevents liquid entry.\n' +
          'Resists oils, acids, alcohols, and many solvents.\n' +
          'Flexible design maintains dexterity for handling tasks.\n' +
          'Ideal for chemical handling, janitorial, painting, and general maintenance.\n' +
          'Certified to EN 388 and EN 374 standards for chemical protection.\n' +
          'Durable, comfortable gloves for wet and hazardous work.\n' +
          'Reliable dipped glove for everyday industrial use.',
    rating: 4.7,
    reviews: 123,
    sold: '200+',
    tags: [
      'neoprene dipped gloves', 'supported chemical gloves', 'cotton liner gloves', 'en 374 chemical gloves', 'wet grip gloves',
      'chemical handling ppe', 'janitorial gloves', 'painting dipped gloves', 'oily condition gloves', 'elastic wrist gloves',
      'flexible dipped gloves', 'abrasion resistant gloves', 'solvent resistant gloves', 'industrial dipped ppe', 'reliable wet work gloves'
    ]
  },
  {
    id: 'nitrile-hand-gloves',
    title: 'Nitrile Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.uline.com/is/image/uline/S-7964XX?$Mobile_Zoom$',
    desc: 'Nitrile Hand Gloves offer superior chemical and puncture resistance.\n' +
          'Powder-free nitrile provides excellent dexterity and tactile sensitivity.\n' +
          'Textured fingertips ensure secure grip in wet or oily conditions.\n' +
          'Beaded cuff prevents roll-down and improves donning.\n' +
          'Resists oils, greases, solvents, and many acids/alkalis.\n' +
          'Latex-free – ideal for users with latex allergies.\n' +
          'Available in 4–8 mil thickness for different protection levels.\n' +
          'Ideal for laboratories, food processing, automotive, and cleaning.\n' +
          'Certified to EN 374 and FDA standards for chemical and food use.\n' +
          'Durable, comfortable gloves for high-risk hand protection.',
    rating: 4.8,
    reviews: 456,
    sold: '750+',
    tags: [
      'nitrile gloves', 'powder free nitrile', 'chemical resistant nitrile', 'en 374 nitrile', 'textured grip gloves',
      'laboratory gloves', 'food processing nitrile', 'automotive hand protection', 'latex free gloves', 'beaded cuff nitrile',
      'solvent resistant gloves', 'puncture resistant nitrile', 'cleaning ppe gloves', 'high dexterity gloves', 'durable nitrile ppe'
    ]
  },
  {
    id: 'pvc-hand-gloves',
    title: 'PVC Hand Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.labsource.com/PHOTOS/media/catalog/product/0202100.JPG',
    desc: 'PVC Hand Gloves provide economical liquid and chemical splash protection.\n' +
          'Fully coated PVC with cotton interlock liner for comfort.\n' +
          'Sandy finish palm for excellent wet and dry grip.\n' +
          'Gauntlet cuff prevents liquid dripping onto arms.\n' +
          'Resists oils, acids, alkalis, and general chemicals.\n' +
          'Flexible even in cold conditions.\n' +
          'Ideal for janitorial, agriculture, fishing, and light chemical handling.\n' +
          'Certified to EN 388 and EN 374 standards.\n' +
          'Durable, low-cost gloves for wet and messy tasks.\n' +
          'Reliable everyday hand protection for wet environments.',
    rating: 4.6,
    reviews: 267,
    sold: '450+',
    tags: [
      'pvc hand gloves', 'liquid splash gloves', 'cotton liner pvc', 'en 374 pvc gloves', 'sandy grip pvc',
      'janitorial gloves', 'agriculture pvc gloves', 'fishing hand protection', 'gauntlet cuff gloves', 'chemical resistant pvc',
      'flexible pvc gloves', 'wet environment ppe', 'low cost hand gloves', 'reliable wet work', 'everyday splash protection'
    ]
  },
  {
    id: 'respirator-mask',
    title: 'Respirator Mask',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41u0SylnevL._AC_UF894,1000_QL80_.jpg',
    desc: 'Respirator Mask is a reusable half-face piece for protection against gases and vapors.\n' +
          'Soft silicone face seal conforms to face for excellent fit and comfort.\n' +
          'Bayonet cartridge connection for quick, secure filter changes.\n' +
          'Low-profile design improves downward and peripheral vision.\n' +
          'Adjustable 4-point harness with cradle suspension.\n' +
          'Compatible with wide range of cartridges and filters.\n' +
          'Ideal for painting, spraying, chemical handling, and welding fumes.\n' +
          'Certified to EN 140 and NIOSH standards.\n' +
          'Durable mask for repeated use in hazardous environments.\n' +
          'Professional respiratory protection for long-term exposure.',
    rating: 4.8,
    reviews: 312,
    sold: '520+',
    tags: [
      'respirator mask', 'half face respirator', 'silicone respirator', 'bayonet cartridge mask', 'painting respirator',
      'en 140 mask', 'niosh half face', 'chemical handling respirator', 'welding fume mask', 'low profile respirator',
      'adjustable harness mask', 'reusable respiratory', 'professional respirator', 'long term exposure ppe', 'vision friendly mask'
    ]
  },
  {
    id: 'safety-belt',
    title: 'Safety Belt',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.degemmill.com/wp-content/uploads/2019/09/850AB-600x494.jpg',
    desc: 'Safety Belt is a full-body harness designed for fall arrest and work positioning.\n' +
          'Quick-connect buckles and adjustable straps for fast, secure fit.\n' +
          'Dorsal D-ring for fall arrest and side D-rings for positioning.\n' +
          'Padded waist belt and shoulder straps for comfort during long use.\n' +
          'Trauma straps for suspension relief after a fall.\n' +
          'High-strength polyester webbing rated for 140 kg users.\n' +
          'Ideal for construction, scaffolding, tower climbing, and rescue.\n' +
          'Certified to EN 361 and ANSI Z359 standards.\n' +
          'Reliable, comfortable harness for safe work at height.\n' +
          'Essential PPE for preventing falls and serious injury.',
    rating: 4.9,
    reviews: 145,
    sold: '240+',
    tags: [
      'safety belt', 'full body fall harness', 'quick connect safety', 'dorsal side d ring', 'trauma relief harness',
      'construction safety belt', 'scaffolding harness', 'en 361 safety belt', 'ansi z359 harness', 'tower climbing belt',
      'padded safety harness', 'work positioning belt', 'fall arrest harness', 'prevent fall injury', 'essential height ppe'
    ]
  },
  {
    id: 'safety-glasses',
    title: 'Safety Glasses',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.coopersafety.com/pub/media/catalog/product/cache/0f2e77eff41cbf2d08923f74a2a4bc21/2/2/2220.jpg',
    desc: 'Safety Glasses offer reliable eye protection against impact and dust.\n' +
          'Impact-resistant polycarbonate lenses meet ANSI Z87.1 standards.\n' +
          'Wrap-around frame with soft temple tips for all-day comfort.\n' +
          'Anti-scratch and anti-fog coating for clear vision.\n' +
          'UV400 protection blocks harmful rays during outdoor work.\n' +
          'Lightweight design reduces fatigue on long shifts.\n' +
          'Ideal for construction, workshops, labs, and general maintenance.\n' +
          'Available in clear, tinted, or mirrored lens options.\n' +
          'Affordable, durable eyewear for everyday hazards.\n' +
          'Trusted basic eye PPE for worker safety.',
    rating: 4.7,
    reviews: 567,
    sold: '900+',
    tags: [
      'safety glasses', 'impact resistant eyewear', 'ansi z87.1 glasses', 'anti fog safety glasses', 'uv400 eye protection',
      'construction safety glasses', 'workshop eye wear', 'lightweight safety glasses', 'wrap around frame', 'scratch resistant lens',
      'tinted safety glasses', 'mirrored lens option', 'general maintenance ppe', 'affordable eye safety', 'durable worker glasses'
    ]
  },
  {
    id: 'safety-goggles',
    title: 'Safety Goggles',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-wtulnkmvw7/images/stencil/1280x1280/products/20029/77771/Safety-Glasses-Vented-Impact-Resistant-Polycarbonate-Lens-224890-224890_41141__59550.1716670480.jpg?c=1',
    desc: 'Safety Goggles protect eyes from splashes, dust, and flying debris.\n' +
          'Impact-resistant polycarbonate lens meets ANSI Z87.1 standards.\n' +
          'Indirect ventilation reduces fogging while blocking liquid entry.\n' +
          'Soft PVC frame with adjustable elastic strap for secure fit.\n' +
          'Anti-fog coating and UV protection for clear, safe vision.\n' +
          'Lightweight and comfortable for extended wear.\n' +
          'Ideal for laboratories, chemical handling, grinding, and woodworking.\n' +
          'Certified to EN166 for impact and splash protection.\n' +
          'Durable goggles for high-risk eye hazard environments.\n' +
          'Essential PPE for preventing eye injuries.',
    rating: 4.8,
    reviews: 389,
    sold: '650+',
    tags: [
      'safety goggles', 'impact resistant goggles', 'ansi z87.1 goggles', 'indirect vent goggles', 'anti fog goggles',
      'laboratory eye protection', 'chemical splash goggles', 'en166 safety goggles', 'elastic strap goggles', 'lightweight goggles',
      'uv protection goggles', 'grinding eye wear', 'woodworking goggles', 'high risk eye ppe', 'durable splash protection'
    ]
  },
  {
    id: 'safety-helmet',
    title: 'Safety Helmet',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.industrialproducts.com/media/catalog/product/cache/af52a902c8a0ffa59cb7b5fee38d6b16/i/r/ironwear-3970-Y_1.jpg',
    desc: 'Safety Helmet provides essential head protection for industrial and construction sites.\n' +
          'High-impact ABS or HDPE shell resists penetration and shock.\n' +
          '6-point suspension system with ratchet or slip adjustment.\n' +
          'Short peak improves upward visibility and reduces snag risk.\n' +
          'Accessory slots for earmuffs, visors, and headlamps.\n' +
          'Chin strap included for secure wear in windy conditions.\n' +
          'High-visibility options with reflective strips available.\n' +
          'Ideal for construction, mining, manufacturing, and utilities.\n' +
          'Certified to EN 397 and ANSI Z89.1 standards.\n' +
          'Reliable, comfortable helmet for daily worker safety.',
    rating: 4.9,
    reviews: 456,
    sold: '800+',
    tags: [
      'safety helmet', 'industrial hard hat', 'en 397 helmet', 'ansi z89.1 hard hat', '6 point suspension helmet',
      'ratchet adjustment helmet', 'construction safety helmet', 'mining head protection', 'accessory slot helmet', 'reflective helmet',
      'short peak hard hat', 'chin strap helmet', 'high impact helmet', 'daily worker ppe', 'reliable head safety'
    ]
  },
  {
    id: 'safety-shoes',
    title: 'Safety Shoes',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.shoesforcrews.com/shared-imgs/productimages/US_en/79333/0000-1024.webp',
    desc: 'Safety Shoes protect feet from impacts, punctures, and slips in hazardous environments.\n' +
          'Steel or composite toe cap meets 200 joule impact standard.\n' +
          'Anti-slip rubber outsole provides grip on wet/oily floors.\n' +
          'Puncture-resistant midsole guards against sharp objects.\n' +
          'Breathable lining and cushioned insole for all-day comfort.\n' +
          'Water-resistant leather or synthetic upper for durability.\n' +
          'Ideal for construction, warehouses, factories, and logistics.\n' +
          'Certified to EN ISO 20345 S1P/S3 standards.\n' +
          'Reliable footwear for preventing foot injuries on the job.\n' +
          'Essential PPE for worker foot safety.',
    rating: 4.7,
    reviews: 678,
    sold: '1K+',
    tags: [
      'safety shoes', 'steel toe footwear', 'composite toe shoes', 'anti slip safety shoes', 'puncture resistant footwear',
      'en iso 20345 shoes', 'construction safety shoes', 'warehouse foot protection', 'breathable safety footwear', 'cushioned insole shoes',
      'water resistant safety', 'factory safety shoes', 'logistics footwear', 'prevent foot injury', 'essential ppe shoes'
    ]
  },
  {
    id: 'welding-gloves',
    title: 'Welding Gloves',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://store.cyberweld.com/cdn/shop/products/gloves-lincoln-heavy-duty-welding-gloves-k4082-1205648550.jpg?v=1763517844',
    desc: 'Welding Gloves protect hands from sparks, slag, and high heat during welding.\n' +
          'Heavy-duty cowhide leather with double palm reinforcement.\n' +
          'Kevlar stitching withstands molten metal and high temperatures.\n' +
          'Gauntlet cuff shields forearm from radiant heat and spatter.\n' +
          'Wing thumb design improves grip and reduces hand fatigue.\n' +
          'Soft cotton lining wicks moisture for comfort.\n' +
          'Ideal for MIG, TIG, arc welding, and plasma cutting.\n' +
          'Certified to EN 12477 Type A and EN 388/407 standards.\n' +
          'Durable, professional gloves for safe welding operations.\n' +
          'Essential PPE for welders handling hot materials.',
    rating: 4.8,
    reviews: 234,
    sold: '380+',
    tags: [
      'welding gloves', 'cowhide welding gloves', 'en 12477 gloves', 'kevlar stitched welding', 'gauntlet cuff gloves',
      'mig tig welding gloves', 'arc welding ppe', 'plasma cutting gloves', 'wing thumb gloves', 'cotton lined welding',
      'molten metal protection', 'spark resistant gloves', 'professional welding ppe', 'hot work gloves', 'durable welding gloves'
    ]
  },
  {
    id: 'welding-goggles',
    title: 'Welding Goggles',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/51QiUJryEPL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Welding Goggles protect eyes from UV/IR rays, sparks, and flying debris.\n' +
          'Shade 5–11 filter lenses block harmful welding arcs.\n' +
          'Impact-resistant polycarbonate or glass lens options.\n' +
          'Soft PVC frame with adjustable elastic strap for secure fit.\n' +
          'Indirect ventilation reduces fogging during use.\n' +
          'Flip-up lens design allows quick inspection without removing goggles.\n' +
          'Ideal for MIG, TIG, arc welding, cutting, and grinding.\n' +
          'Certified to EN 169 and ANSI Z87.1 standards for welding protection.\n' +
          'Durable goggles for safe welding and hot work.\n' +
          'Essential eye PPE for welders and fabricators.',
    rating: 4.7,
    reviews: 189,
    sold: '320+',
    tags: [
      'welding goggles', 'uv ir protection goggles', 'shade 5 welding goggles', 'en 169 goggles', 'ansi z87.1 welding',
      'mig tig goggles', 'arc welding eye protection', 'flip up welding goggles', 'indirect vent goggles', 'elastic strap goggles',
      'impact resistant welding', 'hot work eye ppe', 'durable welding goggles', 'fabricator eye safety', 'essential welding ppe'
    ]
  },
  {
    id: 'welding-helmet',
    title: 'Welding Helmet',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-u3hf7jh4/images/stencil/1280x1280/products/786637/1170189/supremeview-auto-darkening-helmet__46272.1704477425.jpg?c=2',
    desc: 'Welding Helmet features auto-darkening lens for hands-free protection.\n' +
          'Shade 4–13 adjustable filter with fast 1/25,000 sec switching speed.\n' +
          'True color technology for natural view of weld puddle.\n' +
          'Grind mode allows clear view without darkening.\n' +
          'Solar-powered with replaceable battery for long life.\n' +
          'Adjustable headgear with ratchet for secure, comfortable fit.\n' +
          'Ideal for MIG, TIG, arc welding, plasma cutting, and grinding.\n' +
          'Certified to EN 379 and ANSI Z87.1 standards.\n' +
          'Durable helmet for safe, efficient welding operations.\n' +
          'Professional-grade auto-darkening helmet for welders.',
    rating: 4.9,
    reviews: 278,
    sold: '450+',
    tags: [
      'welding helmet', 'auto darkening helmet', 'shade 4-13 welding', 'en 379 helmet', 'ansi z87.1 welding helmet',
      'true color lens', 'grind mode helmet', 'solar powered welding', 'ratchet headgear helmet', 'mig tig helmet',
      'plasma cutting helmet', 'professional welding helmet', 'fast switching helmet', 'durable welding ppe', 'efficient welding protection'
    ]
  },
  {
    id: 'honeywell-xv100-safety-glasses-affordable-uv-protection-clear',
    title: 'Honeywell XV100 Safety Glasses – Affordable UV Protection (Clear)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://assets.fishersci.com/TFS-Assets/CCG/EU/Honeywell-Safety-Products/product-images/IBSNo12677443.jpg-650.jpg',
    desc: 'Honeywell XV100 Safety Glasses provide affordable, reliable eye protection.\n' +
          'Clear polycarbonate lens blocks 99.9% UV rays with impact resistance.\n' +
          'Wrap-around design offers wide field of view and side protection.\n' +
          'Soft nose pads and flexible temples for all-day comfort.\n' +
          'Anti-scratch coating extends lens life in rough environments.\n' +
          'Lightweight frame reduces fatigue during long shifts.\n' +
          'Ideal for construction, workshops, labs, and general maintenance.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Cost-effective, high-quality eyewear from trusted Honeywell.\n' +
          'Everyday safety glasses for worker eye protection.',
    rating: 4.6,
    reviews: 150,
    sold: '800+',
    tags: [
      'honeywell xv100 glasses', 'affordable safety glasses', 'clear lens uv protection', 'ansi z87.1 honeywell', 'en166 xv100',
      'wrap around glasses', 'anti scratch lens', 'construction eye protection', 'workshop safety glasses', 'lightweight honeywell',
      'flexible temples glasses', 'all day comfort eyewear', 'general maintenance ppe', 'trusted honeywell glasses', 'everyday eye safety'
    ]
  },
  {
    id: 'tsavo-safety-glasses-rugged-protection-with-all-day-comfort-black',
    title: 'Tsavo Safety Glasses – Rugged Protection with All-Day Comfort (Black)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.vimeocdn.com/video/1699498068-643c7cfb9a7f92beff9523630802e655f9ce59199cba20b507237b77268675a3-d.jpg?mw=1100&mh=619&q=70',
    desc: 'Tsavo Safety Glasses offer rugged protection with all-day comfort in black frame.\n' +
          'Removable foam padding seals against dust and provides cushioning.\n' +
          'Impact-resistant polycarbonate lens meets ANSI Z87.1 standards.\n' +
          'UV protection and anti-scratch coating for long lens life.\n' +
          'Wrap-around design with wide temples for side impact protection.\n' +
          'Adjustable nose pads and flexible arms for personalized fit.\n' +
          'Ideal for construction, demolition, woodworking, and dusty environments.\n' +
          'Certified to EN166 for reliable eye protection.\n' +
          'Durable, comfortable glasses for tough job sites.\n' +
          'High-performance eyewear for demanding work conditions.',
    rating: 4.7,
    reviews: 120,
    sold: '500+',
    tags: [
      'tsavo safety glasses', 'rugged eye protection', 'foam padding glasses', 'ansi z87.1 tsavo', 'en166 safety glasses',
      'dust sealed eyewear', 'wrap around tsavo', 'construction eye protection', 'demolition safety glasses', 'anti scratch lens',
      'adjustable nose pads', 'flexible temple glasses', 'tough job eyewear', 'high performance glasses', 'demanding work ppe'
    ]
  },
  {
    id: 'tsavo-safety-glasses-rugged-protection-with-all-day-comfort-white',
    title: 'Tsavo Safety Glasses – Rugged Protection with All-Day Comfort (White)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.horme.com.sg/images/product/20240328143708PPC4DP18735364_220x160.jpg',
    desc: 'Tsavo Safety Glasses in white provide rugged protection with superior comfort.\n' +
          'Removable foam gasket blocks dust and enhances fit.\n' +
          'Impact-resistant polycarbonate lens with anti-fog and UV protection.\n' +
          'Wrap-around frame with wide side shields for full coverage.\n' +
          'Adjustable nose pads and soft temple tips for all-day wear.\n' +
          'Anti-scratch coating extends lens durability in harsh conditions.\n' +
          'Ideal for construction, sanding, grinding, and dusty work sites.\n' +
          'Certified to EN166 and ANSI Z87.1 standards.\n' +
          'Stylish, high-performance eyewear for tough environments.\n' +
          'Comfortable protection that workers want to wear.',
    rating: 4.7,
    reviews: 110,
    sold: '450+',
    tags: [
      'tsavo white glasses', 'rugged white eyewear', 'foam gasket glasses', 'anti fog tsavo', 'en166 white glasses',
      'ansi z87.1 safety', 'dust protection eyewear', 'construction white glasses', 'sanding eye protection', 'wrap around safety',
      'adjustable tsavo glasses', 'soft temple eyewear', 'tough environment ppe', 'high performance white', 'comfortable safety glasses'
    ]
  },
  {
    id: 'honeywell-a700-safety-glasses-durable-uv-protection-clear',
    title: 'Honeywell A700 Safety Glasses – Durable UV Protection (Clear)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://honeywell.scene7.com/is/image/Honeywell65/sps-his-1015360-hon-clear-a700',
    desc: 'Honeywell A700 Safety Glasses deliver durable UV and impact protection.\n' +
          'Clear hard-coated polycarbonate lens blocks 99.9% UV rays.\n' +
          'Wrap-around frame with integrated side shields for full coverage.\n' +
          'Soft nose pads and flexible temples for all-day comfort.\n' +
          'Anti-scratch coating ensures long lens life in rough conditions.\n' +
          'Lightweight design minimizes fatigue during extended wear.\n' +
          'Ideal for construction, manufacturing, maintenance, and general work.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Reliable, high-quality eyewear from Honeywell.\n' +
          'Essential eye protection for everyday job hazards.',
    rating: 4.8,
    reviews: 200,
    sold: '1000+',
    tags: [
      'honeywell a700 glasses', 'durable safety glasses', 'clear lens a700', 'ansi z87.1 honeywell', 'en166 a700',
      'wrap around frame', 'anti scratch coating', 'construction eye protection', 'manufacturing safety glasses', 'lightweight honeywell',
      'flexible temples a700', 'all day comfort eyewear', 'general work ppe', 'reliable honeywell glasses', 'essential eye safety'
    ]
  },
  {
    id: 'honeywell-a700-safety-glasses-durable-uv-protection-black',
    title: 'Honeywell A700 Safety Glasses – Durable UV Protection (Black)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/HOEAAOSwShhiTdrO/s-l400.jpg',
    desc: 'Honeywell A700 Safety Glasses in black frame offer durable UV protection.\n' +
          'Tinted or clear lens options with 99.9% UV blocking.\n' +
          'Wrap-around design with side shields for maximum coverage.\n' +
          'Soft nose pads and flexible temples for comfortable fit.\n' +
          'Hard-coated lens resists scratches in tough environments.\n' +
          'Lightweight construction reduces fatigue on long shifts.\n' +
          'Ideal for construction, workshops, outdoor work, and general maintenance.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Stylish, high-performance eyewear from Honeywell.\n' +
          'Trusted eye protection for demanding job sites.',
    rating: 4.7,
    reviews: 140,
    sold: '600+',
    tags: [
      'honeywell a700 black', 'durable black frame glasses', 'tinted lens a700', 'ansi z87.1 black', 'en166 honeywell',
      'wrap around safety', 'anti scratch black glasses', 'outdoor work eyewear', 'workshop eye protection', 'lightweight a700',
      'flexible temples black', 'comfortable safety glasses', 'construction ppe', 'stylish honeywell eyewear', 'demanding job glasses'
    ]
  },
  {
    id: 'honeywell-a700-safety-glasses-durable-uv-protection-gray',
    title: 'Honeywell A700 Safety Glasses – Durable UV Protection (Gray)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://s7d1.scene7.com/is/image/Honeywell65/sps-his-ssw-a701-rws-51034-npid63598',
    desc: 'Honeywell A700 Safety Glasses in gray provide durable UV and glare protection.\n' +
          'Gray lens reduces brightness while blocking 99.9% UV rays.\n' +
          'Wrap-around frame with integrated side shields for full coverage.\n' +
          'Soft nose pads and flexible temples for all-day comfort.\n' +
          'Scratch-resistant coating extends lens life in harsh conditions.\n' +
          'Lightweight design minimizes fatigue during extended wear.\n' +
          'Ideal for outdoor construction, driving, and bright environments.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Reliable, stylish eyewear from trusted Honeywell.\n' +
          'Essential protection for glare and impact hazards.',
    rating: 4.7,
    reviews: 130,
    sold: '550+',
    tags: [
      'honeywell a700 gray', 'gray lens safety glasses', 'durable uv gray', 'ansi z87.1 gray', 'en166 honeywell gray',
      'wrap around gray frame', 'anti scratch lens', 'outdoor construction glasses', 'glare reduction eyewear', 'lightweight a700 gray',
      'flexible temples safety', 'all day comfort glasses', 'bright environment ppe', 'stylish honeywell gray', 'impact glare protection'
    ]
  },
  {
    id: 'honeywell-a700-safety-glasses-durable-uv-protection-yellow',
    title: 'Honeywell A700 Safety Glasses – Durable UV Protection (Yellow)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/ohQAAOSwv5phaZAF/s-l1200.jpg',
    desc: 'Honeywell A700 Safety Glasses in yellow enhance visibility in low-light conditions.\n' +
          'Amber/yellow lens improves contrast and reduces blue light.\n' +
          '99.9% UV protection with impact-resistant polycarbonate.\n' +
          'Wrap-around frame with side shields for complete coverage.\n' +
          'Soft nose pads and flexible temples for comfortable fit.\n' +
          'Scratch-resistant coating for long lens durability.\n' +
          'Ideal for indoor/outdoor work, overcast days, and dusk/night tasks.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'High-performance eyewear for enhanced vision safety.\n' +
          'Trusted Honeywell quality for demanding environments.',
    rating: 4.6,
    reviews: 100,
    sold: '400+',
    tags: [
      'honeywell a700 yellow', 'amber lens safety glasses', 'low light enhancement', 'ansi z87.1 yellow', 'en166 honeywell',
      'wrap around yellow frame', 'anti scratch amber', 'indoor outdoor glasses', 'contrast improvement eyewear', 'lightweight a700 yellow',
      'flexible temples safety', 'dusk night protection', 'high performance glasses', 'vision safety ppe', 'honeywell quality eyewear'
    ]
  },
  {
    id: 'sporty-safety-spectacle-honeywell-gray',
    title: 'Sporty Safety Spectacle Honeywell (Gray)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-e163lt99/images/stencil/1280x1280/products/13762/65310/61XsoeixDxL._SL1500___24651.1697216226.jpg?c=2',
    desc: 'Sporty Safety Spectacle Honeywell in gray combines style with protection.\n' +
          'Gray lens reduces glare while blocking 99.9% UV rays.\n' +
          'Impact-resistant polycarbonate with wrap-around coverage.\n' +
          'Soft nose pads and flexible temples for sporty, comfortable fit.\n' +
          'Anti-scratch coating for durability in active environments.\n' +
          'Lightweight frame ideal for all-day wear without fatigue.\n' +
          'Perfect for construction, outdoor work, driving, and sports.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Stylish, high-performance eyewear from Honeywell.\n' +
          'Eye protection that looks good and works hard.',
    rating: 4.8,
    reviews: 90,
    sold: '350+',
    tags: [
      'sporty honeywell glasses', 'gray lens safety spectacle', 'glare reduction glasses', 'ansi z87.1 sporty', 'en166 honeywell',
      'wrap around sporty frame', 'anti scratch sporty', 'outdoor work eyewear', 'stylish safety glasses', 'lightweight sporty',
      'flexible temples honeywell', 'all day comfort spectacle', 'construction sporty ppe', 'active environment glasses', 'high performance eyewear'
    ]
  },
  {
    id: 'honeywell-xv100-safety-glasses-affordable-uv-protection-gray',
    title: 'Honeywell XV100 Safety Glasses – Affordable UV Protection (Gray)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://s7d1.scene7.com/is/image/Honeywell65/sps-his-north-xv101-xv108-npid44806',
    desc: 'Honeywell XV100 Safety Glasses in gray offer affordable UV and glare protection.\n' +
          'Gray lens reduces brightness while blocking 99.9% UV rays.\n' +
          'Impact-resistant wrap-around design with side shields.\n' +
          'Soft nose pads and flexible temples for comfortable fit.\n' +
          'Anti-scratch coating for long-lasting lens clarity.\n' +
          'Lightweight frame minimizes fatigue during long shifts.\n' +
          'Ideal for construction, outdoor tasks, driving, and workshops.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Cost-effective, reliable eyewear from Honeywell.\n' +
          'Everyday eye protection for work and safety.',
    rating: 4.6,
    reviews: 110,
    sold: '600+',
    tags: [
      'honeywell xv100 gray', 'affordable gray glasses', 'glare uv protection', 'ansi z87.1 xv100', 'en166 affordable glasses',
      'wrap around xv100', 'anti scratch gray lens', 'outdoor construction eyewear', 'lightweight honeywell', 'flexible temples xv100',
      'all day comfort glasses', 'workshop safety glasses', 'cost effective ppe', 'reliable honeywell eyewear', 'everyday uv protection'
    ]
  },
  {
    id: 'safety-spectacles-grey',
    title: 'Safety Spectacles Grey',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://industrialsafetygear.com/assets/images/S2520S_34F.jpg',
    desc: 'Safety Spectacles Grey provide basic impact and glare protection.\n' +
          'Gray lens reduces brightness and blocks UV rays.\n' +
          'Impact-resistant polycarbonate meets ANSI Z87.1 standards.\n' +
          'Wrap-around frame with integrated side shields.\n' +
          'Soft nose pads and lightweight temples for comfort.\n' +
          'Anti-scratch coating for extended lens life.\n' +
          'Ideal for general work, driving, and light outdoor tasks.\n' +
          'Certified to EN166 for reliable eye protection.\n' +
          'Affordable, no-frills safety eyewear for daily use.\n' +
          'Simple, effective glasses for worker eye safety.',
    rating: 4.4,
    reviews: 200,
    sold: '1500+',
    tags: [
      'grey safety spectacles', 'basic impact glasses', 'ansi z87.1 grey', 'en166 safety spectacles', 'glare reduction eyewear',
      'wrap around grey frame', 'anti scratch lens', 'general work glasses', 'driving safety eyewear', 'lightweight spectacles',
      'soft nose pads', 'all day basic ppe', 'affordable eye protection', 'daily use glasses', 'simple worker eyewear'
    ]
  },
  {
    id: 'safety-spectacles-clear',
    title: 'Safety Spectacles Clear',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://industrialsafetygear.com/assets/images/S2510S_34F.jpg',
    desc: 'Safety Spectacles Clear offer reliable, everyday eye protection at low cost.\n' +
          'Crystal-clear polycarbonate lens provides 99.9% UVA/UVB blocking.\n' +
          'Impact-resistant design meets ANSI Z87.1 high-impact standard.\n' +
          'Lightweight wrap-around frame with integrated side shields.\n' +
          'Soft rubber nose pads and flexible temples reduce pressure points.\n' +
          'Anti-scratch hard coating increases lens longevity in rough use.\n' +
          'Ideal for general workshop, assembly, maintenance, warehouse and light outdoor tasks.\n' +
          'Certified to EN166 F and ANSI Z87.1+ for basic eye safety compliance.\n' +
          'Very affordable solution when large quantities are needed for teams.\n' +
          'Simple, no-frills safety eyewear that gets the job done.',
    rating: 4.4,
    reviews: 220,
    sold: '1800+',
    tags: [
      'clear safety spectacles', 'basic eye protection', 'ansi z87.1 clear', 'en166 safety glasses', 'lightweight wrap around',
      'anti scratch clear lens', 'workshop safety eyewear', 'assembly line glasses', 'maintenance eye ppe', 'warehouse safety spectacles',
      'soft nose pads glasses', 'flexible temple eyewear', 'affordable bulk glasses', 'general purpose eye protection', 'no frills safety glasses'
    ]
  },
  {
    id: 'multi-over-spectacle-hs-2211',
    title: 'MULTI OVER SPECTACLE HS-2211',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.msesupplies.com/cdn/shop/files/pyramex-over-the-spectacle-ots-safety-glasses-pk-of-12-black-clear-no-anti-fog-pyramex-laboratory-supplies-22384461348922_1024x1024.jpg?v=1752499650',
    desc: 'Multi Over Spectacle HS-2211 is designed to be worn comfortably over prescription glasses.\n' +
          'Extra-large frame fits most standard eyeglasses without pressure.\n' +
          'Clear impact-resistant polycarbonate lens meets ANSI Z87.1 standard.\n' +
          'Soft rubber temples and nose pads prevent slipping and discomfort.\n' +
          'Ventilated design helps reduce fogging when worn over glasses.\n' +
          'Lightweight construction suitable for full-shift wear.\n' +
          'Ideal for visitors, managers, or workers who already wear corrective lenses.\n' +
          'Certified to EN166 and ANSI Z87.1 for reliable over-glasses protection.\n' +
          'Practical solution when prescription safety glasses are not feasible.\n' +
          'Affordable OTG (over-the-glasses) eye protection.',
    rating: 4.5,
    reviews: 80,
    sold: '400+',
    tags: [
      'over spectacle safety', 'ots safety glasses', 'wear over glasses', 'prescription compatible eyewear', 'ansi z87.1 otg',
      'en166 over glasses', 'ventilated otg frame', 'large frame safety glasses', 'visitor eye protection', 'manager safety spectacles',
      'soft temple otg', 'lightweight over glasses', 'anti fog otg design', 'practical eye ppe', 'affordable otg solution'
    ]
  },
  {
    id: 'flex-hs-2272',
    title: 'FLEX HS-2272',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.uline.com/is/image/uline/S-20752?$ZoomHD$',
    desc: 'Flex HS-2272 safety goggles provide excellent splash and dust protection with flexible comfort.\n' +
          'Soft flexible PVC frame conforms to face shape for better seal.\n' +
          'Clear polycarbonate lens offers impact resistance and wide vision.\n' +
          'Indirect ventilation system reduces internal fogging.\n' +
          'Adjustable elastic strap ensures secure fit during movement.\n' +
          'Anti-fog coating keeps lens clear even in humid conditions.\n' +
          'Ideal for chemical handling, grinding, sanding, and wet environments.\n' +
          'Certified to ANSI Z87.1+ and EN166 for impact and splash protection.\n' +
          'Lightweight and comfortable for extended wear.\n' +
          'Reliable, flexible goggles for demanding eye hazard tasks.',
    rating: 4.5,
    reviews: 70,
    sold: '300+',
    tags: [
      'flex safety goggles', 'flexible pvc goggles', 'splash protection goggles', 'ansi z87.1 goggles', 'en166 flex goggles',
      'chemical handling eyewear', 'grinding dust goggles', 'anti fog flex goggles', 'adjustable strap goggles', 'indirect vent goggles',
      'wide vision goggles', 'humid environment ppe', 'lightweight safety goggles', 'extended wear goggles', 'demanding eye protection'
    ]
  },
  {
    id: 'ultra-hs-2271',
    title: 'ULTRA HS-2271',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.msesupplies.com/cdn/shop/files/S510SJ_1024x1024.jpg?v=1730118889',
    desc: 'Ultra HS-2271 over-spectacle safety glasses fit comfortably over most prescription eyewear.\n' +
          'Extra-large clear polycarbonate lens provides full impact protection.\n' +
          'Soft rubber frame seals against dust and light splashes.\n' +
          'Anti-fog and anti-scratch coatings keep vision clear.\n' +
          'Adjustable temples and nose bridge for personalized fit.\n' +
          'Lightweight design suitable for full-day wear over glasses.\n' +
          'Ideal for visitors, supervisors, labs, and workers with corrective lenses.\n' +
          'Certified to ANSI Z87.1 and EN166 for reliable OTG protection.\n' +
          'Practical solution when dedicated prescription safety glasses are not practical.\n' +
          'Comfortable, durable over-the-glasses eye protection.',
    rating: 4.4,
    reviews: 60,
    sold: '250+',
    tags: [
      'ultra over spectacle', 'otg safety glasses', 'prescription compatible ultra', 'ansi z87.1 otg', 'en166 over glasses',
      'large lens otg', 'anti fog over spectacles', 'visitor eye protection', 'lab otg glasses', 'supervisor safety eyewear',
      'adjustable otg temples', 'lightweight over glasses', 'full day otg wear', 'practical prescription solution', 'durable otg ppe'
    ]
  },
  {
    id: 'ultima-hs-2253',
    title: 'ULTIMA HS-2253',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.truevalue.com/wp-content/uploads/2025/12/image-35371.jpeg',
    desc: 'Ultima HS-2253 over-spectacle safety glasses deliver excellent coverage over prescription lenses.\n' +
          'Clear impact-resistant polycarbonate lens with anti-scratch coating.\n' +
          'Soft flexible frame conforms comfortably around most eyeglasses.\n' +
          'Indirect vents reduce fogging while blocking dust entry.\n' +
          'Adjustable temples and nose bridge for secure, personalized fit.\n' +
          'Lightweight design suitable for long shifts without pressure.\n' +
          'Ideal for maintenance, inspection, labs, and visitor safety programs.\n' +
          'Certified to ANSI Z87.1 and EN166 for OTG eye protection.\n' +
          'Comfort-focused over-glasses solution for workers with vision correction.\n' +
          'Reliable, affordable OTG eyewear for everyday use.',
    rating: 4.4,
    reviews: 65,
    sold: '280+',
    tags: [
      'ultima over spectacle', 'otg safety glasses ultima', 'prescription over glasses', 'ansi z87.1 ultima', 'en166 otg glasses',
      'anti scratch otg lens', 'indirect vent over spectacles', 'maintenance otg eyewear', 'inspection safety glasses', 'lab visitor otg',
      'adjustable temple otg', 'lightweight over glasses', 'long shift otg', 'comfort otg solution', 'affordable prescription eyewear'
    ]
  },
  {
    id: 'universal-over-spectacle-hs-2252',
    title: 'UNIVERSAL OVER SPECTACLE HS-2252',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.msesupplies.com/cdn/shop/files/pyramex-over-the-spectacle-ots-safety-glasses-pk-of-12-black-clear-no-anti-fog-pyramex-laboratory-supplies-22384461348922_1024x1024.jpg?v=1752499650',
    desc: 'Universal Over Spectacle HS-2252 fits comfortably over nearly all prescription eyewear.\n' +
          'Extra-large clear lens provides wide field of view and impact protection.\n' +
          'Soft rubber frame creates effective dust and splash seal.\n' +
          'Anti-fog and anti-scratch coatings maintain clear vision.\n' +
          'Adjustable temples and nose bridge for secure universal fit.\n' +
          'Very lightweight construction ideal for full-shift OTG wear.\n' +
          'Perfect for visitors, temporary workers, labs, and maintenance teams.\n' +
          'Certified to ANSI Z87.1 and EN166 for reliable over-glasses protection.\n' +
          'Versatile OTG solution when dedicated prescription safety glasses are impractical.\n' +
          'Practical, comfortable eye protection for shared or visitor use.',
    rating: 4.5,
    reviews: 75,
    sold: '350+',
    tags: [
      'universal over spectacle', 'ots safety glasses universal', 'fits most prescription', 'ansi z87.1 universal otg', 'en166 over glasses',
      'large lens otg', 'anti fog universal', 'visitor otg eyewear', 'temporary worker glasses', 'lab maintenance otg',
      'adjustable universal temples', 'lightweight otg design', 'full shift over glasses', 'versatile otg solution', 'shared eye protection'
    ]
  },
  {
    id: 'hardy-hs-2251',
    title: 'HARDY HS-2251',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://uploads.prod01.oregon.platform-os.com/instances/1774/assets/includes/images/products/bkdst-1040n/bkdst-1040n.jpg?updated=1606490406',
    desc: 'Hardy HS-2251 safety spectacles are built tough for rugged daily use.\n' +
          'Impact-resistant clear polycarbonate lens meets ANSI Z87.1 high-impact.\n' +
          'Durable wrap-around frame with integrated side protection.\n' +
          'Soft rubber nose pads and flexible temples reduce pressure.\n' +
          'Anti-scratch hard coating extends lens life in rough conditions.\n' +
          'Lightweight design suitable for full-day wear without fatigue.\n' +
          'Ideal for construction, demolition, heavy maintenance, and outdoor work.\n' +
          'Certified to EN166 F for reliable basic eye protection.\n' +
          'No-frills, hard-wearing safety glasses for tough job sites.\n' +
          'Dependable, economical eyewear that lasts.',
    rating: 4.3,
    reviews: 150,
    sold: '1000+',
    tags: [
      'hardy safety spectacles', 'rugged daily glasses', 'ansi z87.1 hardy', 'en166 tough eyewear', 'wrap around hardy frame',
      'anti scratch hardy lens', 'construction rugged glasses', 'demolition eye protection', 'heavy maintenance ppe', 'outdoor hardy glasses',
      'soft nose pads hardy', 'flexible temple eyewear', 'full day rugged wear', 'no frills safety glasses', 'economical tough eyewear'
    ]
  },
  {
    id: 'managers-hs-2215',
    title: 'MANAGERS HS-2215',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://assets.fishersci.com/TFS-Assets/CCG/product-images/CH0619A_Image_01.jpg-650.jpg',
    desc: 'Managers HS-2215 safety spectacles offer clean, professional look with protection.\n' +
          'Clear impact-resistant polycarbonate lens meets ANSI Z87.1 standard.\n' +
          'Slim, lightweight metal frame with integrated side shields.\n' +
          'Soft nose pads and flexible temples for all-day comfort.\n' +
          'Anti-scratch coating protects lens during light daily use.\n' +
          'UV protection included for occasional outdoor site visits.\n' +
          'Ideal for supervisors, managers, office staff, and site visitors.\n' +
          'Certified to EN166 for basic eye safety compliance.\n' +
          'Stylish, low-profile safety glasses that don’t look like PPE.\n' +
          'Professional appearance with real protection.',
    rating: 4.2,
    reviews: 180,
    sold: '2000+',
    tags: [
      'managers safety spectacles', 'professional look glasses', 'slim metal frame', 'ansi z87.1 managers', 'en166 office eyewear',
      'lightweight supervisor glasses', 'anti scratch managers lens', 'site visitor eye protection', 'stylish safety glasses', 'low profile ppe',
      'soft nose pads managers', 'flexible temple eyewear', 'all day office wear', 'clean appearance safety', 'professional eye protection'
    ]
  },
  {
    id: 'bestfit-hs-2210',
    title: 'BESTFIT HS-2210',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://industrialsafetygear.com/assets/images/S2510S_34F.jpg',
    desc: 'Bestfit HS-2210 safety spectacles combine ergonomic design with solid protection.\n' +
          'Clear impact-resistant polycarbonate lens meets ANSI Z87.1 standard.\n' +
          'Ergonomic wrap-around frame reduces pressure on temples and nose.\n' +
          'Soft rubber nose pads and flexible temples for personalized comfort.\n' +
          'Anti-scratch hard coating for extended lens durability.\n' +
          'UV protection included for outdoor or mixed indoor/outdoor work.\n' +
          'Ideal for assembly, maintenance, quality control, and general tasks.\n' +
          'Certified to EN166 for reliable basic eye protection.\n' +
          'Comfort-first safety eyewear that workers prefer to wear.\n' +
          'Balanced design of protection, comfort, and value.',
    rating: 4.5,
    reviews: 85,
    sold: '400+',
    tags: [
      'bestfit safety spectacles', 'ergonomic safety glasses', 'comfort wrap around', 'ansi z87.1 bestfit', 'en166 ergonomic eyewear',
      'anti scratch bestfit lens', 'assembly eye protection', 'maintenance comfort glasses', 'quality control ppe', 'soft nose pads bestfit',
      'flexible temple eyewear', 'all day comfort glasses', 'preferred worker eyewear', 'balanced safety glasses', 'value comfort ppe'
    ]
  },
  {
    id: 'petersafe-hs-1052',
    title: 'PETERSAFE HS-1052',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://industrialsafetygear.com/assets/images/S2520S_34F.jpg',
    desc: 'Petersafe HS-1052 safety spectacles deliver budget-friendly eye protection.\n' +
          'Clear polycarbonate lens provides impact resistance and UV blocking.\n' +
          'Classic wrap-around frame with basic side shield protection.\n' +
          'Lightweight design suitable for visitors, short-term tasks, or large teams.\n' +
          'Soft nose pads help reduce slippage and pressure.\n' +
          'Anti-scratch coating gives reasonable lens durability.\n' +
          'Ideal for site visitors, office staff, short-duration work, and bulk purchase.\n' +
          'Meets ANSI Z87.1 basic impact and EN166 F standards.\n' +
          'Very economical safety eyewear for low-risk environments.\n' +
          'Simple, no-nonsense eye protection at minimal cost.',
    rating: 4.1,
    reviews: 200,
    sold: '2500+',
    tags: [
      'petersafe safety spectacles', 'budget eye protection', 'clear basic glasses', 'ansi z87.1 petersafe', 'en166 low cost eyewear',
      'visitor safety glasses', 'office short term ppe', 'lightweight petersafe', 'soft nose pads budget', 'anti scratch low cost',
      'bulk purchase eyewear', 'low risk eye protection', 'economical safety glasses', 'simple no nonsense ppe', 'minimal cost eye wear'
    ]
  },
  {
    id: 'honeywell-xv100-safety-glasses-affordable-uv-protection-silver',
    title: 'Honeywell XV100 Safety Glasses – Affordable UV Protection (Silver)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.alldataresource.com/thumbnail.asp?file=assets/Honeywell_Safety_Products/Honeywell-Safety-Products-XV107-Xv100-Series-Frost-Cl-Lens-Uc-Main.jpg&maxx=500&maxy=400',
    desc: 'Honeywell XV100 Safety Glasses in silver/frost finish offer stylish affordable protection.\n' +
          'Clear or light-tint lens blocks 99.9% UV with impact resistance.\n' +
          'Modern wrap-around frame with soft temple tips for comfort.\n' +
          'Anti-scratch coating helps maintain lens clarity longer.\n' +
          'Lightweight construction ideal for all-day wear without fatigue.\n' +
          'UV and basic impact protection for general work environments.\n' +
          'Perfect for construction, workshops, visitors, and light outdoor tasks.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Attractive, cost-effective eyewear from trusted Honeywell.\n' +
          'Everyday safety glasses with modern look.',
    rating: 4.6,
    reviews: 100,
    sold: '500+',
    tags: [
      'honeywell xv100 silver', 'frost finish safety glasses', 'stylish affordable eyewear', 'ansi z87.1 xv100', 'en166 honeywell silver',
      'wrap around modern frame', 'anti scratch lens', 'visitor safety glasses', 'workshop eye protection', 'lightweight xv100',
      'all day comfort eyewear', 'general work ppe', 'cost effective honeywell', 'attractive safety glasses', 'modern look eye protection'
    ]
  },
  {
    id: 'sporty-safety-spectacle-honeywell-clear',
    title: 'Sporty Safety Spectacle Honeywell (Clear)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-e163lt99/images/stencil/1280x1280/products/13758/51892/sps-his-north-eye-a806-npid44472__25937.1622222481.jpg?c=2',
    desc: 'Sporty Safety Spectacle Honeywell (Clear) blends active style with solid protection.\n' +
          'Crystal-clear polycarbonate lens offers impact resistance and full UV blocking.\n' +
          'Sporty wrap-around frame with soft temple grips for secure fit.\n' +
          'Anti-scratch coating keeps lenses clear during active work.\n' +
          'Lightweight design ideal for all-day wear without pressure.\n' +
          'Ideal for construction, maintenance, outdoor tasks, and dynamic work.\n' +
          'Certified to ANSI Z87.1 and EN166 standards.\n' +
          'Stylish yet functional eyewear from Honeywell.\n' +
          'Eye protection that looks good and performs well.\n' +
          'Comfortable safety glasses for workers on the move.',
    rating: 4.7,
    reviews: 95,
    sold: '400+',
    tags: [
      'sporty honeywell clear', 'active style safety glasses', 'clear lens sporty', 'ansi z87.1 sporty', 'en166 honeywell clear',
      'wrap around sporty frame', 'anti scratch sporty lens', 'construction active eyewear', 'maintenance safety glasses', 'lightweight sporty',
      'all day sporty comfort', 'dynamic work ppe', 'stylish functional glasses', 'honeywell sporty eyewear', 'on the move eye protection'
    ]
  },
  {
    id: 'honeywell-v-maxx-goggles',
    title: 'Honeywell V-Maxx Goggles',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.aramsco.com/media/catalog/product/2/4/2489.jpg?store=default&image-type=image',
    desc: 'Honeywell V-Maxx Goggles provide excellent indirect-vent impact and splash protection.\n' +
          'Clear polycarbonate lens with anti-fog coating for clear vision.\n' +
          'Soft flexible frame conforms to face for better seal and comfort.\n' +
          'Indirect ventilation system reduces fogging while blocking liquid entry.\n' +
          'Adjustable elastic strap ensures secure fit during movement.\n' +
          'Lightweight design suitable for extended wear.\n' +
          'Ideal for chemical handling, grinding, sanding, and wet environments.\n' +
          'Certified to ANSI Z87.1+ and EN166 for impact and splash protection.\n' +
          'Durable, comfortable goggles from trusted Honeywell.\n' +
          'Reliable eye protection for demanding splash and debris tasks.',
    rating: 4.8,
    reviews: 120,
    sold: '600+',
    tags: [
      'honeywell v-maxx goggles', 'indirect vent goggles', 'anti fog v-maxx', 'ansi z87.1 goggles', 'en166 honeywell goggles',
      'chemical splash goggles', 'grinding eye protection', 'flexible frame goggles', 'adjustable strap goggles', 'lightweight honeywell',
      'extended wear goggles', 'wet environment ppe', 'durable splash goggles', 'comfortable honeywell goggles', 'demanding eye protection'
    ]
  },
  {
    id: 'honeywell-duramaxx-otg-goggles',
    title: 'Honeywell DuraMaxx OTG Goggles',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://honeywell.scene7.com/is/image/Honeywell65/sps-his-1017750-1017751-1030308-8030308-hon-duramaxx-goggles',
    desc: 'Honeywell DuraMaxx OTG Goggles are built for heavy-duty use over prescription glasses.\n' +
          'Extra-large clear lens provides full impact and splash protection.\n' +
          'Soft flexible frame fits comfortably around most eyeglasses.\n' +
          'Anti-fog and anti-scratch coatings maintain clear vision.\n' +
          'Indirect vents reduce fogging while blocking debris entry.\n' +
          'Adjustable elastic strap for secure fit during active work.\n' +
          'Ideal for grinding, sanding, demolition, and heavy maintenance.\n' +
          'Certified to ANSI Z87.1+ and EN166 for OTG eye protection.\n' +
          'Rugged, comfortable over-the-glasses goggles from Honeywell.\n' +
          'Heavy-duty eye protection when prescription safety glasses are not practical.',
    rating: 4.9,
    reviews: 80,
    sold: '300+',
    tags: [
      'duramaxx otg goggles', 'over the glasses goggles', 'heavy duty otg', 'ansi z87.1 duramaxx', 'en166 otg goggles',
      'large lens otg', 'anti fog heavy duty', 'grinding otg eye protection', 'demolition over glasses', 'adjustable strap otg',
      'rugged honeywell goggles', 'maintenance heavy otg', 'comfortable over glasses', 'prescription alternative', 'durable otg ppe'
    ]
  },
  {
    id: 'impact-dust-goggle-sg-154',
    title: 'Impact & Dust Goggle SG-154',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61cEWgx1ioL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Impact & Dust Goggle SG-154 protects eyes from flying particles and fine dust.\n' +
          'Clear polycarbonate lens meets high-impact ANSI Z87.1 standard.\n' +
          'Indirect ventilation reduces fogging while blocking dust entry.\n' +
          'Soft PVC frame with adjustable elastic strap for secure fit.\n' +
          'Anti-fog coating and UV protection for clear, safe vision.\n' +
          'Lightweight and comfortable for extended wear.\n' +
          'Ideal for woodworking, sanding, grinding, drilling, and dusty environments.\n' +
          'Certified to EN166 for impact and dust protection.\n' +
          'Durable, economical goggles for everyday particle hazards.\n' +
          'Reliable eye protection for workshop and construction tasks.',
    rating: 4.5,
    reviews: 100,
    sold: '700+',
    tags: [
      'impact dust goggles', 'particle protection goggles', 'ansi z87.1 dust goggles', 'en166 impact goggles', 'indirect vent goggles',
      'woodworking eye protection', 'sanding dust goggles', 'anti fog particle goggles', 'adjustable strap goggles', 'lightweight dust ppe',
      'workshop particle protection', 'construction dust goggles', 'economical eye goggles', 'reliable dust safety', 'everyday particle ppe'
    ]
  },
  {
    id: 'chemical-goggle-np-104',
    title: 'Chemical Goggle NP-104',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61cEWgx1ioL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Chemical Goggle NP-104 provides sealed protection against liquid splashes and vapors.\n' +
          'Clear impact-resistant polycarbonate lens with anti-fog coating.\n' +
          'Soft flexible PVC frame creates tight seal around eyes.\n' +
          'Indirect ventilation minimizes fogging while blocking chemical entry.\n' +
          'Adjustable elastic strap ensures secure fit during movement.\n' +
          'UV protection included for outdoor chemical handling.\n' +
          'Ideal for laboratories, cleaning, painting, and light chemical work.\n' +
          'Certified to ANSI Z87.1 and EN166 for chemical splash protection.\n' +
          'Durable, comfortable goggles for hazardous liquid environments.\n' +
          'Essential eye PPE for chemical exposure risks.',
    rating: 4.6,
    reviews: 90,
    sold: '500+',
    tags: [
      'chemical safety goggles', 'splash resistant goggles', 'ansi z87.1 chemical', 'en166 chemical goggles', 'indirect vent chemical',
      'laboratory eye protection', 'cleaning chemical goggles', 'anti fog chemical goggles', 'adjustable strap chemical', 'uv protection goggles',
      'sealed frame goggles', 'hazardous liquid ppe', 'durable chemical goggles', 'comfortable splash goggles', 'essential chemical eye ppe'
    ]
  },
  {
    id: 'dust-goggle-np-102',
    title: 'Dust Goggle NP-102',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://uploads.prod01.oregon.platform-os.com/instances/1774/assets/includes/images/products/bkdst-1040n/bkdst-1040n.jpg?updated=1606490406',
    desc: 'Dust Goggle NP-102 offers basic, economical protection against fine particles.\n' +
          'Clear polycarbonate lens provides impact resistance and wide vision.\n' +
          'Soft PVC frame with indirect vents reduces fogging.\n' +
          'Elastic adjustable strap for secure fit during activity.\n' +
          'Lightweight design comfortable for short to medium duration tasks.\n' +
          'UV protection included for occasional outdoor use.\n' +
          'Ideal for sweeping, light sanding, woodworking, and general dusty work.\n' +
          'Certified to EN166 for basic dust and impact protection.\n' +
          'Low-cost goggles for everyday light particle exposure.\n' +
          'Simple, effective eye protection for low-risk dusty environments.',
    rating: 4.4,
    reviews: 150,
    sold: '1200+',
    tags: [
      'dust safety goggles', 'basic particle goggles', 'en166 dust goggles', 'indirect vent dust', 'lightweight dust ppe',
      'sweeping eye protection', 'sanding dust goggles', 'woodworking basic goggles', 'adjustable strap dust', 'uv dust goggles',
      'economical particle protection', 'everyday dust eyewear', 'low risk dust goggles', 'simple dust safety', 'affordable dust ppe'
    ]
  },{
id: 'bls-zero-33-face-mask',
title: 'BLS Zero 33 Face mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2023/02/ZERO-33-800x800-1.jpg',
desc: 'BLS Zero 33 Full Face Mask offers panoramic vision and superior respiratory protection.\n' +
'Wide polycarbonate visor provides excellent field of view with anti-fog coating.\n' +
'Soft hypoallergenic silicone face seal conforms comfortably to face.\n' +
'Twin bayonet cartridge connection for quick filter changes.\n' +
'Speech diaphragm ensures clear communication while masked.\n' +
'5-point adjustable head harness for secure, balanced fit.\n' +
'Ideal for painting, chemical handling, asbestos abatement, and welding fumes.\n' +
'Certified to EN 136 Class 2 and compatible with most standard filters.\n' +
'Premium full-face respirator for high-hazard respiratory environments.\n' +
'Professional-grade mask with exceptional comfort and visibility.',
rating: 4.8,
reviews: 140,
sold: '600+',
tags: [
'bls zero 33 mask', 'full face respirator', 'panoramic visor mask', 'anti fog full face', 'en 136 class 2',
'painting full face mask', 'chemical handling respirator', 'asbestos abatement mask', 'welding fume protection', 'speech diaphragm mask',
'hypoallergenic silicone', 'bayonet cartridge mask', 'adjustable head harness', 'high hazard respiratory', 'premium full face ppe'
]
},
{
id: 'bls-680-next-ffp2-mask',
title: 'BLS 680 NEXT FFP2 mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2024/03/680-NEXT-800x800-1.jpg',
desc: 'BLS 680 NEXT FFP2 Mask is a premium disposable respirator with high filtration efficiency.\n' +
'Fold-flat design with exhalation valve reduces breathing resistance.\n' +
'Soft inner nose foam and adjustable nose clip for comfortable seal.\n' +
'Elastic head straps with buckle for secure, easy donning.\n' +
'High-efficiency melt-blown filter media blocks fine dust and aerosols.\n' +
'Ideal for construction, woodworking, sanding, pharmaceutical, and general dusty work.\n' +
'Certified to EN149 FFP2 NR standard with D (dolomite) optional.\n' +
'Lightweight and foldable for convenient storage.\n' +
'Comfortable, reliable disposable protection for medium-risk environments.\n' +
'High-performance FFP2 mask from trusted BLS.',
rating: 4.7,
reviews: 180,
sold: '800+',
tags: [
'bls 680 next ffp2', 'disposable ffp2 mask', 'valved respirator', 'fold flat ffp2', 'en149 ffp2 nr',
'construction dust mask', 'woodworking respirator', 'sanding ffp2 mask', 'pharmaceutical protection', 'adjustable nose clip ffp2',
'elastic head strap mask', 'high efficiency filter', 'comfortable disposable mask', 'medium risk respiratory', 'reliable bls ffp2'
]
},
{
id: 'bls-129bw-face-mask',
title: 'BLS 129BW Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2021/11/129-BW-800x800-1.jpg',
desc: 'BLS 129BW Face Mask is a valved FFP2 disposable respirator with excellent comfort.\n' +
'Exhalation valve reduces heat and moisture buildup inside mask.\n' +
'Pre-formed nose bridge and soft inner seal for secure fit.\n' +
'Elastic head straps with buckle for easy adjustment.\n' +
'High-filtration melt-blown layer protects against fine dust and aerosols.\n' +
'Ideal for construction, demolition, sanding, agriculture, and general dust.\n' +
'Certified to EN149 FFP2 NR D (dolomite tested) standard.\n' +
'Lightweight and foldable for convenient pocket storage.\n' +
'Comfort-focused disposable mask for medium-risk dusty environments.\n' +
'Trusted BLS quality at competitive price point.',
rating: 4.6,
reviews: 200,
sold: '1000+',
tags: [
'bls 129bw mask', 'valved ffp2 respirator', 'exhalation valve mask', 'en149 ffp2 nr d', 'construction dust mask',
'demolition ffp2', 'sanding respirator', 'agriculture dust protection', 'pre formed nose bridge', 'elastic buckle strap',
'high filtration ffp2', 'lightweight disposable mask', 'medium risk dust ppe', 'comfortable ffp2 mask', 'trusted bls respirator'
]
},
{
id: 'bls-128bw-face-mask',
title: 'BLS 128BW Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2021/11/128-BW-800x800-1.jpg',
desc: 'BLS 128BW Face Mask is a high-breathability FFP2 disposable respirator.\n' +
'Low breathing resistance thanks to advanced filter media.\n' +
'Soft inner nose foam and adjustable nose clip for good seal.\n' +
'Elastic head straps with buckle for secure, comfortable fit.\n' +
'Effective protection against fine dust, aerosols, and non-oil particles.\n' +
'Ideal for construction, woodworking, sweeping, and general dusty tasks.\n' +
'Certified to EN149 FFP2 NR standard.\n' +
'Fold-flat design stores easily in pockets or tool bags.\n' +
'Lightweight and comfortable for extended wear.\n' +
'Excellent value disposable mask from BLS.',
rating: 4.5,
reviews: 220,
sold: '1200+',
tags: [
'bls 128bw mask', 'high breathability ffp2', 'disposable dust mask', 'en149 ffp2 nr', 'construction ffp2 mask',
'woodworking respirator', 'low breathing resistance', 'adjustable nose clip ffp2', 'elastic strap mask', 'fine dust protection',
'fold flat ffp2', 'lightweight dust mask', 'extended wear ffp2', 'value respirator', 'general dusty tasks ppe'
]
},
{
id: 'aura-disposable-respirator-9332-ffp3-valved',
title: 'Aura™ Disposable Respirator 9332+, FFP3, Valved',
price: 'Contact for Price',
originalPrice: null,
image: 'https://reemster.com/cdn/shop/products/3m-aura-particulate-respirator.jpg?v=1641664361&width=692',
desc: '3M Aura 9332+ FFP3 Valved Respirator provides highest filtration efficiency.\n' +
'Advanced 3-panel design conforms to face for excellent seal and comfort.\n' +
'Exhalation valve reduces heat and moisture inside mask.\n' +
'Soft nose foam and adjustable nose clip for secure fit.\n' +
'Elastic head straps with buckle for easy donning and adjustment.\n' +
'Protects against very fine dust, fumes, and oil-based aerosols.\n' +
'Ideal for welding fumes, pharmaceutical, asbestos, and high-hazard dust.\n' +
'Certified to EN149 FFP3 NR D standard.\n' +
'Premium disposable respirator for maximum respiratory protection.\n' +
'Trusted 3M Aura quality in high-risk environments.',
rating: 4.9,
reviews: 250,
sold: '900+',
tags: [
'3m aura 9332', 'ffp3 valved respirator', 'highest filtration mask', 'en149 ffp3 nr d', 'welding fume protection',
'pharmaceutical respirator', 'asbestos removal mask', '3 panel aura design', 'exhalation valve ffp3', 'adjustable nose clip aura',
'elastic buckle strap', 'high hazard dust mask', 'premium disposable respirator', 'maximum respiratory ppe', 'trusted 3m aura'
]
},
{
id: 'particulate-respirator-p2-valved',
title: 'Particulate Respirator P2, valved',
price: 'Contact for Price',
originalPrice: null,
image: 'https://hlpmedical.net/cdn/shop/files/ValveExtended3_1024x1024_2x_0d44eb63-2795-4ce3-9c3c-77a5132056c7.webp?v=1686624573&width=1946',
desc: 'Particulate Respirator P2 Valved provides effective protection against dust and mists.\n' +
'Valved design reduces breathing resistance and heat buildup.\n' +
'Soft inner nose foam and adjustable nose clip for good seal.\n' +
'Elastic head straps with buckle for secure, comfortable fit.\n' +
'High-efficiency filter media blocks fine non-oil particulates.\n' +
'Fold-flat design for convenient storage in pockets.\n' +
'Ideal for construction, sanding, sweeping, agriculture, and general dust.\n' +
'Certified to AS/NZS 1716 P2 or equivalent EN149 FFP2 standards.\n' +
'Comfortable, reliable disposable respirator for medium-risk tasks.\n' +
'Trusted protection for everyday dusty environments.',
rating: 4.6,
reviews: 150,
sold: '700+',
tags: [
'p2 valved respirator', 'particulate dust mask', 'exhalation valve p2', 'construction p2 mask', 'sanding respirator p2',
'fold flat p2 mask', 'agriculture dust protection', 'high efficiency p2', 'comfortable valved mask', 'medium risk respiratory',
'adjustable nose clip p2', 'elastic buckle p2', 'general dust ppe', 'reliable particulate mask', 'everyday dust respirator'
]
},
{
id: 'particulate-respirator-8210-n95',
title: 'Particulate Respirator 8210 N95',
price: 'Contact for Price',
originalPrice: null,
image: 'https://media.granquartz.com/pearlman-production/catalog/product/6/9/696109-BX_a_b6fecf674ffbf82810b06308f5cee113.jpg?tr=n-gq_lrg',
desc: 'Particulate Respirator 8210 N95 is the classic disposable dust mask.\n' +
'NIOSH-approved N95 filters ≥95% of non-oil airborne particles.\n' +
'Molded cup shape with adjustable nose clip for secure fit.\n' +
'Elastic head straps provide secure seal without ear pressure.\n' +
'Lightweight and foldable for easy pocket storage.\n' +
'Ideal for construction, sanding, sweeping, grinding, and pandemic use.\n' +
'Meets NIOSH 42 CFR Part 84 N95 standard.\n' +
'Trusted worldwide for reliable, no-frills respiratory protection.\n' +
'Essential disposable mask for dusty and particulate-heavy tasks.\n' +
'Proven performance in industrial and health environments.',
rating: 4.7,
reviews: 300,
sold: '1500+',
tags: [
'3m 8210 n95', 'classic n95 respirator', 'niosh n95 mask', 'construction dust mask', 'sanding n95 protection',
'molded cup n95', 'elastic head strap n95', 'pandemic n95 mask', 'lightweight disposable', 'foldable n95',
'grinding particle mask', 'reliable dust respirator', 'industrial n95', 'health environment mask', 'proven n95 performance'
]
},
{
id: 'dust-pre-filters',
title: 'Dust Pre-Filters',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.airpurifierfirst.com/wp-content/uploads/2021/03/Dusty-pre-filters-after-some-time-of-usage-1024x768.png',
desc: 'Dust Pre-Filters extend the life of main respirator cartridges.\n' +
'High-efficiency pre-filter captures large dust and particulate matter.\n' +
'Attaches easily to compatible cartridge/filter holders.\n' +
'Reduces loading on primary filter, improving breathability.\n' +
'Ideal for dusty environments such as construction, woodworking, and demolition.\n' +
'Cost-effective way to prolong cartridge life in high-dust conditions.\n' +
'Compatible with most Honeywell, 3M, and other bayonet-style systems.\n' +
'Simple disposable accessory for reusable respirators.\n' +
'Essential maintenance item for half-face and full-face masks.\n' +
'Improves overall respirator performance in dusty atmospheres.',
rating: 4.5,
reviews: 80,
sold: '400+',
tags: [
'dust pre filters', 'respirator pre-filter', 'high efficiency pre-filter', 'cartridge extender', 'construction dust pre',
'woodworking pre filter', 'demolition respirator accessory', 'bayonet pre filter', 'disposable dust pre', 'prolong cartridge life',
'honeywell compatible pre', '3m compatible pre filter', 'reusable mask accessory', 'dusty atmosphere ppe', 'maintenance respirator item'
]
},
{
id: 'ammonia-cartirage-k2-bls',
title: 'Ammonia Cartirage K2 BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'https://stafit.ee/wp-content/uploads/2025/01/BLS_413-K2_0188.jpg',
desc: 'Ammonia Cartridge K2 BLS protects against ammonia and ammonia derivatives.\n' +
'High-capacity activated carbon filter for extended service life.\n' +
'Bayonet connection for quick, secure attachment to compatible masks.\n' +
'Low breathing resistance design improves user comfort.\n' +
'Ideal for refrigeration, fertilizer plants, agriculture, and cleaning.\n' +
'Compatible with BLS 2000/3000/4000/5000 series half and full face masks.\n' +
'Certified to EN 14387 Class K2 for ammonia protection.\n' +
'Essential filter for environments with ammonia gas hazards.\n' +
'Reliable, high-performance cartridge from BLS.\n' +
'Critical respiratory protection for ammonia exposure.',
rating: 4.7,
reviews: 60,
sold: '250+',
tags: [
'ammonia cartridge k2', 'bls k2 filter', 'ammonia protection cartridge', 'en 14387 k2', 'refrigeration gas mask',
'fertilizer plant cartridge', 'agriculture ammonia filter', 'cleaning chemical cartridge', 'bayonet ammonia filter', 'low breathing resistance',
'bls 2000 compatible', 'full face cartridge', 'half mask ammonia filter', 'ammonia gas ppe', 'high capacity ammonia cartridge'
]
},
{
id: 'multi-purpose-cartirage-abek2-bls',
title: 'Multi Purpose Cartirage ABEK2 BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'http://arete.com.mt/wp-content/uploads/2022/06/Screen-Shot-2022-06-09-at-2.35.38-PM.png',
desc: 'Multi Purpose Cartridge ABEK2 BLS protects against multiple gas and vapor types.\n' +
'ABEK2 rated for organic vapors, inorganic gases, acid gases, and ammonia.\n' +
'High-capacity activated carbon and chemical absorbent media.\n' +
'Bayonet connection for fast, secure attachment to BLS masks.\n' +
'Low breathing resistance for improved user comfort.\n' +
'Ideal for chemical plants, laboratories, painting, and industrial cleaning.\n' +
'Compatible with BLS 2000/3000/4000/5000 series respirators.\n' +
'Certified to EN 14387 Class ABEK2 for broad-spectrum gas protection.\n' +
'Versatile cartridge for sites with mixed chemical hazards.\n' +
'Professional-grade multi-gas filter from trusted BLS.',
rating: 4.8,
reviews: 70,
sold: '300+',
tags: [
'abek2 cartridge', 'multi gas cartridge', 'bls abek2 filter', 'en 14387 abek2', 'organic vapor protection',
'inorganic gas cartridge', 'acid gas filter', 'ammonia multi cartridge', 'chemical plant filter', 'laboratory gas mask',
'bayonet multi purpose', 'low breathing abek2', 'broad spectrum protection', 'mixed hazard cartridge', 'professional multi gas ppe'
]
},
{
id: 'ffp2-disposable-mask-128bw-r-d',
title: 'FFP2 Disposable Mask 128BW R D',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/12/BLS_128BW_-1547-ELASTICI-VERDI.jpg',
desc: 'FFP2 Disposable Mask 128BW R D is reusable style with excellent breathability.\n' +
'Valved design significantly reduces heat and moisture buildup.\n' +
'Dolomite (D) tested for low breathing resistance in humid conditions.\n' +
'Soft nose foam and adjustable nose clip create good facial seal.\n' +
'Elastic head straps with buckle for secure, comfortable fit.\n' +
'High-efficiency filter media against fine dust and non-oil aerosols.\n' +
'Ideal for construction, demolition, agriculture, and general dusty tasks.\n' +
'Certified to EN149 FFP2 NR D standard.\n' +
'Reusable for multiple shifts when not heavily loaded.\n' +
'Comfortable, high-performance disposable FFP2 from BLS.',
rating: 4.6,
reviews: 190,
sold: '900+',
tags: [
'128bw ffp2 mask', 'reusable ffp2 valved', 'dolomite tested ffp2', 'en149 ffp2 nr d', 'construction dust mask',
'demolition ffp2 respirator', 'agriculture dust protection', 'breathable valved mask', 'adjustable nose clip ffp2', 'elastic buckle ffp2',
'high efficiency filter', 'fine dust respirator', 'multi shift ffp2', 'comfortable disposable mask', 'bls ffp2 performance'
]
},
{
id: 'ffp3-disposable-mask-bls-800-flickit',
title: 'FFP3 Disposable Mask BLS 800 Flickit',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2022/03/bls_product_donninginstructions_800flickit_HEADER_DEF@05x.png',
desc: 'FFP3 Disposable Mask BLS 800 Flickit features innovative folding design.\n' +
'Flick-open shape maintains mask hygiene and makes donning easier.\n' +
'Highest filtration efficiency – protects against very fine dust, fumes, and aerosols.\n' +
'Valved version reduces breathing resistance and heat buildup.\n' +
'Soft inner nose foam and adjustable nose clip for secure seal.\n' +
'Elastic head straps with buckle for comfortable fit.\n' +
'Ideal for welding fumes, pharmaceutical, asbestos, and high-hazard dust.\n' +
'Certified to EN149 FFP3 NR standard.\n' +
'Premium disposable FFP3 with user-friendly folding system.\n' +
'Maximum respiratory protection with BLS quality.',
rating: 4.8,
reviews: 110,
sold: '500+',
tags: [
'bls 800 flickit', 'ffp3 folding mask', 'highest filtration ffp3', 'en149 ffp3 nr', 'welding fume ffp3',
'pharmaceutical respirator', 'asbestos removal mask', 'valved ffp3 mask', 'flick open design', 'adjustable nose clip ffp3',
'elastic buckle ffp3', 'high hazard dust mask', 'premium disposable ffp3', 'user friendly ffp3', 'maximum respiratory protection'
]
},
{
id: 'ffp2-disposable-mask-bls-700',
title: 'FFP2 Disposable Mask BLS 700',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/12/BLS_129_BW_1-1647-ELASTICI-VERDI.jpg',
desc: 'FFP2 Disposable Mask BLS 700 offers high comfort and reliable filtration.\n' +
'Molded shape with soft inner nose seal for excellent fit.\n' +
'Low breathing resistance thanks to advanced filter media.\n' +
'Elastic head straps with buckle for secure, comfortable wear.\n' +
'Effective against fine dust, mists, and non-oil aerosols.\n' +
'Ideal for construction, woodworking, sanding, and general dust work.\n' +
'Certified to EN149 FFP2 NR standard.\n' +
'Lightweight and foldable for easy storage.\n' +
'Comfort-focused disposable mask for medium-risk environments.\n' +
'High-quality BLS FFP2 at competitive price.',
rating: 4.6,
reviews: 130,
sold: '600+',
tags: [
'bls 700 ffp2', 'comfort ffp2 mask', 'molded ffp2 respirator', 'en149 ffp2 nr', 'construction dust mask',
'woodworking ffp2', 'low breathing ffp2', 'elastic buckle mask', 'fine dust protection', 'sanding respirator',
'lightweight ffp2', 'medium risk dust ppe', 'foldable disposable mask', 'high quality bls', 'competitive ffp2 mask'
]
},
{
id: 'n95-non-oil-particulate-filter-7506n95-honeywell',
title: 'N95 Non-Oil Particulate Filter 7506N95 Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://i.ebayimg.com/images/g/Zn8AAOSwrAxncyJc/s-l1200.jpg',
desc: 'N95 Non-Oil Particulate Filter 7506N95 Honeywell filters dust and aerosols.\n' +
'NIOSH-approved N95 filtration efficiency ≥95% for non-oil particles.\n' +
'Compatible with Honeywell North half-face and full-face respirators.\n' +
'Bayonet connection for quick, secure attachment.\n' +
'Low-profile design maintains good field of vision.\n' +
'Ideal for construction, sanding, grinding, sweeping, and woodworking.\n' +
'Essential replacement filter for reusable respirator systems.\n' +
'Certified to NIOSH 42 CFR Part 84 N95 standard.\n' +
'Reliable Honeywell quality for particulate protection.\n' +
'Critical component for maintaining respiratory safety.',
rating: 4.7,
reviews: 90,
sold: '400+',
tags: [
'honeywell 7506n95', 'n95 filter cartridge', 'non oil particulate filter', 'niosh n95 filter', 'bayonet n95 filter',
'construction dust filter', 'sanding respirator filter', 'grinding particulate filter', 'replacement n95 filter', 'reusable mask filter',
'low profile filter', 'woodworking n95 filter', 'honeywell north compatible', 'reliable particulate ppe', 'essential n95 component'
]
},
{
id: 'flexible-low-profile-p100-filter-75ffp100-honeywell',
title: 'Flexible, Low Profile P100 Filter 75FFP100 Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/16M237_AS01',
desc: 'Flexible Low Profile P100 Filter 75FFP100 Honeywell offers highest filtration efficiency.\n' +
'P100 filters ≥99.97% of oil- and non-oil particulates.\n' +
'Flexible, low-profile design improves downward visibility.\n' +
'Bayonet connection for quick attachment to Honeywell respirators.\n' +
'Ideal for welding fumes, pharmaceutical dust, asbestos, and high-hazard particles.\n' +
'Compatible with North 5500, 7700, 5400, and other series masks.\n' +
'Essential high-efficiency replacement filter for reusable systems.\n' +
'Certified to NIOSH 42 CFR Part 84 P100 standard.\n' +
'Premium Honeywell filter for maximum particulate protection.\n' +
'Critical component for high-risk dust and fume environments.',
rating: 4.8,
reviews: 100,
sold: '450+',
tags: [
'75ffp100 filter', 'p100 honeywell filter', 'low profile p100', 'flexible particulate filter', 'niosh p100 filter',
'welding fume p100', 'pharmaceutical dust filter', 'asbestos protection filter', 'bayonet p100 filter', 'high efficiency filter',
'reusable mask p100', 'north series compatible', 'high hazard particulate', 'premium honeywell filter', 'maximum dust protection'
]
},
{
id: 'organic-vapor-cartridge-n75001l-honeywell',
title: 'Organic Vapor Cartridge N75001L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/16M239_AS01',
desc: 'Organic Vapor Cartridge N75001L Honeywell protects against organic vapors.\n' +
'Activated carbon filter removes benzene, toluene, xylene, and many solvents.\n' +
'Bayonet connection for quick, secure attachment to Honeywell masks.\n' +
'Low breathing resistance design improves user comfort.\n' +
'Compatible with North 5500, 7700, 5400, and other half/full face masks.\n' +
'Ideal for painting, spraying, degreasing, and chemical handling.\n' +
'Certified to NIOSH for organic vapor protection.\n' +
'Essential cartridge for environments with solvent vapors.\n' +
'Reliable Honeywell quality for gas and vapor safety.\n' +
'Critical respiratory protection component.',
rating: 4.8,
reviews: 85,
sold: '350+',
tags: [
'n75001l cartridge', 'organic vapor honeywell', 'solvent vapor filter', 'niosh organic vapor', 'bayonet cartridge honeywell',
'painting respirator cartridge', 'spraying vapor protection', 'degreasing filter', 'chemical handling cartridge', 'low breathing cartridge',
'north mask compatible', 'activated carbon cartridge', 'gas vapor ppe', 'reliable honeywell filter', 'essential vapor protection'
]
},
{
id: 'organic-vapor-acid-gas-cartridge-n75003l-honeywell',
title: 'Organic Vapor & Acid Gas Cartridge N75003L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://us.evocdn.io/supplier/catalog/1252/product/original/nr-75SCL.jpg',
desc: 'Organic Vapor & Acid Gas Cartridge N75003L Honeywell protects against multiple hazards.\n' +
'Filters organic vapors plus chlorine, hydrogen chloride, sulfur dioxide, and chlorine dioxide.\n' +
'Activated carbon and chemical absorbent media for broad protection.\n' +
'Bayonet connection for fast, secure fit on Honeywell respirators.\n' +
'Low breathing resistance for improved comfort during use.\n' +
'Compatible with North 5500, 7700, 5400 series half and full face masks.\n' +
'Ideal for chemical plants, laboratories, water treatment, and cleaning.\n' +
'Certified to NIOSH for organic vapor and acid gas protection.\n' +
'Versatile cartridge for mixed gas and vapor environments.\n' +
'Trusted Honeywell quality for multi-hazard respiratory safety.',
rating: 4.8,
reviews: 80,
sold: '300+',
tags: [
'n75003l cartridge', 'organic acid gas filter', 'multi gas honeywell', 'niosh organic acid', 'bayonet multi cartridge',
'chemical plant respirator', 'laboratory gas protection', 'water treatment cartridge', 'cleaning vapor filter', 'low breathing multi',
'north compatible cartridge', 'activated carbon acid', 'broad spectrum ppe', 'versatile gas cartridge', 'trusted honeywell multi'
]
},
{
id: 'multi-gas-vapor-cartridge-75scl-honeywell',
title: 'Multi-Gas Vapor Cartridge 75SCL Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.grainger.com/product/16M240_AS01',
desc: 'Multi-Gas Vapor Cartridge 75SCL Honeywell protects against wide range of gases.\n' +
'ABEK rated for organic, inorganic, acid gases, ammonia, and derivatives.\n' +
'High-capacity media extends service life in mixed atmospheres.\n' +
'Bayonet connection for quick attachment to Honeywell masks.\n' +
'Low breathing resistance improves user comfort.\n' +
'Compatible with North 5500, 7700, 5400 series respirators.\n' +
'Ideal for chemical plants, laboratories, emergency response, and industrial cleaning.\n' +
'Certified to NIOSH for multi-gas and vapor protection.\n' +
'Versatile cartridge for complex chemical environments.\n' +
'Professional-grade Honeywell filter for broad-spectrum safety.',
rating: 4.9,
reviews: 75,
sold: '280+',
tags: [
'75scl cartridge', 'multi gas honeywell', 'abek cartridge', 'broad spectrum filter', 'niosh multi gas',
'chemical plant multi cartridge', 'laboratory vapor protection', 'emergency response filter', 'industrial cleaning cartridge', 'low breathing multi',
'north compatible multi', 'high capacity abek', 'complex chemical ppe', 'versatile gas protection', 'professional honeywell cartridge'
]
},
{
id: 'ammonia-and-methylamine-respirator-cartridges-n75004l-honeywell',
title: 'Ammonia And Methylamine Respirator Cartridges N75004L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/16M238_AS01',
desc: 'Ammonia and Methylamine Cartridge N75004L Honeywell protects against ammonia and methylamine.\n' +
'Specialized chemical absorbent media for effective gas removal.\n' +
'Bayonet connection for quick, secure attachment to Honeywell masks.\n' +
'Low breathing resistance design for improved comfort.\n' +
'Compatible with North 5500, 7700, 5400 series half/full face masks.\n' +
'Ideal for refrigeration, fertilizer production, agriculture, and cleaning.\n' +
'Certified to NIOSH for ammonia and methylamine protection.\n' +
'Essential cartridge for ammonia-related gas hazards.\n' +
'Reliable Honeywell quality for specialized respiratory needs.\n' +
'Critical protection in ammonia-handling environments.',
rating: 4.7,
reviews: 65,
sold: '250+',
tags: [
'n75004l cartridge', 'ammonia methylamine filter', 'specialized gas cartridge', 'niosh ammonia protection', 'bayonet ammonia cartridge',
'refrigeration gas mask', 'fertilizer production filter', 'agriculture ammonia cartridge', 'cleaning ammonia protection', 'low breathing ammonia',
'north compatible ammonia', 'chemical absorbent cartridge', 'ammonia hazard ppe', 'reliable honeywell filter', 'specialized respiratory cartridge'
]
},
{
id: 'acid-gases-cartridge-n75002l-honeywell',
title: 'Acid Gases Cartridge N75002L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn11.bigcommerce.com/s-8715e/images/stencil/1280x1280/products/559/381562/381562__04666.1683663738.png?c=2?imbypass=on',
desc: 'Acid Gases Cartridge N75002L Honeywell protects against acid gases and vapors.\n' +
'Filters chlorine, hydrogen chloride, sulfur dioxide, chlorine dioxide, hydrogen sulfide.\n' +
'Activated carbon and chemical absorbent media for effective gas removal.\n' +
'Bayonet connection for quick, secure attachment to Honeywell respirators.\n' +
'Low breathing resistance improves user comfort during extended wear.\n' +
'Compatible with North 5500, 7700, 5400 series half and full face masks.\n' +
'Ideal for water treatment, chemical processing, metal pickling, and cleaning.\n' +
'Certified to NIOSH for acid gas protection.\n' +
'Reliable Honeywell cartridge for environments with corrosive acid gases.\n' +
'Essential respiratory filter for acid-related industrial hazards.',
rating: 4.7,
reviews: 70,
sold: '260+',
tags: [
'n75002l cartridge', 'acid gas honeywell', 'chlorine hydrogen chloride filter', 'sulfur dioxide cartridge', 'niosh acid gas',
'bayonet acid cartridge', 'water treatment respirator', 'chemical processing filter', 'metal pickling cartridge', 'low breathing acid',
'north compatible acid', 'corrosive gas ppe', 'reliable honeywell acid', 'industrial acid protection', 'essential acid gas filter'
]
},
{
id: 'full-face-mask-5400-series-honeywell',
title: 'Full Face Mask 5400 Series Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2024/03/5000en.jpg',
desc: 'Full Face Mask 5400 Series Honeywell is an economical full-face respirator.\n' +
'Panoramic polycarbonate visor offers wide field of view with good optics.\n' +
'Soft silicone face seal provides secure, comfortable fit.\n' +
'Twin bayonet cartridge connection for fast filter changes.\n' +
'5-point adjustable head harness for balanced weight distribution.\n' +
'Speech diaphragm allows clear communication while masked.\n' +
'Ideal for painting, chemical handling, welding fumes, and general industrial use.\n' +
'Certified to EN 136 Class 2 and NIOSH standards.\n' +
'Cost-effective full-face solution from trusted Honeywell.\n' +
'Reliable protection for medium to high hazard respiratory tasks.',
rating: 4.8,
reviews: 120,
sold: '400+',
tags: [
'5400 series full face', 'economical full face mask', 'honeywell 5400', 'panoramic visor respirator', 'en 136 class 2',
'painting full face', 'chemical handling mask', 'welding fume protection', 'speech diaphragm mask', 'bayonet full face',
'adjustable head harness', 'silicone face seal', 'medium hazard respirator', 'cost effective full face', 'reliable honeywell mask'
]
},



  {
id: 'bls-zero-33-face-mask',
title: 'BLS Zero 33 Face mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2023/02/ZERO-33-800x800-1.jpg',
desc: 'BLS Zero 33 Full Face Mask offers panoramic vision and superior respiratory protection.\n' +
'Wide polycarbonate visor provides excellent field of view with anti-fog coating.\n' +
'Soft hypoallergenic silicone face seal conforms comfortably to face.\n' +
'Twin bayonet cartridge connection for quick filter changes.\n' +
'Speech diaphragm ensures clear communication while masked.\n' +
'5-point adjustable head harness for secure, balanced fit.\n' +
'Ideal for painting, chemical handling, asbestos abatement, and welding fumes.\n' +
'Certified to EN 136 Class 2 and compatible with most standard filters.\n' +
'Premium full-face respirator for high-hazard respiratory environments.\n' +
'Professional-grade mask with exceptional comfort and visibility.',
rating: 4.8,
reviews: 140,
sold: '600+',
tags: [
'bls zero 33 mask', 'full face respirator', 'panoramic visor mask', 'anti fog full face', 'en 136 class 2',
'painting full face mask', 'chemical handling respirator', 'asbestos abatement mask', 'welding fume protection', 'speech diaphragm mask',
'hypoallergenic silicone', 'bayonet cartridge mask', 'adjustable head harness', 'high hazard respiratory', 'premium full face ppe'
]
},
{
id: 'bls-680-next-ffp2-mask',
title: 'BLS 680 NEXT FFP2 mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2024/03/680-NEXT-800x800-1.jpg',
desc: 'BLS 680 NEXT FFP2 Mask is a premium disposable respirator with high filtration efficiency.\n' +
'Fold-flat design with exhalation valve reduces breathing resistance.\n' +
'Soft inner nose foam and adjustable nose clip for comfortable seal.\n' +
'Elastic head straps with buckle for secure, easy donning.\n' +
'High-efficiency melt-blown filter media blocks fine dust and aerosols.\n' +
'Ideal for construction, woodworking, sanding, pharmaceutical, and general dusty work.\n' +
'Certified to EN149 FFP2 NR standard with D (dolomite) optional.\n' +
'Lightweight and foldable for convenient storage.\n' +
'Comfortable, reliable disposable protection for medium-risk environments.\n' +
'High-performance FFP2 mask from trusted BLS.',
rating: 4.7,
reviews: 180,
sold: '800+',
tags: [
'bls 680 next ffp2', 'disposable ffp2 mask', 'valved respirator', 'fold flat ffp2', 'en149 ffp2 nr',
'construction dust mask', 'woodworking respirator', 'sanding ffp2 mask', 'pharmaceutical protection', 'adjustable nose clip ffp2',
'elastic head strap mask', 'high efficiency filter', 'comfortable disposable mask', 'medium risk respiratory', 'reliable bls ffp2'
]
},
{
id: 'bls-129bw-face-mask',
title: 'BLS 129BW Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2021/11/129-BW-800x800-1.jpg',
desc: 'BLS 129BW Face Mask is a valved FFP2 disposable respirator with excellent comfort.\n' +
'Exhalation valve reduces heat and moisture buildup inside mask.\n' +
'Pre-formed nose bridge and soft inner seal for secure fit.\n' +
'Elastic head straps with buckle for easy adjustment.\n' +
'High-filtration melt-blown layer protects against fine dust and aerosols.\n' +
'Ideal for construction, demolition, sanding, agriculture, and general dust.\n' +
'Certified to EN149 FFP2 NR D (dolomite tested) standard.\n' +
'Lightweight and foldable for convenient pocket storage.\n' +
'Comfort-focused disposable mask for medium-risk dusty environments.\n' +
'Trusted BLS quality at competitive price point.',
rating: 4.6,
reviews: 200,
sold: '1000+',
tags: [
'bls 129bw mask', 'valved ffp2 respirator', 'exhalation valve mask', 'en149 ffp2 nr d', 'construction dust mask',
'demolition ffp2', 'sanding respirator', 'agriculture dust protection', 'pre formed nose bridge', 'elastic buckle strap',
'high filtration ffp2', 'lightweight disposable mask', 'medium risk dust ppe', 'comfortable ffp2 mask', 'trusted bls respirator'
]
},
{
id: 'bls-128bw-face-mask',
title: 'BLS 128BW Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.it/wp-content/uploads/2021/11/128-BW-800x800-1.jpg',
desc: 'BLS 128BW Face Mask is a high-breathability FFP2 disposable respirator.\n' +
'Low breathing resistance thanks to advanced filter media.\n' +
'Soft inner nose foam and adjustable nose clip for good seal.\n' +
'Elastic head straps with buckle for secure, comfortable fit.\n' +
'Effective protection against fine dust, aerosols, and non-oil particles.\n' +
'Ideal for construction, woodworking, sweeping, and general dusty tasks.\n' +
'Certified to EN149 FFP2 NR standard.\n' +
'Fold-flat design stores easily in pockets or tool bags.\n' +
'Lightweight and comfortable for extended wear.\n' +
'Excellent value disposable mask from BLS.',
rating: 4.5,
reviews: 220,
sold: '1200+',
tags: [
'bls 128bw mask', 'high breathability ffp2', 'disposable dust mask', 'en149 ffp2 nr', 'construction ffp2 mask',
'woodworking respirator', 'low breathing resistance', 'adjustable nose clip ffp2', 'elastic strap mask', 'fine dust protection',
'fold flat ffp2', 'lightweight dust mask', 'extended wear ffp2', 'value respirator', 'general dusty tasks ppe'
]
},
{
id: 'aura-disposable-respirator-9332-ffp3-valved',
title: 'Aura™ Disposable Respirator 9332+, FFP3, Valved',
price: 'Contact for Price',
originalPrice: null,
image: 'https://reemster.com/cdn/shop/products/3m-aura-particulate-respirator.jpg?v=1641664361&width=692',
desc: '3M Aura 9332+ FFP3 Valved Respirator provides highest filtration efficiency.\n' +
'Advanced 3-panel design conforms to face for excellent seal and comfort.\n' +
'Exhalation valve reduces heat and moisture inside mask.\n' +
'Soft nose foam and adjustable nose clip for secure fit.\n' +
'Elastic head straps with buckle for easy donning and adjustment.\n' +
'Protects against very fine dust, fumes, and oil-based aerosols.\n' +
'Ideal for welding fumes, pharmaceutical, asbestos, and high-hazard dust.\n' +
'Certified to EN149 FFP3 NR D standard.\n' +
'Premium disposable respirator for maximum respiratory protection.\n' +
'Trusted 3M Aura quality in high-risk environments.',
rating: 4.9,
reviews: 250,
sold: '900+',
tags: [
'3m aura 9332', 'ffp3 valved respirator', 'highest filtration mask', 'en149 ffp3 nr d', 'welding fume protection',
'pharmaceutical respirator', 'asbestos removal mask', '3 panel aura design', 'exhalation valve ffp3', 'adjustable nose clip aura',
'elastic buckle strap', 'high hazard dust mask', 'premium disposable respirator', 'maximum respiratory ppe', 'trusted 3m aura'
]
},
{
id: 'particulate-respirator-p2-valved',
title: 'Particulate Respirator P2, valved',
price: 'Contact for Price',
originalPrice: null,
image: 'https://hlpmedical.net/cdn/shop/files/ValveExtended3_1024x1024_2x_0d44eb63-2795-4ce3-9c3c-77a5132056c7.webp?v=1686624573&width=1946',
desc: 'Particulate Respirator P2 Valved provides effective protection against dust and mists.\n' +
'Valved design reduces breathing resistance and heat buildup.\n' +
'Soft inner nose foam and adjustable nose clip for good seal.\n' +
'Elastic head straps with buckle for secure, comfortable fit.\n' +
'High-efficiency filter media blocks fine non-oil particulates.\n' +
'Fold-flat design for convenient storage in pockets.\n' +
'Ideal for construction, sanding, sweeping, agriculture, and general dust.\n' +
'Certified to AS/NZS 1716 P2 or equivalent EN149 FFP2 standards.\n' +
'Comfortable, reliable disposable respirator for medium-risk tasks.\n' +
'Trusted protection for everyday dusty environments.',
rating: 4.6,
reviews: 150,
sold: '700+',
tags: [
'p2 valved respirator', 'particulate dust mask', 'exhalation valve p2', 'construction p2 mask', 'sanding respirator p2',
'fold flat p2 mask', 'agriculture dust protection', 'high efficiency p2', 'comfortable valved mask', 'medium risk respiratory',
'adjustable nose clip p2', 'elastic buckle p2', 'general dust ppe', 'reliable particulate mask', 'everyday dust respirator'
]
},
{
id: 'particulate-respirator-8210-n95',
title: 'Particulate Respirator 8210 N95',
price: 'Contact for Price',
originalPrice: null,
image: 'https://media.granquartz.com/pearlman-production/catalog/product/6/9/696109-BX_a_b6fecf674ffbf82810b06308f5cee113.jpg?tr=n-gq_lrg',
desc: 'Particulate Respirator 8210 N95 is the classic disposable dust mask.\n' +
'NIOSH-approved N95 filters ≥95% of non-oil airborne particles.\n' +
'Molded cup shape with adjustable nose clip for secure fit.\n' +
'Elastic head straps provide secure seal without ear pressure.\n' +
'Lightweight and foldable for easy pocket storage.\n' +
'Ideal for construction, sanding, sweeping, grinding, and pandemic use.\n' +
'Meets NIOSH 42 CFR Part 84 N95 standard.\n' +
'Trusted worldwide for reliable, no-frills respiratory protection.\n' +
'Essential disposable mask for dusty and particulate-heavy tasks.\n' +
'Proven performance in industrial and health environments.',
rating: 4.7,
reviews: 300,
sold: '1500+',
tags: [
'3m 8210 n95', 'classic n95 respirator', 'niosh n95 mask', 'construction dust mask', 'sanding n95 protection',
'molded cup n95', 'elastic head strap n95', 'pandemic n95 mask', 'lightweight disposable', 'foldable n95',
'grinding particle mask', 'reliable dust respirator', 'industrial n95', 'health environment mask', 'proven n95 performance'
]
},
{
id: 'dust-pre-filters',
title: 'Dust Pre-Filters',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.airpurifierfirst.com/wp-content/uploads/2021/03/Dusty-pre-filters-after-some-time-of-usage-1024x768.png',
desc: 'Dust Pre-Filters extend the life of main respirator cartridges.\n' +
'High-efficiency pre-filter captures large dust and particulate matter.\n' +
'Attaches easily to compatible cartridge/filter holders.\n' +
'Reduces loading on primary filter, improving breathability.\n' +
'Ideal for dusty environments such as construction, woodworking, and demolition.\n' +
'Cost-effective way to prolong cartridge life in high-dust conditions.\n' +
'Compatible with most Honeywell, 3M, and other bayonet-style systems.\n' +
'Simple disposable accessory for reusable respirators.\n' +
'Essential maintenance item for half-face and full-face masks.\n' +
'Improves overall respirator performance in dusty atmospheres.',
rating: 4.5,
reviews: 80,
sold: '400+',
tags: [
'dust pre filters', 'respirator pre-filter', 'high efficiency pre-filter', 'cartridge extender', 'construction dust pre',
'woodworking pre filter', 'demolition respirator accessory', 'bayonet pre filter', 'disposable dust pre', 'prolong cartridge life',
'honeywell compatible pre', '3m compatible pre filter', 'reusable mask accessory', 'dusty atmosphere ppe', 'maintenance respirator item'
]
},
{
id: 'ammonia-cartirage-k2-bls',
title: 'Ammonia Cartirage K2 BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'https://stafit.ee/wp-content/uploads/2025/01/BLS_413-K2_0188.jpg',
desc: 'Ammonia Cartridge K2 BLS protects against ammonia and ammonia derivatives.\n' +
'High-capacity activated carbon filter for extended service life.\n' +
'Bayonet connection for quick, secure attachment to compatible masks.\n' +
'Low breathing resistance design improves user comfort.\n' +
'Ideal for refrigeration, fertilizer plants, agriculture, and cleaning.\n' +
'Compatible with BLS 2000/3000/4000/5000 series half and full face masks.\n' +
'Certified to EN 14387 Class K2 for ammonia protection.\n' +
'Essential filter for environments with ammonia gas hazards.\n' +
'Reliable, high-performance cartridge from BLS.\n' +
'Critical respiratory protection for ammonia exposure.',
rating: 4.7,
reviews: 60,
sold: '250+',
tags: [
'ammonia cartridge k2', 'bls k2 filter', 'ammonia protection cartridge', 'en 14387 k2', 'refrigeration gas mask',
'fertilizer plant cartridge', 'agriculture ammonia filter', 'cleaning chemical cartridge', 'bayonet ammonia filter', 'low breathing resistance',
'bls 2000 compatible', 'full face cartridge', 'half mask ammonia filter', 'ammonia gas ppe', 'high capacity ammonia cartridge'
]
},
{
id: 'multi-purpose-cartirage-abek2-bls',
title: 'Multi Purpose Cartirage ABEK2 BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'http://arete.com.mt/wp-content/uploads/2022/06/Screen-Shot-2022-06-09-at-2.35.38-PM.png',
desc: 'Multi Purpose Cartridge ABEK2 BLS protects against multiple gas and vapor types.\n' +
'ABEK2 rated for organic vapors, inorganic gases, acid gases, and ammonia.\n' +
'High-capacity activated carbon and chemical absorbent media.\n' +
'Bayonet connection for fast, secure attachment to BLS masks.\n' +
'Low breathing resistance for improved user comfort.\n' +
'Ideal for chemical plants, laboratories, painting, and industrial cleaning.\n' +
'Compatible with BLS 2000/3000/4000/5000 series respirators.\n' +
'Certified to EN 14387 Class ABEK2 for broad-spectrum gas protection.\n' +
'Versatile cartridge for sites with mixed chemical hazards.\n' +
'Professional-grade multi-gas filter from trusted BLS.',
rating: 4.8,
reviews: 70,
sold: '300+',
tags: [
'abek2 cartridge', 'multi gas cartridge', 'bls abek2 filter', 'en 14387 abek2', 'organic vapor protection',
'inorganic gas cartridge', 'acid gas filter', 'ammonia multi cartridge', 'chemical plant filter', 'laboratory gas mask',
'bayonet multi purpose', 'low breathing abek2', 'broad spectrum protection', 'mixed hazard cartridge', 'professional multi gas ppe'
]
},
{
id: 'ffp2-disposable-mask-128bw-r-d',
title: 'FFP2 Disposable Mask 128BW R D',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/12/BLS_128BW_-1547-ELASTICI-VERDI.jpg',
desc: 'FFP2 Disposable Mask 128BW R D is reusable style with excellent breathability.\n' +
'Valved design significantly reduces heat and moisture buildup.\n' +
'Dolomite (D) tested for low breathing resistance in humid conditions.\n' +
'Soft nose foam and adjustable nose clip create good facial seal.\n' +
'Elastic head straps with buckle for secure, comfortable fit.\n' +
'High-efficiency filter media against fine dust and non-oil aerosols.\n' +
'Ideal for construction, demolition, agriculture, and general dusty tasks.\n' +
'Certified to EN149 FFP2 NR D standard.\n' +
'Reusable for multiple shifts when not heavily loaded.\n' +
'Comfortable, high-performance disposable FFP2 from BLS.',
rating: 4.6,
reviews: 190,
sold: '900+',
tags: [
'128bw ffp2 mask', 'reusable ffp2 valved', 'dolomite tested ffp2', 'en149 ffp2 nr d', 'construction dust mask',
'demolition ffp2 respirator', 'agriculture dust protection', 'breathable valved mask', 'adjustable nose clip ffp2', 'elastic buckle ffp2',
'high efficiency filter', 'fine dust respirator', 'multi shift ffp2', 'comfortable disposable mask', 'bls ffp2 performance'
]
},
{
id: 'ffp3-disposable-mask-bls-800-flickit',
title: 'FFP3 Disposable Mask BLS 800 Flickit',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2022/03/bls_product_donninginstructions_800flickit_HEADER_DEF@05x.png',
desc: 'FFP3 Disposable Mask BLS 800 Flickit features innovative folding design.\n' +
'Flick-open shape maintains mask hygiene and makes donning easier.\n' +
'Highest filtration efficiency – protects against very fine dust, fumes, and aerosols.\n' +
'Valved version reduces breathing resistance and heat buildup.\n' +
'Soft inner nose foam and adjustable nose clip for secure seal.\n' +
'Elastic head straps with buckle for comfortable fit.\n' +
'Ideal for welding fumes, pharmaceutical, asbestos, and high-hazard dust.\n' +
'Certified to EN149 FFP3 NR standard.\n' +
'Premium disposable FFP3 with user-friendly folding system.\n' +
'Maximum respiratory protection with BLS quality.',
rating: 4.8,
reviews: 110,
sold: '500+',
tags: [
'bls 800 flickit', 'ffp3 folding mask', 'highest filtration ffp3', 'en149 ffp3 nr', 'welding fume ffp3',
'pharmaceutical respirator', 'asbestos removal mask', 'valved ffp3 mask', 'flick open design', 'adjustable nose clip ffp3',
'elastic buckle ffp3', 'high hazard dust mask', 'premium disposable ffp3', 'user friendly ffp3', 'maximum respiratory protection'
]
},
{
id: 'ffp2-disposable-mask-bls-700',
title: 'FFP2 Disposable Mask BLS 700',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/12/BLS_129_BW_1-1647-ELASTICI-VERDI.jpg',
desc: 'FFP2 Disposable Mask BLS 700 offers high comfort and reliable filtration.\n' +
'Molded shape with soft inner nose seal for excellent fit.\n' +
'Low breathing resistance thanks to advanced filter media.\n' +
'Elastic head straps with buckle for secure, comfortable wear.\n' +
'Effective against fine dust, mists, and non-oil aerosols.\n' +
'Ideal for construction, woodworking, sanding, and general dust work.\n' +
'Certified to EN149 FFP2 NR standard.\n' +
'Lightweight and foldable for easy storage.\n' +
'Comfort-focused disposable mask for medium-risk environments.\n' +
'High-quality BLS FFP2 at competitive price.',
rating: 4.6,
reviews: 130,
sold: '600+',
tags: [
'bls 700 ffp2', 'comfort ffp2 mask', 'molded ffp2 respirator', 'en149 ffp2 nr', 'construction dust mask',
'woodworking ffp2', 'low breathing ffp2', 'elastic buckle mask', 'fine dust protection', 'sanding respirator',
'lightweight ffp2', 'medium risk dust ppe', 'foldable disposable mask', 'high quality bls', 'competitive ffp2 mask'
]
},
{
id: 'n95-non-oil-particulate-filter-7506n95-honeywell',
title: 'N95 Non-Oil Particulate Filter 7506N95 Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://i.ebayimg.com/images/g/Zn8AAOSwrAxncyJc/s-l1200.jpg',
desc: 'N95 Non-Oil Particulate Filter 7506N95 Honeywell filters dust and aerosols.\n' +
'NIOSH-approved N95 filtration efficiency ≥95% for non-oil particles.\n' +
'Compatible with Honeywell North half-face and full-face respirators.\n' +
'Bayonet connection for quick, secure attachment.\n' +
'Low-profile design maintains good field of vision.\n' +
'Ideal for construction, sanding, grinding, sweeping, and woodworking.\n' +
'Essential replacement filter for reusable respirator systems.\n' +
'Certified to NIOSH 42 CFR Part 84 N95 standard.\n' +
'Reliable Honeywell quality for particulate protection.\n' +
'Critical component for maintaining respiratory safety.',
rating: 4.7,
reviews: 90,
sold: '400+',
tags: [
'honeywell 7506n95', 'n95 filter cartridge', 'non oil particulate filter', 'niosh n95 filter', 'bayonet n95 filter',
'construction dust filter', 'sanding respirator filter', 'grinding particulate filter', 'replacement n95 filter', 'reusable mask filter',
'low profile filter', 'woodworking n95 filter', 'honeywell north compatible', 'reliable particulate ppe', 'essential n95 component'
]
},
{
id: 'flexible-low-profile-p100-filter-75ffp100-honeywell',
title: 'Flexible, Low Profile P100 Filter 75FFP100 Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/16M237_AS01',
desc: 'Flexible Low Profile P100 Filter 75FFP100 Honeywell offers highest filtration efficiency.\n' +
'P100 filters ≥99.97% of oil- and non-oil particulates.\n' +
'Flexible, low-profile design improves downward visibility.\n' +
'Bayonet connection for quick attachment to Honeywell respirators.\n' +
'Ideal for welding fumes, pharmaceutical dust, asbestos, and high-hazard particles.\n' +
'Compatible with North 5500, 7700, 5400, and other series masks.\n' +
'Essential high-efficiency replacement filter for reusable systems.\n' +
'Certified to NIOSH 42 CFR Part 84 P100 standard.\n' +
'Premium Honeywell filter for maximum particulate protection.\n' +
'Critical component for high-risk dust and fume environments.',
rating: 4.8,
reviews: 100,
sold: '450+',
tags: [
'75ffp100 filter', 'p100 honeywell filter', 'low profile p100', 'flexible particulate filter', 'niosh p100 filter',
'welding fume p100', 'pharmaceutical dust filter', 'asbestos protection filter', 'bayonet p100 filter', 'high efficiency filter',
'reusable mask p100', 'north series compatible', 'high hazard particulate', 'premium honeywell filter', 'maximum dust protection'
]
},
{
id: 'organic-vapor-cartridge-n75001l-honeywell',
title: 'Organic Vapor Cartridge N75001L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/16M239_AS01',
desc: 'Organic Vapor Cartridge N75001L Honeywell protects against organic vapors.\n' +
'Activated carbon filter removes benzene, toluene, xylene, and many solvents.\n' +
'Bayonet connection for quick, secure attachment to Honeywell masks.\n' +
'Low breathing resistance design improves user comfort.\n' +
'Compatible with North 5500, 7700, 5400, and other half/full face masks.\n' +
'Ideal for painting, spraying, degreasing, and chemical handling.\n' +
'Certified to NIOSH for organic vapor protection.\n' +
'Essential cartridge for environments with solvent vapors.\n' +
'Reliable Honeywell quality for gas and vapor safety.\n' +
'Critical respiratory protection component.',
rating: 4.8,
reviews: 85,
sold: '350+',
tags: [
'n75001l cartridge', 'organic vapor honeywell', 'solvent vapor filter', 'niosh organic vapor', 'bayonet cartridge honeywell',
'painting respirator cartridge', 'spraying vapor protection', 'degreasing filter', 'chemical handling cartridge', 'low breathing cartridge',
'north mask compatible', 'activated carbon cartridge', 'gas vapor ppe', 'reliable honeywell filter', 'essential vapor protection'
]
},
{
id: 'organic-vapor-acid-gas-cartridge-n75003l-honeywell',
title: 'Organic Vapor & Acid Gas Cartridge N75003L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://us.evocdn.io/supplier/catalog/1252/product/original/nr-75SCL.jpg',
desc: 'Organic Vapor & Acid Gas Cartridge N75003L Honeywell protects against multiple hazards.\n' +
'Filters organic vapors plus chlorine, hydrogen chloride, sulfur dioxide, and chlorine dioxide.\n' +
'Activated carbon and chemical absorbent media for broad protection.\n' +
'Bayonet connection for fast, secure fit on Honeywell respirators.\n' +
'Low breathing resistance for improved comfort during use.\n' +
'Compatible with North 5500, 7700, 5400 series half and full face masks.\n' +
'Ideal for chemical plants, laboratories, water treatment, and cleaning.\n' +
'Certified to NIOSH for organic vapor and acid gas protection.\n' +
'Versatile cartridge for mixed gas and vapor environments.\n' +
'Trusted Honeywell quality for multi-hazard respiratory safety.',
rating: 4.8,
reviews: 80,
sold: '300+',
tags: [
'n75003l cartridge', 'organic acid gas filter', 'multi gas honeywell', 'niosh organic acid', 'bayonet multi cartridge',
'chemical plant respirator', 'laboratory gas protection', 'water treatment cartridge', 'cleaning vapor filter', 'low breathing multi',
'north compatible cartridge', 'activated carbon acid', 'broad spectrum ppe', 'versatile gas cartridge', 'trusted honeywell multi'
]
},
{
id: 'multi-gas-vapor-cartridge-75scl-honeywell',
title: 'Multi-Gas Vapor Cartridge 75SCL Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.grainger.com/product/16M240_AS01',
desc: 'Multi-Gas Vapor Cartridge 75SCL Honeywell protects against wide range of gases.\n' +
'ABEK rated for organic, inorganic, acid gases, ammonia, and derivatives.\n' +
'High-capacity media extends service life in mixed atmospheres.\n' +
'Bayonet connection for quick attachment to Honeywell masks.\n' +
'Low breathing resistance improves user comfort.\n' +
'Compatible with North 5500, 7700, 5400 series respirators.\n' +
'Ideal for chemical plants, laboratories, emergency response, and industrial cleaning.\n' +
'Certified to NIOSH for multi-gas and vapor protection.\n' +
'Versatile cartridge for complex chemical environments.\n' +
'Professional-grade Honeywell filter for broad-spectrum safety.',
rating: 4.9,
reviews: 75,
sold: '280+',
tags: [
'75scl cartridge', 'multi gas honeywell', 'abek cartridge', 'broad spectrum filter', 'niosh multi gas',
'chemical plant multi cartridge', 'laboratory vapor protection', 'emergency response filter', 'industrial cleaning cartridge', 'low breathing multi',
'north compatible multi', 'high capacity abek', 'complex chemical ppe', 'versatile gas protection', 'professional honeywell cartridge'
]
},
{
id: 'ammonia-and-methylamine-respirator-cartridges-n75004l-honeywell',
title: 'Ammonia And Methylamine Respirator Cartridges N75004L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/16M238_AS01',
desc: 'Ammonia and Methylamine Cartridge N75004L Honeywell protects against ammonia and methylamine.\n' +
'Specialized chemical absorbent media for effective gas removal.\n' +
'Bayonet connection for quick, secure attachment to Honeywell masks.\n' +
'Low breathing resistance design for improved comfort.\n' +
'Compatible with North 5500, 7700, 5400 series half/full face masks.\n' +
'Ideal for refrigeration, fertilizer production, agriculture, and cleaning.\n' +
'Certified to NIOSH for ammonia and methylamine protection.\n' +
'Essential cartridge for ammonia-related gas hazards.\n' +
'Reliable Honeywell quality for specialized respiratory needs.\n' +
'Critical protection in ammonia-handling environments.',
rating: 4.7,
reviews: 65,
sold: '250+',
tags: [
'n75004l cartridge', 'ammonia methylamine filter', 'specialized gas cartridge', 'niosh ammonia protection', 'bayonet ammonia cartridge',
'refrigeration gas mask', 'fertilizer production filter', 'agriculture ammonia cartridge', 'cleaning ammonia protection', 'low breathing ammonia',
'north compatible ammonia', 'chemical absorbent cartridge', 'ammonia hazard ppe', 'reliable honeywell filter', 'specialized respiratory cartridge'
]
},
{
id: 'acid-gases-cartridge-n75002l-honeywell',
title: 'Acid Gases Cartridge N75002L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn11.bigcommerce.com/s-8715e/images/stencil/1280x1280/products/559/381562/381562__04666.1683663738.png?c=2?imbypass=on',
desc: 'Acid Gases Cartridge N75002L Honeywell protects against acid gases and vapors.\n' +
'Filters chlorine, hydrogen chloride, sulfur dioxide, chlorine dioxide, hydrogen sulfide.\n' +
'Activated carbon and chemical absorbent media for effective gas removal.\n' +
'Bayonet connection for quick, secure attachment to Honeywell respirators.\n' +
'Low breathing resistance improves user comfort during extended wear.\n' +
'Compatible with North 5500, 7700, 5400 series half and full face masks.\n' +
'Ideal for water treatment, chemical processing, metal pickling, and cleaning.\n' +
'Certified to NIOSH for acid gas protection.\n' +
'Reliable Honeywell cartridge for environments with corrosive acid gases.\n' +
'Essential respiratory filter for acid-related industrial hazards.',
rating: 4.7,
reviews: 70,
sold: '260+',
tags: [
'n75002l cartridge', 'acid gas honeywell', 'chlorine hydrogen chloride filter', 'sulfur dioxide cartridge', 'niosh acid gas',
'bayonet acid cartridge', 'water treatment respirator', 'chemical processing filter', 'metal pickling cartridge', 'low breathing acid',
'north compatible acid', 'corrosive gas ppe', 'reliable honeywell acid', 'industrial acid protection', 'essential acid gas filter'
]
},
{
id: 'full-face-mask-5400-series-honeywell',
title: 'Full Face Mask 5400 Series Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2024/03/5000en.jpg',
desc: 'Full Face Mask 5400 Series Honeywell is an economical full-face respirator.\n' +
'Panoramic polycarbonate visor offers wide field of view with good optics.\n' +
'Soft silicone face seal provides secure, comfortable fit.\n' +
'Twin bayonet cartridge connection for fast filter changes.\n' +
'5-point adjustable head harness for balanced weight distribution.\n' +
'Speech diaphragm allows clear communication while masked.\n' +
'Ideal for painting, chemical handling, welding fumes, and general industrial use.\n' +
'Certified to EN 136 Class 2 and NIOSH standards.\n' +
'Cost-effective full-face solution from trusted Honeywell.\n' +
'Reliable protection for medium to high hazard respiratory tasks.',
rating: 4.8,
reviews: 120,
sold: '400+',
tags: [
'5400 series full face', 'economical full face mask', 'honeywell 5400', 'panoramic visor respirator', 'en 136 class 2',
'painting full face', 'chemical handling mask', 'welding fume protection', 'speech diaphragm mask', 'bayonet full face',
'adjustable head harness', 'silicone face seal', 'medium hazard respirator', 'cost effective full face', 'reliable honeywell mask'
]
},
{
id: 'full-face-mask-5000-series-bls',
title: 'Full Face Mask 5000 Series BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/12/BLS_3150_0076.jpg',
desc: 'Full Face Mask 5000 Series BLS offers premium protection with wide visor.\n' +
'Large polycarbonate lens provides excellent field of vision and optics.\n' +
'Soft hypoallergenic silicone seal conforms comfortably to face.\n' +
'Twin bayonet connection for quick cartridge/filter changes.\n' +
'5-point adjustable head harness distributes weight evenly.\n' +
'Speech diaphragm ensures clear voice9sok now good you did it most of images but as you did before try one more time and start genrating from this full-face-mask-5000-series-bls till end ok start'
},
{
id: 'full-face-mask-3000-series-bls',
title: 'Full Face Mask 3000 Series BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/12/BLS_3150next_0497.jpg',
desc: 'Full Face Mask 3000 Series BLS provides excellent vision and reliable protection.\n' +
'Panoramic visor offers wide, distortion-free field of view.\n' +
'Soft silicone face seal ensures comfortable, secure fit.\n' +
'Twin bayonet cartridge system for fast filter changes.\n' +
'5-point adjustable head harness for balanced comfort.\n' +
'Speech diaphragm allows clear communication.\n' +
'Ideal for painting, spraying, chemical handling, and welding fumes.\n' +
'Certified to EN 136 Class 2 for full-face respiratory protection.\n' +
'High-quality BLS mask for medium to high hazard tasks.\n' +
'Professional respirator with great visibility and comfort.',
rating: 4.8,
reviews: 110,
sold: '380+',
tags: [
'bls 3000 full face', 'panoramic full face mask', 'en 136 class 2 bls', 'silicone seal respirator', 'painting full face mask',
'chemical handling bls', 'welding fume protection', 'speech diaphragm full face', 'bayonet cartridge mask', 'adjustable harness bls',
'medium hazard respirator', 'wide vision full face', 'professional bls mask', 'comfortable full face ppe', 'reliable visibility mask'
]
},
{
id: 'full-face-mask-2000-series-bls',
title: 'Full Face Mask 2000 Series BLS',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2023/10/BLS_2000_32_livelli_ST.jpg',
desc: 'Full Face Mask 2000 Series BLS is a comfortable, reliable full-face respirator.\n' +
'Clear polycarbonate visor provides good field of view.\n' +
'Soft silicone face seal conforms well for secure fit.\n' +
'Twin bayonet connection for quick, secure filter attachment.\n' +
'5-point adjustable head harness distributes weight evenly.\n' +
'Speech diaphragm ensures clear voice communication.\n' +
'Ideal for painting, light chemical work, dust, and general industrial use.\n' +
'Certified to EN 136 Class 2 for full-face protection.\n' +
'Cost-effective BLS full-face solution for medium-risk tasks.\n' +
'Comfortable, durable mask for everyday respiratory hazards.',
rating: 4.7,
reviews: 130,
sold: '420+',
tags: [
'bls 2000 full face', 'comfortable full face mask', 'en 136 class 2 bls', 'silicone seal 2000', 'painting full face respirator',
'light chemical mask', 'general industrial full face', 'speech diaphragm bls', 'bayonet connection mask', 'adjustable harness full face',
'medium risk respirator', 'cost effective full face', 'durable bls mask', 'everyday respiratory ppe', 'reliable full face protection'
]
},
{
id: 'full-face-mask',
title: 'Full Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.sirvisual.com/Attachment/100/P8722_AutoImg_Main.jpg',
desc: 'Full Face Mask provides complete face, eye, and respiratory protection.\n' +
'Large polycarbonate lens offers wide, distortion-free vision.\n' +
'Soft silicone face seal conforms comfortably to most face shapes.\n' +
'Twin bayonet cartridge system for fast filter changes.\n' +
'5-point adjustable head harness for secure, balanced fit.\n' +
'Speech diaphragm allows clear communication while wearing.\n' +
'Ideal for chemical handling, painting, welding fumes, and asbestos.\n' +
'Certified to EN 136 and NIOSH standards for full-face respirators.\n' +
'High-quality reusable mask for high-hazard environments.\n' +
'Professional-grade full-face protection for serious respiratory risks.',
rating: 4.8,
reviews: 90,
sold: '300+',
tags: [
'full face respirator mask', 'wide vision full face', 'silicone seal full face', 'en 136 full face', 'niosh full face mask',
'chemical handling full face', 'painting respirator mask', 'welding fume protection', 'asbestos removal mask', 'speech diaphragm full face',
'bayonet cartridge system', 'adjustable head harness mask', 'high hazard respiratory', 'professional full face ppe', 'reusable full face mask'
]
},
{
id: 'comfortable-half-face-mask-7700-series-honeywell',
title: 'Comfortable Half Face Mask 7700 Series Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/41u0SylnevL._AC_UF894,1000_QL80_.jpg',
desc: 'Comfortable Half Face Mask 7700 Series Honeywell is designed for all-day wear.\n' +
'Premium silicone facepiece provides exceptional seal and comfort.\n' +
'Low-profile design improves downward visibility.\n' +
'Twin bayonet cartridge connection for quick filter changes.\n' +
'Cradle suspension head harness distributes weight evenly.\n' +
'Ideal for painting, spraying, chemical handling, and welding fumes.\n' +
'Compatible with wide range of Honeywell cartridges and filters.\n' +
'Certified to NIOSH and EN 140 standards.\n' +
'Superior comfort and fit for extended shift use.\n' +
'Premium Honeywell half-face respirator for demanding tasks.',
rating: 4.7,
reviews: 150,
sold: '600+',
tags: [
'7700 series half face', 'comfortable silicone mask', 'low profile respirator', 'bayonet half face', 'cradle suspension mask',
'painting half face mask', 'chemical handling respirator', 'welding fume half mask', 'niosh en 140 mask', 'extended shift respirator',
'premium honeywell mask', 'all day comfort ppe', 'superior fit half face', 'demanding task respirator', 'high quality half mask'
]
},
{
id: 'economical-half-face-mask-hm-500-series-honeywell',
title: 'Economical Half Face Mask HM 500 Series Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://assets.fishersci.com/TFS-Assets/CCG/Honeywell/product-images/HM501.jpg-650.jpg',
desc: 'Economical Half Face Mask HM 500 Series Honeywell offers reliable protection at low cost.\n' +
'Soft thermoplastic elastomer facepiece provides good seal and comfort.\n' +
'Twin bayonet connection for fast cartridge/filter attachment.\n' +
'Adjustable head harness for secure fit.\n' +
'Low-profile design maintains good visibility.\n' +
'Ideal for painting, light chemical work, dust, and general industrial tasks.\n' +
'Compatible with Honeywell North cartridges and filters.\n' +
'Certified to NIOSH and EN 140 standards.\n' +
'Affordable, durable half-face respirator for medium-risk environments.\n' +
'Great value Honeywell solution for everyday respiratory needs.',
rating: 4.6,
reviews: 140,
sold: '550+',
tags: [
'hm 500 half face', 'economical respirator', 'thermoplastic elastomer mask', 'bayonet economical mask', 'low profile half face',
'painting half mask', 'light chemical respirator', 'general industrial mask', 'niosh en 140 economical', 'adjustable harness half face',
'value honeywell mask', 'medium risk respiratory', 'affordable half face ppe', 'durable everyday mask', 'great value respirator'
]
},
{
id: 'half-face-mask',
title: 'Half Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn11.bigcommerce.com/s-1gtbylhith/images/stencil/1280x1280/products/31923/64080/3m-personal-safety-division-3m-half-facepiece-reusable-respirator-750137081aad__09869.1734371945.jpg?c=1',
desc: 'Half Face Mask provides reusable respiratory protection with excellent comfort.\n' +
'Premium silicone facepiece conforms to face for secure seal.\n' +
'Twin bayonet cartridge connection for quick filter changes.\n' +
'Low-profile design improves downward and peripheral vision.\n' +
'4-point adjustable head harness for balanced fit.\n' +
'Ideal for painting, spraying, chemical handling, and welding fumes.\n' +
'Compatible with wide range of cartridges and filters.\n' +
'Certified to EN 140 and NIOSH standards.\n' +
'High-quality reusable half-face respirator for medium to high hazards.\n' +
'Professional-grade mask for extended industrial use.',
rating: 4.7,
reviews: 100,
sold: '400+',
tags: [
'premium half face mask', 'silicone half respirator', 'bayonet half face', 'low profile respirator', 'painting half mask',
'chemical handling half face', 'welding fume protection', 'en 140 niosh mask', 'adjustable harness half', 'reusable medium hazard',
'high quality half face', 'extended industrial use', 'comfortable half mask', 'professional respiratory ppe', 'versatile half face mask'
]
},
{
id: 'half-face-mask',
title: 'Half Face Mask',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.blsgroup.com/wp-content/uploads/2020/11/BLS_4000next-S_front.jpg',
desc: 'Half Face Mask (BLS 4000 series) offers advanced comfort and protection.\n' +
'Soft silicone facepiece with excellent seal and durability.\n' +
'Bayonet connection system for fast, secure cartridge attachment.\n' +
'Low breathing resistance design improves user comfort.\n' +
'Adjustable head harness with 4-point suspension.\n' +
'Ideal for painting, chemical handling, dust, and welding fumes.\n' +
'Compatible with BLS wide range of filters and cartridges.\n' +
'Certified to EN 140 for half-face respiratory protection.\n' +
'High-quality BLS half-face mask for demanding tasks.\n' +
'Comfortable, reliable reusable respirator.',
rating: 4.8,
reviews: 95,
sold: '380+',
tags: [
'bls 4000 half face', 'advanced half mask', 'silicone half respirator', 'bayonet bls mask', 'low breathing half face',
'painting half mask bls', 'chemical handling respirator', 'welding fume half face', 'en 140 bls mask', 'adjustable suspension mask',
'high quality bls respirator', 'demanding task half face', 'comfortable reusable mask', 'reliable bls ppe', 'versatile half face protection'
]
},
{
id: 'fenzy-aeris-mini-scba-honeywell',
title: 'Fenzy Aeris Mini SCBA Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn11.bigcommerce.com/s-48a5mdsq3u/images/stencil/1280x1280/products/1492/6624/Honeywell-Fenzy-Aeris-Confort-Type-2-SCBA-SX-P-producttype_2797__71799.1680989808.JPG?c=2?imbypass=on',
desc: 'Fenzy Aeris Mini SCBA Honeywell is a compact self-contained breathing apparatus.\n' +
'Lightweight design with reduced profile for better mobility.\n' +
'30-minute air cylinder (or optional 15/20 min) for escape or short entry.\n' +
'Demand valve with positive pressure for constant airflow.\n' +
'Full-face mask with wide visor and speech diaphragm.\n' +
'Low-pressure whistle alarm signals low air supply.\n' +
'Ideal for confined space entry, rescue, firefighting standby, and industrial escape.\n' +
'Certified to EN 137 and NFPA standards for SCBA.\n' +
'Compact, reliable SCBA for emergency breathing protection.\n' +
'Trusted Honeywell Fenzy quality for life-critical situations.',
rating: 4.9,
reviews: 50,
sold: '150+',
tags: [
'fenzy aeris mini scba', 'compact breathing apparatus', 'lightweight scba', 'en 137 scba', 'nfpa scba honeywell',
'confined space escape', 'rescue breathing apparatus', 'firefighting standby scba', 'low pressure alarm', 'full face scba mask',
'30 minute cylinder', 'demand valve scba', 'industrial escape ppe', 'life critical breathing', 'trusted honeywell scba'
]
},
{
id: 'bio-s-cape-with-3l-composite-air-cylinder-honeywell',
title: 'Bio-S-Cape with 3L Composite Air Cylinder Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/3TAV2_AS01',
desc: 'Bio-S-Cape with 3L Composite Air Cylinder Honeywell is an emergency escape breathing device.\n' +
'Lightweight composite cylinder provides 15–20 minutes of air supply.\n' +
'Hood-style full-face piece with wide visor for easy donning.\n' +
'Constant flow regulator ensures steady breathing.\n' +
'Bright orange bag for quick identification in emergencies.\n' +
'Ideal for escape from fire, toxic gas release, or oxygen-deficient atmospheres.\n' +
'Certified to EN 1146 and SOLAS for emergency escape.\n' +
'Compact, ready-to-use EEBD for industrial and marine use.\n' +
'Reliable Honeywell escape solution for sudden hazards.\n' +
'Critical life-saving device for rapid evacuation.',
rating: 4.8,
reviews: 60,
sold: '200+',
tags: [
'bio s cape honeywell', 'emergency escape breathing', '3l composite cylinder', 'en 1146 escape device', 'solas eebd',
'fire escape hood', 'toxic gas escape', 'oxygen deficient protection', 'constant flow regulator', 'bright orange eebd',
'industrial escape device', 'marine emergency breathing', 'quick donning hood', 'life saving escape ppe', 'reliable honeywell eebd'
]
},
{
id: 'aeris-scba-1823231-honeywell',
title: 'AERIS SCBA 1823231 Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.hacsons.com/wp-content/uploads/2022/02/Honeywell-Fenzy-Aeris-Confort-Type-2-SCBA-SX-P__23938.1634804566-1.jpg',
desc: 'AERIS SCBA 1823231 Honeywell is a professional self-contained breathing apparatus.\n' +
'30-minute or 45-minute cylinder options for extended entry.\n' +
'Backplate with harness system distributes weight evenly.\n' +
'Demand valve with positive pressure and low-pressure alarm.\n' +
'Full-face mask with wide visor and speech diaphragm.\n' +
'Buddy breather connection for emergency rescue.\n' +
'Ideal for firefighting, confined space entry, hazmat, and industrial rescue.\n' +
'Certified to EN 137 and NFPA 1981 standards for structural firefighting.\n' +
'Rugged, reliable SCBA for life-threatening atmospheres.\n' +
'Trusted Honeywell Fenzy quality for professional responders.',
rating: 4.9,
reviews: 40,
sold: '120+',
tags: [
'aeris scba honeywell', 'professional breathing apparatus', '30 minute scba', 'en 137 scba', 'nfpa 1981 firefighting',
'confined space scba', 'hazmat breathing apparatus', 'demand valve scba', 'buddy breather connection', 'full face scba mask',
'rugged scba harness', 'low pressure alarm', 'industrial rescue scba', 'structural firefighting ppe', 'trusted honeywell scba'
]
},
{
id: 'dust-mask-hm-102',
title: 'DUST MASK HM 102',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/61fZ9Z9Z9ZL._AC_UF1000,1000_QL80_.jpg',
desc: 'Dust Mask HM 102 is a basic, low-cost disposable mask for light dust.\n' +
'Cone shape with adjustable aluminum nose bridge for better fit.\n' +
'Elastic ear loops or head straps for secure wear.\n' +
'Multi-layer filtration media blocks large dust particles.\n' +
'Breathable design minimizes breathing resistance.\n' +
'Foldable for easy pocket storage between uses.\n' +
'Ideal for sweeping, light sanding, woodworking, and general cleaning.\n' +
'Meets basic NIOSH N95 or EN149 FFP1 equivalent standards.\n' +
'Very economical solution for occasional light dust exposure.\n' +
'Simple, effective entry-level dust protection.',
rating: 4.2,
reviews: 300,
sold: '2000+',
tags: [
'hm 102 dust mask', 'basic disposable mask', 'cone dust mask', 'light dust protection', 'niosh n95 equivalent',
'en149 ffp1 mask', 'sweeping dust mask', 'light sanding respirator', 'woodworking basic mask', 'breathable dust mask',
'elastic ear loop mask', 'adjustable nose bridge', 'foldable dust mask', 'economical dust ppe', 'occasional dust protection'
]
},
{
id: 'surgical-face-mask-hs-1101',
title: 'SURGICAL FACE MASK HS-1101',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/71fZ9Z9Z9ZL._AC_UF1000,1000_QL80_.jpg',
desc: 'Surgical Face Mask HS-1101 provides 3-ply medical-grade protection.\n' +
'Fluid-resistant outer layer, melt-blown filter middle layer, soft inner layer.\n' +
'High filtration efficiency against droplets, dust, and bacteria.\n' +
'Adjustable nose strip and elastic ear loops for secure fit.\n' +
'Breathable design reduces heat buildup during long wear.\n' +
'Packaged in boxes for convenient dispensing.\n' +
'Ideal for medical, dental, clinical, and general hygiene use.\n' +
'Meets ASTM F2100 Level 1 or equivalent standards.\n' +
'Disposable, hygienic mask for everyday protection.\n' +
'Affordable, reliable barrier against respiratory droplets.',
rating: 4.4,
reviews: 500,
sold: '5000+',
tags: [
'surgical face mask', '3 ply medical mask', 'fluid resistant mask', 'astm f2100 level 1', 'medical protection mask',
'dental hygiene mask', 'clinical face mask', 'breathable surgical mask', 'adjustable nose strip', 'elastic ear loop mask',
'droplet barrier mask', 'disposable hygiene mask', 'high filtration mask', 'affordable medical ppe', 'reliable droplet protection'
]
},
{
id: 'sandblast-hood-np-503',
title: 'Sandblast Hood NP-503',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.duniasafety.com/wp-content/uploads/2017/12/Sanblast-Hood-NP503-1.jpg',
desc: 'Sandblast Hood NP-503 provides full head and face protection during abrasive blasting.\n' +
'Heavy-duty vinyl hood with large clear visor for good visibility.\n' +
'Inner cape protects neck and shoulders from rebound media.\n' +
'Adjustable drawstring and elastic for secure fit.\n' +
'Breathing tube connection for supplied-air respirator system.\n' +
'Reinforced seams withstand high-pressure blasting conditions.\n' +
'Ideal for sandblasting, shot blasting, grit blasting, and surface preparation.\n' +
'Certified to standards for abrasive blasting hoods.\n' +
'Durable hood for maximum protection in abrasive environments.\n' +
'Essential PPE for safe abrasive blasting operations.',
rating: 4.7,
reviews: 80,
sold: '300+',
tags: [
'sandblast hood', 'abrasive blasting hood', 'full head protection', 'clear visor hood', 'supplied air hood',
'sandblasting ppe', 'shot blasting hood', 'grit blasting protection', 'surface preparation hood', 'heavy duty vinyl hood',
'inner cape hood', 'adjustable drawstring hood', 'reinforced seam hood', 'high pressure blasting', 'essential abrasive ppe'
]
},
{
id: 'chemical-hood-np-312',
title: 'Chemical Hood NP-312',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.duniasafety.com/wp-content/uploads/2017/12/Sanblast-Safety-Hood-NP312.jpg',
desc: 'Chemical Hood NP-312 protects head, face, and neck from chemical splashes and vapors.\n' +
'Clear PVC visor with anti-fog coating for good visibility.\n' +
'Flexible vinyl hood with extended cape for shoulder coverage.\n' +
'Adjustable drawstring and elastic for secure fit.\n' +
'Breathing tube port for connection to supplied-air system.\n' +
'Resists many acids, alkalis, and liquid chemicals.\n' +
'Ideal for chemical handling, tank cleaning, spill response, and decontamination.\n' +
'Certified for chemical splash and limited gas protection.\n' +
'Durable hood for hazardous liquid and vapor environments.\n' +
'Essential PPE for safe chemical exposure work.',
rating: 4.6,
reviews: 90,
sold: '400+',
tags: [
'chemical hood', 'splash resistant hood', 'clear pvc visor', 'chemical cape hood', 'supplied air chemical hood',
'tank cleaning protection', 'spill response hood', 'decontamination ppe', 'acid alkali resistant hood', 'adjustable chemical hood',
'extended cape hood', 'hazardous vapor protection', 'durable chemical hood', 'essential chemical ppe', 'safe liquid exposure hood'
]
},
{
id: 'single-respirator-half-face-mask-np-305',
title: 'Single Respirator Half Face Mask NP-305',
price: 'Contact for Price',
originalPrice: null,
image: 'https://image.made-in-china.com/2f0j00FcEoyHZsLLkz/Single-Cartridge-Safety-PVC-Half-Face-Np-305-Dust-Mask-Gas-Protective-Respiratory-Mask-Quality-Respirator.webp',
desc: 'Single Respirator Half Face Mask NP-305 provides basic cartridge protection.\n' +
'Soft thermoplastic elastomer facepiece for comfortable seal.\n' +
'Single bayonet connection for one cartridge or filter.\n' +
'Adjustable head harness for secure fit.\n' +
'Low-profile design maintains good downward visibility.\n' +
'Ideal for light chemical handling, dust, and nuisance odors.\n' +
'Compatible with standard single cartridges and particulate filters.\n' +
'Certified to EN 140 for half-face respirators.\n' +
'Economical entry-level reusable half-face mask.\n' +
'Simple, effective respiratory protection for low-risk tasks.',
rating: 4.5,
reviews: 150,
sold: '800+',
tags: [
'single cartridge half face', 'basic respirator mask', 'en 140 half face', 'thermoplastic elastomer mask', 'light chemical respirator',
'dust protection half face', 'nuisance odor mask', 'low profile single bayonet', 'adjustable harness mask', 'economical half mask',
'entry level respiratory', 'low risk ppe mask', 'simple reusable mask', 'effective half face protection', 'basic cartridge mask'
]
},
{
id: 'twin-respirator-half-face-mask-np-306',
title: 'Twin Respirator Half Face Mask NP-306',
price: 'Contact for Price',
originalPrice: null,
image: 'https://urbantextiles.co.ke/wp-content/uploads/2026/01/Np306-Double-Respirator-for-sale-in-nairobi-kenya.png',
desc: 'Twin Respirator Half Face Mask NP-306 offers enhanced filtration with two cartridges.\n' +
'Soft facepiece material provides comfortable seal.\n' +
'Twin bayonet connections for dual cartridge or filter use.\n' +
'Adjustable 4-point head harness for balanced fit.\n' +
'Low breathing resistance due to dual filter design.\n' +
'Ideal for painting, spraying, light chemical work, and dust.\n' +
'Compatible with wide range of twin cartridges and filters.\n' +
'Certified to EN 140 for half-face respiratory protection.\n' +
'Durable, comfortable half-face mask for medium-risk tasks.\n' +
'Reliable twin-cartridge solution for better protection.',
rating: 4.7,
reviews: 200,
sold: '1000+',
tags: [
'twin cartridge half face', 'dual filter respirator', 'en 140 twin mask', 'soft facepiece mask', 'painting twin respirator',
'spraying half face mask', 'light chemical twin mask', 'low breathing twin', 'adjustable harness twin', 'medium risk respirator',
'durable twin half face', 'comfortable twin cartridge', 'reliable twin mask', 'better protection half face', 'twin bayonet mask'
]
},
{
id: 'cartridges-filters-rc-201',
title: 'Cartridges & Filters, RC-201',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/41tBqBNs5lL._AC_UF1000,1000_QL80_.jpg',
desc: 'Cartridges & Filters RC-201 provide organic vapor and particulate protection.\n' +
'Activated carbon layer removes organic vapors and solvents.\n' +
'Particulate pre-filter captures dust and aerosols.\n' +
'Bayonet connection for quick attachment to compatible half/full face masks.\n' +
'Low breathing resistance for comfortable extended wear.\n' +
'Ideal for painting, degreasing, solvent handling, and light dust.\n' +
'Certified to EN 14387 for organic vapor and P2 particulate.\n' +
'Essential replacement cartridge for reusable respirators.\n' +
'Cost-effective multi-purpose filter for medium-risk tasks.\n' +
'Reliable protection against common industrial vapors and dust.',
rating: 4.5,
reviews: 120,
sold: '600+',
tags: [
'rc-201 cartridge', 'organic vapor filter', 'particulate pre filter', 'en 14387 rc-201', 'painting cartridge filter',
'solvent handling filter', 'degreasing respirator filter', 'bayonet organic vapor', 'low breathing cartridge', 'multi purpose filter',
'reusable mask cartridge', 'medium risk vapor dust', 'cost effective filter', 'reliable industrial cartridge', 'essential vapor protection'
]
},
{
id: 'cartridges-filters-rc-203',
title: 'Cartridges & Filters, RC-203',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.proguardsafety.my/cdn/shop/products/RC-203_1200x1200.jpg?v=1553918958',
desc: 'Cartridges & Filters RC-203 offer multi-gas protection in one unit.\n' +
'Filters organic vapors, inorganic gases, acid gases, and ammonia.\n' +
'High-capacity media for extended service life in mixed atmospheres.\n' +
'Bayonet connection for fast attachment to compatible masks.\n' +
'Low breathing resistance improves user comfort.\n' +
'Ideal for chemical plants, laboratories, water treatment, and cleaning.\n' +
'Certified to EN 14387 ABEK2 for broad-spectrum gas protection.\n' +
'Versatile replacement cartridge for multi-hazard environments.\n' +
'Reliable filter for complex chemical exposure.\n' +
'Essential multi-gas cartridge for professional use.',
rating: 4.6,
reviews: 100,
sold: '500+',
tags: [
'rc-203 cartridge', 'multi gas filter', 'abek2 cartridge', 'en 14387 multi gas', 'chemical plant filter',
'laboratory multi cartridge', 'water treatment gas protection', 'cleaning vapor filter', 'bayonet multi gas', 'low breathing multi gas',
'broad spectrum cartridge', 'mixed hazard filter', 'versatile replacement cartridge', 'professional multi gas ppe', 'complex exposure filter'
]
},
{
id: 'cartridges-filters-rc-202',
title: 'Cartridges & Filters, RC-202',
price: 'Contact for Price',
originalPrice: null,
image: 'https://image.made-in-china.com/202f0j00VqZbQjYhlwko/Blue-Eagle-RC202-Organic-Vapors-Respirator-Cartridge-Filter.jpg',
desc: 'Cartridges & Filters RC-202 provide high-efficiency particulate protection.\n' +
'P2 filter media captures fine dust, mists, and non-oil aerosols.\n' +
'Bayonet connection for quick, secure attachment to masks.\n' +
'Low-profile design maintains good visibility.\n' +
'Ideal for sanding, grinding, woodworking, and general dust.\n' +
'Compatible with most half-face and full-face respirators.\n' +
'Certified to EN 143 for P2 particulate filtration.\n' +
'Essential replacement filter for dusty environments.\n' +
'Reliable, cost-effective particulate cartridge.\n' +
'Critical component for dust and aerosol respiratory safety.',
rating: 4.5,
reviews: 110,
sold: '550+',
tags: [
'rc-202 cartridge', 'p2 particulate filter', 'high efficiency dust', 'en 143 p2 filter', 'sanding respirator filter',
'grinding dust cartridge', 'woodworking particulate', 'bayonet dust filter', 'low profile p2', 'general dust protection',
'reusable mask filter', 'dust aerosol cartridge', 'cost effective p2', 'reliable particulate filter', 'essential dust ppe'
]
},
{
id: 'safety-53-helmet-mounted',
title: 'Safety 53 Helmet Mounted',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn.shopify.com/s/files/1/0561/8696/2009/files/4f64e34c-e-e220-4ec5-bee2-98ffaedeb627.__CR0_0_970_600_PT0_SX970_V1_2048x2048.jpg?v=1669083869',
desc: 'Safety 53 Helmet Mounted earmuffs attach directly to safety helmets.\n' +
'High noise reduction SNR 28–30 dB for loud industrial environments.\n' +
'Soft foam cushions provide comfort during long shifts.\n' +
'Universal mounting system fits most slotted hard hats.\n' +
'Adjustable arms allow precise positioning over ears.\n' +
'Foldable design for storage when not in use.\n' +
'Ideal for construction, manufacturing, demolition, and heavy machinery.\n' +
'Certified to EN 352-3 for helmet-mounted hearing protection.\n' +
'Reliable combination of head and hearing protection.\n' +
'Essential PPE for noisy helmet-required work sites.',
rating: 4.6,
reviews: 90,
sold: '400+',
tags: [
'helmet mounted earmuffs', 'safety 53 earmuffs', 'snr 30 helmet muff', 'en 352-3 hearing protection', 'universal mounting earmuff',
'construction helmet muff', 'manufacturing noise protection', 'demolition hearing ppe', 'soft foam cushions', 'adjustable arm earmuff',
'foldable helmet mounted', 'heavy machinery hearing', 'head hearing combination', 'noisy helmet work', 'essential combined ppe'
]
},
{
id: 'safety-earmuffs-em92bk',
title: 'Safety Earmuffs EM92BK',
price: 'Contact for Price',
originalPrice: null,
image: 'https://blueeagle-safety.com/wp-content/uploads/2024/11/EM92BK-1.jpg',
desc: 'Safety Earmuffs EM92BK provide reliable over-the-head hearing protection.\n' +
'SNR 28–30 dB noise reduction for medium to high noise levels.\n' +
'Soft foam cushions and padded headband for all-day comfort.\n' +
'Adjustable headband with steel wire for secure fit.\n' +
'Lightweight ABS cups resist impact and chemicals.\n' +
'Foldable design for easy storage in tool bags.\n' +
'Ideal for construction, woodworking, mowing, and general industry.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Comfortable, durable earmuffs for daily noise exposure.\n' +
'Essential PPE for preventing hearing damage.',
rating: 4.5,
reviews: 110,
sold: '500+',
tags: [
'em92bk earmuffs', 'over the head hearing', 'snr 30 earmuffs', 'padded headband muff', 'en 352-1 hearing protection',
'construction ear muff', 'woodworking noise muff', 'foldable earmuff', 'lightweight hearing ppe', 'adjustable steel headband',
'abs cup earmuff', 'general industry hearing', 'comfortable noise muff', 'prevent hearing loss', 'daily noise protection'
]
},
{
id: 'verishield-vs130-passive-earmuff-honeywell',
title: 'VeriShield™ VS130 Passive Earmuff Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://noisyworld.org/wp-content/uploads/2023/03/Honeywell-Howard-Leight-Verishield-VS130-Review.jpg',
desc: 'VeriShield VS130 Passive Earmuff Honeywell offers high attenuation for extreme noise.\n' +
'SNR 35–37 dB reduction for very loud industrial environments.\n' +
'Air Flow Control technology reduces breathing resistance.\n' +
'Large ear cups with memory foam cushions for superior comfort.\n' +
'Dielectric design safe around electrical hazards.\n' +
'Adjustable headband with telescoping arms for precise fit.\n' +
'Ideal for heavy machinery, shooting ranges, airports, and demolition.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Premium Honeywell earmuff for maximum noise isolation.\n' +
'Professional-grade hearing protection for high-decibel settings.',
rating: 4.8,
reviews: 130,
sold: '600+',
tags: [
'verishield vs130 earmuff', 'high attenuation muff', 'snr 35 earmuff', 'air flow control muff', 'en 352-1 honeywell',
'heavy machinery hearing', 'shooting range earmuff', 'airport noise protection', 'demolition earmuff', 'memory foam cushions',
'dielectric hearing protection', 'adjustable telescoping muff', 'premium honeywell muff', 'maximum noise isolation', 'professional hearing ppe'
]
},
{
id: 'safety-53-earmuffs',
title: 'Safety 53 Earmuffs',
price: 'Contact for Price',
originalPrice: null,
image: 'https://pavetool.com/cdn/shop/products/iq_ear_muff_in_box.jpg?v=1521822175',
desc: 'Safety 53 Earmuffs provide reliable over-the-head hearing protection.\n' +
'SNR 28–30 dB noise reduction for medium to high noise levels.\n' +
'Soft foam cushions and padded headband for comfort.\n' +
'Adjustable headband with steel wire for secure fit.\n' +
'Lightweight ABS cups resist impact and chemicals.\n' +
'Foldable design for easy storage.\n' +
'Ideal for construction, manufacturing, mowing, and general industry.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Durable, comfortable earmuffs for daily noise exposure.\n' +
'Essential PPE for preventing hearing loss.',
rating: 4.6,
reviews: 100,
sold: '450+',
tags: [
'safety 53 earmuffs', 'over the head muff', 'snr 30 earmuff', 'padded headband muff', 'en 352-1 hearing protection',
'construction ear muff', 'manufacturing noise muff', 'foldable earmuff', 'lightweight hearing ppe', 'adjustable steel headband',
'abs cup earmuff', 'general industry hearing', 'comfortable noise muff', 'prevent hearing loss', 'daily noise protection'
]
},
{
id: 'disposable-foam-earplugs-nrr-32-corded',
title: 'Disposable Foam Earplugs NRR 32 Corded',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.powerpak.net/media/catalog/product/r/o/rockland_61524_ear-plugs.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=&width=',
desc: 'Disposable Foam Earplugs NRR 32 Corded offer high noise reduction with convenience.\n' +
'NRR 32 dB blocks loud industrial and construction noise.\n' +
'Slow-recovery foam expands to fit ear canal securely.\n' +
'Attached cord prevents loss and allows hanging around neck.\n' +
'Smooth tapered shape for easy insertion and removal.\n' +
'Individually wrapped for hygiene and easy distribution.\n' +
'Ideal for construction, manufacturing, shooting ranges, and mowing.\n' +
'Certified to ANSI S3.19 for high noise reduction rating.\n' +
'Cost-effective, high-performance disposable earplugs.\n' +
'Essential hearing protection for loud work environments.',
rating: 4.5,
reviews: 300,
sold: '2000+',
tags: [
'corded foam earplugs', 'nrr 32 earplugs', 'disposable hearing protection', 'slow recovery foam', 'construction earplugs',
'manufacturing noise plugs', 'shooting range earplugs', 'ansi s3.19 earplugs', 'attached cord plugs', 'individually wrapped earplugs',
'easy insertion earplugs', 'high noise reduction', 'cost effective hearing', 'loud environment ppe', 'essential disposable earplugs'
]
},
{
id: 'disposable-foam-uncorded-earplugs-nrr-32db',
title: 'Disposable Foam Uncorded Earplugs NRR 32dB',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/71tjrM3KO4L._AC_SL1500_.jpg',
desc: 'Disposable Foam Uncorded Earplugs NRR 32dB deliver high noise blocking.\n' +
'NRR 32 dB reduces loud industrial and construction sounds.\n' +
'Slow-recovery polyurethane foam expands for custom fit.\n' +
'Tapered shape allows easy insertion and removal.\n' +
'Soft material provides all-day comfort without pressure.\n' +
'Individually wrapped for hygiene and portability.\n' +
'Ideal for construction, manufacturing, mowing, and shooting.\n' +
'Certified to ANSI S3.19 for reliable noise reduction.\n' +
'Low-cost, high-performance disposable hearing protection.\n' +
'Essential uncorded earplugs for preventing hearing damage.',
rating: 4.4,
reviews: 350,
sold: '2500+',
tags: [
'uncorded foam earplugs', 'nrr 32 disposable', 'slow recovery earplugs', 'construction uncorded', 'manufacturing hearing plugs',
'mowing noise protection', 'shooting uncorded plugs', 'ansi s3.19 earplugs', 'tapered foam plugs', 'individually wrapped uncorded',
'all day comfort earplugs', 'high noise blocking', 'low cost hearing ppe', 'essential uncorded earplugs', 'prevent hearing damage'
]
},
{
id: 'laser-lite-ll-30-contoured-t-shape-corded-earplugs-honeywell',
title: 'Laser Lite LL-30 Contoured T-Shape Corded Earplugs Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/718CJZlb2pL._AC_UF1000,1000_QL80_.jpg',
desc: 'Laser Lite LL-30 Contoured T-Shape Corded Earplugs Honeywell offer high visibility and comfort.\n' +
'NRR 32 dB noise reduction for loud industrial environments.\n' +
'Self-adjusting polyurethane foam expands for custom fit.\n' +
'Bright multi-color swirled design makes compliance checks easy.\n' +
'Attached cord prevents loss and allows hanging around neck.\n' +
'T-shape contour improves insertion and retention.\n' +
'Ideal for construction, manufacturing, shooting ranges, and mowing.\n' +
'Certified to ANSI S3.19 for reliable hearing protection.\n' +
'High-visibility earplugs that workers can easily spot.\n' +
'Comfortable, effective corded disposable earplugs.',
rating: 4.7,
reviews: 200,
sold: '1000+',
tags: [
'laser lite ll-30', 'contoured t shape earplugs', 'corded high visibility', 'nrr 32 honeywell', 'self adjusting foam',
'construction compliance plugs', 'manufacturing earplugs', 'shooting range corded', 'multi color earplugs', 'tapered insertion plugs',
'individually wrapped corded', 'high noise reduction plugs', 'easy compliance earplugs', 'comfortable honeywell plugs', 'effective disposable earplugs'
]
},
{
id: 'smart-fit-corded-earplugs-honeywell',
title: 'Smart Fit Corded Earplugs Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn11.bigcommerce.com/s-bvnx6999xw/images/stencil/1280x1280/products/251/694/SMF30__18770.1558551734.jpg?c=2',
desc: 'Smart Fit Corded Earplugs Honeywell conform to ear canal temperature.\n' +
'Heat-activated material softens and shapes for personalized fit.\n' +
'NRR 30–33 dB noise reduction for medium to high noise levels.\n' +
'Attached cord prevents loss and allows hanging around neck.\n' +
'Smooth tapered design for easy insertion and removal.\n' +
'Bright colors for easy compliance checks.\n' +
'Ideal for construction, manufacturing, mowing, and general industry.\n' +
'Certified to ANSI S3.19 for reliable hearing protection.\n' +
'Adaptive, comfortable corded disposable earplugs.\n' +
'High-performance earplugs that fit better over time.',
rating: 4.6,
reviews: 180,
sold: '800+',
tags: [
'smart fit earplugs', 'heat activated earplugs', 'corded conforming plugs', 'nrr 30 honeywell', 'personalized fit earplugs',
'construction adaptive plugs', 'manufacturing hearing protection', 'mowing corded earplugs', 'smooth tapered plugs', 'bright compliance earplugs',
'individually wrapped smart', 'high noise reduction plugs', 'adaptive comfort earplugs', 'better fit disposable', 'high performance honeywell plugs'
]
},
{
id: 'smartfit-tapered-tpe-corded-earplugs-honeywell',
title: 'SmartFit Tapered TPE Corded Earplugs Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://static.grainger.com/rp/s/is/image/Grainger/3GYE1_1',
desc: 'SmartFit Tapered TPE Corded Earplugs Honeywell offer reusable comfort.\n' +
'TPE material conforms to ear canal for custom fit.\n' +
'NRR 30–33 dB noise reduction for loud work environments.\n' +
'Detachable cord system allows corded or uncorded use.\n' +
'Tapered shape for easy insertion and secure retention.\n' +
'Washable and reusable for cost savings.\n' +
'Ideal for construction, manufacturing, shooting ranges, and mowing.\n' +
'Certified to ANSI S3.19 for reliable hearing protection.\n' +
'Durable, adaptive earplugs with versatile cord option.\n' +
'Comfortable Honeywell solution for repeated use.',
rating: 4.7,
reviews: 160,
sold: '700+',
tags: [
'smartfit tpe earplugs', 'tapered reusable earplugs', 'corded detachable plugs', 'nrr 30 honeywell', 'washable earplugs',
'construction reusable plugs', 'manufacturing hearing protection', 'shooting range tpe', 'adaptive fit earplugs', 'detachable cord system',
'tapered insertion plugs', 'high noise reduction reusable', 'durable honeywell earplugs', 'versatile corded plugs', 'comfortable repeated use'
]
},
{
id: 'disposable-foam-earplug-uncorded-nrr-33',
title: 'Disposable Foam Earplug Uncorded NRR 33',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/21RibFGI8oL._AC_UF1000,1000_QL80_.jpg',
desc: 'Disposable Foam Earplug Uncorded NRR 33 delivers maximum noise blocking.\n' +
'NRR 33 dB reduces very loud industrial and construction noise.\n' +
'Slow-recovery foam expands for custom ear canal fit.\n' +
'Smooth tapered shape for easy insertion and removal.\n' +
'Soft material provides comfort during extended wear.\n' +
'Individually wrapped for hygiene and easy distribution.\n' +
'Ideal for heavy machinery, shooting ranges, demolition, and airports.\n' +
'Certified to ANSI S3.19 for highest noise reduction rating.\n' +
'High-performance, low-cost disposable earplugs.\n' +
'Essential hearing protection for extreme noise environments.',
rating: 4.5,
reviews: 400,
sold: '3000+',
tags: [
'uncorded nrr 33 earplug', 'maximum noise reduction', 'slow recovery foam', 'disposable high nrr', 'heavy machinery earplugs',
'shooting range uncorded', 'demolition hearing protection', 'airport noise plugs', 'tapered foam earplugs', 'individually wrapped uncorded',
'comfortable high nrr', 'extreme noise ppe', 'low cost high performance', 'essential extreme hearing', 'industrial nrr 33 plugs'
]
},
{
id: 'disposable-foam-earplug-corded-nrr-33',
title: 'Disposable Foam Earplug Corded NRR 33',
price: 'Contact for Price',
originalPrice: null,
image: 'https://cdn11.bigcommerce.com/s-82xqw/images/stencil/1280x1280/products/2386/29870/apijcmpsh__87053.1729993984.jpg?c=2',
desc: 'Disposable Foam Earplug Corded NRR 33 provides highest noise reduction.\n' +
'NRR 33 dB blocks extreme industrial and construction noise.\n' +
'Slow-recovery polyurethane foam expands for custom fit.\n' +
'Attached cord prevents loss and allows hanging around neck.\n' +
'Tapered shape for easy insertion and secure retention.\n' +
'Individually wrapped for hygiene and portability.\n' +
'Ideal for heavy machinery, shooting ranges, demolition, and airports.\n' +
'Certified to ANSI S3.19 for maximum hearing protection.\n' +
'High-performance corded disposable earplugs.\n' +
'Essential PPE for preventing hearing damage in loud settings.',
rating: 4.6,
reviews: 380,
sold: '2800+',
tags: [
'corded nrr 33 earplug', 'maximum noise blocking', 'slow recovery corded', 'disposable high nrr corded', 'heavy machinery hearing',
'shooting range corded plugs', 'demolition nrr 33', 'airport extreme noise', 'tapered corded earplugs', 'individually wrapped corded',
'comfortable high nrr corded', 'extreme noise protection', 'high performance corded', 'essential loud setting ppe', 'industrial nrr 33 corded'
]
},
{
id: 'verishield-vs120-passive-earmuff-honeywell',
title: 'VeriShield™ VS120 Passive Earmuff Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://trzykamido.civ.pl/img/A+/Zatyczki/Honeywell/Nauszniki/VS%20120/EN/1.jpg',
desc: 'VeriShield VS120 Passive Earmuff Honeywell offers reliable noise reduction.\n' +
'SNR 30–32 dB for medium to high noise industrial environments.\n' +
'Air Flow Control technology reduces heat and moisture buildup.\n' +
'Large ear cups with memory foam cushions for comfort.\n' +
'Dielectric design safe around electrical hazards.\n' +
'Adjustable telescoping headband for precise fit.\n' +
'Ideal for construction, manufacturing, mowing, and general industry.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Comfortable, high-quality earmuff from Honeywell.\n' +
'Professional hearing protection for daily noisy tasks.',
rating: 4.7,
reviews: 120,
sold: '550+',
tags: [
'verishield vs120 earmuff', 'medium noise reduction', 'snr 30 honeywell muff', 'air flow control earmuff', 'en 352-1 vs120',
'construction hearing muff', 'manufacturing earmuff', 'memory foam cushions', 'dielectric vs120', 'adjustable telescoping muff',
'general industry hearing', 'comfortable honeywell muff', 'professional noise protection', 'daily noisy tasks ppe', 'reliable vs120 earmuff'
]
},
{
id: 'verishield-vs110-passive-earmuff-honeywell',
title: 'VeriShield™ VS110 Passive Earmuff Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.gmesupply.com/media/catalog/product/h/s/hs-1035198-vs.jpg',
desc: 'VeriShield VS110 Passive Earmuff Honeywell is lightweight for lower noise levels.\n' +
'SNR 25–28 dB reduction suitable for moderate industrial noise.\n' +
'Slim ear cups with soft foam cushions for comfort.\n' +
'Adjustable headband with telescoping arms for fit.\n' +
'Dielectric construction safe near electrical equipment.\n' +
'Foldable design for easy storage.\n' +
'Ideal for light manufacturing, assembly, mowing, and general tasks.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Comfortable, economical earmuff from Honeywell.\n' +
'Reliable hearing protection for everyday moderate noise.',
rating: 4.6,
reviews: 140,
sold: '600+',
tags: [
'verishield vs110 earmuff', 'lightweight earmuff', 'snr 25 honeywell', 'slim cup earmuff', 'en 352-1 vs110',
'light manufacturing hearing', 'assembly noise muff', 'mowing earmuff', 'dielectric light muff', 'foldable vs110',
'general task hearing', 'comfortable honeywell muff', 'economical noise protection', 'moderate noise ppe', 'reliable lightweight earmuff'
]
},
{
id: 'safety-works-earmuffs-em92rd',
title: 'Safety Works Earmuffs EM92RD',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.muaragabe.com/wp-content/uploads/2017/12/Earmuff-EM92RD.png',
desc: 'Safety Works Earmuffs EM92RD provide reliable over-the-head protection.\n' +
'SNR 28–30 dB noise reduction for medium to high noise levels.\n' +
'Soft foam cushions and padded headband for comfort.\n' +
'Adjustable headband with steel wire for secure fit.\n' +
'Lightweight ABS cups resist impact and chemicals.\n' +
'Foldable design for easy storage.\n' +
'Ideal for construction, woodworking, mowing, and general industry.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Comfortable, durable earmuffs for daily noise exposure.\n' +
'Essential PPE for preventing hearing damage.',
rating: 4.5,
reviews: 100,
sold: '450+',
tags: [
'em92rd earmuffs', 'over the head muff', 'snr 30 safety works', 'padded headband muff', 'en 352-1 earmuff',
'construction ear muff', 'woodworking noise protection', 'foldable earmuff', 'lightweight hearing ppe', 'adjustable steel headband',
'abs cup earmuff', 'general industry hearing', 'comfortable noise muff', 'prevent hearing loss', 'daily noise protection'
]
},
{
id: 'safety-earmuffs-em62',
title: 'Safety Earmuffs EM62',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.echo-usa.com/getattachment/ee7422ec-e220-4ec5-bee2-22925f01d344/v2_ECHO_PersonalProtection_99988801520_StaticShot1.jpg',
desc: 'Safety Earmuffs EM62 provide compact, reliable hearing protection.\n' +
'SNR 27–29 dB reduction for moderate to high noise levels.\n' +
'Soft foam cushions for comfort during long shifts.\n' +
'Adjustable headband for secure fit.\n' +
'Lightweight design reduces fatigue.\n' +
'Foldable for easy storage in tool bags.\n' +
'Ideal for construction, manufacturing, mowing, and workshops.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Durable, comfortable earmuffs for everyday noise.\n' +
'Essential PPE for protecting hearing on the job.',
rating: 4.4,
reviews: 110,
sold: '500+',
tags: [
'em62 earmuffs', 'compact hearing protection', 'snr 27 earmuff', 'soft foam muff', 'en 352-1 em62',
'construction compact muff', 'manufacturing ear muff', 'foldable lightweight muff', 'adjustable headband muff', 'workshop noise protection',
'daily hearing ppe', 'comfortable compact earmuff', 'prevent hearing loss', 'reliable moderate noise', 'essential job ear protection'
]
},
{
id: 'safety-earmuffs-em68',
title: 'Safety Earmuffs EM68',
price: 'Contact for Price',
originalPrice: null,
image: 'https://noisyworld.org/wp-content/uploads/2019/11/Best-Bluetooth-Noise-Reduction-Earmuffs-1024x683.jpg',
desc: 'Safety Earmuffs EM68 offer durable hearing protection with adjustable fit.\n' +
'SNR 29–31 dB reduction for high noise industrial environments.\n' +
'Soft foam cushions and padded headband for comfort.\n' +
'Telescoping headband allows precise adjustment.\n' +
'Lightweight ABS cups resist impact and chemicals.\n' +
'Foldable design for easy storage.\n' +
'Ideal for heavy machinery, construction, demolition, and manufacturing.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'Reliable earmuffs for demanding noisy tasks.\n' +
'Essential PPE for preventing hearing damage.',
rating: 4.5,
reviews: 95,
sold: '400+',
tags: [
'em68 earmuffs', 'durable hearing muff', 'snr 29 earmuff', 'telescoping headband muff', 'en 352-1 em68',
'heavy machinery ear protection', 'construction high noise', 'demolition earmuff', 'foldable durable muff', 'soft foam cushions',
'padded headband muff', 'industrial noise ppe', 'reliable high noise muff', 'prevent hearing loss', 'demanding task hearing protection'
]
},
{
id: 'best-safety-earmuffs-em66',
title: 'Best Safety Earmuffs EM66',
price: 'Contact for Price',
originalPrice: null,
image: 'https://trzykamido.civ.pl/img/A+/Zatyczki/Honeywell/Nauszniki/VS%20120/EN/1.jpg',
desc: 'Best Safety Earmuffs EM66 provide optimal comfort and high attenuation.\n' +
'SNR 30–32 dB reduction for loud industrial and construction noise.\n' +
'Thick memory foam cushions for superior comfort.\n' +
'Adjustable headband with steel wire for secure fit.\n' +
'Lightweight ABS cups resist impact and chemicals.\n' +
'Foldable design for easy storage.\n' +
'Ideal for heavy machinery, shooting ranges, demolition, and manufacturing.\n' +
'Certified to EN 352-1 and ANSI S3.19 standards.\n' +
'High-quality earmuffs for maximum noise isolation.\n' +
'Professional hearing protection for extreme noise environments.',
rating: 4.6,
reviews: 105,
sold: '450+',
tags: [
'em66 earmuffs', 'optimal comfort muff', 'snr 30 best earmuff', 'memory foam cushions', 'en 352-1 best muff',
'heavy machinery hearing protection', 'shooting range earmuff', 'demolition high noise', 'foldable professional muff', 'adjustable steel headband',
'abs cup best earmuff', 'industrial extreme noise', 'maximum noise isolation', 'professional hearing ppe', 'high quality earmuff'
]
},
{
id: 'verishield-vs110h-helmet-earmuff-honeywell',
title: 'VeriShield™ VS110H Helmet Earmuff Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/ed/ed5c01b203103d0250dad4decc80651f2209eaff.jpg',
desc: 'VeriShield VS110H Helmet Earmuff Honeywell attaches securely to hard hats.\n' +
'SNR 25–28 dB reduction for moderate to high noise levels.\n' +
'Slim ear cups with soft foam cushions for comfort.\n' +
'Universal mounting arms fit most slotted safety helmets.\n' +
'Adjustable positioning for precise ear coverage.\n' +
'Foldable design when not in use.\n' +
'Ideal for construction, manufacturing, mining, and utilities.\n' +
'Certified to EN 352-3 for helmet-mounted hearing protection.\n' +
'Comfortable, reliable combination of head and hearing safety.\n' +
'Essential PPE for helmet-required noisy work sites.',
rating: 4.7,
reviews: 80,
sold: '350+',
tags: [
'vs110h helmet earmuff', 'helmet mounted muff', 'snr 25 honeywell helmet', 'universal mounting earmuff', 'en 352-3 helmet muff',
'construction helmet hearing', 'manufacturing head muff', 'mining noise protection', 'foldable helmet muff', 'soft foam helmet earmuff',
'adjustable positioning muff', 'combined head hearing ppe', 'reliable helmet noise', 'essential noisy helmet work', 'comfortable comfortable helmet earmuff'
]
},
{
id: 'metal-detectable-laser-trak-earplug-honeywell',
title: 'Metal Detectable Laser Trak Earplug Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://accsafety.com/wp-content/uploads/2025/02/Ear-Plugs-LT-30.jpg',
desc: 'Metal Detectable Laser Trak Earplug Honeywell is designed for food & process industries.\n' +
'NRR 32 dB noise reduction with metal detectable cord and plug.\n' +
'Brightly colored for easy compliance checks and visibility.\n' +
'Self-adjusting foam expands for custom ear canal fit.\n' +
'Smooth tapered shape for easy insertion and removal.\n' +
'Attached detectable cord prevents loss in production areas.\n' +
'Ideal for food processing, pharmaceutical, and clean room environments.\n' +
'Certified to ANSI S3.19 for high noise reduction.\n' +
'Detectable earplugs that meet strict industry safety standards.\n' +
'Essential hearing protection for contamination-controlled areas.',
rating: 4.8,
reviews: 70,
sold: '300+',
tags: [
'metal detectable earplug', 'laser trak honeywell', 'nrr 32 detectable', 'food processing earplugs', 'detectable cord plugs',
'pharmaceutical hearing protection', 'clean room earplugs', 'ansi s3.19 detectable', 'bright compliance plugs', 'self adjusting foam',
'tapered detectable earplugs', 'contamination control ppe', 'essential detectable hearing', 'process industry earplugs', 'high noise detectable'
]
},
{
id: 'foam-earplugs-corded-304l-honeywell',
title: 'Foam Earplugs Corded 304L Honeywell',
price: 'Contact for Price',
originalPrice: null,
image: 'https://m.media-amazon.com/images/I/61O+CVXBOzL._AC_UF1000,1000_QL80_.jpg',
desc: 'Foam Earplugs Corded 304L Honeywell provide reliable noise reduction.\n' +
'NRR 32–33 dB blocks loud industrial and construction noise.\n' +
'Slow-recovery foam expands for custom ear canal fit.\n' +
'Attached cord prevents loss and allows hanging around neck.\n' +
'Smooth tapered shape for easy insertion and removal.\n' +
'Individually wrapped for hygiene and easy distribution.\n' +
'Ideal for construction, manufacturing, mowing, and shooting.\n' +
'Certified to ANSI S3.19 for high noise reduction.\n' +
'Comfortable, effective corded disposable earplugs.\n' +
'Trusted Honeywell hearing protection for daily use.',
rating: 4.5,
reviews: 150,
sold: '800+',
tags: [
'304l corded earplugs', 'foam corded honeywell', 'nrr 32 corded', 'slow recovery corded', 'construction hearing plugs',
'manufacturing corded earplugs', 'mowing noise protection', 'shooting corded plugs', 'tapered foam corded', 'individually wrapped honeywell',
'high noise reduction corded', 'comfortable honeywell plugs', 'daily use hearing ppe', 'reliable corded earplugs', 'essential noise protection'
]
},
{
id: 'earplugs-np32k',
title: 'Earplugs NP32K',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.mkhardware.com.my/images/thumbs/0000296_ear-protector.jpeg',
desc: 'Earplugs NP32K are disposable foam earplugs with high noise reduction.\n' +
'NRR 32 dB blocks industrial and construction noise effectively.\n' +
'Slow-recovery foam expands to fit ear canal comfortably.\n' +
'Smooth tapered design for easy insertion and removal.\n' +
'Bright color for easy compliance checks.\n' +
'Individually wrapped for hygiene and portability.\n' +
'Ideal for construction, manufacturing, mowing, and workshops.\n' +
'Certified to ANSI S3.19 for reliable hearing protection.\n' +
'Low-cost, high-performance disposable earplugs.\n' +
'Essential PPE for preventing hearing damage.',
rating: 4.4,
reviews: 200,
sold: '1000+',
tags: [
'np32k earplugs', 'disposable foam np32k', 'nrr 32 disposable', 'slow recovery earplugs', 'construction np32k',
'manufacturing hearing plugs', 'mowing noise protection', 'workshop earplugs', 'tapered foam plugs', 'individually wrapped np32k',
'high noise reduction plugs', 'low cost disposable', 'essential hearing ppe', 'prevent hearing loss', 'reliable foam earplugs'
]
},
{
id: 'earplugs-np35k',
title: 'Earplugs NP35K',
price: 'Contact for Price',
originalPrice: null,
image: 'https://www.echo-usa.com/getattachment/ee7422ec-e220-4ec5-bee2-22925f01d344/v2_ECHO_PersonalProtection_99988801520_StaticShot1.jpg',
desc: 'Earplugs NP35K are comfortable disposable foam earplugs for industrial use.\n' +
'NRR 33–35 dB provides high noise reduction in loud environments.\n' +
'Soft slow-recovery foam expands gently for custom fit.\n' +
'Tapered shape allows easy insertion and secure retention.\n' +
'Bright color for quick compliance checks.\n' +
'Individually wrapped for hygiene and easy distribution.\n' +
'Ideal for heavy machinery, construction, demolition, and shooting.\n' +
'Certified to ANSI S3.19 for superior hearing protection.\n' +
'High-performance, low-cost disposable earplugs.\n' +
'Essential PPE for extreme noise exposure.',
rating: 4.4,
reviews: 180,
sold: '900+',
tags: [
'np35k earplugs', 'high nrr disposable', 'nrr 33–35 foam', 'soft slow recovery', 'heavy machinery earplugs',
'construction np35k', 'demolition hearing protection', 'shooting range plugs', 'tapered disposable earplugs', 'individually wrapped np35k',
'superior noise reduction', 'low cost high performance', 'essential extreme noise ppe', 'comfortable disposable plugs', 'industrial hearing protection'
]
},
],




  'Laboratory safety System': [
  {
    id: 'sysbel-portable-eyewash-station-60-l',
    title: 'SYSBEL Portable Eyewash Station (60 L)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00JOwQVtcqAzbg/Sysbel-CE-Approved-ANSI-Standard-304-Stainless-Steel-Push-Handle-Wall-Mounted-Emergency-Safety-Eyewash-Station.webp',
    desc: 'SYSBEL Portable Eyewash Station (60 L) provides high-capacity gravity-fed emergency eye flushing.\n' +
          'Large 60-liter polyethylene tank ensures 15+ minutes of continuous flow at ANSI-required rate.\n' +
          'Dual aerated spray heads deliver gentle, wide-coverage irrigation to both eyes simultaneously.\n' +
          'Pull-down activation handle with stay-open valve for hands-free operation during use.\n' +
          'Built-in drain valve and dust cover protect water quality between uses.\n' +
          'Molded handles and low center of gravity for easy transport to remote lab areas.\n' +
          'Ideal for chemical laboratories, research facilities, field stations, and areas without plumbing.\n' +
          'Certified to ANSI Z358.1 and CE standards for emergency eyewash performance.\n' +
          'Reliable, high-volume portable solution for serious chemical splash incidents.\n' +
          'Essential life-saving equipment for maximum eye safety in hazardous environments.',
    rating: 4.8,
    reviews: 80,
    sold: '300+',
    tags: [
      'sysbel 60l eyewash', 'portable gravity eyewash', 'emergency eye flush station', 'ansi z358.1 portable', '60 liter eyewash',
      'chemical lab safety', 'field station eyewash', 'dual spray head eyewash', 'hands free activation', 'high capacity portable',
      'dust cover eyewash', 'easy transport eyewash', 'remote area safety', 'serious splash protection', 'life saving lab ppe'
    ]
  },
  {
    id: 'sysbel-portable-eyewash-station-30-l',
    title: 'SYSBEL Portable Eyewash Station (30 L)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00SNmQYEkGOgbT/Portable-Eye-Wash-Station-with-Mobile-Waste-Cart-A-.webp',
    desc: 'SYSBEL Portable Eyewash Station (30 L) is a compact gravity-fed unit for quick eye emergencies.\n' +
          '30-liter tank provides ANSI-compliant 15-minute flush duration at required flow rate.\n' +
          'Aerated twin spray heads deliver soft, effective irrigation to both eyes.\n' +
          'Pull-down stay-open activation for hands-free use during flushing.\n' +
          'Integrated dust cover and drain valve maintain water purity.\n' +
          'Molded side handles and balanced design for easy carrying in labs or field.\n' +
          'Perfect for smaller laboratories, mobile carts, classrooms, and temporary setups.\n' +
          'Certified to ANSI Z358.1 and CE for reliable emergency eyewash performance.\n' +
          'Space-saving portable eyewash ideal for budget-conscious safety programs.\n' +
          'Essential compact solution for immediate chemical eye exposure response.',
    rating: 4.7,
    reviews: 90,
    sold: '350+',
    tags: [
      'sysbel 30l eyewash', 'compact portable eyewash', 'gravity fed 30 liter', 'ansi z358.1 compact', 'twin aerated spray',
      'laboratory eyewash', 'mobile lab safety', 'hands free portable', 'dust cover compact', 'easy carry eyewash',
      'small lab protection', 'temporary setup eyewash', 'budget safety eyewash', 'quick eye flush', 'essential compact ppe'
    ]
  },
  {
    id: 'sysbel-portable-eyewash-station-with-mobile-waste-cart-30-l',
    title: 'SYSBEL Portable Eyewash Station With Mobile Waste Cart (30 L)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00SNmQYEkGOgbT/Portable-Eye-Wash-Station-with-Mobile-Waste-Cart-A-.webp',
    desc: 'SYSBEL Portable Eyewash Station with Mobile Waste Cart (30 L) combines flushing with waste containment.\n' +
          '30-liter gravity-fed eyewash tank meets ANSI 15-minute flush requirement.\n' +
          'Attached wheeled cart collects used water to prevent floor contamination.\n' +
          'Dual aerated spray heads provide gentle, simultaneous eye irrigation.\n' +
          'Pull-down activation with stay-open valve enables hands-free operation.\n' +
          'Lockable wheels and handle for easy movement across lab floors.\n' +
          'Ideal for cleanrooms, research labs, pharmaceutical areas, and spill-prone zones.\n' +
          'Certified to ANSI Z358.1 and CE standards for eyewash performance.\n' +
          'Mobile all-in-one solution for hygiene-conscious emergency response.\n' +
          'Practical portable eyewash with built-in environmental protection.',
    rating: 4.8,
    reviews: 60,
    sold: '200+',
    tags: [
      'sysbel waste cart eyewash', 'mobile waste eyewash', '30l gravity cart', 'ansi portable waste', 'cleanroom eyewash',
      'pharmaceutical safety station', 'spill containment eyewash', 'wheeled portable eyewash', 'hands free cart unit', 'lockable wheels eyewash',
      'hygiene emergency response', 'lab floor protection', 'all in one portable', 'environmental eyewash', 'practical lab ppe'
    ]
  },
  {
    id: 'sysbel-portable-eyewash-station-with-mobile-waste-cart-60-l',
    title: 'SYSBEL Portable Eyewash Station With Mobile Waste Cart (60 L)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00kmgtaFbEHTqA/60L-16gal-Portable-Emergency-Eyewash-with-Mobile-Waste-Cart-A-Poplyethylene-WG6000AD-.webp',
    desc: 'SYSBEL Portable Eyewash Station with Mobile Waste Cart (60 L) offers high-capacity eye flushing with waste management.\n' +
          '60-liter tank delivers extended ANSI-compliant 15+ minute flush duration.\n' +
          'Integrated mobile cart captures runoff water to maintain clean floors.\n' +
          'Twin aerated spray heads ensure gentle, effective dual-eye irrigation.\n' +
          'Pull-down stay-open handle allows hands-free continuous flushing.\n' +
          'Heavy-duty wheels and push handle for easy transport in large facilities.\n' +
          'Perfect for chemical plants, research labs, manufacturing, and high-risk zones.\n' +
          'Certified to ANSI Z358.1 and CE for reliable emergency eyewash performance.\n' +
          'Large-volume mobile unit for serious chemical splash preparedness.\n' +
          'Complete portable safety system with environmental consideration.',
    rating: 4.9,
    reviews: 50,
    sold: '180+',
    tags: [
      'sysbel 60l waste cart', 'high capacity mobile eyewash', '60 liter cart eyewash', 'ansi extended flush', 'chemical plant eyewash',
      'research lab safety station', 'manufacturing waste containment', 'heavy duty wheeled eyewash', 'hands free large unit', 'push handle portable',
      'high risk zone protection', 'large volume eyewash', 'environmental portable safety', 'complete mobile system', 'serious splash preparedness'
    ]
  },
  {
    id: 'portable-mobile-waste-cart',
    title: 'Portable Mobile Waste Cart',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/Nnok2xRuEa0/maxresdefault.jpg',
    desc: 'Portable Mobile Waste Cart collects used eyewash water for clean, safe disposal.\n' +
          'Durable polyethylene tank with large capacity for multiple flushes.\n' +
          'Lockable swivel casters allow easy movement and stable positioning.\n' +
          'Compatible with SYSBEL portable eyewash stations and similar units.\n' +
          'Integrated drain valve for controlled emptying after use.\n' +
          'Ergonomic push handle for simple transport across lab floors.\n' +
          'Ideal for cleanrooms, pharmaceutical labs, and spill-sensitive areas.\n' +
          'Prevents floor contamination and simplifies post-emergency cleanup.\n' +
          'Essential accessory for hygienic emergency eyewash compliance.\n' +
          'Practical mobile solution for maintaining lab cleanliness.',
    rating: 4.6,
    reviews: 40,
    sold: '150+',
    tags: [
      'mobile waste cart', 'eyewash waste collection', 'portable spill cart', 'polyethylene waste tank', 'lockable caster cart',
      'cleanroom waste solution', 'pharmaceutical cleanup', 'compatible eyewash cart', 'drain valve cart', 'ergonomic push cart',
      'post emergency cleanup', 'hygienic eyewash accessory', 'lab floor protection', 'spill sensitive cart', 'essential compliance cart'
    ]
  },
  {
    id: 'portable-eyewash-safety-53',
    title: 'PORTABLE EYEWASH SAFETY 53',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/o5jCedqmXkA/maxresdefault.jpg',
    desc: 'Portable Eyewash Safety 53 is a gravity-fed emergency unit for instant eye flushing.\n' +
          'Large-capacity tank delivers ANSI-required 15-minute continuous flow.\n' +
          'Dual aerated spray heads provide gentle, wide-coverage irrigation.\n' +
          'Pull-down activation with stay-open valve for hands-free use.\n' +
          'Dust cover and drain valve maintain water quality when stored.\n' +
          'Molded handles for easy transport to remote or temporary locations.\n' +
          'Ideal for laboratories, field research, workshops, and areas without plumbing.\n' +
          'Certified to ANSI Z358.1 for reliable emergency eyewash performance.\n' +
          'Dependable portable solution for chemical splash incidents.\n' +
          'Essential safety equipment for quick eye decontamination.',
    rating: 4.7,
    reviews: 70,
    sold: '250+',
    tags: [
      'portable eyewash safety 53', 'gravity fed portable', 'emergency eye station', 'ansi z358.1 portable', 'dual aerated heads',
      'laboratory eyewash', 'field research safety', 'hands free activation', 'dust cover portable', 'remote location eyewash',
      'chemical splash response', 'temporary setup eyewash', 'dependable portable unit', 'quick eye decontamination', 'essential lab ppe'
    ]
  },
  {
    id: 'eyewash-station-safety-53-e150-ms',
    title: 'EYEWASH STATION SAFETY 53 E150/MS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.shopify.com/s/files/1/0403/8760/8730/files/ansi-z358-1-681a3f5ede5e3_2048x2048.webp?v=1746552860',
    desc: 'Eyewash Station Safety 53 E150/MS is a wall-mounted bowl-type emergency unit.\n' +
          'Stainless steel bowl with dual aerated spray heads for eye/face flushing.\n' +
          'Push-handle or foot-pedal activation for instant water flow.\n' +
          'Stay-open valve allows hands-free continuous irrigation.\n' +
          'High-visibility yellow bowl enhances quick location in emergencies.\n' +
          'Wall mounting bracket included for secure installation.\n' +
          'Ideal for laboratories, chemical storage, manufacturing, and workshops.\n' +
          'Certified to ANSI Z358.1 for compliant eyewash performance.\n' +
          'Durable, corrosion-resistant station for long-term reliability.\n' +
          'Critical fixed eyewash for immediate chemical exposure response.',
    rating: 4.6,
    reviews: 65,
    sold: '220+',
    tags: [
      'safety 53 e150 eyewash', 'wall mounted bowl eyewash', 'stainless steel eyewash', 'ansi z358.1 station', 'push handle eyewash',
      'laboratory fixed eyewash', 'chemical storage safety', 'high visibility yellow', 'hands free bowl station', 'corrosion resistant eyewash',
      'manufacturing eyewash', 'workshop emergency unit', 'durable fixed eyewash', 'immediate splash response', 'critical lab ppe'
    ]
  },
  {
    id: 'eyewash-station-safety-53-b100-ms',
    title: 'EYEWASH STATION SAFETY 53 B100/MS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.shopify.com/s/files/1/0403/8760/8730/files/ansi-z358-1-681a3f5ede5e3_2048x2048.webp?v=1746552860',
    desc: 'Eyewash Station Safety 53 B100/MS is a compact bowl-type wall-mounted unit.\n' +
          'Stainless steel construction with dual aerated spray nozzles.\n' +
          'Push-lever activation with stay-open feature for continuous flow.\n' +
          'High-visibility yellow bowl for fast identification in emergencies.\n' +
          'Protective dust cover keeps nozzles clean when not in use.\n' +
          'Easy wall installation with included mounting bracket.\n' +
          'Ideal for laboratories, research facilities, schools, and small workshops.\n' +
          'Certified to ANSI Z358.1 for reliable eyewash performance.\n' +
          'Space-saving, durable eyewash for budget-conscious safety.\n' +
          'Essential fixed eyewash for quick eye and face decontamination.',
    rating: 4.7,
    reviews: 60,
    sold: '200+',
    tags: [
      'safety 53 b100 eyewash', 'compact bowl eyewash', 'stainless wall unit', 'ansi z358.1 compact', 'push lever eyewash',
      'laboratory small eyewash', 'research facility safety', 'yellow visibility bowl', 'dust cover station', 'easy install eyewash',
      'school lab protection', 'budget eyewash station', 'space saving fixed', 'quick face decontamination', 'essential compact ppe'
    ]
  },
  {
    id: 'eye-face-wash-and-shower-safety-53-s250-ms',
    title: 'EYE/FACE WASH AND SHOWER SAFETY 53 S250/MS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/sKvp1ZRVooU/sddefault.jpg',
    desc: 'Eye/Face Wash and Shower Safety 53 S250/MS is a combination emergency unit.\n' +
          'Overhead drench shower with pull-down activation for full-body flush.\n' +
          'Separate eye/face wash bowl with dual aerated spray heads.\n' +
          'Stay-open valves on both shower and eyewash for hands-free use.\n' +
          'High-visibility yellow components for rapid location.\n' +
          'Stainless steel construction resists corrosion in chemical areas.\n' +
          'Ideal for chemical storage, laboratories, manufacturing, and high-risk zones.\n' +
          'Certified to ANSI Z358.1 for compliant combination shower/eyewash.\n' +
          'Comprehensive decontamination station for serious exposures.\n' +
          'Critical life-safety equipment for maximum hazard protection.',
    rating: 4.8,
    reviews: 75,
    sold: '280+',
    tags: [
      'safety 53 s250 combination', 'emergency shower eyewash', 'full body drench unit', 'ansi z358.1 combination', 'pull down shower',
      'eye face wash bowl', 'stainless steel combo', 'high visibility yellow', 'chemical storage safety', 'manufacturing decontamination',
      'high risk zone unit', 'hands free combo', 'comprehensive exposure response', 'life safety shower', 'critical hazard ppe'
    ]
  },
  {
    id: 'wall-mounted-eye-face-wash-wg7023y-sysbel',
    title: 'Wall Mounted Eye/Face Wash WG7023Y SYSBEL',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00JOwQVtcqAzbg/Sysbel-CE-Approved-ANSI-Standard-304-Stainless-Steel-Push-Handle-Wall-Mounted-Emergency-Safety-Eyewash-Station.webp',
    desc: 'Wall Mounted Eye/Face Wash WG7023Y SYSBEL features high-visibility yellow bowl.\n' +
          '304 stainless steel construction for corrosion resistance in labs.\n' +
          'Dual aerated spray heads deliver gentle eye/face irrigation.\n' +
          'Push-handle activation with stay-open valve for hands-free flushing.\n' +
          'Protective dust cover keeps spray heads clean when idle.\n' +
          'Wall mounting bracket included for secure installation.\n' +
          'Ideal for chemical laboratories, research facilities, and industrial areas.\n' +
          'Certified to ANSI Z358.1 and CE for reliable eyewash performance.\n' +
          'Bright yellow design ensures fast identification in emergencies.\n' +
          'Durable, visible fixed eyewash for quick chemical splash response.',
    rating: 4.7,
    reviews: 85,
    sold: '300+',
    tags: [
      'sysbel wg7023y eyewash', 'yellow bowl eyewash', 'wall mounted stainless', 'ansi z358.1 sysbel', 'dual aerated yellow',
      'chemical lab eyewash', 'research facility station', 'push handle eyewash', 'dust cover wall unit', 'high visibility eyewash',
      'corrosion resistant wash', 'fast identification bowl', 'durable fixed eyewash', 'quick splash response', 'essential lab safety'
    ]
  },
  {
    id: 'wall-mounted-eye-face-wash-wg7023',
    title: 'Wall Mounted Eye/Face Wash WG7023',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00JOwQVtcqAzbg/Sysbel-CE-Approved-ANSI-Standard-304-Stainless-Steel-Push-Handle-Wall-Mounted-Emergency-Safety-Eyewash-Station.webp',
    desc: 'Wall Mounted Eye/Face Wash WG7023 SYSBEL is a standard stainless steel unit.\n' +
          '304 stainless construction resists corrosion from chemicals and moisture.\n' +
          'Twin aerated spray nozzles provide effective eye and face flushing.\n' +
          'Push-handle with stay-open valve enables hands-free continuous flow.\n' +
          'Dust cover protects nozzles when station is not in use.\n' +
          'Wall bracket included for secure, space-saving installation.\n' +
          'Ideal for laboratories, chemical storage, manufacturing, and workshops.\n' +
          'Certified to ANSI Z358.1 and CE for compliant eyewash performance.\n' +
          'Reliable fixed eyewash for immediate chemical exposure response.\n' +
          'Durable, low-maintenance safety station for everyday hazards.',
    rating: 4.7,
    reviews: 90,
    sold: '320+',
    tags: [
      'sysbel wg7023 eyewash', 'stainless wall eyewash', 'standard fixed eyewash', 'ansi z358.1 wg7023', 'twin aerated nozzles',
      'chemical storage eyewash', 'manufacturing lab safety', 'push handle station', 'dust cover eyewash', 'corrosion resistant unit',
      'wall bracket eyewash', 'low maintenance safety', 'immediate splash wash', 'reliable lab eyewash', 'essential fixed ppe'
    ]
  },
  {
    id: 'drench-hose-wg7012r',
    title: 'Drench Hose WG7012R',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00VFmaIgkMfuoZ/Drench-Hose-for-Deck-Mounting-Double-WG7012R-.webp',
    desc: 'Drench Hose WG7012R SYSBEL is a dual-head flexible emergency rinsing unit.\n' +
          'Two high-flow spray heads for simultaneous or targeted body flushing.\n' +
          'Flexible hose allows easy reach to affected areas.\n' +
          'Deck-mounted or portable installation options.\n' +
          'Squeeze-handle activation with stay-open feature.\n' +
          'Ideal for spot decontamination of eyes, face, arms, or body in labs.\n' +
          'Complements fixed eyewash stations for comprehensive response.\n' +
          'Certified to ANSI Z358.1 for drench hose performance.\n' +
          'Versatile, quick-response tool for chemical splash incidents.\n' +
          'Essential accessory for precise emergency rinsing.',
    rating: 4.6,
    reviews: 50,
    sold: '180+',
    tags: [
      'sysbel wg7012r hose', 'dual head drench hose', 'flexible emergency rinse', 'ansi z358.1 drench', 'deck mounted hose',
      'spot decontamination tool', 'lab chemical rinse', 'squeeze handle hose', 'stay open drench', 'targeted body flush',
      'complement eyewash', 'versatile splash response', 'quick rinse accessory', 'precise emergency hose', 'essential lab drench'
    ]
  },
  {
    id: 'drench-hose-wg7011r',
    title: 'Drench Hose WG7011R',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00hnwtugkdkpbA/Drench-Hose-for-Deck-Mounting-Single-WG7011R-.webp',
    desc: 'Drench Hose WG7011R SYSBEL is a single-head flexible emergency drench unit.\n' +
          'High-flow spray head for targeted rinsing of eyes, face, or body parts.\n' +
          'Flexible hose design allows precise application to affected areas.\n' +
          'Deck or wall mounting options for convenient access.\n' +
          'Squeeze-lever activation with stay-open valve for continuous flow.\n' +
          'Ideal for laboratories, chemical handling, and spot decontamination.\n' +
          'Complements fixed eyewash stations for full emergency coverage.\n' +
          'Certified to ANSI Z358.1 for drench hose performance.\n' +
          'Simple, effective tool for quick chemical splash response.\n' +
          'Essential accessory for accurate emergency rinsing.',
    rating: 4.6,
    reviews: 55,
    sold: '200+',
    tags: [
      'sysbel wg7011r hose', 'single head drench hose', 'flexible rinse unit', 'ansi z358.1 single hose', 'targeted emergency rinse',
      'laboratory spot flush', 'chemical handling hose', 'squeeze lever drench', 'stay open single hose', 'deck wall mounting',
      'complement fixed eyewash', 'quick splash response', 'accurate rinse tool', 'essential lab drench', 'simple emergency hose'
    ]
  },
  {
    id: 'pedestal-mounted-eye-face-wash-wg7033fy',
    title: 'Pedestal Mounted Eye/Face Wash WG7033FY',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00eOPTazQcOIbM/Laboratory-Equipment-Pedestal-Mounted-Emergency-Eye-Face-Wash-Station.webp',
    desc: 'Pedestal Mounted Eye/Face Wash WG7033FY SYSBEL features high-visibility yellow bowl.\n' +
          'Stainless steel pedestal and bowl for corrosion resistance.\n' +
          'Dual aerated spray heads deliver gentle eye/face irrigation.\n' +
          'Push-handle activation with stay-open valve for hands-free use.\n' +
          'Floor-mounted design for areas without wall space.\n' +
          'Dust cover protects nozzles when station is idle.\n' +
          'Ideal for large laboratories, chemical plants, and manufacturing floors.\n' +
          'Certified to ANSI Z358.1 and CE for compliant eyewash performance.\n' +
          'Bright yellow bowl ensures rapid location in emergencies.\n' +
          'Durable, visible pedestal eyewash for quick splash response.',
    rating: 4.8,
    reviews: 70,
    sold: '250+',
    tags: [
      'sysbel wg7033fy pedestal', 'yellow pedestal eyewash', 'floor mounted eyewash', 'ansi z358.1 pedestal', 'dual aerated pedestal',
      'large lab safety station', 'chemical plant eyewash', 'push handle pedestal', 'dust cover floor unit', 'high visibility pedestal',
      'corrosion resistant wash', 'rapid location eyewash', 'durable pedestal unit', 'quick splash pedestal', 'essential floor ppe'
    ]
  },
  {
    id: 'pedestal-mounted-eye-face-wash-wg7033f',
    title: 'Pedestal Mounted Eye/Face Wash WG7033F',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2022/03/20220308145416707.jpg',
    desc: 'Pedestal Mounted Eye/Face Wash WG7033F SYSBEL is a stainless steel floor unit.\n' +
          'Durable 304 stainless construction for harsh chemical environments.\n' +
          'Twin aerated spray nozzles provide effective eye/face flushing.\n' +
          'Push-handle with stay-open valve enables hands-free continuous flow.\n' +
          'Pedestal design ideal for open floor areas or large labs.\n' +
          'Protective dust cover keeps spray heads clean.\n' +
          'Perfect for manufacturing, research facilities, and high-risk zones.\n' +
          'Certified to ANSI Z358.1 and CE for reliable eyewash performance.\n' +
          'Corrosion-resistant pedestal eyewash for long-term use.\n' +
          'Fixed, high-capacity station for serious chemical exposures.',
    rating: 4.8,
    reviews: 75,
    sold: '270+',
    tags: [
      'sysbel wg7033f pedestal', 'stainless pedestal eyewash', 'floor mounted stainless', 'ansi z358.1 floor unit', 'twin aerated pedestal',
      'manufacturing eyewash', 'research facility pedestal', 'push handle floor wash', 'dust cover pedestal', 'corrosion resistant pedestal',
      'open floor safety', 'high risk zone eyewash', 'long term fixed wash', 'serious exposure station', 'essential pedestal ppe'
    ]
  },
  {
    id: 'combination-unit-wg7053fy',
    title: 'Combination Unit WG7053FY',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2022/03/20220308145124994.jpg',
    desc: 'Combination Unit WG7053FY SYSBEL integrates shower and eye/face wash with yellow visibility.\n' +
          'Overhead drench shower with pull-rod activation for full-body flush.\n' +
          'Separate eye/face wash bowl with dual aerated spray heads.\n' +
          'Stay-open valves on both systems for hands-free operation.\n' +
          'High-visibility yellow components for rapid emergency location.\n' +
          'Stainless steel construction resists corrosion in chemical areas.\n' +
          'Ideal for chemical plants, laboratories, manufacturing, and storage.\n' +
          'Certified to ANSI Z358.1 for compliant combination performance.\n' +
          'Comprehensive decontamination unit for severe exposures.\n' +
          'Critical life-safety equipment for maximum hazard protection.',
    rating: 4.9,
    reviews: 80,
    sold: '300+',
    tags: [
      'sysbel wg7053fy combo', 'yellow combination unit', 'shower eyewash combo', 'ansi z358.1 combination', 'pull rod shower',
      'chemical plant combo', 'laboratory full decontamination', 'high visibility yellow combo', 'stainless combo unit', 'hands free combo',
      'severe exposure response', 'comprehensive safety station', 'life safety combination', 'maximum hazard ppe', 'critical combo equipment'
    ]
  },
  {
    id: 'combination-unit-wg7053f',
    title: 'Combination Unit WG7053F',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.mjstraders.com/images/uploaded/1-20010Q54I45G_1000.png',
    desc: 'Combination Unit WG7053F SYSBEL is a full stainless steel shower and eyewash.\n' +
          'Overhead drench shower with pull-rod for immediate full-body flushing.\n' +
          'Integrated eye/face wash with dual aerated nozzles.\n' +
          'Stay-open valves ensure continuous flow on both systems.\n' +
          '304 stainless construction for maximum corrosion resistance.\n' +
          'High-flow design meets ANSI Z358.1 requirements.\n' +
          'Ideal for chemical plants, laboratories, manufacturing, and high-risk areas.\n' +
          'Certified to ANSI Z358.1 for reliable combination performance.\n' +
          'Durable, all-stainless unit for severe chemical emergencies.\n' +
          'Comprehensive life-safety station for total decontamination.',
    rating: 4.9,
    reviews: 85,
    sold: '320+',
    tags: [
      'sysbel wg7053f combo', 'full stainless combination', 'shower eyewash stainless', 'ansi z358.1 full combo', 'pull rod stainless shower',
      'chemical plant full unit', 'laboratory severe response', 'high flow combo', 'corrosion resistant combo', 'continuous flow valves',
      'high risk area station', 'durable all stainless', 'total decontamination ppe', 'life safety full combo', 'comprehensive hazard unit'
    ]
  }
],


   'Safety Containment System': [
  {
    id: 'sysbel-toxic-chemical-safety-storage-cabinet-fm-and-ce-approved',
    title: 'SYSBEL Toxic chemical safety storage cabinet FM and CE Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2022/05/20220510144320685.jpg',
    desc: 'SYSBEL Toxic Chemical Safety Storage Cabinet provides secure containment for hazardous toxic substances.\n' +
          'Double-wall steel construction with 38 mm insulating air space for fire resistance.\n' +
          'FM-approved and CE-certified for compliance with global safety standards.\n' +
          'High-visibility blue powder-coated finish with warning labels for easy identification.\n' +
          'Three-point lock system and galvanized steel shelves adjustable on 55 mm increments.\n' +
          'Spill containment sump captures leaks; includes grounding wire to prevent static buildup.\n' +
          'Self-closing doors with fusible link hold-open device for automatic closure in fire.\n' +
          'Ideal for laboratories, chemical plants, research facilities, and industrial storage.\n' +
          'Meets OSHA, NFPA, and international regulations for toxic chemical storage.\n' +
          'Reliable, high-capacity cabinet engineered for maximum worker and environmental safety.',
    rating: 4.8,
    reviews: 70,
    sold: '250+',
    tags: [
      'sysbel toxic cabinet', 'chemical safety storage', 'fm approved cabinet', 'ce certified storage', 'toxic substance containment',
      'double wall steel cabinet', 'blue chemical cabinet', 'self closing fire cabinet', 'spill sump cabinet', 'grounding wire storage',
      'adjustable shelf cabinet', 'laboratory chemical storage', 'industrial toxic cabinet', 'osha nfpa compliant', 'high safety containment'
    ]
  },
  {
    id: 'sysbel-fireproof-acid-storage-cabinet-for-strong-corrosive-chemicals-fm-and-ce-approved',
    title: 'SYSBEL Fireproof Acid Storage Cabinet for Strong Corrosive Chemicals FM and CE Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2025/11/20251119150716140.jpg',
    desc: 'SYSBEL Fireproof Acid Storage Cabinet is specially designed for strong corrosive acids.\n' +
          'Polypropylene (PP) interior lining and trays resist corrosion from acids and bases.\n' +
          'FM-approved and CE-certified for safe storage of highly corrosive liquids.\n' +
          'Corrosion-resistant gray exterior with bright acid hazard labeling.\n' +
          'Adjustable PP shelves and integrated spill containment sump for leak protection.\n' +
          'Three-point lock and reinforced doors for secure, tamper-resistant storage.\n' +
          'Ventilation ports with flame arrestors allow safe vapor release.\n' +
          'Ideal for chemical laboratories, battery rooms, plating shops, and acid handling areas.\n' +
          'Meets international standards for corrosive and hazardous material containment.\n' +
          'Durable, acid-specific cabinet engineered for maximum chemical safety.',
    rating: 4.9,
    reviews: 80,
    sold: '300+',
    tags: [
      'sysbel acid cabinet', 'fireproof corrosive storage', 'polypropylene acid cabinet', 'fm ce acid storage', 'strong acid containment',
      'corrosion resistant cabinet', 'gray acid safety cabinet', 'spill containment acid', 'adjustable pp shelves', 'ventilated acid cabinet',
      'laboratory acid storage', 'battery room safety', 'plating shop cabinet', 'hazardous corrosive ppe', 'maximum acid protection'
    ]
  },
  {
    id: 'sysbel-pesticides-safety-storage-cabinet-fm-and-ce-approved',
    title: 'SYSBEL Pesticides Safety storage Cabinet FM and CE Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2022/05/20220510144320685.jpg',
    desc: 'SYSBEL Pesticides Safety Storage Cabinet ensures secure containment of agricultural chemicals.\n' +
          'Green powder-coated steel with double-wall fire-resistant construction.\n' +
          'FM-approved and CE-certified for pesticide and herbicide storage compliance.\n' +
          'Three-point lock system and galvanized adjustable shelves for organized storage.\n' +
          'Integrated spill containment sump captures leaks and drips.\n' +
          'Grounding wire prevents static sparks in flammable environments.\n' +
          'Self-closing doors with fusible link for automatic fire closure.\n' +
          'Ideal for farms, greenhouses, agricultural warehouses, and pest control facilities.\n' +
          'Meets OSHA, EPA, and international regulations for pesticide safety.\n' +
          'High-visibility green cabinet designed for maximum environmental and worker protection.',
    rating: 4.7,
    reviews: 60,
    sold: '200+',
    tags: [
      'sysbel pesticide cabinet', 'agricultural chemical storage', 'green pesticide cabinet', 'fm ce pesticide', 'farm safety cabinet',
      'double wall pesticide storage', 'spill sump pesticide', 'self closing pesticide cabinet', 'grounding wire cabinet', 'adjustable shelf pesticide',
      'greenhouse chemical containment', 'pest control storage', 'epa compliant cabinet', 'high visibility pesticide', 'environmental protection cabinet'
    ]
  },
  {
    id: 'sysbel-red-biohazard-waste-can',
    title: 'SYSBEL Red Biohazard Waste Can',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelmfg.com/uploads/201711045/biohazard-waste-can53542849069.jpg',
    desc: 'SYSBEL Red Biohazard Waste Can provides safe disposal of contaminated and infectious waste.\n' +
          'Bright red polyethylene construction with biohazard labeling for clear identification.\n' +
          'Foot-operated pedal lid prevents hand contact and cross-contamination.\n' +
          'Tight-sealing lid with gasket reduces odor escape and pathogen exposure.\n' +
          'Durable, leak-proof design suitable for sharps, bandages, and medical waste.\n' +
          'Handles and bottom rim for easy lifting and transport.\n' +
          'Ideal for laboratories, clinics, hospitals, research facilities, and biohazard areas.\n' +
          'Meets OSHA and international standards for biohazard waste containment.\n' +
          'Reliable, hygienic waste solution for infection control.\n' +
          'Essential containment for safe handling of biological hazards.',
    rating: 4.6,
    reviews: 90,
    sold: '400+',
    tags: [
      'sysbel biohazard can', 'red medical waste bin', 'foot pedal biohazard', 'polyethylene waste can', 'osha biohazard container',
      'laboratory waste disposal', 'clinic infectious waste', 'hospital biohazard can', 'sharps waste containment', 'odor control waste bin',
      'leak proof biohazard', 'infection control ppe', 'hygienic waste solution', 'biological hazard containment', 'essential medical waste'
    ]
  },
  {
    id: 'sysbel-combustible-liquid-safe-storage-cabinets-fm-and-ce-approved',
    title: 'SYSBEL Combustible liquid Safe Storage Cabinets FM and CE Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2022/05/20220510144320685.jpg',
    desc: 'SYSBEL Combustible Liquid Safety Storage Cabinets ensure safe containment of flammable liquids.\n' +
          'Red powder-coated double-wall steel with 38 mm air gap for fire resistance.\n' +
          'FM-approved and CE-certified for compliance with global flammable storage standards.\n' +
          'Three-point lock and self-closing doors with fusible link hold-open device.\n' +
          'Galvanized adjustable shelves and large spill containment sump.\n' +
          'Grounding wire prevents static discharge in flammable atmospheres.\n' +
          'High-visibility red finish with warning labels for quick identification.\n' +
          'Ideal for laboratories, workshops, manufacturing, and fuel storage areas.\n' +
          'Meets OSHA, NFPA 30, and international regulations for combustible liquids.\n' +
          'High-performance cabinet engineered for maximum fire and spill safety.',
    rating: 4.8,
    reviews: 100,
    sold: '450+',
    tags: [
      'sysbel combustible cabinet', 'flammable liquid storage', 'red safety cabinet', 'fm ce flammable', 'double wall combustible',
      'self closing fire cabinet', 'spill containment flammable', 'grounding wire cabinet', 'adjustable shelf red', 'laboratory flammable storage',
      'workshop fuel cabinet', 'manufacturing safety cabinet', 'nfpa 30 compliant', 'high visibility red cabinet', 'maximum fire safety'
    ]
  },
  {
    id: 'sysbel-weakly-corrosive-liquid-safety-storage-cabinet-fm-and-ce-approved',
    title: 'SYSBEL Weakly corrosive liquid safety storage cabinet FM and CE Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2025/11/20251119150716140.jpg',
    desc: 'SYSBEL Weakly Corrosive Liquid Safety Storage Cabinet protects against mild corrosives.\n' +
          'Polypropylene (PP) trays and interior lining resist weak acids and bases.\n' +
          'FM-approved and CE-certified for safe storage of corrosive liquids.\n' +
          'Gray corrosion-resistant exterior with clear labeling for hazard identification.\n' +
          'Adjustable PP shelves and integrated sump for leak containment.\n' +
          'Three-point lock and reinforced doors for secure storage.\n' +
          'Ventilation ports with flame arrestors for safe vapor management.\n' +
          'Ideal for laboratories, plating shops, battery rooms, and water treatment.\n' +
          'Meets international standards for weakly corrosive material storage.\n' +
          'Durable, chemical-specific cabinet for safe handling of mild corrosives.',
    rating: 4.7,
    reviews: 65,
    sold: '220+',
    tags: [
      'sysbel corrosive cabinet', 'weak acid storage', 'polypropylene corrosive', 'fm ce corrosive cabinet', 'gray corrosive storage',
      'pp tray cabinet', 'spill containment corrosive', 'ventilated corrosive cabinet', 'laboratory mild corrosive', 'plating shop safety',
      'battery room cabinet', 'water treatment storage', 'chemical resistant cabinet', 'secure corrosive ppe', 'safe mild corrosive containment'
    ]
  },
  {
    id: 'sysbel-flammable-liquid-and-chemicals-safety-storage-cabinets-fm-and-ce-approved',
    title: 'SYSBEL Flammable Liquid and Chemicals Safety Storage Cabinets FM and CE Approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2021/12/20211201144936459.jpg',
    desc: 'SYSBEL Flammable Liquid and Chemicals Safety Storage Cabinets offer large capacity protection.\n' +
          'Yellow powder-coated double-wall steel with 38 mm insulating air gap.\n' +
          'FM-approved and CE-certified for flammable liquid and chemical storage.\n' +
          'Multiple adjustable galvanized shelves for organized chemical placement.\n' +
          'Large spill containment sump and grounding wire for safety.\n' +
          'Self-closing doors with fusible link for automatic fire closure.\n' +
          'Three-point lock system and high-visibility warning labels.\n' +
          'Ideal for laboratories, paint shops, manufacturing, and storage rooms.\n' +
          'Meets OSHA, NFPA 30, and international flammable storage standards.\n' +
          'High-capacity, fire-resistant cabinet for maximum chemical safety.',
    rating: 4.9,
    reviews: 110,
    sold: '500+',
    tags: [
      'sysbel flammable cabinet', 'yellow chemical storage', 'large capacity flammable', 'fm ce flammable cabinet', 'double wall yellow',
      'self closing chemical cabinet', 'large spill sump', 'grounding flammable storage', 'multiple shelf cabinet', 'paint shop safety',
      'manufacturing chemical cabinet', 'nfpa 30 compliant', 'high visibility yellow', 'fire resistant cabinet', 'maximum chemical protection'
    ]
  },
  {
    id: 'sds-document-box',
    title: 'SDS Document Box',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.justrite.com/media/catalog/product/_/2/_2_3_23303_lg_2.jpg?store=justrite_store_view&image-type=image',
    desc: 'SDS Document Box provides weather-resistant storage for safety data sheets.\n' +
          'Durable polyethylene construction with clear viewing window.\n' +
          'Hinged lid with gasket seal protects documents from moisture and dust.\n' +
          'Bright red color with SDS/MSDS labeling for quick identification.\n' +
          'Wall-mountable or freestanding with mounting hardware included.\n' +
          'Holds multiple binders or loose SDS sheets in organized fashion.\n' +
          'Ideal for laboratories, chemical storage areas, manufacturing, and workshops.\n' +
          'Meets OSHA requirements for accessible SDS availability.\n' +
          'Essential safety accessory for chemical hazard communication.\n' +
          'Reliable, long-lasting box for maintaining SDS compliance.',
    rating: 4.5,
    reviews: 50,
    sold: '300+',
    tags: [
      'sds document box', 'safety data sheet storage', 'weather resistant sds', 'polyethylene sds box', 'osha sds compliance',
      'laboratory document box', 'chemical storage sds', 'manufacturing msds box', 'red sds container', 'clear viewing window',
      'hinged lid sds', 'wall mountable box', 'hazard communication ppe', 'essential sds accessory', 'reliable compliance box'
    ]
  },
  {
    id: 'sysbel-gas-cylinder-storage-cages-ce-approved',
    title: 'SYSBEL Gas Cylinder Storage Cages CE approved',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2021/12/20211201144936459.jpg',
    desc: 'SYSBEL Gas Cylinder Storage Cages provide secure outdoor or indoor storage.\n' +
          'Heavy-duty steel mesh construction with CE approval for gas safety.\n' +
          'Lockable doors and hinged roof for easy cylinder access and security.\n' +
          'Ventilated design prevents gas buildup and allows cylinder labeling visibility.\n' +
          'Forklift pockets and lifting eyes for easy relocation.\n' +
          'Chain brackets secure cylinders in upright position.\n' +
          'Ideal for compressed gas, LPG, oxygen, acetylene, and welding cylinders.\n' +
          'Meets international standards for cylinder storage safety.\n' +
          'Durable, weather-resistant cage for safe gas management.\n' +
          'Essential containment system for preventing cylinder hazards.',
    rating: 4.8,
    reviews: 55,
    sold: '180+',
    tags: [
      'sysbel gas cage', 'cylinder storage cage', 'ce approved gas storage', 'steel mesh cylinder cage', 'ventilated gas cage',
      'lockable cylinder storage', 'compressed gas safety', 'lpg oxygen acetylene cage', 'forklift movable cage', 'chain secured cylinders',
      'welding gas containment', 'outdoor cylinder cage', 'weather resistant gas', 'prevent cylinder hazard', 'essential gas ppe'
    ]
  },
  {
    id: 'cigarette-butts-receptacle-sysbell',
    title: 'Cigarette Butts Receptacle SYSBELL',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/upload/images/product/20230721/WA930101.jpg',
    desc: 'Cigarette Butts Receptacle SYSBELL prevents fire hazards from discarded butts.\n' +
          'Heavy-duty galvanized steel with weather-resistant powder coating.\n' +
          'Snuff-out design extinguishes butts quickly and safely.\n' +
          'Large capacity chamber reduces emptying frequency.\n' +
          'Lockable lid prevents tampering and litter.\n' +
          'High-visibility labeling and cigarette graphic for proper use.\n' +
          'Ideal for industrial sites, warehouses, labs, and outdoor smoking areas.\n' +
          'Meets fire safety standards for cigarette waste containment.\n' +
          'Durable, low-maintenance receptacle for smoking compliance.\n' +
          'Essential outdoor safety solution for preventing cigarette fires.',
    rating: 4.6,
    reviews: 120,
    sold: '600+',
    tags: [
      'sysbel cigarette receptacle', 'butt extinguisher', 'fire safe smoking bin', 'galvanized steel receptacle', 'snuff out cigarette',
      'industrial smoking area', 'warehouse cigarette bin', 'lab outdoor receptacle', 'lockable butt container', 'high visibility smoking',
      'large capacity cigarette', 'weather resistant bin', 'smoking compliance ppe', 'prevent cigarette fire', 'essential outdoor safety'
    ]
  }
],


  'Spill Prevention Containment and Control': [
  {
    id: 'polyethylene-spill-containment-pallet-for-4-drum-ce-certificate',
    title: 'Polyethylene Spill Containment Pallet For 4 Drum CE Certificate',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00oNykUJslpdbY/High-Quality-Sysbel-4-Drum-Spill-Pallets-Containment-Pallet-Oil-Pallet-for-Oil-Chemicals.webp',
    desc: 'Polyethylene Spill Containment Pallet for 4 Drums provides robust secondary containment.\n' +
          'High-capacity sump captures full drum volume in case of leak or rupture.\n' +
          'CE-certified heavy-duty polyethylene resists chemicals, oils, and corrosives.\n' +
          'Removable grates allow easy cleaning and inspection of sump area.\n' +
          'Raised edges and forklift pockets for safe transport and stacking.\n' +
          'Yellow high-visibility color with warning labels for hazard awareness.\n' +
          'Ideal for warehouses, chemical storage, manufacturing, and drum filling areas.\n' +
          'Meets international standards for spill prevention and environmental protection.\n' +
          'Durable, low-maintenance pallet engineered for maximum leak safety.\n' +
          'Essential secondary containment solution for 205 L / 55 gal drums.',
    rating: 4.8,
    reviews: 85,
    sold: '350+',
    tags: [
      '4 drum spill pallet', 'polyethylene containment', 'ce certified pallet', 'high sump capacity', 'removable grate pallet',
      'yellow spill containment', 'warehouse drum storage', 'chemical leak prevention', 'forklift pockets pallet', 'drum filling safety',
      'secondary containment', 'oil chemical pallet', 'durable spill tray', 'environmental spill protection', '205l drum pallet'
    ]
  },
  {
    id: 'polyethylene-spill-containment-deck-for-1-drum-ce-certificate',
    title: 'Polyethylene Spill Containment Deck For 1 Drum CE Certificate',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/oup7BgpUnAU/maxresdefault.jpg',
    desc: 'Polyethylene Spill Containment Deck for 1 Drum offers compact secondary containment.\n' +
          'CE-certified polyethylene construction resists oils, acids, and solvents.\n' +
          'Low-profile deck with integrated sump captures drum leaks efficiently.\n' +
          'Removable grate provides easy access for cleaning and inspection.\n' +
          'Ribbed bottom adds strength and allows forklift entry.\n' +
          'Bright yellow finish with chemical warning symbols for visibility.\n' +
          'Perfect for single drum storage in labs, workshops, garages, and small facilities.\n' +
          'Meets international standards for spill prevention and compliance.\n' +
          'Space-saving, lightweight solution for safe drum handling.\n' +
          'Reliable containment for 205 L / 55 gal single drum applications.',
    rating: 4.6,
    reviews: 70,
    sold: '300+',
    tags: [
      '1 drum spill deck', 'compact polyethylene pallet', 'ce single drum containment', 'low profile spill tray', 'removable grate deck',
      'yellow drum containment', 'lab drum storage', 'workshop spill prevention', 'garage chemical safety', 'forklift entry deck',
      'small facility containment', 'oil solvent resistant', 'space saving pallet', 'single drum safety', 'reliable spill deck'
    ]
  },
  {
    id: 'polyethylene-spill-containment-pallet-for-2-drum-ce-certificate',
    title: 'Polyethylene Spill Containment Pallet For 2 Drum CE Certificate',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00amToENGtRfcz/Professional-Sysbel-2-Drum-Spill-Pallet-Secondary-Containment-for-Oil-Chemical-Storage.webp',
    desc: 'Polyethylene Spill Containment Pallet for 2 Drums delivers efficient secondary containment.\n' +
          'CE-certified rugged polyethylene withstands oils, chemicals, and corrosives.\n' +
          'Large sump capacity captures full contents of one drum in emergency.\n' +
          'Removable grates facilitate quick cleaning and visual sump inspection.\n' +
          'Forklift pockets and raised edges for safe handling and stacking.\n' +
          'High-visibility yellow with printed hazard warnings for compliance.\n' +
          'Ideal for warehouses, manufacturing, chemical storage, and drum dispensing.\n' +
          'Meets international spill containment and environmental regulations.\n' +
          'Low-maintenance, durable pallet for safe 2-drum storage.\n' +
          'Essential solution for preventing ground contamination from drum leaks.',
    rating: 4.7,
    reviews: 90,
    sold: '400+',
    tags: [
      '2 drum spill pallet', 'polyethylene 2 drum', 'ce certified containment', 'large sump pallet', 'removable grate 2 drum',
      'yellow spill pallet', 'warehouse chemical storage', 'manufacturing drum safety', 'drum dispensing containment', 'forklift 2 drum pallet',
      'raised edge pallet', 'oil chemical resistant', 'durable spill containment', 'ground protection pallet', 'essential 2 drum safety'
    ]
  },
  {
    id: 'mobile-chemical-spill-kits-sysbel',
    title: 'Mobile Chemical Spill Kits Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.alicdn.com/imgextra/i3/6000000002436/O1CN01HEQoe61TrjYNVdkOR_!!6000000002436-0-tbvideo.jpg',
    desc: 'Mobile Chemical Spill Kits Sysbel offer fast-response containment on wheels.\n' +
          'Heavy-duty wheeled cart with large chemical-resistant absorbents.\n' +
          'Includes pads, pillows, socks, gloves, goggles, and disposal bags.\n' +
          'Universal absorbents handle acids, bases, solvents, and hazardous liquids.\n' +
          'High-visibility labeling and instructions for quick, correct deployment.\n' +
          'Lockable wheels and ergonomic handle for easy movement in facilities.\n' +
          'Ideal for laboratories, chemical plants, warehouses, and transport areas.\n' +
          'Meets regulatory requirements for on-site spill response readiness.\n' +
          'Complete mobile kit engineered for rapid chemical emergency control.\n' +
          'Essential preparedness solution for minimizing spill damage.',
    rating: 4.8,
    reviews: 60,
    sold: '200+',
    tags: [
      'sysbel mobile chemical kit', 'wheeled spill response', 'universal chemical absorbents', 'lab spill kit mobile', 'hazardous liquid kit',
      'high visibility cart', 'chemical plant emergency', 'warehouse spill preparedness', 'lockable wheels kit', 'ergonomic spill cart',
      'rapid deployment kit', 'acids bases solvents', 'disposal bag included', 'regulatory spill readiness', 'minimize chemical damage'
    ]
  },
  {
    id: 'mobile-oil-spill-kits-sysbel',
    title: 'Mobile Oil Spill Kits Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.densorb.com/media/image/98/3a/2a/DENSORB-Olie-spildkit-i-tromle-paa-hjul-250-l-opt-1_1280x1280.jpg',
    desc: 'Mobile Oil Spill Kits Sysbel provide fast, oil-selective spill response on wheels.\n' +
          'Wheeled drum or cart with oil-only absorbents that repel water.\n' +
          'Contains pads, booms, socks, gloves, goggles, and waste bags.\n' +
          'Hydrophobic materials float on water while absorbing hydrocarbons.\n' +
          'Bright labeling and clear instructions for immediate action.\n' +
          'Lockable wheels and handle for quick transport across sites.\n' +
          'Ideal for garages, maintenance shops, fuel storage, and outdoor areas.\n' +
          'Meets spill response standards for oil and fuel emergencies.\n' +
          'Complete mobile kit designed for efficient hydrocarbon cleanup.\n' +
          'Essential preparedness for preventing oil spill spread.',
    rating: 4.7,
    reviews: 65,
    sold: '220+',
    tags: [
      'sysbel mobile oil kit', 'oil only spill response', 'hydrophobic absorbent kit', 'wheeled oil spill cart', 'garage fuel cleanup',
      'maintenance shop kit', 'outdoor oil spill', 'lockable mobile kit', 'bright oil labeling', 'oil selective booms',
      'rapid oil emergency', 'hydrocarbon absorption', 'waste bag oil kit', 'spill prevention oil', 'essential oil containment'
    ]
  },
  {
    id: 'mobile-universal-spill-kits-sysbel',
    title: 'Mobile Universal Spill Kits Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ctscargotiedown.com/wp-content/uploads/2023/10/88630-scaled-1.jpg',
    desc: 'Mobile Universal Spill Kits Sysbel handle oil, chemicals, and water-based spills.\n' +
          'Versatile wheeled unit with universal absorbents for multi-liquid response.\n' +
          'Includes pads, socks, booms, gloves, goggles, and disposal bags.\n' +
          'Gray absorbents safely manage acids, bases, solvents, and oils.\n' +
          'High-visibility instructions and labeling for fast, correct use.\n' +
          'Durable cart with lockable wheels for easy site mobility.\n' +
          'Perfect for factories, warehouses, labs, and transport depots.\n' +
          'Meets regulatory requirements for multi-hazard spill readiness.\n' +
          'All-in-one mobile solution for comprehensive spill control.\n' +
          'Critical kit for minimizing damage from unknown liquid spills.',
    rating: 4.8,
    reviews: 70,
    sold: '250+',
    tags: [
      'sysbel universal mobile kit', 'multi liquid spill response', 'gray universal absorbents', 'wheeled universal cart', 'factory spill preparedness',
      'warehouse multi hazard', 'lab transport spill kit', 'lockable wheels universal', 'high visibility instructions', 'acids bases oils kit',
      'versatile spill control', 'rapid multi emergency', 'disposal bag universal', 'regulatory spill readiness', 'comprehensive spill damage'
    ]
  },
  {
    id: '65-gallon-wheeled-poly-overpack-salvage-drum-sysbel',
    title: '65-Gallon Wheeled Poly-Overpack Salvage Drum Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-td3oukoky5/product_images/uploaded_images/drums-group-1.jpg',
    desc: '65-Gallon Wheeled Poly-Overpack Salvage Drum Sysbel handles large spills and waste.\n' +
          'Heavy-duty polyethylene construction with leak-proof lid and gasket.\n' +
          'Built-in wheels and handle for easy transport of heavy loads.\n' +
          'Large 65-gallon capacity for overpacking damaged drums or waste.\n' +
          'UN-rated for hazardous material transport and storage.\n' +
          'Bright labeling for quick identification in emergencies.\n' +
          'Ideal for chemical plants, warehouses, labs, and spill response teams.\n' +
          'Meets DOT, EPA, and international salvage drum standards.\n' +
          'Durable, mobile overpack for safe containment and disposal.\n' +
          'Essential tool for managing major spill incidents.',
    rating: 4.9,
    reviews: 50,
    sold: '150+',
    tags: [
      '65 gallon overpack', 'wheeled salvage drum', 'polyethylene salvage drum', 'un rated overpack', 'large spill containment',
      'chemical plant salvage', 'warehouse waste drum', 'lab emergency overpack', 'leak proof lid drum', 'mobile heavy salvage',
      'dot epa compliant', 'hazardous transport drum', 'bright labeled overpack', 'major spill response', 'essential salvage tool'
    ]
  },
  {
    id: 'overpack-salvage-drum-20-gal-sysbel',
    title: 'Overpack Salvage Drum (20 Gal) Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00UyMQzLfWaHbZ/20-Gal-Overpack-Salvage-Drum-SYD200-.webp',
    desc: 'Overpack Salvage Drum (20 Gal) Sysbel offers compact spill and waste containment.\n' +
          'Durable polyethylene with tight-sealing lid and gasket for leak prevention.\n' +
          '20-gallon capacity perfect for overpacking small damaged containers.\n' +
          'UN-rated for safe transport of hazardous materials.\n' +
          'Nestible design saves storage space when empty.\n' +
          'Bright labeling and handles for easy identification and handling.\n' +
          'Ideal for laboratories, workshops, transport, and spill response.\n' +
          'Meets DOT, EPA, and international salvage drum regulations.\n' +
          'Reliable, lightweight overpack for quick emergency use.\n' +
          'Essential containment for small to medium spill incidents.',
    rating: 4.7,
    reviews: 80,
    sold: '300+',
    tags: [
      '20 gal overpack', 'compact salvage drum', 'polyethylene salvage', 'un rated 20 gallon', 'nestible overpack drum',
      'laboratory waste drum', 'workshop spill containment', 'transport hazardous drum', 'leak proof salvage', 'bright labeled overpack',
      'dot epa compliant', 'quick emergency drum', 'lightweight salvage', 'small spill response', 'essential compact containment'
    ]
  },
  {
    id: 'chemical-only-spill-kits-with-20-gallon-poly-overpack-salvage-drum-sysbel',
    title: 'Chemical Only Spill Kits with 20 Gallon Poly-Overpack Salvage Drum Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://knz.ae/wp-content/uploads/95-Gallon-Chemical-Spill-Kit-in-Wheeled-Salvage-Drum.png',
    desc: 'Chemical Only Spill Kits with 20 Gallon Poly-Overpack Sysbel handle hazardous liquids.\n' +
          '20-gallon polyethylene salvage drum stores kit and damaged containers.\n' +
          'Universal absorbents neutralize acids, bases, solvents, and chemicals.\n' +
          'Includes pads, socks, pillows, gloves, goggles, and disposal bags.\n' +
          'Clear instructions and high-visibility labeling for fast deployment.\n' +
          'UN-rated drum for safe transport of used absorbents.\n' +
          'Ideal for labs, chemical storage, manufacturing, and transport.\n' +
          'Meets regulatory standards for chemical spill response.\n' +
          'Complete kit with integrated overpack for full emergency control.\n' +
          'Critical solution for safe chemical spill management.',
    rating: 4.8,
    reviews: 55,
    sold: '180+',
    tags: [
      'chemical spill kit 20 gal', 'overpack chemical kit', 'universal absorbent chemical', 'sysbel chemical response', 'lab chemical spill',
      'manufacturing hazardous kit', 'un rated salvage drum', 'acid base solvent kit', 'high visibility chemical', 'fast deployment kit',
      'disposal bag chemical', 'regulatory spill compliance', 'integrated overpack kit', 'full emergency chemical', 'critical spill control'
    ]
  },
  {
    id: 'oil-only-spill-kits-with-20-gallon-poly-overpack-salvage-drum-sysbel',
    title: 'Oil Only Spill Kits with 20 Gallon Poly-Overpack Salvage Drum Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://kryptonresources.com/cdn/shop/collections/SKIT001Y_Portable_Spill_Kit_Chemical.jpg?v=1667925311',
    desc: 'Oil Only Spill Kits with 20 Gallon Poly-Overpack Sysbel target hydrocarbon spills.\n' +
          '20-gallon UN-rated polyethylene drum contains kit and waste.\n' +
          'Oil-selective absorbents repel water while soaking up fuels and oils.\n' +
          'Includes pads, booms, socks, gloves, goggles, and disposal bags.\n' +
          'Bright labeling and instructions for immediate correct use.\n' +
          'Perfect for garages, maintenance, fuel storage, and outdoor areas.\n' +
          'Meets spill response standards for oil and petroleum incidents.\n' +
          'Mobile overpack allows safe transport of used absorbents.\n' +
          'Complete oil-specific kit for rapid spill containment.\n' +
          'Essential preparedness for preventing oil spread.',
    rating: 4.7,
    reviews: 60,
    sold: '200+',
    tags: [
      'oil only spill kit', '20 gal overpack oil', 'hydrocarbon selective kit', 'sysbel oil response', 'garage fuel spill',
      'maintenance oil kit', 'un rated oil drum', 'oil absorbent booms', 'bright oil labeling', 'fast oil deployment',
      'disposal bag oil kit', 'spill prevention oil', 'mobile oil overpack', 'rapid hydrocarbon control', 'essential oil preparedness'
    ]
  },
  {
    id: 'universal-spill-kits-with-20-gallon-poly-overpack-salvage-drum-sysbel',
    title: 'Universal Spill Kits with 20 Gallon Poly-Overpack Salvage Drum Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ctscargotiedown.com/wp-content/uploads/2023/10/88630-scaled-1.jpg',
    desc: 'Universal Spill Kits with 20 Gallon Poly-Overpack Sysbel manage mixed liquid spills.\n' +
          '20-gallon UN-rated polyethylene salvage drum stores kit and waste.\n' +
          'Gray universal absorbents handle oils, chemicals, coolants, and water-based liquids.\n' +
          'Includes pads, socks, booms, gloves, goggles, and disposal bags.\n' +
          'High-visibility instructions and labeling for correct, fast response.\n' +
          'Ideal for factories, warehouses, labs, and multi-product storage.\n' +
          'Meets regulatory requirements for multi-hazard spill readiness.\n' +
          'Mobile overpack enables safe transport of contaminated materials.\n' +
          'Versatile all-in-one kit for unknown or mixed spill emergencies.\n' +
          'Critical solution for comprehensive spill control.',
    rating: 4.8,
    reviews: 65,
    sold: '220+',
    tags: [
      'universal spill kit 20 gal', 'multi liquid overpack', 'gray universal absorbents', 'sysbel universal response', 'factory mixed spill',
      'warehouse multi hazard', 'lab unknown liquid kit', 'un rated salvage universal', 'high visibility universal', 'fast multi deployment',
      'disposal bag universal', 'regulatory multi compliance', 'mobile mixed overpack', 'versatile spill control', 'comprehensive emergency kit'
    ]
  },
  {
    id: 'chemical-spill-kit-bag-sysbel',
    title: 'Chemical Spill Kit Bag Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ctscargotiedown.com/wp-content/uploads/2023/10/88630-scaled-1.jpg',
    desc: 'Chemical Spill Kit Bag Sysbel offers portable chemical emergency response.\n' +
          'Durable carry bag with shoulder strap for quick transport.\n' +
          'Universal absorbents neutralize acids, bases, solvents, and hazardous liquids.\n' +
          'Contains pads, socks, gloves, goggles, disposal bags, and instructions.\n' +
          'Bright labeling and clear guide for immediate correct action.\n' +
          'Compact design fits in vehicles, under benches, or on carts.\n' +
          'Ideal for laboratories, small chemical areas, and mobile response.\n' +
          'Meets regulatory standards for portable chemical spill kits.\n' +
          'Lightweight, ready-to-go solution for chemical incidents.\n' +
          'Essential portable kit for minimizing chemical spill damage.',
    rating: 4.6,
    reviews: 100,
    sold: '500+',
    tags: [
      'sysbel chemical bag kit', 'portable chemical spill', 'universal absorbent bag', 'lab mobile response', 'hazardous liquid bag',
      'shoulder strap spill bag', 'bright chemical labeling', 'small area spill kit', 'vehicle emergency kit', 'neutralize acid base',
      'compact spill preparedness', 'regulatory portable kit', 'lightweight chemical ppe', 'fast chemical action', 'essential spill bag'
    ]
  },
  {
    id: 'universal-spill-kit-bag-sysbel',
    title: 'Universal Spill Kit Bag Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ctscargotiedown.com/wp-content/uploads/2023/10/88630-scaled-1.jpg',
    desc: 'Universal Spill Kit Bag Sysbel handles oil, chemical, and water-based spills.\n' +
          'Rugged carry bag with shoulder strap for fast deployment.\n' +
          'Gray universal absorbents manage multiple liquid types safely.\n' +
          'Includes pads, socks, gloves, goggles, disposal bags, and instructions.\n' +
          'High-visibility labeling and guide for correct, immediate response.\n' +
          'Compact and lightweight for storage in vehicles or workstations.\n' +
          'Perfect for factories, warehouses, labs, and multi-product areas.\n' +
          'Meets regulatory requirements for portable universal spill kits.\n' +
          'Versatile go-anywhere solution for unknown or mixed spills.\n' +
          'Critical portable kit for rapid spill containment.',
    rating: 4.7,
    reviews: 110,
    sold: '550+',
    tags: [
      'sysbel universal bag kit', 'portable multi spill', 'gray universal absorbents', 'factory versatile response', 'warehouse spill bag',
      'lab multi hazard kit', 'shoulder strap universal', 'high visibility bag', 'vehicle workstation kit', 'mixed liquid containment',
      'compact universal preparedness', 'regulatory portable universal', 'lightweight multi ppe', 'fast unknown spill action', 'essential versatile bag'
    ]
  },
  {
    id: 'oil-spill-kit-bag-sysbel',
    title: 'Oil Spill Kit Bag Sysbel',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ctscargotiedown.com/wp-content/uploads/2023/10/88630-scaled-1.jpg',
    desc: 'Oil Spill Kit Bag Sysbel targets hydrocarbon and oil-based spills.\n' +
          'Portable carry bag with shoulder strap for quick access.\n' +
          'Oil-selective absorbents repel water while soaking up fuels and oils.\n' +
          'Contains pads, booms, socks, gloves, goggles, and disposal bags.\n' +
          'Bright labeling and instructions for immediate correct use.\n' +
          'Compact design fits in vehicles, workshops, or storage areas.\n' +
          'Ideal for garages, maintenance, fuel handling, and outdoor sites.\n' +
          'Meets spill response standards for oil emergencies.\n' +
          'Lightweight, ready-to-deploy kit for hydrocarbon control.\n' +
          'Essential portable solution for preventing oil spread.',
    rating: 4.6,
    reviews: 105,
    sold: '520+',
    tags: [
      'sysbel oil bag kit', 'portable oil spill', 'oil selective absorbents', 'garage fuel response', 'maintenance oil bag',
      'outdoor hydrocarbon kit', 'shoulder strap oil bag', 'bright oil labeling', 'vehicle oil kit', 'compact oil preparedness',
      'regulatory oil spill', 'lightweight oil ppe', 'fast hydrocarbon action', 'prevent oil spread', 'essential portable oil kit'
    ]
  },
  {
    id: 'sysbel-polly-spill-pallet-ramp',
    title: 'Sysbel Polly Spill Pallet Ramp',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2021/09/20210929135227311.jpg',
    desc: 'Sysbel Polly Spill Pallet Ramp enables safe drum loading onto containment pallets.\n' +
          'Heavy-duty polyethylene construction resists chemicals and oils.\n' +
          'Non-slip surface and raised edges prevent drum slippage.\n' +
          'Lightweight yet strong design supports full drum weight.\n' +
          'Compatible with most 4-drum and 2-drum spill pallets.\n' +
          'Ergonomic handles for easy positioning and removal.\n' +
          'Ideal for warehouses, manufacturing, and drum handling areas.\n' +
          'Reduces manual lifting risks and improves safety compliance.\n' +
          'Durable ramp accessory for efficient spill containment use.\n' +
          'Essential tool for safe drum transfer and pallet access.',
    rating: 4.7,
    reviews: 45,
    sold: '150+',
    tags: [
      'sysbel spill ramp', 'polyethylene drum ramp', 'non slip pallet ramp', 'drum loading accessory', 'warehouse ramp safety',
      'manufacturing drum ramp', 'chemical resistant ramp', 'ergonomic handles ramp', 'lightweight strong ramp', 'spill pallet compatible',
      'reduce lifting risk', 'safety compliance ramp', 'durable ramp accessory', 'efficient drum transfer', 'essential pallet ramp'
    ]
  },
  {
    id: 'sysbel-pvc-water-tank-pvc-pool',
    title: 'Sysbel PVC Water Tank PVC Pool',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.tankandbarrel.com/blog/wp-content/uploads/2023/10/stock-tank-pool.jpg',
    desc: 'Sysbel PVC Water Tank PVC Pool serves as portable secondary containment.\n' +
          'Heavy-duty PVC fabric with reinforced seams for leak-proof use.\n' +
          'Collapsible design folds flat for easy storage and transport.\n' +
          'Large capacity for containing spills, leaks, or wash-down water.\n' +
          'Quick setup with no assembly required.\n' +
          'Ideal for temporary drum storage, equipment wash areas, and spill response.\n' +
          'UV and chemical resistant for outdoor and indoor applications.\n' +
          'Bright color for high visibility in emergency situations.\n' +
          'Versatile, lightweight containment pool for quick deployment.\n' +
          'Essential portable solution for environmental spill control.',
    rating: 4.6,
    reviews: 40,
    sold: '120+',
    tags: [
      'sysbel pvc pool', 'portable containment pool', 'collapsible pvc tank', 'temporary spill containment', 'drum storage pool',
      'equipment wash area', 'leak proof pvc pool', 'uv chemical resistant', 'quick setup pool', 'high visibility containment',
      'outdoor spill response', 'indoor portable tank', 'versatile spill pool', 'lightweight environmental ppe', 'essential spill control'
    ]
  },
  {
    id: 'sysbel-portable-spill-containment-berm',
    title: 'Sysbel Portable Spill Containment Berm',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2020/11/20201127184754493.jpg',
    desc: 'Sysbel Portable Spill Containment Berm creates instant secondary containment.\n' +
          'Foldable polyurethane or PVC construction deploys in seconds.\n' +
          'High side walls contain large spills or leaks from equipment.\n' +
          'Chemical-resistant material handles oils, fuels, and hazardous liquids.\n' +
          'Compact storage size when folded for easy transport.\n' +
          'Bright color with grounding points for safety.\n' +
          'Ideal for drums, IBCs, vehicles, and equipment in field or indoor areas.\n' +
          'Meets spill containment standards for temporary use.\n' +
          'Versatile, quick-deploy berm for emergency and routine containment.\n' +
          'Essential portable solution for preventing ground contamination.',
    rating: 4.8,
    reviews: 75,
    sold: '280+',
    tags: [
      'sysbel portable berm', 'foldable spill containment', 'instant secondary berm', 'polyurethane spill berm', 'chemical resistant berm',
      'drum ibc containment', 'vehicle spill berm', 'field emergency berm', 'compact storage berm', 'bright visibility berm',
      'grounding point berm', 'quick deploy containment', 'temporary spill solution', 'prevent ground contamination', 'essential portable ppe'
    ]
  },
  {
    id: 'sysbel-portable-spill-containment-berm',
    title: 'Sysbel Portable Spill Containment Berm',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2020/11/20201127184754493.jpg',
    desc: 'Sysbel Portable Spill Containment Berm offers durable vehicle and equipment containment.\n' +
          'Heavy-duty foldable design withstands repeated use and heavy loads.\n' +
          'High side walls contain leaks from tanks, generators, or machinery.\n' +
          'Chemical and oil resistant material for broad liquid compatibility.\n' +
          'Quick setup with no tools required; folds flat for storage.\n' +
          'Reinforced corners and grounding connections for safety.\n' +
          'Ideal for construction sites, maintenance yards, and fuel handling.\n' +
          'Meets environmental standards for portable spill containment.\n' +
          'Reliable berm for preventing environmental contamination.\n' +
          'Essential mobile solution for equipment and vehicle spill control.',
    rating: 4.8,
    reviews: 70,
    sold: '260+',
    tags: [
      'sysbel vehicle berm', 'durable portable berm', 'equipment spill containment', 'foldable heavy duty', 'high wall berm',
      'construction site berm', 'maintenance yard containment', 'fuel handling berm', 'quick setup berm', 'reinforced corner berm',
      'chemical oil resistant', 'environmental spill standard', 'mobile vehicle ppe', 'prevent contamination berm', 'essential equipment containment'
    ]
  },
  {
    id: 'sysbel-roof-leak-diverter',
    title: 'Sysbel Roof Leak Diverter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.spillshop.co.uk/wp-content/uploads/2020/04/leak_diverter_warehouse_2_web.jpg',
    desc: 'Sysbel Roof Leak Diverter channels water away from sensitive indoor areas.\n' +
          'Heavy-duty PVC tarp with reinforced edges and grommets.\n' +
          'Adjustable straps and hooks for quick ceiling or roof attachment.\n' +
          'Flexible hose connection directs water to floor drain or outside.\n' +
          'Bright color for high visibility and hazard awareness.\n' +
          'Compact storage when not in use.\n' +
          'Ideal for warehouses, factories, offices, and storage with roof leaks.\n' +
          'Prevents water damage to equipment, inventory, and electrical systems.\n' +
          'Simple, effective solution for temporary roof leak control.\n' +
          'Essential facility protection during roof maintenance or storms.',
    rating: 4.5,
    reviews: 50,
    sold: '200+',
    tags: [
      'sysbel roof diverter', 'leak diverter tarp', 'pvc roof channel', 'warehouse leak protection', 'factory roof water',
      'adjustable strap diverter', 'hose connection diverter', 'bright visibility tarp', 'compact storage diverter', 'prevent water damage',
      'equipment inventory protection', 'temporary roof control', 'storm leak solution', 'facility protection ppe', 'essential roof safety'
    ]
  },
  {
    id: 'sysbel-lab-spill-containment-pallets',
    title: 'Sysbel Lab Spill Containment Pallets',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.sysbelglobal.com/uploadfiles/2021/09/20210929135227311.jpg',
    desc: 'Sysbel Lab Spill Containment Pallets are modular for small containers.\n' +
          'Low-profile polyethylene design fits under benches or fume hoods.\n' +
          'Chemical-resistant sump captures leaks from bottles, flasks, and trays.\n' +
          'Removable grates allow easy cleaning and visual inspection.\n' +
          'Stackable and interconnecting for expanded coverage.\n' +
          'Bright yellow with hazard labeling for lab safety awareness.\n' +
          'Ideal for research laboratories, quality control, and benchtop storage.\n' +
          'Meets secondary containment standards for small-scale chemicals.\n' +
          'Space-efficient, durable pallets for lab spill prevention.\n' +
          'Essential modular solution for laboratory safety.',
    rating: 4.7,
    reviews: 60,
    sold: '250+',
    tags: [
      'sysbel lab pallet', 'modular spill containment', 'low profile lab pallet', 'benchtop chemical tray', 'polyethylene lab sump',
      'removable grate pallet', 'stackable lab containment', 'yellow lab safety', 'research lab pallet', 'fume hood containment',
      'quality control tray', 'small scale secondary', 'space efficient pallet', 'durable lab ppe', 'essential modular safety'
    ]
  },
  {
    id: 'sysbel-steel-spill-containment-pallet-2-drum',
    title: 'Sysbel Steel Spill Containment Pallet (2 Drum)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00amToENGtRfcz/Professional-Sysbel-2-Drum-Spill-Pallet-Secondary-Containment-for-Oil-Chemical-Storage.webp',
    desc: 'Sysbel Steel Spill Containment Pallet (2 Drum) handles heavy-duty applications.\n' +
          'All-steel construction with galvanized finish for maximum durability.\n' +
          'Large sump capacity captures full drum contents in case of failure.\n' +
          'Removable steel grates support drums and allow sump inspection.\n' +
          'Forklift pockets and raised edges for safe handling.\n' +
          'Yellow powder coating with hazard warnings for visibility.\n' +
          'Ideal for industrial plants, warehouses, and high-load drum storage.\n' +
          'Meets secondary containment standards for steel pallets.\n' +
          'Rugged, long-lasting pallet for demanding environments.\n' +
          'Essential heavy-duty solution for safe drum containment.',
    rating: 4.8,
    reviews: 55,
    sold: '180+',
    tags: [
      'sysbel steel pallet', '2 drum steel containment', 'heavy duty spill pallet', 'galvanized steel pallet', 'large sump steel',
      'removable steel grate', 'forklift steel pallet', 'yellow industrial pallet', 'warehouse drum storage', 'high load containment',
      'rugged steel pallet', 'demanding environment ppe', 'long lasting spill tray', 'safe drum steel', 'essential heavy duty'
    ]
  },
  {
    id: 'sysbel-fm-ce-36l-single-drum-oil-drum-tray-leash',
    title: 'Sysbel FM CE 36L Single Drum Oil Drum Tray Leash',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/oup7BgpUnAU/maxresdefault.jpg',
    desc: 'Sysbel FM CE 36L Single Drum Oil Drum Tray provides compact containment.\n' +
          '36-liter sump capacity captures leaks from single 205 L drums.\n' +
          'FM and CE-certified polyethylene for oil, fuel, and chemical resistance.\n' +
          'Low-profile tray with raised edges prevents overflow.\n' +
          'Ribbed bottom adds strength and allows forklift movement.\n' +
          'Bright yellow with printed warnings for hazard awareness.\n' +
          'Ideal for workshops, garages, small storage areas, and single drum use.\n' +
          'Meets international standards for secondary spill containment.\n' +
          'Lightweight, durable tray for safe single drum storage.\n' +
          'Essential low-cost solution for preventing ground contamination.',
    rating: 4.6,
    reviews: 65,
    sold: '220+',
    tags: [
      'sysbel 36l drum tray', 'single drum containment', 'fm ce tray', 'low profile oil tray', '36 liter sump tray',
      'yellow drum tray', 'workshop single drum', 'garage oil containment', 'forklift tray', 'raised edge tray',
      'small storage safety', 'lightweight drum tray', 'prevent ground contamination', 'low cost secondary', 'essential single drum ppe'
    ]
  }
],



   'Industrial Tools': [
  {
    id: 'dj-105a-dajing',
    title: 'DJ-105A DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.alicdn.com/imgextra/i2/6000000003669/O1CN01P5Cify1cyRrDBWFUz_!!6000000003669-0-tbvideo.jpg',
    desc: 'DJ-105A DAJING Pipe Cutter is a compact, lightweight tool designed for precise cutting of small-diameter PVC, PPR, and plastic pipes.\n' +
          'Ratchet mechanism allows one-handed operation with minimal effort in tight spaces.\n' +
          'High-carbon steel blade delivers clean, burr-free cuts up to 42 mm diameter.\n' +
          'Ergonomic handle with non-slip grip reduces hand fatigue during extended use.\n' +
          'Quick-release blade change system for fast maintenance and replacement.\n' +
          'Ideal for plumbing, irrigation, HVAC installation, and general pipe work.\n' +
          'Durable construction withstands daily professional and DIY demands.\n' +
          'Compact size fits easily in tool belts and small toolboxes.\n' +
          'Trusted DAJING quality ensures long service life and consistent performance.\n' +
          'Essential cutting tool for accurate, efficient plastic pipe preparation.',
    rating: 4.6,
    reviews: 80,
    sold: '400+',
    tags: [
      'dajing pipe cutter', 'pvc cutter 42mm', 'ratchet pipe cutter', 'plastic pipe tool', 'one hand pipe cutter',
      'plumbing pipe cutter', 'ppr cutter compact', 'hvac pipe cutting', 'burr free cutter', 'ergonomic pipe tool',
      'quick release blade', 'professional pipe cutter', 'diy pipe cutter', 'irrigation pipe tool', 'essential cutting ppe'
    ]
  },
  {
    id: 'dj-108b-dajing',
    title: 'DJ-108B DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.alicdn.com/imgextra/i2/6000000003669/O1CN01P5Cify1cyRrDBWFUz_!!6000000003669-0-tbvideo.jpg',
    desc: 'DJ-108B DAJING Heavy-Duty Pipe Cutter handles medium-diameter PVC, CPVC, and plastic pipes with ease.\n' +
          'Advanced ratchet drive system provides smooth, high-leverage cutting action.\n' +
          'Precision-ground blade produces clean, square cuts up to 63 mm OD.\n' +
          'Reinforced ergonomic handle with cushioned grip for comfort and control.\n' +
          'Quick blade replacement without tools for minimal downtime.\n' +
          'Ideal for plumbing contractors, irrigation systems, and industrial piping.\n' +
          'Robust construction withstands heavy daily use on job sites.\n' +
          'Compact yet powerful design fits easily in professional tool kits.\n' +
          'Trusted DAJING engineering ensures reliability and long blade life.\n' +
          'Professional-grade cutter for fast, accurate pipe preparation.',
    rating: 4.7,
    reviews: 90,
    sold: '450+',
    tags: [
      'dajing heavy duty cutter', '63mm pipe cutter', 'ratchet heavy duty', 'pvc cpvc cutter', 'plumbing contractor tool',
      'irrigation pipe cutter', 'industrial piping cutter', 'clean square cut', 'ergonomic heavy cutter', 'quick blade change',
      'job site pipe tool', 'professional dajing cutter', 'robust pipe cutter', 'accurate pipe preparation', 'essential heavy duty tool'
    ]
  },
  {
    id: 'dj-112-dajing',
    title: 'DJ-112 DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.alicdn.com/imgextra/i2/6000000003669/O1CN01P5Cify1cyRrDBWFUz_!!6000000003669-0-tbvideo.jpg',
    desc: 'DJ-112 DAJING Quick-Adjust Ratchet Pipe Cutter speeds up cutting tasks significantly.\n' +
          'Rapid ratchet adjustment allows instant size setting without tools.\n' +
          'High-carbon steel wheel blade delivers smooth, precise cuts on PVC and plastic.\n' +
          'Heavy-duty frame supports larger diameters up to 75 mm.\n' +
          'Ergonomic non-slip handle reduces strain during repetitive cuts.\n' +
          'Ideal for plumbing, drainage, irrigation, and construction piping work.\n' +
          'Durable design withstands tough job site conditions.\n' +
          'Compact and lightweight for easy transport and storage.\n' +
          'DAJING quality ensures consistent performance and blade longevity.\n' +
          'Efficient, time-saving cutter for professional pipe installers.',
    rating: 4.5,
    reviews: 100,
    sold: '500+',
    tags: [
      'dajing quick adjust cutter', 'ratchet pipe cutter 75mm', 'fast adjust pipe tool', 'pvc drainage cutter', 'plumbing quick cutter',
      'irrigation ratchet cutter', 'construction pipe tool', 'precise wheel blade', 'ergonomic quick cutter', 'heavy duty frame cutter',
      'job site efficiency', 'professional pipe cutter', 'time saving cutter', 'durable dajing tool', 'essential quick pipe tool'
    ]
  },
  {
    id: 'dj-102-63-dajing',
    title: 'DJ-102-63 DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61le1+DQYhL._AC_UF1000,1000_QL80_.jpg',
    desc: 'DJ-102-63 DAJING Ratchet Pipe Cutter is optimized for PPR, PVC, and PE pipes up to 63 mm.\n' +
          'Smooth ratchet mechanism provides high torque with low hand effort.\n' +
          'Sharp replaceable blade produces clean, straight cuts without deformation.\n' +
          'Lightweight aluminum alloy body with comfortable grip handle.\n' +
          'Quick-release blade holder for fast sharpening or replacement.\n' +
          'Ideal for plumbing, hot/cold water systems, and irrigation installations.\n' +
          'Corrosion-resistant finish withstands wet job site conditions.\n' +
          'Compact design fits tool belts and small storage spaces.\n' +
          'Trusted DAJING quality for reliable daily professional use.\n' +
          'High-performance cutter for accurate pipe preparation.',
    rating: 4.8,
    reviews: 70,
    sold: '300+',
    tags: [
      'dajing 63mm cutter', 'ratchet ppr cutter', 'pvc pe pipe cutter', '63mm plumbing tool', 'low effort ratchet',
      'clean cut pipe cutter', 'hot cold water system', 'irrigation pipe cutter', 'quick release blade', 'aluminum alloy cutter',
      'corrosion resistant tool', 'tool belt pipe cutter', 'professional dajing', 'accurate pipe prep', 'essential 63mm cutter'
    ]
  },
  {
    id: 'dj-102-75-dajing',
    title: 'DJ-102-75 DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sc04.alicdn.com/kf/HTB1GLuugZjI8KJjSsppq6xbyVXaK.jpg',
    desc: 'DJ-102-75 DAJING Professional Ratchet Cutter handles larger pipes up to 75 mm.\n' +
          'Heavy-duty ratchet system delivers powerful cutting force with ease.\n' +
          'Precision-ground blade ensures clean, square cuts on PVC, PPR, and PE.\n' +
          'Reinforced handle with ergonomic grip for comfort and control.\n' +
          'Tool-free blade change for quick maintenance on site.\n' +
          'Ideal for drainage, large irrigation lines, and industrial plumbing.\n' +
          'Durable construction withstands heavy professional use.\n' +
          'Balanced weight distribution reduces user fatigue.\n' +
          'DAJING engineering guarantees long-term reliability.\n' +
          'High-capacity cutter for efficient large pipe work.',
    rating: 4.8,
    reviews: 75,
    sold: '320+',
    tags: [
      'dajing 75mm cutter', 'professional ratchet cutter', 'large pipe cutter', '75mm pvc ppr', 'heavy duty ratchet',
      'square cut pipe tool', 'drainage pipe cutter', 'irrigation large line', 'industrial plumbing cutter', 'ergonomic heavy cutter',
      'tool free blade change', 'durable professional tool', 'balanced pipe cutter', 'efficient large pipe', 'essential 75mm tool'
    ]
  },
  {
    id: 'dj-116-63mm-pprc',
    title: 'DJ-116 63MM PPRC',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61le1+DQYhL._AC_UF1000,1000_QL80_.jpg',
    desc: 'DJ-116 63MM PPRC Pipe Cutter is specialized for multilayer PPR-C pipes.\n' +
          'Precision ratchet mechanism cuts cleanly without crushing composite layers.\n' +
          'Hardened steel blade maintains sharpness for consistent performance.\n' +
          'Compact, lightweight body ideal for overhead and confined spaces.\n' +
          'Ergonomic handle reduces strain during repetitive cuts.\n' +
          'Perfect for hot/cold water systems, heating, and PPR-C installations.\n' +
          'Corrosion-resistant finish suits wet plumbing environments.\n' +
          'Quick blade access for sharpening or replacement.\n' +
          'DAJING quality ensures accurate, professional-grade cuts.\n' +
          'Essential specialized tool for PPR-C pipe preparation.',
    rating: 4.7,
    reviews: 85,
    sold: '350+',
    tags: [
      'dj-116 pprc cutter', '63mm multilayer cutter', 'ppr-c pipe tool', 'ratchet ppr cutter', 'composite pipe cutter',
      'hot cold water system', 'heating pipe cutter', 'lightweight ppr tool', 'ergonomic pprc cutter', 'confined space cutter',
      'corrosion resistant ppr', 'quick blade access', 'professional pprc tool', 'accurate ppr preparation', 'essential multilayer cutter'
    ]
  },
  {
    id: 'dj-115-110mm-pprc',
    title: 'DJ-115 110MM PPRC',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sc04.alicdn.com/kf/HTB1GLuugZjI8KJjSsppq6xbyVXaK.jpg',
    desc: 'DJ-115 110MM PPRC Heavy-Duty Cutter handles large multilayer composite pipes.\n' +
          'Powerful ratchet drive provides high torque for effortless cutting.\n' +
          'Reinforced blade and frame prevent distortion on thick-walled pipes.\n' +
          'Extra-long handle for superior leverage on large diameters.\n' +
          'Clean, square cuts preserve pipe integrity for fusion joints.\n' +
          'Ideal for industrial water supply, heating systems, and large PPR-C lines.\n' +
          'Robust construction withstands demanding job site conditions.\n' +
          'Quick-release mechanism for fast blade service.\n' +
          'DAJING engineering delivers precision and durability.\n' +
          'Professional heavy-duty tool for large PPR-C pipe work.',
    rating: 4.9,
    reviews: 60,
    sold: '200+',
    tags: [
      'dj-115 110mm cutter', 'heavy duty pprc', 'large multilayer cutter', 'ratchet large pipe', '110mm ppr-c tool',
      'industrial water supply', 'heating system cutter', 'extra long handle', 'clean fusion cut', 'robust pipe cutter',
      'demanding job site', 'quick release heavy', 'precision large cutter', 'durable pprc tool', 'professional 110mm cutter'
    ]
  },
  {
    id: 'dj-10-63',
    title: 'DJ-10-63',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sc04.alicdn.com/kf/H79084335aa0641d08b5bae2660685fa9Y.jpg',
    desc: 'DJ-10-63 Versatile Tube Cutter produces clean cuts on various pipe materials.\n' +
          'Adjustable wheel cutter with quick size setting for efficiency.\n' +
          'Hardened steel cutting wheel for smooth operation on PVC, copper, and PEX.\n' +
          'Compact design ideal for tight spaces and overhead work.\n' +
          'Ergonomic handle with non-slip grip reduces hand strain.\n' +
          'Perfect for plumbing, HVAC, irrigation, and general tube cutting.\n' +
          'Corrosion-resistant finish for long life in wet conditions.\n' +
          'Tool-free blade depth adjustment for different materials.\n' +
          'DAJING quality ensures reliable, accurate performance.\n' +
          'All-purpose cutter for professional and DIY pipe work.',
    rating: 4.6,
    reviews: 95,
    sold: '400+',
    tags: [
      'dj-10-63 tube cutter', 'versatile pipe cutter', 'wheel tube cutter', 'pvc copper pex', 'compact tube tool',
      'plumbing versatile cutter', 'hvac tube cutting', 'irrigation pipe cutter', 'ergonomic wheel cutter', 'corrosion resistant tube',
      'quick size adjust', 'tool free blade', 'professional tube cutter', 'accurate diy cutter', 'essential all purpose tool'
    ]
  },
  {
    id: 'dj-117-dajing-tube-cutter',
    title: 'DJ-117 DAJING TUBE CUTTER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.dajingtools.com/dajingtools/2023/08/17/init-2-1.png',
    desc: 'DJ-117 DAJING Tube Cutter is compact and precise for copper and small pipes.\n' +
          'Mini ratchet design allows cutting in very confined spaces.\n' +
          'Sharp replaceable wheel blade for clean, round cuts on copper, brass, and thin PVC.\n' +
          'Lightweight aluminum body with comfortable grip handle.\n' +
          'Quick-adjust knob for fast size setting up to 28 mm.\n' +
          'Ideal for refrigeration, air conditioning, plumbing repairs, and instrumentation.\n' +
          'Corrosion-resistant finish suits wet and humid job sites.\n' +
          'Easy blade replacement for minimal downtime.\n' +
          'Trusted DAJING quality for accurate small tube work.\n' +
          'Essential mini cutter for professional tube preparation.',
    rating: 4.5,
    reviews: 110,
    sold: '500+',
    tags: [
      'dj-117 tube cutter', 'mini copper cutter', 'compact ratchet cutter', 'refrigeration tube tool', 'air conditioning cutter',
      'plumbing repair cutter', 'instrumentation pipe', 'lightweight mini cutter', 'quick adjust tube', 'corrosion resistant mini',
      'easy blade replacement', 'professional small tube', 'accurate copper cut', 'essential mini tool', 'confined space cutter'
    ]
  },
  {
    id: 'dj-103a-dajing',
    title: 'DJ-103A DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61le1+DQYhL._AC_UF1000,1000_QL80_.jpg',
    desc: 'DJ-103A DAJING Adjustable Cutter features sharp wheel blade for clean cuts.\n' +
          'Smooth-adjust wheel mechanism for precise control on PVC and plastic pipes.\n' +
          'High-carbon steel blade maintains edge for long cutting life.\n' +
          'Ergonomic handle with non-slip grip reduces fatigue.\n' +
          'Compact frame ideal for tight plumbing and irrigation work.\n' +
          'Quick blade depth adjustment for different pipe thicknesses.\n' +
          'Ideal for residential plumbing, garden irrigation, and small repairs.\n' +
          'Durable construction withstands daily professional use.\n' +
          'DAJING reliability ensures consistent, accurate performance.\n' +
          'Versatile adjustable cutter for everyday pipe tasks.',
    rating: 4.6,
    reviews: 100,
    sold: '450+',
    tags: [
      'dj-103a dajing cutter', 'adjustable wheel cutter', 'sharp blade pipe', 'pvc plastic cutter', 'ergonomic adjustable',
      'residential plumbing tool', 'garden irrigation cutter', 'quick depth adjust', 'compact pipe cutter', 'durable daily cutter',
      'professional small cutter', 'accurate everyday cut', 'versatile pipe tool', 'essential adjustable cutter', 'reliable dajing tool'
    ]
  },
  {
    id: 'dj-103-32a-dajing',
    title: 'DJ-103-32A DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.dajingtools.com/dajingtools/2023/08/17/init-2-1.png',
    desc: 'DJ-103-32A Mini Pipe Cutter is perfect for small-diameter pipes up to 32 mm.\n' +
          'Precision wheel cutter produces clean cuts on PPR, PVC, and PE.\n' +
          'Ultra-compact design fits in tight spaces and tool belts.\n' +
          'Ergonomic handle provides comfortable grip for repetitive cuts.\n' +
          'Adjustable wheel tension for optimal cutting performance.\n' +
          'Ideal for domestic plumbing, drip irrigation, and small repairs.\n' +
          'Lightweight and corrosion-resistant for wet environments.\n' +
          'Easy blade access for quick sharpening or replacement.\n' +
          'Trusted DAJING quality in a mini professional tool.\n' +
          'Essential small cutter for accurate pipe work.',
    rating: 4.5,
    reviews: 120,
    sold: '600+',
    tags: [
      'dj-103-32a mini cutter', '32mm pipe cutter', 'compact wheel cutter', 'ppr pvc mini', 'tight space cutter',
      'domestic plumbing tool', 'drip irrigation cutter', 'lightweight mini cutter', 'adjustable tension cutter', 'corrosion resistant mini',
      'easy blade access', 'professional small cutter', 'accurate mini cut', 'essential small pipe tool', 'reliable dajing mini'
    ]
  },
  {
    id: 'dj-010-20-32mm-djing',
    title: 'DJ-010 (20-32mm) DJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.waterware.co.nz/wp-content/uploads/2024/08/EU05409.png',
    desc: 'DJ-010 (20-32mm) Professional Cutter delivers clean cuts in small pipe range.\n' +
          'Ratchet-style mechanism provides high leverage for easy cutting.\n' +
          'Hardened blade ensures square, burr-free ends on PPR and PVC.\n' +
          'Compact body with comfortable ergonomic grip handle.\n' +
          'Quick size adjustment for fast setup on 20–32 mm pipes.\n' +
          'Ideal for hot/cold water lines, irrigation, and plumbing repairs.\n' +
          'Durable finish resists corrosion in wet conditions.\n' +
          'Lightweight design fits easily in tool belts.\n' +
          'DAJING engineering guarantees precision and reliability.\n' +
          'Professional small-range cutter for efficient pipe work.',
    rating: 4.7,
    reviews: 80,
    sold: '350+',
    tags: [
      'dj-010 20-32mm', 'professional small cutter', 'ratchet 32mm cutter', 'ppr pvc small range', 'ergonomic small cutter',
      'hot cold water line', 'irrigation small pipe', 'quick adjust cutter', 'corrosion resistant small', 'tool belt cutter',
      'burr free small cut', 'durable dajing cutter', 'precision small tool', 'efficient pipe preparation', 'essential 32mm cutter'
    ]
  },
  {
    id: 'dj-009-20-63mm-dajing',
    title: 'DJ-009 (20-63mm) DAJING',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/O9jZ6cIa7X8/sddefault.jpg',
    desc: 'DJ-009 (20-63mm) Large Capacity Cutter handles wide range of plastic pipes.\n' +
          'Powerful ratchet drive for smooth, low-effort cutting up to 63 mm.\n' +
          'Precision blade produces clean cuts ready for fusion or solvent joints.\n' +
          'Reinforced handle with non-slip grip for control and comfort.\n' +
          'Quick-adjust system speeds up repetitive pipe cutting tasks.\n' +
          'Ideal for plumbing, drainage, irrigation, and industrial piping.\n' +
          'Robust construction withstands heavy daily professional use.\n' +
          'Balanced design reduces user fatigue on large jobs.\n' +
          'Trusted DAJING quality for consistent, accurate performance.\n' +
          'Versatile large-range cutter for professional pipe installers.',
    rating: 4.8,
    reviews: 70,
    sold: '300+',
    tags: [
      'dj-009 63mm cutter', 'large capacity pipe cutter', 'ratchet wide range', '20-63mm pvc ppr', 'professional large cutter',
      'plumbing drainage tool', 'irrigation large pipe', 'quick adjust large', 'reinforced handle cutter', 'industrial piping tool',
      'clean fusion cut', 'robust dajing cutter', 'balanced large tool', 'versatile pipe cutter', 'essential 63mm professional'
    ]
  },
  {
    id: 'dj-017-dajing-75-110mm',
    title: 'DJ-017 DAJING (75-110mm)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://www.pepipeweldingmachine.com/pic/big/181_0.jpg',
    desc: 'DJ-017 DAJING (75-110mm) Heavy-Duty Cutter for large plastic pipes.\n' +
          'Extra-strong ratchet mechanism delivers high torque for big diameters.\n' +
          'Reinforced blade and frame prevent flexing on thick-walled pipes.\n' +
          'Long handle provides superior leverage for effortless cutting.\n' +
          'Clean, square cuts ensure perfect alignment for welding joints.\n' +
          'Ideal for drainage systems, large irrigation, and industrial HDPE/PVC.\n' +
          'Heavy-duty construction withstands toughest job site conditions.\n' +
          'Quick blade access for fast sharpening or replacement.\n' +
          'DAJING engineering guarantees precision on large pipes.\n' +
          'Professional-grade cutter for high-capacity pipe work.',
    rating: 4.9,
    reviews: 50,
    sold: '180+',
    tags: [
      'dj-017 110mm cutter', 'heavy duty large cutter', 'ratchet 75-110mm', 'large drainage pipe', 'industrial hdpe cutter',
      'long handle leverage', 'square welding cut', 'reinforced large frame', 'tough job site cutter', 'quick blade large',
      'precision large pipe', 'professional 110mm tool', 'high capacity cutter', 'essential large pipe', 'robust industrial cutter'
    ]
  },
  {
    id: 'dj-015-25-32mm-dajing-white-box',
    title: 'DJ-015 (25-32mm) DAJING+white box',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/765HX3zP7wQ/maxresdefault.jpg',
    desc: 'DJ-015 (25-32mm) DAJING Cutter comes in professional white retail box.\n' +
          'Precision ratchet cutter for clean cuts on small PPR, PVC, and PE pipes.\n' +
          'Compact design ideal for tight plumbing and repair work.\n' +
          'Sharp replaceable blade produces burr-free ends.\n' +
          'Ergonomic handle with non-slip grip for comfort.\n' +
          'Perfect for domestic water lines, drip irrigation, and small installations.\n' +
          'Corrosion-resistant finish for wet environments.\n' +
          'White box packaging suitable for retail and gifting.\n' +
          'Trusted DAJING quality with precise, reliable performance.\n' +
          'Essential small-range cutter for accurate pipe preparation.',
    rating: 4.6,
    reviews: 90,
    sold: '400+',
    tags: [
      'dj-015 32mm cutter', 'white box pipe cutter', 'compact ratchet small', 'ppr pvc 25-32mm', 'domestic plumbing tool',
      'drip irrigation cutter', 'burr free small cut', 'ergonomic small cutter', 'corrosion resistant small', 'retail white box',
      'professional small range', 'precise pipe prep', 'essential 32mm cutter', 'reliable dajing small', 'accurate small tool'
    ]
  },
  {
    id: 'dj-023-color-box',
    title: 'DJ-023 COLOR BOX',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.listermachinetools.com/wp-content/uploads/2020/11/1605100830_PB-38-DH3.jpg',
    desc: 'DJ-023 Pipe Cutter in retail color box packaging for easy display.\n' +
          'Ratchet-style cutter for clean, straight cuts on PVC and plastic pipes.\n' +
          'Adjustable wheel blade system for precise cutting control.\n' +
          'Durable handle with non-slip grip for safe operation.\n' +
          'Compact size suitable for plumbing, irrigation, and general use.\n' +
          'Bright color box with clear specifications for retail sale.\n' +
          'Ideal for hardware stores, DIY markets, and professional kits.\n' +
          'DAJING quality ensures reliable, accurate performance.\n' +
          'Attractive packaging makes it perfect for gifting or resale.\n' +
          'Essential retail cutter for everyday pipe cutting needs.',
    rating: 4.5,
    reviews: 85,
    sold: '380+',
    tags: [
      'dj-023 color box', 'retail pipe cutter', 'ratchet retail cutter', 'pvc plastic retail', 'adjustable wheel retail',
      'hardware store cutter', 'diy pipe tool', 'compact retail cutter', 'non slip grip retail', 'bright packaging cutter',
      'professional retail kit', 'reliable dajing retail', 'accurate everyday cut', 'essential retail tool', 'attractive pipe cutter'
    ]
  },
  {
    id: 'sy25',
    title: 'SY25',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://www.pepipeweldingmachine.com/pic/big/181_0.jpg',
    desc: 'SY25 Manual Pressure Test Pump is designed for pipe system integrity testing.\n' +
          'Hand-operated pump generates up to 25 bar for accurate pressure checks.\n' +
          'Sturdy steel frame with ergonomic handle for easy pumping.\n' +
          'Large pressure gauge provides clear, precise readings.\n' +
          'Hose and fittings included for quick connection to pipes.\n' +
          'Ideal for testing PPR, PVC, HDPE, and metal piping systems.\n' +
          'Portable design for on-site use in plumbing and installation.\n' +
          'Durable construction withstands frequent professional testing.\n' +
          'Essential tool for ensuring leak-free pipe installations.\n' +
          'Reliable manual pump for quality control and commissioning.',
    rating: 4.7,
    reviews: 75,
    sold: '320+',
    tags: [
      'sy25 pressure test pump', 'manual pipe testing', '25 bar hand pump', 'pipe integrity test', 'ppr pvc testing',
      'hdpe pressure pump', 'plumbing test tool', 'ergonomic test pump', 'large gauge pump', 'on site pipe test',
      'leak free testing', 'durable manual pump', 'quality control tool', 'commissioning pump', 'essential pipe test'
    ]
  },
  {
    id: 'sy40',
    title: 'SY40',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.technicmachines.com/wp-content/uploads/2024/06/Automatic-Double-Head-Pipe-Tube-Bending-Machine.webp',
    desc: 'SY40 Heavy-Duty Pipe Vise securely holds pipes during cutting and threading.\n' +
          'Large capacity jaws grip pipes from 10 mm to 115 mm diameter.\n' +
          'Chain locking mechanism provides strong, even clamping force.\n' +
          'Hardened steel jaws resist wear and prevent pipe slippage.\n' +
          'Stable base with mounting holes for workbench or stand attachment.\n' +
          'Ideal for plumbing workshops, fabrication shops, and site work.\n' +
          'Robust construction withstands heavy industrial use.\n' +
          'Quick-release chain for fast pipe loading and unloading.\n' +
          'Essential tool for safe, accurate pipe preparation.\n' +
          'Reliable vise for professional pipe handling.',
    rating: 4.8,
    reviews: 60,
    sold: '250+',
    tags: [
      'sy40 pipe vise', 'heavy duty pipe clamp', 'large capacity vise', 'chain locking vise', 'hardened steel jaws',
      'plumbing workshop vise', 'fabrication pipe tool', 'site pipe holding', 'stable base vise', 'quick release chain',
      'industrial pipe vise', 'robust pipe clamp', 'safe pipe preparation', 'professional pipe tool', 'essential pipe vise'
    ]
  },
  {
    id: 'dh-160s',
    title: 'DH-160S',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ytimg.com/vi/rbKkmESIltc/maxresdefault.jpg',
    desc: 'DH-160S Hydraulic Pipe Bender is designed for accurate bending of medium pipes.\n' +
          'Hydraulic ram provides smooth, powerful bending force up to 160 mm.\n' +
          'Multiple dies included for common pipe sizes and radii.\n' +
          'Sturdy frame with adjustable supports prevents deformation.\n' +
          'Pressure gauge ensures precise control of bend angle.\n' +
          'Ideal for plumbing, HVAC, handrails, and structural steel work.\n' +
          'Portable design with wheels for job site mobility.\n' +
          'Durable construction withstands daily professional use.\n' +
          'Clean, wrinkle-free bends for professional installations.\n' +
          'Essential hydraulic bender for medium pipe fabrication.',
    rating: 4.9,
    reviews: 40,
    sold: '150+',
    tags: [
      'dh-160s pipe bender', 'hydraulic medium bender', '160mm pipe bending', 'multiple dies bender', 'pressure gauge bender',
      'plumbing hvac tool', 'handrail bending', 'structural steel bender', 'portable hydraulic bender', 'wrinkle free bends',
      'job site mobility', 'durable pipe fabrication', 'professional bend tool', 'clean pipe bend', 'essential medium bender'
    ]
  },
  {
    id: 'dh-200s',
    title: 'DH-200S',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://duralbend.com/wp-content/uploads/2019/02/DM-38-DH-AUTO-K.jpg',
    desc: 'DH-200S Professional Hydraulic Pipe Bender handles larger pipe diameters.\n' +
          'High-capacity hydraulic system bends up to 200 mm with precision.\n' +
          'Wide range of bending dies for different angles and radii.\n' +
          'Heavy-duty frame with adjustable rollers for pipe support.\n' +
          'Accurate pressure control and angle gauge for consistent results.\n' +
          'Ideal for industrial piping, boiler tubes, and structural fabrication.\n' +
          'Wheeled base for easy movement around large workshops.\n' +
          'Robust construction for continuous professional use.\n' +
          'Smooth, distortion-free bends for high-quality installations.\n' +
          'Premium hydraulic bender for demanding pipe work.',
    rating: 4.9,
    reviews: 45,
    sold: '160+',
    tags: [
      'dh-200s hydraulic bender', 'professional large bender', '200mm pipe bending', 'wide die set bender', 'accurate angle bender',
      'industrial piping tool', 'boiler tube bending', 'structural fabrication bender', 'wheeled heavy bender', 'distortion free bends',
      'continuous professional use', 'premium pipe bender', 'high quality bend', 'demanding pipe work', 'essential large hydraulic'
    ]
  },
  {
    id: 'dh-250s',
    title: 'DH-250S',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00dELqPkARLspw/160mm-Hydraulic-PVDF-PE-Pipe-Butt-Fusion-Welding-Machine.webp',
    desc: 'DH-250S High-Capacity Hydraulic Pipe Bender for large industrial pipes.\n' +
          'Powerful hydraulic ram bends up to 250 mm diameter with ease.\n' +
          'Comprehensive die set for multiple radii and bend angles.\n' +
          'Reinforced frame with adjustable supports prevents pipe collapse.\n' +
          'Precise pressure gauge and angle indicator for accurate bending.\n' +
          'Ideal for heavy piping, process plants, and structural steel work.\n' +
          'Portable with forklift slots for movement in large facilities.\n' +
          'Built for continuous use in demanding industrial environments.\n' +
          'Clean, professional bends for critical piping installations.\n' +
          'Top-tier hydraulic bender for maximum pipe bending capacity.',
    rating: 4.9,
    reviews: 35,
    sold: '120+',
    tags: [
      'dh-250s pipe bender', 'high capacity hydraulic', '250mm pipe bending', 'comprehensive die bender', 'precise pressure bender',
      'heavy piping tool', 'process plant bending', 'structural steel large', 'forklift portable bender', 'professional large bend',
      'continuous industrial use', 'top tier pipe bender', 'clean critical bend', 'maximum bending capacity', 'essential heavy duty bender'
    ]
  },
  {
    id: 'dh-160d',
    title: 'DH-160D',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00TLWozMQnaCkY/160-355mm-Butt-Fusion-Welding-Machine-HDPE-Pipe-Welding-Machine-Electric-Welding-Machine-Plastic-Pipe-Fitting-PPR-Welding-Machine.webp',
    desc: 'DH-160D Durable Manual/Electric Pipe Bender offers versatile bending options.\n' +
          'Switchable manual or electric drive for different job requirements.\n' +
          'Bends up to 160 mm pipes with smooth, controlled action.\n' +
          'Multiple dies included for common angles and radii.\n' +
          'Sturdy frame with adjustable rollers for pipe stability.\n' +
          'Ideal for plumbing, HVAC, handrails, and on-site fabrication.\n' +
          'Portable design with wheels for easy relocation.\n' +
          'Robust construction for long-term professional reliability.\n' +
          'Clean, wrinkle-free bends for high-quality pipe work.\n' +
          'Flexible bender for both manual and powered applications.',
    rating: 4.8,
    reviews: 50,
    sold: '180+',
    tags: [
      'dh-160d pipe bender', 'manual electric bender', '160mm versatile bender', 'switchable drive bender', 'multiple die bender',
      'plumbing hvac tool', 'handrail fabrication', 'on site pipe bending', 'portable manual electric', 'wrinkle free bend',
      'robust flexible bender', 'long term reliability', 'clean pipe work', 'versatile pipe tool', 'essential dual mode bender'
    ]
  },
  {
    id: 'dh-200d',
    title: 'DH-200D',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ae01.alicdn.com/kf/H82c691dad2c4405f933e2005dc0daefby.jpg',
    desc: 'DH-200D Heavy-Duty Pipe Bending Machine handles larger pipe sizes.\n' +
          'Powerful manual or electric operation for 200 mm pipes.\n' +
          'Wide selection of bending dies for various angles and curves.\n' +
          'Heavy-duty frame with adjustable supports for stability.\n' +
          'Precise control ensures consistent, professional bends.\n' +
          'Ideal for industrial piping, structural steel, and process plants.\n' +
          'Portable with forklift points for workshop mobility.\n' +
          'Built for continuous use in demanding fabrication environments.\n' +
          'Smooth, distortion-free bends for critical applications.\n' +
          'High-performance bender for large-scale pipe work.',
    rating: 4.8,
    reviews: 55,
    sold: '200+',
    tags: [
      'dh-200d bending machine', 'heavy duty pipe bender', '200mm large bender', 'manual electric heavy', 'wide die selection',
      'industrial piping tool', 'structural steel bending', 'process plant bender', 'forklift mobility bender', 'distortion free large',
      'continuous fabrication use', 'high performance bender', 'smooth critical bend', 'large scale pipe tool', 'essential heavy bender'
    ]
  },
  {
    id: '160-315-with-low-hydraulic',
    title: '160-315 with low hydraulic',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://phoenixenergysupply.com/wp-content/uploads/2025/04/TFH2_600x448.png',
    desc: '160-315 Low Hydraulic Pipe Bender is designed for large-diameter bending.\n' +
          'Low-pressure hydraulic system reduces operator effort on big pipes.\n' +
          'Wide range of dies for accurate bends on 160–315 mm pipes.\n' +
          'Reinforced frame with adjustable supports prevents pipe collapse.\n' +
          'Precise gauge and angle control for consistent results.\n' +
          'Ideal for HDPE, PVC, and large industrial piping systems.\n' +
          'Forklift-compatible base for easy positioning.\n' +
          'Built for heavy-duty use in pipe fabrication shops.\n' +
          'Smooth, professional bends for fusion and joint alignment.\n' +
          'Essential low-effort bender for large pipe projects.',
    rating: 4.9,
    reviews: 30,
    sold: '100+',
    tags: [
      '160-315 low hydraulic', 'large diameter bender', 'low pressure bender', 'hdpe pvc large bend', 'wide die large bender',
      'industrial large piping', 'reinforced frame bender', 'precise angle control', 'forklift base bender', 'heavy duty fabrication',
      'smooth fusion bend', 'professional large pipe', 'low effort large tool', 'essential big pipe bender', 'high capacity hydraulic'
    ]
  },
  {
    id: '160-355-with-high-hydraulic',
    title: '160-355 with high hydraulic',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00TLWozMQnaCkY/160-355mm-Butt-Fusion-Welding-Machine-HDPE-Pipe-Welding-Machine-Electric-Welding-Machine-Plastic-Pipe-Fitting-PPR-Welding-Machine.webp',
    desc: '160-355 High Hydraulic Butt Fusion Welding Machine for HDPE pipes.\n' +
          'High-pressure hydraulic system ensures strong, uniform fusion joints.\n' +
          'Wide range 160–355 mm with multiple heating and pressure settings.\n' +
          'Digital temperature control for precise welding parameters.\n' +
          'Robust frame with alignment guides for accurate pipe positioning.\n' +
          'Ideal for water supply, gas pipelines, and industrial HDPE installations.\n' +
          'Portable with wheels or forklift points for field use.\n' +
          'Meets international standards for butt fusion welding.\n' +
          'Reliable machine for leak-proof, high-strength pipe joints.\n' +
          'Essential professional welder for large HDPE projects.',
    rating: 4.9,
    reviews: 40,
    sold: '120+',
    tags: [
      '160-355 butt fusion', 'high hydraulic welder', 'hdpe pipe welding', 'large diameter fusion', 'digital temperature welder',
      'water supply pipeline', 'gas pipe fusion', 'industrial hdpe welder', 'portable fusion machine', 'accurate alignment welder',
      'strong uniform joint', 'professional hdpe tool', 'leak proof welding', 'essential large fusion', 'high strength pipe joint'
    ]
  },
  {
    id: '200-milling-cutter-hdpe',
    title: '200 milling cutter HDPE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ae01.alicdn.com/kf/H82c691dad2c4405f933e2005dc0daefby.jpg',
    desc: '200 mm Milling Cutter / Scraper prepares HDPE pipe ends for butt fusion.\n' +
          'Manual rotary design removes oxidation layer for strong welds.\n' +
          'High-speed steel blades ensure clean, smooth surface finish.\n' +
          'Adjustable depth control for precise material removal.\n' +
          'Ergonomic handle reduces fatigue during preparation.\n' +
          'Ideal for HDPE pipe welding in water, gas, and industrial lines.\n' +
          'Compact and portable for field and workshop use.\n' +
          'Durable construction withstands frequent professional use.\n' +
          'Essential tool for achieving high-quality fusion joints.\n' +
          'Reliable scraper for perfect pipe end preparation.',
    rating: 4.7,
    reviews: 50,
    sold: '150+',
    tags: [
      '200mm hdpe cutter', 'pipe milling scraper', 'butt fusion preparation', 'hdpe oxidation removal', 'rotary manual scraper',
      'water gas pipeline tool', 'industrial hdpe prep', 'adjustable depth cutter', 'ergonomic fusion tool', 'field workshop scraper',
      'clean surface finish', 'high quality fusion prep', 'durable pipe scraper', 'essential end preparation', 'reliable hdpe tool'
    ]
  },
  {
    id: 'pata-heater',
    title: 'PATA HEATER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://phoenixenergysupply.com/wp-content/uploads/2025/04/TFH2_600x448.png',
    desc: 'PATA Socket Fusion Heater is a precision tool for HDPE and PPR pipe joining.\n' +
          'Accurate temperature control for consistent socket fusion welds.\n' +
          'Non-stick coated heating plates ensure clean, easy release.\n' +
          'Compact design with ergonomic handle for comfortable use.\n' +
          'Multiple size adaptors for 20–63 mm pipe and fittings.\n' +
          'Ideal for plumbing, hot/cold water systems, and small irrigation.\n' +
          'Portable with storage case for field and workshop applications.\n' +
          'Meets international standards for socket fusion welding.\n' +
          'Reliable heater for strong, leak-proof pipe connections.\n' +
          'Essential fusion tool for professional plastic pipe installation.',
    rating: 4.6,
    reviews: 100,
    sold: '400+',
    tags: [
      'pata socket heater', 'hdpe ppr fusion tool', 'temperature control heater', 'non stick fusion plate', '20-63mm socket fusion',
      'plumbing fusion tool', 'hot cold water system', 'small irrigation heater', 'portable fusion case', 'ergonomic heater handle',
      'clean fusion joint', 'strong pipe connection', 'professional plastic fusion', 'essential socket tool', 'reliable ppr heater'
    ]
  },
  {
    id: '20-32-automatic',
    title: '20-32 AUTOMATIC',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://icdn.tradew.com/file/202208/1575504/jpg/7793620.jpg?x-oss-process=image/quality,Q_90',
    desc: '20-32 Automatic Socket Fusion Welding Machine for HDPE/PPR pipes.\n' +
          'Fully automatic temperature and timing control for consistent welds.\n' +
          'Non-stick coated heating surfaces prevent material sticking.\n' +
          'Compact, lightweight design with ergonomic grip for easy handling.\n' +
          'Suitable for 20–32 mm pipes and fittings in water systems.\n' +
          'Ideal for domestic plumbing, heating, and small irrigation projects.\n' +
          'Portable with carry case for on-site and workshop use.\n' +
          'Meets international standards for automatic socket fusion.\n' +
          'Reliable, user-friendly machine for professional joints.\n' +
          'Essential automatic tool for small-diameter pipe fusion.',
    rating: 4.8,
    reviews: 80,
    sold: '350+',
    tags: [
      '20-32 automatic fusion', 'socket fusion machine', 'automatic temperature control', 'hdpe ppr small welder', 'non stick fusion surface',
      'domestic plumbing fusion', 'heating system welder', 'small irrigation fusion', 'portable automatic welder', 'ergonomic fusion tool',
      'consistent small weld', 'professional pipe joint', 'user friendly fusion', 'essential small diameter', 'reliable automatic welder'
    ]
  }
],


   'Hand tools': [
  {
    id: 'dual-purpose-screw-6-inches',
    title: 'Dual-purpose screw, 6 inches',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61iD3W1AjOL._AC_UF894,1000_QL80_.jpg',
    desc: '6-inch Dual-Purpose Screwdriver features both flathead and Phillips tips in one tool.\n' +
          'Magnetic tips securely hold screws for one-handed operation in tight spaces.\n' +
          'Chrome-vanadium steel shaft provides strength and corrosion resistance.\n' +
          'Ergonomic handle with non-slip grip reduces hand fatigue during extended use.\n' +
          'Precision-ground tips prevent cam-out and damage to screw heads.\n' +
          'Ideal for general assembly, electrical work, furniture repair, and DIY projects.\n' +
          'Compact size fits easily in tool belts, pockets, or small toolboxes.\n' +
          'Durable construction withstands daily professional and home use.\n' +
          'Versatile 2-in-1 design saves space and reduces tool switching.\n' +
          'Essential multi-bit screwdriver for efficient fastening tasks.',
    rating: 4.5,
    reviews: 200,
    sold: '1000+',
    tags: [
      'dual purpose screwdriver', '6 inch multi head', 'flat phillips driver', 'magnetic screwdriver', 'chrome vanadium shaft',
      'ergonomic non slip handle', 'general assembly tool', 'electrical work driver', 'furniture repair screwdriver', 'diy multi purpose',
      'compact pocket driver', 'precision tip screwdriver', 'cam out prevention', 'versatile 2 in 1 tool', 'essential fastening tool'
    ]
  },
  {
    id: '6-inch-combination-pliers',
    title: '6-inch combination pliers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71oU+SV+yaL.jpg',
    desc: '6-inch Combination Pliers offer versatile gripping, bending, and cutting in one tool.\n' +
          'High-leverage design provides powerful cutting of soft and hard wires.\n' +
          'Induction-hardened cutting edges stay sharp through heavy use.\n' +
          'Serrated jaws with side cutter for secure hold on flat and round materials.\n' +
          'Ergonomic handles with non-slip grip reduce hand strain.\n' +
          'Ideal for electrical work, automotive repair, jewelry making, and general maintenance.\n' +
          'Chrome-vanadium steel construction for durability and rust resistance.\n' +
          'Compact size perfect for tool belts and tight workspaces.\n' +
          'Professional-grade pliers for precise, reliable performance.\n' +
          'Essential multi-function hand tool for everyday tasks.',
    rating: 4.6,
    reviews: 250,
    sold: '1200+',
    tags: [
      '6 inch combination pliers', 'high leverage pliers', 'wire cutting gripping', 'serrated jaw pliers', 'side cutter pliers',
      'ergonomic non slip pliers', 'electrical pliers tool', 'automotive repair pliers', 'jewelry making pliers', 'general maintenance tool',
      'chrome vanadium pliers', 'compact belt pliers', 'professional multi function', 'precise reliable pliers', 'essential hand tool'
    ]
  },
  {
    id: '10-inch-combination-pliers',
    title: '10-inch combination pliers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://media.fluke.com/9f077ed3-c1a1-4757-9e12-b108002e901d_original__size.jpg',
    desc: '10-inch Combination Pliers deliver heavy-duty performance for demanding tasks.\n' +
          'Extra-long handles provide superior leverage for cutting thick wires.\n' +
          'Induction-hardened cutting edges handle hard and soft materials easily.\n' +
          'Serrated jaws with pipe grip for secure hold on large objects.\n' +
          'Non-slip ergonomic handles reduce fatigue in long sessions.\n' +
          'Ideal for industrial maintenance, automotive, construction, and electrical work.\n' +
          'Chrome-vanadium steel with rust-resistant finish for long life.\n' +
          'Heavy-duty design withstands professional daily use.\n' +
          'Versatile tool for gripping, bending, twisting, and cutting.\n' +
          'Pro-grade pliers for tough, reliable hand work.',
    rating: 4.7,
    reviews: 180,
    sold: '800+',
    tags: [
      '10 inch combination pliers', 'heavy duty pliers', 'long handle leverage', 'induction hardened cutter', 'pipe grip jaws',
      'non slip ergonomic', 'industrial maintenance tool', 'automotive heavy pliers', 'construction wire cutter', 'electrical large pliers',
      'chrome vanadium heavy', 'professional daily use', 'versatile gripping tool', 'tough reliable pliers', 'essential heavy hand tool'
    ]
  },
  {
    id: '10-inch-combination-pliers-rubber',
    title: '10-inch combination pliers RUBBER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://media.fluke.com/42a47432-5314-4954-80bc-b108002e8fb1_original__size.jpg',
    desc: '10-inch Combination Pliers with Rubber Insulation provide electrical safety.\n' +
          'VDE-certified insulated handles protect up to 1000V AC / 1500V DC.\n' +
          'Heavy-duty cutting edges handle hard and soft wires with ease.\n' +
          'Serrated jaws and pipe grip for secure hold on live components.\n' +
          'Ergonomic rubber grips reduce hand fatigue and improve control.\n' +
          'Ideal for electricians, maintenance, and high-voltage work.\n' +
          'Chrome-vanadium steel with rust-resistant finish for durability.\n' +
          'Tested and approved for live electrical applications.\n' +
          'Professional insulated tool for safe, reliable performance.\n' +
          'Essential safety pliers for electrical and industrial tasks.',
    rating: 4.7,
    reviews: 160,
    sold: '700+',
    tags: [
      '10 inch insulated pliers', 'vde rubber pliers', '1000v combination pliers', 'electrical safety tool', 'heavy duty insulated',
      'serrated jaw insulated', 'electrician pliers', 'high voltage maintenance', 'ergonomic rubber grip', 'live wire pliers',
      'chrome vanadium insulated', 'professional safety pliers', 'reliable electrical tool', 'essential vde pliers', 'safe hand tool'
    ]
  },
  {
    id: '8-inch-plastic-pipe-wrench',
    title: '8-inch plastic pipe wrench',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.reedmfgco.com/assets/Images/Products/Wrenches/Strap-Wrenches/02250-SW24A-RGB__PadWzEyODAsODQ2LCJGRkZGRkYiLDBd.jpg',
    desc: '8-inch Plastic Pipe Wrench (strap type) grips pipes without surface damage.\n' +
          'Strong nylon strap with non-marring design protects chrome and plastic fittings.\n' +
          'Quick-adjust ratchet handle for fast tightening and release.\n' +
          'Lightweight composite body reduces arm fatigue.\n' +
          'High torque capacity for stubborn fittings up to 2 inches.\n' +
          'Ideal for plumbing, irrigation, pool equipment, and delicate installations.\n' +
          'Corrosion-resistant materials suit wet environments.\n' +
          'Compact size fits tool belts and small toolboxes.\n' +
          'Reliable non-marring solution for professional pipe work.\n' +
          'Essential strap wrench for safe, damage-free gripping.',
    rating: 4.6,
    reviews: 140,
    sold: '600+',
    tags: [
      '8 inch strap wrench', 'plastic pipe wrench', 'non marring wrench', 'nylon strap wrench', 'quick adjust ratchet',
      'lightweight pipe tool', 'plumbing delicate fittings', 'irrigation strap wrench', 'pool equipment tool', 'corrosion resistant wrench',
      'high torque strap', 'compact belt wrench', 'professional non marring', 'damage free gripping', 'essential strap tool'
    ]
  },
  {
    id: '10-inch-plastic-pipe-wrench',
    title: '10-inch plastic pipe wrench',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://media.rs-online.com/image/upload/f_auto/q_auto/v1618493888/C0519894-01.jpg',
    desc: '10-inch Plastic Pipe Wrench (strap type) provides extra reach and leverage.\n' +
          'Heavy-duty nylon strap grips larger pipes without scratching surfaces.\n' +
          'Ergonomic ratchet handle for quick tightening in tight spaces.\n' +
          'Lightweight composite frame reduces strain during extended use.\n' +
          'High gripping power for fittings up to 3 inches diameter.\n' +
          'Ideal for plumbing, HVAC, irrigation, and non-marring applications.\n' +
          'Corrosion-proof materials for wet and outdoor environments.\n' +
          'Compact yet powerful design fits tool belts easily.\n' +
          'Reliable solution for professional damage-free pipe work.\n' +
          'Essential larger strap wrench for safe handling.',
    rating: 4.6,
    reviews: 130,
    sold: '550+',
    tags: [
      '10 inch strap wrench', 'plastic non marring wrench', 'nylon strap large', 'ergonomic ratchet strap', 'lightweight composite wrench',
      'plumbing hvac tool', 'irrigation large fitting', 'corrosion proof wrench', 'high grip strap wrench', 'compact powerful wrench',
      'professional damage free', 'safe pipe handling', 'essential larger strap', 'non scratching wrench', 'reliable strap tool'
    ]
  },
  {
    id: '12-inch-plastic-pipe-wrench',
    title: '12-inch plastic pipe wrench',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.reedmfgco.com/assets/Images/Products/Wrenches/Strap-Wrenches/02255-SW18A48-RGB__PadWzEyODAsODQ2LCJGRkZGRkYiLDBd.jpg',
    desc: '12-inch Plastic Pipe Wrench (strap type) handles bigger fittings safely.\n' +
          'Extra-long nylon strap provides maximum grip on large diameters.\n' +
          'Heavy-duty ratchet mechanism for fast, secure tightening.\n' +
          'Reinforced composite body withstands high torque applications.\n' +
          'Non-marring design protects chrome, plastic, and polished surfaces.\n' +
          'Ideal for plumbing, irrigation, pool systems, and industrial fittings.\n' +
          'Corrosion-resistant construction for wet and outdoor use.\n' +
          'Ergonomic handle reduces fatigue on large jobs.\n' +
          'Professional-grade strap wrench for damage-free work.\n' +
          'Essential tool for safe handling of oversized pipes.',
    rating: 4.7,
    reviews: 120,
    sold: '500+',
    tags: [
      '12 inch strap wrench', 'large plastic pipe wrench', 'nylon strap heavy duty', 'ratchet large wrench', 'non marring large',
      'plumbing big fitting', 'irrigation oversized tool', 'pool system wrench', 'corrosion resistant large', 'reinforced composite wrench',
      'ergonomic large handle', 'high torque strap', 'professional damage free', 'safe oversized handling', 'essential big pipe tool'
    ]
  },
  {
    id: '14-inch-plastic-pipe-wrench',
    title: '14-inch plastic pipe wrench',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.bobvila.com/wp-content/uploads/2020/06/All-strap-wrenches.jpg?quality=85',
    desc: '14-inch Plastic Pipe Wrench (strap type) delivers extra leverage for tough fittings.\n' +
          'Heavy-duty nylon strap grips securely without marking surfaces.\n' +
          'Strong ratchet handle allows fast tightening with minimal effort.\n' +
          'Reinforced frame and handle withstand high torque demands.\n' +
          'Non-marring design ideal for chrome, stainless, and plastic pipes.\n' +
          'Perfect for plumbing, irrigation, large valves, and industrial use.\n' +
          'Corrosion-proof materials for long life in wet conditions.\n' +
          'Ergonomic grip reduces strain during heavy jobs.\n' +
          'Professional strap wrench for safe, damage-free work.\n' +
          'Essential tool for handling larger pipe connections.',
    rating: 4.7,
    reviews: 110,
    sold: '450+',
    tags: [
      '14 inch strap wrench', 'heavy duty plastic wrench', 'nylon strap extra leverage', 'ratchet tough fitting', 'non marring large wrench',
      'plumbing valve tool', 'irrigation large pipe', 'industrial strap wrench', 'corrosion proof heavy', 'reinforced frame wrench',
      'ergonomic heavy grip', 'high torque large', 'professional safe wrench', 'damage free large pipe', 'essential oversized tool'
    ]
  },
  {
    id: '18-inch-plastic-pipe-wrench',
    title: '18-inch plastic pipe wrench',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-9376c/images/stencil/500x659/products/37674/36678/616578__98360.1487653335.jpg?c=3',
    desc: '18-inch Plastic Pipe Wrench (strap type) provides maximum leverage for big jobs.\n' +
          'Extra-long nylon strap securely grips oversized pipes and fittings.\n' +
          'Heavy-duty ratchet mechanism for fast, powerful tightening.\n' +
          'Reinforced composite construction handles extreme torque.\n' +
          'Non-marring strap protects polished and delicate surfaces.\n' +
          'Ideal for large plumbing, irrigation mains, industrial valves, and tanks.\n' +
          'Corrosion-resistant for outdoor and wet environments.\n' +
          'Ergonomic long handle reduces effort on tough connections.\n' +
          'Professional-grade wrench for safe, damage-free work.\n' +
          'Essential heavy-duty tool for large-scale pipe handling.',
    rating: 4.8,
    reviews: 100,
    sold: '400+',
    tags: [
      '18 inch strap wrench', 'extra long pipe wrench', 'nylon strap heavy torque', 'ratchet oversized wrench', 'non marring large',
      'large plumbing tool', 'irrigation main wrench', 'industrial valve strap', 'corrosion resistant heavy', 'reinforced composite large',
      'ergonomic long handle', 'extreme torque wrench', 'professional damage free', 'safe large pipe tool', 'essential heavy duty strap'
    ]
  },
  {
    id: '24-inch-plastic-pipe-wrench',
    title: '24-inch plastic pipe wrench',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.reedmfgco.com/assets/Images/Products/Wrenches/Strap-Wrenches/02250-SW24A-RGB__PadWzEyODAsODQ2LCJGRkZGRkYiLDBd.jpg',
    desc: '24-inch Plastic Pipe Wrench (strap type) offers ultimate leverage for massive fittings.\n' +
          'Extra-wide nylon strap grips very large diameter pipes securely.\n' +
          'Heavy-duty ratchet handle for fast, high-torque tightening.\n' +
          'Reinforced frame withstands extreme loads and abuse.\n' +
          'Non-marring design protects chrome, stainless, and plastic surfaces.\n' +
          'Perfect for industrial plumbing, large irrigation, tank fittings, and heavy equipment.\n' +
          'Corrosion-proof construction for outdoor and harsh conditions.\n' +
          'Long ergonomic handle minimizes physical effort.\n' +
          'Professional strap wrench for safe, damage-free work on big pipes.\n' +
          'Essential tool for handling oversized industrial connections.',
    rating: 4.8,
    reviews: 90,
    sold: '350+',
    tags: [
      '24 inch strap wrench', 'ultimate leverage wrench', 'nylon strap large diameter', 'ratchet extreme torque', 'non marring oversized',
      'industrial plumbing tool', 'large irrigation fitting', 'tank heavy equipment wrench', 'corrosion proof large', 'reinforced frame heavy',
      'long ergonomic handle', 'high load strap wrench', 'professional safe large', 'damage free big pipe', 'essential oversized strap tool'
    ]
  },
  {
    id: '6-inch-cable-cutter',
    title: '6-inch Cable Cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/316iMwQ+ZKS._AC_UF894,1000_QL80_.jpg',
    desc: '6-inch Cable Cutter delivers clean, precise cuts on electrical and communication cables.\n' +
          'High-leverage design reduces hand effort for thick cables.\n' +
          'Induction-hardened blades cut copper, aluminum, and steel wires.\n' +
          'Compact size ideal for tight electrical boxes and panels.\n' +
          'Ergonomic non-slip handles for comfort and control.\n' +
          'Perfect for electricians, telecom installers, and DIY wiring.\n' +
          'Chrome-vanadium steel with rust-resistant finish.\n' +
          'Durable construction for daily professional use.\n' +
          'Essential tool for safe, accurate cable preparation.\n' +
          'Reliable cutter for clean wire ends every time.',
    rating: 4.5,
    reviews: 150,
    sold: '700+',
    tags: [
      '6 inch cable cutter', 'high leverage wire cutter', 'electrician cable tool', 'induction hardened blade', 'compact cable cutter',
      'telecom wire cutter', 'diy wiring tool', 'non slip ergonomic', 'copper aluminum cutter', 'rust resistant cable',
      'professional daily cutter', 'clean precise cut', 'essential cable prep', 'reliable wire tool', 'accurate cable cutting'
    ]
  },
  {
    id: '8-inch-cable-cutter',
    title: '8-inch Cable Cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/514bKFhn0CL._AC_UF894,1000_QL80_.jpg',
    desc: '8-inch Cable Cutter handles thicker cables with heavy-duty performance.\n' +
          'Extra leverage design cuts large gauge copper and aluminum easily.\n' +
          'Hardened cutting edges maintain sharpness through heavy use.\n' +
          'Ergonomic handles with non-slip grips reduce fatigue.\n' +
          'Ideal for electrical panels, power distribution, and industrial wiring.\n' +
          'Chrome-vanadium construction with rust-resistant finish.\n' +
          'Compact yet powerful for job site and workshop use.\n' +
          'Professional-grade tool for clean, square cable cuts.\n' +
          'Essential cutter for electricians and installers.\n' +
          'Reliable performance for demanding cable work.',
    rating: 4.6,
    reviews: 140,
    sold: '650+',
    tags: [
      '8 inch cable cutter', 'heavy duty wire cutter', 'large gauge cutter', 'high leverage cable', 'ergonomic heavy cutter',
      'electrical panel tool', 'power distribution cutter', 'industrial wiring tool', 'non slip grip cutter', 'rust resistant heavy',
      'professional cable cutter', 'clean square cut', 'essential electrician tool', 'reliable thick cable', 'demanding wire cutting'
    ]
  },
  {
    id: '10-inch-cable-cutter',
    title: '10-inch Cable Cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.hittools.co.jp/ap/archive/img/original/L/WC_L.jpg',
    desc: '10-inch Cable Cutter provides maximum leverage for thick, multi-strand cables.\n' +
          'High-torque design cuts large copper, aluminum, and ACSR conductors.\n' +
          'Induction-hardened blades stay sharp through tough materials.\n' +
          'Long handles with non-slip grips reduce effort and fatigue.\n' +
          'Ideal for power utilities, heavy electrical, and industrial applications.\n' +
          'Chrome-vanadium steel with corrosion-resistant finish.\n' +
          'Robust construction for professional daily use.\n' +
          'Clean, precise cuts for safe cable termination.\n' +
          'Essential heavy-duty tool for large cable work.\n' +
          'Trusted performance for demanding electrical tasks.',
    rating: 4.7,
    reviews: 130,
    sold: '600+',
    tags: [
      '10 inch cable cutter', 'maximum leverage cutter', 'thick cable cutter', 'high torque wire', 'long handle cable',
      'power utility tool', 'heavy electrical cutter', 'industrial large cable', 'non slip long grip', 'corrosion resistant heavy',
      'professional thick cutter', 'clean precise large cut', 'essential heavy duty tool', 'reliable large cable', 'demanding electrical cutter'
    ]
  },
  {
    id: '7pcs-trapezoid-handle-cloth-bag-screwdriver-set',
    title: '7pcs Trapezoid Handle Cloth Bag Screwdriver Set',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/zj4AAeSwoU1oeS7S/s-l1200.jpg',
    desc: '7pcs Trapezoid Handle Screwdriver Set includes flat and Phillips heads.\n' +
          'Unique trapezoid handles provide better torque and comfort.\n' +
          'Magnetic tips hold screws securely for one-handed work.\n' +
          'Chrome-vanadium steel shafts with rust-resistant finish.\n' +
          'Durable cloth bag for organized storage and portability.\n' +
          'Sizes cover most common fastening needs.\n' +
          'Ideal for general maintenance, assembly, electronics, and DIY.\n' +
          'Ergonomic design reduces hand strain during long sessions.\n' +
          'Professional-quality set at an affordable price.\n' +
          'Essential multi-driver kit for home and workshop use.',
    rating: 4.6,
    reviews: 160,
    sold: '750+',
    tags: [
      '7pcs screwdriver set', 'trapezoid handle driver', 'flat phillips set', 'magnetic tip screwdriver', 'chrome vanadium set',
      'cloth bag storage', 'general maintenance tool', 'assembly electronics kit', 'diy screwdriver set', 'ergonomic multi driver',
      'rust resistant driver', 'professional affordable set', 'organized portable kit', 'essential fastening tool', 'comfortable torque driver'
    ]
  },
  {
    id: '3-meter-19mm-measuring-tape',
    title: '3 METER * 19MM MEASURING TAPE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'http://www.china-tapemeasure.com/steel-measuring-tape/SMT-18.jpg',
    desc: '3 Meter × 19mm Measuring Tape offers compact, accurate measurements.\n' +
          'High-visibility yellow blade with clear black markings.\n' +
          'Auto-lock mechanism holds tape securely at desired length.\n' +
          'Durable ABS case with rubberized grip for comfortable handling.\n' +
          'Metal hook with double-sided printing for inside/outside measurement.\n' +
          'Ideal for carpentry, DIY projects, sewing, and general use.\n' +
          'Impact-resistant case withstands job site drops.\n' +
          'Compact size fits easily in pockets or tool belts.\n' +
          'Reliable, everyday tape measure for precise work.\n' +
          'Essential tool for quick, accurate length checks.',
    rating: 4.5,
    reviews: 300,
    sold: '1500+',
    tags: [
      '3m measuring tape', '19mm width tape', 'auto lock tape measure', 'yellow blade tape', 'compact pocket tape',
      'carpentry measuring tool', 'diy project tape', 'sewing accurate tape', 'rubberized grip tape', 'metal hook tape',
      'impact resistant case', 'general use tape', 'reliable everyday measure', 'essential length tool', 'precise quick tape'
    ]
  },
  {
    id: '5-meter-19mm-measuring-tape',
    title: '5 METER * 19MM MEASURING TAPE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://s.alicdn.com/@sc01/kf/He4cc36a17ca147f38f0a930050ed3461e.jpg_720x720q50.jpg',
    desc: '5 Meter × 19mm Measuring Tape provides extended reach with auto-lock.\n' +
          'Wide 19mm blade stands straight for accurate overhead measurements.\n' +
          'Clear black-on-yellow markings for easy reading in low light.\n' +
          'Durable ABS case with rubber coating for non-slip grip.\n' +
          'Double-sided metal hook for inside and outside measurements.\n' +
          'Ideal for construction, carpentry, remodeling, and large DIY projects.\n' +
          'Shock-absorbent case protects blade during drops.\n' +
          'Compact yet powerful for professional and home use.\n' +
          'Reliable tape measure for precise, long-distance work.\n' +
          'Essential tool for accurate layout and cutting.',
    rating: 4.6,
    reviews: 280,
    sold: '1400+',
    tags: [
      '5m measuring tape', '19mm wide tape', 'auto lock 5 meter', 'standout blade tape', 'yellow black markings',
      'construction measuring tool', 'carpentry long tape', 'remodeling accurate', 'rubber coated tape', 'double sided hook',
      'shock absorbent case', 'professional diy tape', 'reliable long measure', 'essential layout tool', 'precise cutting tape'
    ]
  },
  {
    id: '7.5-meter-25mm-measuring-tape',
    title: '7.5 METER*25MM MEASURING TAPE',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61bLaYiGPSL._AC_UF1000,1000_QL80_.jpg',
    desc: '7.5 Meter × 25mm Measuring Tape offers extra-wide blade for superior standout.\n' +
          '25mm width stands rigid up to 2.5+ meters for one-person overhead use.\n' +
          'High-contrast black-on-yellow markings for fast, accurate reading.\n' +
          'Auto-lock and brake system holds tape securely in place.\n' +
          'Durable ABS case with rubberized grip for comfort and drop protection.\n' +
          'Double-sided metal hook for inside/outside and zero-offset measurement.\n' +
          'Ideal for framing, roofing, large construction, and industrial layout.\n' +
          'Reinforced blade coating resists wear and tearing.\n' +
          'Professional-grade tape for demanding long-distance work.\n' +
          'Essential wide-blade tool for precise, efficient measuring.',
    rating: 4.7,
    reviews: 220,
    sold: '1100+',
    tags: [
      '7.5m measuring tape', '25mm wide tape', 'extra standout tape', 'auto lock wide', 'black yellow markings',
      'framing roofing tool', 'large construction tape', 'industrial layout measure', 'rubber grip wide tape', 'double sided hook tape',
      'reinforced blade coating', 'professional long tape', 'demanding measure tool', 'essential wide blade', 'precise efficient tape'
    ]
  },
  {
    id: 'hsc86-4-sleeve-type-special-pliers-forming-a-square-shape-after-crimping',
    title: 'HSC86-4 Sleeve-type special pliers (forming a square shape after crimping)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/51XZH2i2g+L._AC_UF894,1000_QL80_.jpg',
    desc: 'HSC86-4 Sleeve-type Special Pliers create strong square crimps on ferrules.\n' +
          'Ratchet mechanism ensures consistent, full-cycle crimping pressure.\n' +
          'Precision dies produce clean, uniform square-shaped crimps.\n' +
          'Ergonomic handles with non-slip grips reduce hand fatigue.\n' +
          'Suitable for insulated and non-insulated sleeve terminals.\n' +
          'Ideal for electrical panels, control cabinets, and wire harness assembly.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Quick-release lever for fast die change and jam clearing.\n' +
          'Professional tool for reliable, secure electrical connections.\n' +
          'Essential crimper for square ferrule terminations.',
    rating: 4.8,
    reviews: 100,
    sold: '450+',
    tags: [
      'hsc86-4 crimping pliers', 'square crimp ferrule', 'sleeve type pliers', 'ratchet crimper square', 'precision square dies',
      'electrical panel tool', 'control cabinet crimper', 'wire harness pliers', 'ergonomic ratchet crimper', 'insulated non insulated',
      'rust resistant crimper', 'quick release crimper', 'professional secure connection', 'essential ferrule tool', 'reliable square crimp'
    ]
  },
  {
    id: 'hsc86-6-sleeve-type-special-pliers-hexagonal-shape-after-crimping',
    title: 'HSC86-6 Sleeve-type special pliers (hexagonal shape after crimping)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.iwiss.com/cdn/shop/files/preview_images/HSC8_6-6_1024x.png?v=1744084886',
    desc: 'HSC86-6 Sleeve-type Special Pliers produce strong hexagonal crimps on ferrules.\n' +
          'Self-adjusting ratchet ensures complete, uniform crimping every time.\n' +
          'Precision hexagonal dies create secure, gas-tight connections.\n' +
          'Comfortable ergonomic handles with non-slip grips.\n' +
          'Suitable for insulated and non-insulated sleeve terminals.\n' +
          'Ideal for industrial wiring, control panels, and automation systems.\n' +
          'High-quality steel with corrosion-resistant finish.\n' +
          'Quick-release mechanism for easy die change and maintenance.\n' +
          'Professional crimper for reliable electrical terminations.\n' +
          'Essential tool for hexagonal ferrule crimping.',
    rating: 4.8,
    reviews: 95,
    sold: '420+',
    tags: [
      'hsc86-6 crimping pliers', 'hexagonal crimp ferrule', 'sleeve type hexagonal', 'ratchet self adjusting', 'precision hex dies',
      'industrial wiring tool', 'control panel crimper', 'automation ferrule tool', 'ergonomic hexagonal crimper', 'insulated sleeve crimp',
      'corrosion resistant pliers', 'quick release hex crimper', 'professional gas tight', 'essential hexagonal tool', 'reliable ferrule crimp'
    ]
  },
  {
    id: 'hs-2546b-solar-terminal-mc4-crimp-red',
    title: 'HS-2546B Solar Terminal MC4 Crimp Red',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://unpluggedpowersystems.ca/wp-content/uploads/2024/08/71JRnI53P4L._AC_SL1500_.jpg',
    desc: 'HS-2546B Solar Terminal MC4 Crimp Tool (Red) for photovoltaic connectors.\n' +
          'Ratchet mechanism ensures full-cycle, consistent crimping force.\n' +
          'Precision dies create secure, gas-tight MC4 terminal connections.\n' +
          'Ergonomic red handles with non-slip grips for comfort.\n' +
          'Suitable for 2.5–6 mm² solar cables and MC4 connectors.\n' +
          'Ideal for solar panel installation, off-grid systems, and PV wiring.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Quick-release lever for fast die change and jam clearing.\n' +
          'Professional tool for reliable solar electrical connections.\n' +
          'Essential crimper for high-performance solar installations.',
    rating: 4.8,
    reviews: 150,
    sold: '700+',
    tags: [
      'hs-2546b mc4 crimper', 'solar terminal tool', 'mc4 connector crimp', 'ratchet solar crimper', 'precision mc4 dies',
      'photovoltaic wiring tool', 'solar panel installation', 'off grid pv crimper', 'ergonomic red handles', '2.5-6mm solar cable',
      'rust resistant solar tool', 'quick release mc4', 'professional solar connection', 'essential pv crimper', 'reliable solar terminal'
    ]
  },
  {
    id: 'hs-35mf-insulated-and-non-insulated-sleeve-terminal-trapezoidal-crimp',
    title: 'HS-35MF Insulated and non-insulated sleeve terminal (Trapezoidal crimp)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00fMvCwPbqrukW/Trapezoid-Manual-Crimping-Tool-an-16wf-for-Wire-Ferrule-End-Sleeves-6-16mm2.webp',
    desc: 'HS-35MF Crimping Pliers produce trapezoidal crimps on sleeve terminals.\n' +
          'Ratchet mechanism ensures consistent, full-cycle crimping pressure.\n' +
          'Precision dies for both insulated and non-insulated ferrules.\n' +
          'Ergonomic handles with non-slip grips reduce hand fatigue.\n' +
          'Suitable for 0.25–6 mm² wire sizes in trapezoidal shape.\n' +
          'Ideal for electrical panels, control cabinets, and harness assembly.\n' +
          'High-quality steel with corrosion-resistant finish.\n' +
          'Quick-release lever for easy maintenance and die change.\n' +
          'Professional tool for secure, reliable electrical terminations.\n' +
          'Essential crimper for trapezoidal sleeve connections.',
    rating: 4.7,
    reviews: 130,
    sold: '600+',
    tags: [
      'hs-35mf crimping pliers', 'trapezoidal crimp ferrule', 'insulated non insulated', 'ratchet trapezoidal tool', 'precision sleeve dies',
      'electrical panel crimper', 'control cabinet tool', 'wire harness crimper', 'ergonomic trapezoidal', '0.25-6mm ferrule',
      'corrosion resistant crimper', 'quick release sleeve', 'professional secure crimp', 'essential trapezoidal tool', 'reliable ferrule connection'
    ]
  },
  {
    id: 'hs-03bc-non-pre-insulated-open-plug-terminal',
    title: 'HS-03BC Non-pre-insulated open plug terminal',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://img.alicdn.com/imgextra/i1/6000000005432/O1CN01QrTIMm1pzu41Ou1kf_!!6000000005432-0-tbvideo.jpg',
    desc: 'HS-03BC Crimping Tool for non-pre-insulated open plug terminals.\n' +
          'Ratchet mechanism provides consistent crimping force every time.\n' +
          'Precision dies create secure, gas-tight connections on open lugs.\n' +
          'Ergonomic handles with non-slip grips for comfort.\n' +
          'Suitable for 0.5–6 mm² wire sizes in open plug style.\n' +
          'Ideal for automotive, electrical panels, and heavy-duty wiring.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Quick-release lever for fast die change and jam clearing.\n' +
          'Professional tool for reliable open terminal crimps.\n' +
          'Essential crimper for automotive and industrial applications.',
    rating: 4.7,
    reviews: 120,
    sold: '550+',
    tags: [
      'hs-03bc crimping tool', 'open plug terminal crimp', 'non pre insulated lug', 'ratchet open plug', 'precision lug dies',
      'automotive wiring tool', 'electrical panel lug', 'heavy duty terminal', 'ergonomic open crimp', '0.5-6mm lug crimper',
      'rust resistant terminal tool', 'quick release lug', 'professional secure lug', 'essential open terminal', 'reliable automotive crimp'
    ]
  },
  {
    id: 'large-y.o-terminal-crimping-pliers',
    title: 'Large Y.O Terminal Crimping Pliers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ae01.alicdn.com/kf/Sa72759d6deb440e5983be98e96e46a073.jpg?width=1500&height=1186&hash=2686',
    desc: 'Large Y.O Terminal Crimping Pliers handle heavy-gauge terminals.\n' +
          'High-leverage ratchet system for powerful crimping on large lugs.\n' +
          'Precision dies produce strong, gas-tight connections.\n' +
          'Long handles provide superior force with less effort.\n' +
          'Suitable for 6–50 mm² heavy cables and Y.O terminals.\n' +
          'Ideal for power distribution, battery cables, and industrial wiring.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Quick-release mechanism for easy maintenance.\n' +
          'Professional tool for secure large terminal crimps.\n' +
          'Essential heavy-duty crimper for thick cable applications.',
    rating: 4.8,
    reviews: 110,
    sold: '500+',
    tags: [
      'large y.o crimping pliers', 'heavy gauge terminal tool', 'high leverage ratchet', 'precision large dies', 'long handle crimper',
      'power distribution tool', 'battery cable crimper', 'industrial heavy wiring', '6-50mm large crimp', 'rust resistant heavy',
      'quick release large crimper', 'professional thick terminal', 'essential heavy duty tool', 'secure large connection', 'reliable thick cable crimp'
    ]
  },
  {
    id: 'hs-07-hs-02-multi-function-wire-stripper-stripping-cutting-crimping-pliers',
    title: 'HS-07/HS-02 Multi-function Wire Stripper (Stripping, Cutting, Crimping Pliers)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/416hWAalebL._AC_UF1000,1000_QL80_.jpg',
    desc: 'HS-07/HS-02 Multi-function Wire Stripper combines stripping, cutting, and crimping.\n' +
          'Precision stripping holes for 0.5–6 mm² wires without damage.\n' +
          'Sharp cutting blades handle soft and hard wires cleanly.\n' +
          'Built-in crimping dies for insulated and non-insulated terminals.\n' +
          'Ergonomic handles with non-slip grips reduce fatigue.\n' +
          'Ideal for electricians, automotive, electronics, and DIY wiring.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Compact design fits tool belts and small kits.\n' +
          'Versatile 3-in-1 tool for efficient wire preparation.\n' +
          'Essential multi-tool for electrical and electronic work.',
    rating: 4.6,
    reviews: 180,
    sold: '900+',
    tags: [
      'hs-07 multi function stripper', 'wire stripper crimper', '3 in 1 wire tool', 'precision stripping holes', 'cutting crimping pliers',
      'electrician multi tool', 'automotive wire prep', 'electronics diy stripper', 'non slip ergonomic', '0.5-6mm wire range',
      'rust resistant multi', 'compact belt tool', 'versatile wire preparation', 'essential electrical tool', 'reliable 3 in 1 pliers'
    ]
  },
  {
    id: 'sn-pliers-5-sets-of-jaw-covers',
    title: 'SN Pliers + 5 Sets of Jaw Covers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.icrimptools.com/cdn/shop/files/preview_images/IWS-30J_1024x.png?v=1703834928',
    desc: 'SN Pliers with 5 Sets of Jaw Covers offer versatile gripping options.\n' +
          'Interchangeable jaw covers protect delicate surfaces from scratches.\n' +
          'High-leverage design for strong gripping and cutting.\n' +
          'Soft-grip handles reduce hand fatigue during long use.\n' +
          'Includes flat, serrated, smooth, and specialty covers.\n' +
          'Ideal for electronics, jewelry, automotive, and precision work.\n' +
          'Chrome-vanadium steel with rust-resistant finish.\n' +
          'Quick-change jaw system for fast adaptation.\n' +
          'Professional tool for damage-free gripping tasks.\n' +
          'Essential pliers set for versatile, safe handling.',
    rating: 4.8,
    reviews: 90,
    sold: '400+',
    tags: [
      'sn pliers jaw covers', 'interchangeable jaw pliers', '5 sets covers pliers', 'high leverage versatile', 'damage free gripping',
      'electronics precision tool', 'jewelry pliers set', 'automotive soft grip', 'quick change jaw', 'rust resistant pliers',
      'soft grip handles', 'professional multi cover', 'essential safe pliers', 'versatile gripping tool', 'reliable jaw pliers'
    ]
  },
  {
    id: 'hs-16',
    title: 'HS-16',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ceaworld.com/static/upload/image/20240118/1705560504943216.jpg',
    desc: 'HS-16 Ratchet Crimping Tool for medium-size terminals and connectors.\n' +
          'Self-adjusting ratchet ensures full-cycle, consistent crimps.\n' +
          'Precision dies for secure connections on 0.5–6 mm² wires.\n' +
          'Ergonomic handles with non-slip grips reduce fatigue.\n' +
          'Ideal for electrical panels, automotive wiring, and control systems.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Quick-release lever for easy die change and jam clearing.\n' +
          'Professional tool for reliable medium terminal crimps.\n' +
          'Essential crimper for everyday electrical work.\n' +
          'Trusted performance for secure, gas-tight connections.',
    rating: 4.7,
    reviews: 140,
    sold: '650+',
    tags: [
      'hs-16 ratchet crimper', 'medium terminal tool', 'self adjusting crimper', '0.5-6mm crimping', 'electrical panel crimper',
      'automotive wiring tool', 'control system crimper', 'ergonomic ratchet tool', 'quick release crimper', 'rust resistant medium',
      'professional medium crimp', 'reliable gas tight', 'essential electrical crimper', 'secure connection tool', 'trusted ratchet crimper'
    ]
  },
  {
    id: 'hs-38',
    title: 'HS-38',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41bqBsIWGwL._AC_UF894,1000_QL80_.jpg',
    desc: 'HS-38 Heavy-Duty Crimping Pliers for larger terminals and lugs.\n' +
          'High-leverage ratchet system for powerful crimping force.\n' +
          'Precision dies create strong connections on 6–50 mm² wires.\n' +
          'Long handles provide superior leverage with less effort.\n' +
          'Ideal for power distribution, battery cables, and industrial wiring.\n' +
          'Durable steel with corrosion-resistant finish.\n' +
          'Quick-release mechanism for fast die change.\n' +
          'Professional tool for secure heavy-gauge terminations.\n' +
          'Essential crimper for thick cable applications.\n' +
          'Reliable performance for demanding electrical tasks.',
    rating: 4.8,
    reviews: 100,
    sold: '450+',
    tags: [
      'hs-38 heavy crimper', 'large terminal pliers', 'high leverage ratchet', '6-50mm heavy crimp', 'power distribution tool',
      'battery cable crimper', 'industrial heavy wiring', 'long handle crimper', 'quick release heavy', 'corrosion resistant heavy',
      'professional thick terminal', 'essential heavy gauge', 'reliable demanding crimp', 'secure large connection', 'trusted heavy crimper'
    ]
  },
  {
    id: 'hs-30j-pre-insulated-terminal',
    title: 'HS-30J Pre-insulated terminal',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://sjc-estore.com/wp-content/uploads/2023/04/HS-30J-5ed5b70c1fa63.jpg',
    desc: 'HS-30J Crimping Tool for pre-insulated terminals with color-coded dies.\n' +
          'Ratchet mechanism ensures full-cycle, uniform crimping pressure.\n' +
          'Color-coded dies for red, blue, yellow terminals (0.5–6 mm²).\n' +
          'Ergonomic handles with non-slip grips for comfort.\n' +
          'Ideal for automotive, electrical panels, and control wiring.\n' +
          'High-quality steel with rust-resistant finish.\n' +
          'Quick-release lever for easy maintenance.\n' +
          'Professional tool for secure, insulated connections.\n' +
          'Essential crimper for pre-insulated terminal work.\n' +
          'Reliable performance with color-coded accuracy.',
    rating: 4.7,
    reviews: 130,
    sold: '600+',
    tags: [
      'hs-30j crimping tool', 'pre insulated terminal', 'color coded crimper', 'ratchet insulated dies', '0.5-6mm pre insulated',
      'automotive wiring tool', 'electrical panel crimper', 'control wiring crimper', 'ergonomic color coded', 'rust resistant insulated',
      'quick release crimper', 'professional secure insulated', 'essential pre insulated', 'reliable color accuracy', 'trusted insulated crimper'
    ]
  },
  {
    id: 's016-4a-sleeve-type-special-pliers-hexagonal-after-crimping',
    title: 'S016-4A Sleeve-type special pliers (hexagonal after crimping)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61mKc58I4YL._AC_UF1000,1000_QL80_.jpg',
    desc: 'S016-4A Sleeve-type Special Pliers create strong hexagonal crimps.\n' +
          'Self-adjusting ratchet for consistent crimping force.\n' +
          'Precision hexagonal dies for gas-tight sleeve connections.\n' +
          'Ergonomic handles with non-slip grips reduce fatigue.\n' +
          'Suitable for insulated and non-insulated ferrules.\n' +
          'Ideal for electrical panels, control systems, and harnesses.\n' +
          'Durable steel with corrosion-resistant finish.\n' +
          'Quick-release for easy die change and jam clearing.\n' +
          'Professional tool for reliable hexagonal terminations.\n' +
          'Essential crimper for high-quality sleeve work.',
    rating: 4.8,
    reviews: 110,
    sold: '500+',
    tags: [
      's016-4a crimping pliers', 'hexagonal sleeve crimper', 'ratchet self adjusting', 'precision hex ferrule', 'insulated non insulated sleeve',
      'electrical panel tool', 'control system crimper', 'wire harness hexagonal', 'ergonomic hex crimper', 'corrosion resistant sleeve',
      'quick release hex', 'professional gas tight', 'essential hexagonal tool', 'reliable sleeve connection', 'trusted ferrule crimper'
    ]
  },
  {
    id: '16-300-box-set',
    title: '16-300 BOX SET',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/00/s/OTYwWDEyODA=/z/Kv8AAOSwDsxoByie/$_57.JPG?set_id=880000500F',
    desc: '16-300mm² Crimping Tool Box Set includes multiple dies and case.\n' +
          'Heavy-duty ratchet crimper for large lugs and terminals.\n' +
          'Comprehensive die set covers wide range of cable sizes.\n' +
          'Professional storage case keeps tools organized and protected.\n' +
          'Ergonomic long handles provide high crimping force.\n' +
          'Ideal for power distribution, industrial wiring, and battery systems.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Quick-release mechanism for fast die changes.\n' +
          'Complete kit for secure, high-current electrical connections.\n' +
          'Essential professional set for heavy-gauge crimping.',
    rating: 4.9,
    reviews: 80,
    sold: '350+',
    tags: [
      '16-300 crimping set', 'large lug crimper', 'heavy duty box set', 'multiple die crimper', 'power distribution tool',
      'industrial heavy wiring', 'battery system crimper', 'ergonomic long crimper', 'quick release die set', 'rust resistant heavy',
      'professional high current', 'essential heavy gauge set', 'reliable large crimp', 'complete crimping kit', 'trusted industrial tool'
    ]
  },
  {
    id: 'folding-wire-stripper-with-hook-blade',
    title: 'Folding wire stripper (with hook blade)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-g9mwmghvga/images/stencil/1280x1280/products/15558/15829/CONXTOOL-93082__28166.1744118898.jpg?c=1',
    desc: 'Folding Wire Stripper with Hook Blade is compact and multi-functional.\n' +
          'Folds for easy pocket or belt storage when not in use.\n' +
          'Precision stripping holes for 0.5–6 mm² wires.\n' +
          'Built-in hook blade pulls and cuts wires cleanly.\n' +
          'Ergonomic handle with non-slip grip for comfort.\n' +
          'Ideal for electricians, telecom, automotive, and DIY wiring.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Compact design fits in tight tool kits.\n' +
          'Versatile tool for stripping, pulling, and cutting.\n' +
          'Essential portable stripper for on-the-go work.',
    rating: 4.6,
    reviews: 160,
    sold: '800+',
    tags: [
      'folding wire stripper', 'hook blade stripper', 'compact portable stripper', 'precision stripping holes', 'pull cut wire tool',
      'electrician pocket tool', 'telecom wiring stripper', 'automotive diy stripper', 'non slip ergonomic fold', '0.5-6mm wire range',
      'rust resistant folding', 'versatile on go tool', 'essential portable stripper', 'reliable wire prep', 'compact multi function'
    ]
  },
  {
    id: 'multi-function-crimping-pliers',
    title: 'Multi-function crimping pliers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/41C7Sz5wtsL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Multi-function Crimping Pliers combine crimping, stripping, and cutting.\n' +
          'Ratchet mechanism for consistent crimping on various terminals.\n' +
          'Precision stripping holes and sharp cutting blades.\n' +
          'Ergonomic handles with non-slip grips reduce fatigue.\n' +
          'Suitable for insulated, non-insulated, and automotive terminals.\n' +
          'Ideal for electricians, automotive, and general wiring tasks.\n' +
          'Durable steel with rust-resistant finish.\n' +
          'Compact design fits tool belts easily.\n' +
          'Versatile 3-in-1 tool for efficient wire preparation.\n' +
          'Essential all-purpose crimper for professional use.',
    rating: 4.6,
    reviews: 170,
    sold: '850+',
    tags: [
      'multi function crimping pliers', '3 in 1 crimper stripper', 'ratchet multi tool', 'precision stripping crimper', 'automotive terminal tool',
      'electrician multi pliers', 'general wiring crimper', 'non slip ergonomic multi', 'insulated non insulated', 'rust resistant multi',
      'compact belt crimper', 'versatile wire prep', 'essential professional crimper', 'reliable all purpose', 'efficient multi function tool'
    ]
  },
  {
    id: 'multi-function-crimping-pliers',
    title: 'Multi-function crimping pliers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/51fqkqwsmIL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Multi-function Crimping Pliers offer compact crimping, stripping, and cutting.\n' +
          'Ratchet system ensures full-cycle crimping on terminals.\n' +
          'Built-in stripping holes and cutting blades for versatility.\n' +
          'Ergonomic non-slip handles for comfort during use.\n' +
          'Suitable for small to medium wire sizes and connectors.\n' +
          'Ideal for electronics, automotive repairs, and home wiring.\n' +
          'Durable construction with rust-resistant finish.\n' +
          'Compact size for easy storage and portability.\n' +
          'Versatile tool for efficient electrical work.\n' +
          'Essential multi-tool for everyday wire tasks.',
    rating: 4.6,
    reviews: 165,
    sold: '820+',
    tags: [
      'compact multi crimping pliers', 'ratchet stripper crimper', 'multi function compact', 'small medium wire tool', 'electronics crimper',
      'automotive repair tool', 'home wiring multi', 'non slip compact handle', 'durable rust resistant', 'portable multi tool',
      'versatile electrical prep', 'essential everyday crimper', 'reliable compact pliers', 'efficient wire multi', 'professional small multi'
    ]
  },
  {
    id: '18-inch-cable-cutter',
    title: '18-inch cable cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-htnyngf/images/stencil/1280x1280/products/54/22412/High-Leverage-Cable-Cutter-VT63050__45009.1770228357.jpg?c=2',
    desc: '18-inch Cable Cutter provides long-reach cutting for thick cables.\n' +
          'High-leverage design cuts large multi-strand conductors easily.\n' +
          'Hardened blades handle copper, aluminum, and steel cables.\n' +
          'Long handles with non-slip grips reduce effort and fatigue.\n' +
          'Ideal for power utilities, heavy electrical, and industrial wiring.\n' +
          'Chrome-vanadium steel with rust-resistant finish.\n' +
          'Robust construction for professional daily use.\n' +
          'Clean, precise cuts for safe cable termination.\n' +
          'Essential heavy-duty tool for large cable applications.\n' +
          'Reliable performance for demanding electrical tasks.',
    rating: 4.7,
    reviews: 120,
    sold: '550+',
    tags: [
      '18 inch cable cutter', 'long reach heavy cutter', 'high leverage large cable', 'hardened blade heavy', 'long handle grip cutter',
      'power utility tool', 'heavy electrical cutter', 'industrial large cable', 'rust resistant heavy', 'robust professional cutter',
      'clean precise large cut', 'essential heavy duty tool', 'reliable thick cable', 'demanding electrical cutter', 'safe large termination'
    ]
  },
  {
    id: '24-inch-cable-cutter',
    title: '24-inch cable cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/iEEAAOSwcNNm~GFv/s-l1200.jpg',
    desc: '24-inch Cable Cutter offers maximum leverage for very thick cables.\n' +
          'Extra-long handles provide superior cutting force.\n' +
          'Hardened cutting edges slice through large copper and aluminum conductors.\n' +
          'Non-slip grips reduce fatigue on heavy jobs.\n' +
          'Ideal for power distribution, substations, and heavy industrial wiring.\n' +
          'Chrome-vanadium construction with corrosion-resistant finish.\n' +
          'Heavy-duty design for continuous professional use.\n' +
          'Clean, square cuts for safe, reliable terminations.\n' +
          'Essential tool for large-scale cable work.\n' +
          'Top-tier cutter for extreme cable cutting demands.',
    rating: 4.8,
    reviews: 100,
    sold: '450+',
    tags: [
      '24 inch cable cutter', 'maximum leverage cutter', 'extra long handle heavy', 'hardened large conductor', 'non slip heavy grip',
      'power distribution tool', 'substation cable cutter', 'heavy industrial wiring', 'corrosion resistant heavy', 'continuous professional cutter',
      'clean square large cut', 'essential extreme tool', 'reliable thick cable', 'top tier heavy cutter', 'demanding large termination'
    ]
  },
  {
    id: '32-inch-cable-cutter',
    title: '32-inch cable cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.versales.com/images/products/1590/C16B-Cable-Cutter_md.jpg',
    desc: '32-inch Cable Cutter delivers extreme leverage for massive cables.\n' +
          'Ultra-long handles generate tremendous cutting power.\n' +
          'Hardened blades cut heavy multi-strand copper and aluminum.\n' +
          'Non-slip grips and balanced design reduce strain.\n' +
          'Ideal for utility companies, mining, and heavy industrial applications.\n' +
          'Chrome-vanadium steel with rust-resistant coating.\n' +
          'Built for continuous use in demanding environments.\n' +
          'Clean, precise cuts for safe, high-current terminations.\n' +
          'Essential heavy-duty tool for largest cable sizes.\n' +
          'Professional-grade cutter for extreme cable work.',
    rating: 4.9,
    reviews: 85,
    sold: '380+',
    tags: [
      '32 inch cable cutter', 'extreme leverage cutter', 'ultra long handle heavy', 'hardened massive cable', 'non slip balanced grip',
      'utility company tool', 'mining heavy cable', 'industrial extreme wiring', 'rust resistant massive', 'continuous heavy use',
      'clean high current cut', 'essential largest tool', 'reliable extreme cable', 'professional massive cutter', 'top extreme termination'
    ]
  },
  {
    id: '36-inch-cable-cutter',
    title: '36-inch cable cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/f-kAAOSwyWlgz6he/s-l1200.jpg',
    desc: '36-inch Cable Cutter provides ultimate power for largest cables.\n' +
          'Extra-long handles deliver maximum cutting force.\n' +
          'Hardened cutting edges slice through heavy-duty conductors.\n' +
          'Non-slip grips and ergonomic design minimize fatigue.\n' +
          'Ideal for substations, heavy industry, and utility infrastructure.\n' +
          'Chrome-vanadium construction with corrosion-resistant finish.\n' +
          'Heavy-duty build for continuous professional service.\n' +
          'Clean, square cuts for safe, reliable terminations.\n' +
          'Essential tool for extreme cable cutting demands.\n' +
          'Top-of-the-line cutter for massive wire applications.',
    rating: 4.9,
    reviews: 85,
    sold: '350+',
    tags: [
      '36 inch cable cutter', 'ultimate power cutter', 'extra long extreme handle', 'hardened heavy conductor', 'non slip ergonomic heavy',
      'substation cable tool', 'heavy industry wiring', 'utility infrastructure cutter', 'corrosion resistant extreme', 'continuous professional heavy',
      'clean massive cut', 'essential extreme tool', 'reliable largest cable', 'top line heavy cutter', 'professional massive termination'
    ]
  },
  {
    id: '9-inch-multi-function-wire-stripper',
    title: '9-Inch Multi-Function Wire Stripper',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/7c33fdf6-aa51-41a7-906e-18275ecbe9c3.__CR0,0,970,600_PT0_SX970_V1___.png',
    desc: '9-inch Multi-Function Wire Stripper combines stripping, cutting, and crimping.\n' +
          'Precision stripping holes for 0.5–10 mm² wires.\n' +
          'Sharp cutting jaws handle soft and hard wires cleanly.\n' +
          'Built-in crimping dies for insulated and non-insulated terminals.\n' +
          'Ergonomic non-slip handles reduce fatigue.\n' +
          'Ideal for electricians, automotive, electronics, and heavy wiring.\n' +
          'Durable steel with rust-resistant finish.\n' +
          'Compact yet powerful for professional use.\n' +
          'Versatile 3-in-1 tool for efficient wire work.\n' +
          'Essential multi-tool for electrical preparation.',
    rating: 4.7,
    reviews: 160,
    sold: '800+',
    tags: [
      '9 inch multi stripper', 'wire stripper crimper cutter', 'precision 0.5-10mm', 'ergonomic multi function', 'electrician heavy tool',
      'automotive electronics stripper', 'sharp cutting jaws', 'insulated non insulated crimp', 'rust resistant multi', 'compact powerful stripper',
      'versatile wire prep', 'essential electrical multi', 'reliable 3 in 1 tool', 'professional wire preparation', 'efficient multi function'
    ]
  },
  {
    id: 'bee-handle-wire-stripper',
    title: 'Bee Handle Wire Stripper',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.latiendadelapicultor.com/5895/zig-zag-tighten-wired-frames-crimping-tool.jpg',
    desc: 'Bee Handle Wire Stripper features ergonomic bee-shape grip for comfort.\n' +
          'Precision stripping holes for 0.5–6 mm² wires without damage.\n' +
          'Sharp blades cut wires cleanly with minimal effort.\n' +
          'Non-slip bee-handle design reduces hand strain.\n' +
          'Ideal for electricians, telecom, automotive, and repetitive wiring.\n' +
          'Durable steel construction with rust-resistant finish.\n' +
          'Compact size fits tool belts and pockets.\n' +
          'Professional tool for fast, accurate wire preparation.\n' +
          'Comfort-focused stripper for long work sessions.\n' +
          'Essential ergonomic tool for daily electrical tasks.',
    rating: 4.6,
    reviews: 140,
    sold: '700+',
    tags: [
      'bee handle stripper', 'ergonomic wire stripper', 'precision 0.5-6mm', 'non slip bee grip', 'electrician comfort tool',
      'telecom wiring stripper', 'automotive repetitive', 'sharp clean cut', 'rust resistant ergonomic', 'compact belt stripper',
      'professional accurate prep', 'comfort long session', 'essential ergonomic tool', 'reliable daily stripper', 'fast wire preparation'
    ]
  },
  {
    id: '727-ratchet-7pcs',
    title: '727 Ratchet 7PCS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://images.performancebike.com/cdn-cgi/image/f=auto,width=950/images/large/bikes/topeak/tt2628.jpg',
    desc: '727 Ratchet 7PCS Set includes sockets, extensions, and ratchet handle.\n' +
          '72-tooth ratchet mechanism for smooth, fast operation.\n' +
          'Chrome-vanadium steel with mirror finish for durability.\n' +
          'Sizes cover common metric and SAE needs.\n' +
          'Quick-release drive for fast socket changes.\n' +
          'Ideal for automotive, machinery, furniture assembly, and maintenance.\n' +
          'Ergonomic handle with non-slip grip reduces fatigue.\n' +
          'Compact storage case keeps set organized.\n' +
          'Professional-quality ratchet set for reliable fastening.\n' +
          'Essential tool kit for versatile mechanical work.',
    rating: 4.8,
    reviews: 120,
    sold: '550+',
    tags: [
      '727 ratchet set', '7pcs socket set', '72 tooth ratchet', 'chrome vanadium ratchet', 'quick release drive',
      'automotive tool set', 'machinery maintenance kit', 'furniture assembly ratchet', 'ergonomic non slip handle', 'metric sae sockets',
      'compact storage case', 'professional fastening tool', 'reliable mechanical set', 'essential ratchet kit', 'versatile socket set'
    ]
  },
  {
    id: '8-inch-steel-wire-pliers',
    title: '8-inch steel wire pliers',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/512QaXhhq8L._AC_UF894,1000_QL80_.jpg',
    desc: '8-inch Steel Wire Pliers provide powerful twisting and cutting.\n' +
          'High-leverage design cuts hard steel wires with ease.\n' +
          'Induction-hardened cutting edges stay sharp.\n' +
          'Serrated jaws grip tightly for twisting and bending.\n' +
          'Ergonomic non-slip handles reduce fatigue.\n' +
          'Ideal for fencing, construction, automotive, and industrial work.\n' +
          'Chrome-vanadium steel with rust-resistant finish.\n' +
          'Robust construction for heavy-duty daily use.\n' +
          'Professional tool for tough wire handling.\n' +
          'Essential pliers for steel and hard wire tasks.',
    rating: 4.7,
    reviews: 130,
    sold: '600+',
    tags: [
      '8 inch steel wire pliers', 'high leverage wire cutter', 'hard steel cutting', 'serrated jaw pliers', 'twisting bending tool',
      'fencing construction pliers', 'automotive industrial wire', 'non slip ergonomic', 'rust resistant heavy', 'robust daily pliers',
      'professional tough wire', 'essential steel handling', 'reliable hard wire tool', 'powerful wire pliers', 'durable wire cutter'
    ]
  },
  {
    id: '8-inch-pointed-nose',
    title: '8-inch pointed nose',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://images.tekton.com/assets/tekton-gripping-pliers-x13_in-hand.jpg?width=1536&quality=75',
    desc: '8-inch Pointed Nose Pliers offer precision gripping in tight spaces.\n' +
          'Long, thin jaws reach into confined areas easily.\n' +
          'Serrated tips provide secure hold on small components.\n' +
          'Built-in side cutter for wire trimming.\n' +
          'Ergonomic non-slip handles reduce hand strain.\n' +
          'Ideal for electronics, jewelry, model making, and electrical work.\n' +
          'Chrome-vanadium steel with rust-resistant finish.\n' +
          'Durable construction for professional precision tasks.\n' +
          'Essential tool for fine, accurate gripping.\n' +
          'Reliable pointed pliers for detailed work.',
    rating: 4.6,
    reviews: 150,
    sold: '750+',
    tags: [
      '8 inch pointed nose pliers', 'precision long jaw', 'serrated tip pliers', 'side cutter pointed', 'tight space tool',
      'electronics jewelry pliers', 'model making precision', 'electrical fine work', 'non slip ergonomic', 'rust resistant pointed',
      'durable precision pliers', 'essential fine gripping', 'reliable detailed tool', 'accurate pointed nose', 'professional confined pliers'
    ]
  },
  {
    id: '14pcs-8-24mm-cloth-bags',
    title: '14PCS 8-24mm Cloth Bags',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://i.ebayimg.com/images/g/k7sAAeSwggBopnQ7/s-l1200.png',
    desc: '14PCS 8-24mm Wrench Set in Cloth Bag covers common metric sizes.\n' +
          'Chrome-vanadium steel with mirror finish for durability.\n' +
          '12-point box end and open end for versatility.\n' +
          'Durable cloth bag with labeled pockets for organization.\n' +
          'Ideal for automotive, machinery, furniture, and general maintenance.\n' +
          'Ergonomic design reduces hand fatigue.\n' +
          'Rust-resistant finish for long life.\n' +
          'Compact storage for tool belts and vehicles.\n' +
          'Professional-quality set for reliable fastening.\n' +
          'Essential wrench kit for everyday mechanical tasks.',
    rating: 4.7,
    reviews: 110,
    sold: '500+',
    tags: [
      '14pcs wrench set', '8-24mm metric wrench', 'chrome vanadium wrench', '12 point box open', 'cloth bag storage',
      'automotive machinery tool', 'furniture maintenance set', 'ergonomic wrench set', 'rust resistant metric', 'compact labeled bag',
      'professional fastening kit', 'reliable mechanical wrench', 'essential everyday set', 'versatile wrench kit', 'durable cloth bag set'
    ]
  },
  {
    id: '15-980-transparent-waterproof-cover-steel-cable-lock',
    title: '15*980 Transparent Waterproof Cover Steel Cable Lock',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61E53Nmi0hL.jpg',
    desc: '15×980mm Steel Cable Lock with transparent waterproof cover for security.\n' +
          'Heavy-duty braided steel cable resists cutting and weather.\n' +
          'Transparent PVC cover protects against moisture and corrosion.\n' +
          '4-digit resettable combination lock for keyless convenience.\n' +
          'Ideal for bicycles, gates, ladders, tools, and equipment security.\n' +
          'Bright color for high visibility and theft deterrence.\n' +
          'Compact coil design for easy storage.\n' +
          'Durable construction for long-term outdoor use.\n' +
          'Essential security tool for protecting valuable items.\n' +
          'Reliable cable lock for everyday protection.',
    rating: 4.5,
    reviews: 200,
    sold: '1000+',
    tags: [
      '15x980 steel cable lock', 'transparent waterproof lock', 'braided steel security', 'resettable combination lock', 'bicycle gate lock',
      'ladder tool security', 'high visibility cable', 'moisture resistant lock', 'compact coil lock', 'outdoor durable lock',
      'theft deterrent cable', 'essential security tool', 'reliable everyday lock', 'bright protective lock', 'long term outdoor security'
    ]
  },
  {
    id: '880-15-980-white-head-round-cable-lock',
    title: '880#15*980 White Head Round Cable Lock',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://d2jpx6ncc90twu.cloudfront.net/files/product/large/589365.jpg',
    desc: '880# 15×980 mm White Head Round Cable Lock provides strong theft protection.\n' +
          'Heavy-duty braided steel cable with round profile resists cutting tools.\n' +
          'White ABS-coated lock head with 4-digit resettable combination mechanism.\n' +
          'Weather-resistant design suitable for indoor and outdoor security applications.\n' +
          'Ideal for securing bicycles, motorcycles, gates, ladders, generators, and tools.\n' +
          'High-visibility white head makes the lock easy to locate and acts as a deterrent.\n' +
          'Compact coiled shape allows convenient storage when not in use.\n' +
          'Reinforced cable ends and hardened lock body increase tamper resistance.\n' +
          'Reliable everyday security solution for valuable equipment and property.\n' +
          'Essential cable lock for portable item protection in homes, shops and job sites.',
    rating: 4.6,
    reviews: 180,
    sold: '900+',
    tags: [
      '880 cable lock', '15×980 round cable', 'white head lock', 'resettable combination cable', 'braided steel security',
      'bicycle motorcycle lock', 'gate ladder security', 'generator tool lock', 'weather resistant cable', 'high visibility white',
      'compact coil lock', 'tamper resistant cable', 'reliable portable security', 'essential theft deterrent', 'outdoor equipment lock'
    ]
  },
  {
    id: 'tire-pressure-gauge-small',
    title: 'Tire Pressure Gauge SMALL',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://images.rustysoffroad.com/cdn/shop/products/ARB506-959384_1000x1000.jpg?v=1648783060',
    desc: 'Small Tire Pressure Gauge delivers quick, accurate readings in a compact size.\n' +
          'Analog dial with clear PSI and bar markings for easy interpretation.\n' +
          'Chrome-plated metal body resists corrosion and withstands daily use.\n' +
          'Bleed valve allows pressure adjustment without removing the gauge.\n' +
          'Angled chuck reaches tight valve stems on cars, motorcycles, and bikes.\n' +
          'Pocket-sized design fits easily in glove compartments or tool pouches.\n' +
          'Ideal for daily vehicle checks, bicycles, motorcycles, and inflatables.\n' +
          'Reliable, no-battery tool for consistent tire safety monitoring.\n' +
          'Essential compact gauge for maintaining proper tire pressure.\n' +
          'Durable small pressure checker for safe driving and fuel efficiency.',
    rating: 4.5,
    reviews: 220,
    sold: '1100+',
    tags: [
      'small tire gauge', 'pocket tire pressure', 'analog psi gauge', 'chrome metal gauge', 'bleed valve tire tool',
      'angled chuck gauge', 'car motorcycle bike', 'compact glove box tool', 'daily tire check', 'no battery gauge',
      'reliable tire safety', 'essential pressure monitor', 'fuel efficiency tool', 'durable small checker', 'safe driving gauge'
    ]
  },
  {
    id: 'tire-pressure-gauge-l',
    title: 'Tire Pressure Gauge L',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://d2jpx6ncc90twu.cloudfront.net/files/product/large/589365.jpg',
    desc: 'Large Dial Tire Pressure Gauge offers easy-to-read measurements.\n' +
          'Oversized face with bold PSI and bar scale for quick reading.\n' +
          'Heavy-duty chrome-plated body with protective rubber boot.\n' +
          'Accurate Bourdon tube mechanism for reliable long-term performance.\n' +
          'Air bleed button allows precise pressure adjustment.\n' +
          'Angled swivel chuck reaches awkward valve stems comfortably.\n' +
          'Ideal for trucks, SUVs, commercial vehicles, and workshop use.\n' +
          'Large easy-grip handle for comfortable operation.\n' +
          'Essential professional-grade gauge for frequent tire checks.\n' +
          'Durable large-face tool for accurate, visible pressure monitoring.',
    rating: 4.6,
    reviews: 190,
    sold: '950+',
    tags: [
      'large dial tire gauge', 'oversized psi gauge', 'easy read tire tool', 'chrome rubber gauge', 'bourdon tube accurate',
      'air bleed button', 'swivel chuck gauge', 'truck suv commercial', 'workshop tire pressure', 'large grip handle',
      'professional frequent check', 'essential visible monitor', 'durable large face', 'accurate truck gauge', 'reliable heavy vehicle tool'
    ]
  },
  {
    id: 'flat-small-internal-hex-card-insert',
    title: 'Flat small internal hex card insert',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61Wi5rDaJdL._AC_UF894,1000_QL80_.jpg',
    desc: 'Flat Small Internal Hex Card Insert bits provide precise screwdriving.\n' +
          'High-grade S2 steel construction for long service life.\n' +
          'Precision-machined hex tips fit snugly without cam-out.\n' +
          '1/4" hex shank compatible with most drills and drivers.\n' +
          'Ideal for furniture assembly, electronics, machinery, and precision work.\n' +
          'Card packaging keeps bits organized and protected.\n' +
          'Rust-resistant finish withstands workshop conditions.\n' +
          'Compact card format perfect for tool kits and mobile service.\n' +
          'Essential small hex insert set for accurate fastening.\n' +
          'Reliable bits for professional and DIY hex screw tasks.',
    rating: 4.5,
    reviews: 150,
    sold: '750+',
    tags: [
      'small hex insert bit', 'flat internal hex card', 's2 steel hex bit', 'precision hex driver', '1/4 hex shank bit',
      'furniture assembly tool', 'electronics precision bit', 'machinery hex insert', 'rust resistant hex', 'compact card bits',
      'professional small hex', 'accurate fastening bit', 'essential hex driver', 'reliable screw bit', 'diy hex card set'
    ]
  },
  {
    id: 'flat-phillips-hex-socket-insert',
    title: 'Flat Phillips hex Socket Insert',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/616OH9dsDfL._AC_UF1000,1000_QL80_.jpg',
    desc: 'Flat Phillips Hex Socket Insert bits combine Phillips and hex drive.\n' +
          'Dual-function design fits both Phillips screws and hex sockets.\n' +
          'High-torque S2 steel construction resists cam-out and wear.\n' +
          'Precision-machined tips for secure, damage-free fastening.\n' +
          '1/4" hex shank works with drills, drivers, and ratchets.\n' +
          'Ideal for automotive, machinery, furniture, and mixed fastener jobs.\n' +
          'Rust-resistant finish for long life in workshop conditions.\n' +
          'Compact flat card packaging for easy storage.\n' +
          'Versatile 2-in-1 bit for efficient tool kit organization.\n' +
          'Essential insert bit for professional multi-fastener work.',
    rating: 4.6,
    reviews: 140,
    sold: '700+',
    tags: [
      'phillips hex insert', 'flat dual drive bit', 's2 steel phillips hex', 'precision cam out resistant', '1/4 shank dual bit',
      'automotive mixed fastener', 'machinery furniture tool', 'rust resistant dual', 'compact card insert', 'versatile 2 in 1 bit',
      'professional multi fastener', 'efficient tool kit bit', 'essential dual insert', 'reliable phillips hex', 'high torque insert bit'
    ]
  },
  {
    id: 'flat-internal-hex-socket-card',
    title: 'Flat internal hex socket card',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61Wi5rDaJdL._AC_UF894,1000_QL80_.jpg',
    desc: 'Flat Internal Hex Socket Card set offers multiple hex sizes in one pack.\n' +
          'Precision-machined hex tips fit snugly in socket-head screws.\n' +
          'High-grade S2 steel with hardened tips for long wear life.\n' +
          '1/4" hex shank compatible with drills, ratchets, and drivers.\n' +
          'Ideal for machinery maintenance, bicycle repair, furniture, and electronics.\n' +
          'Rust-resistant finish suits workshop and field use.\n' +
          'Flat card packaging keeps bits organized and portable.\n' +
          'Complete range for common internal hex fastener sizes.\n' +
          'Essential hex bit card for professional and DIY mechanics.\n' +
          'Reliable insert set for accurate socket-head fastening.',
    rating: 4.6,
    reviews: 130,
    sold: '650+',
    tags: [
      'internal hex socket card', 'flat hex bit set', 's2 steel hex insert', 'precision socket bit', '1/4 shank hex card',
      'machinery maintenance tool', 'bicycle repair hex', 'furniture electronics bit', 'rust resistant hex set', 'organized card bits',
      'professional mechanic set', 'accurate socket fastening', 'essential hex card', 'reliable internal hex', 'complete hex range'
    ]
  },
  {
    id: 'flat-small-internal-hex-double-bubble',
    title: 'Flat small internal hex double bubble',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.shopify.com/s/files/1/0021/0527/8543/files/Screenshot_2025-09-15_133738_175796506868c86b0c015041536.png?v=1757965069',
    desc: 'Flat Small Internal Hex Double Bubble bits feature reinforced double-bubble shank.\n' +
          'Extra-strong design resists twisting and cam-out under high torque.\n' +
          'Precision small hex tips for delicate socket-head screws.\n' +
          '1/4" hex shank fits most power tools and ratchets.\n' +
          'Ideal for electronics, precision machinery, eyewear, and small assemblies.\n' +
          'Hardened S2 steel with rust-resistant coating.\n' +
          'Double-bubble reinforcement increases durability significantly.\n' +
          'Compact packaging perfect for tool kits and mobile service.\n' +
          'Essential small hex bits for accurate, high-torque fastening.\n' +
          'Professional-grade insert for fine, reliable work.',
    rating: 4.5,
    reviews: 120,
    sold: '600+',
    tags: [
      'small hex double bubble', 'internal hex reinforced', 'double bubble bit', 'precision small hex', 'high torque small bit',
      'electronics precision tool', 'machinery eyewear insert', 's2 hardened small hex', 'rust resistant bubble', 'compact kit insert',
      'professional fine fastening', 'accurate high torque', 'essential small hex', 'reliable delicate screw', 'durable bubble design'
    ]
  },
  {
    id: 'flat-hex-socket-double-bubble',
    title: 'Flat hex socket double bubble',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/51S6RVgPbYL.jpg',
    desc: 'Flat Hex Socket Double Bubble bits offer reinforced strength for socket screws.\n' +
          'Double-bubble shank design greatly increases torsion resistance.\n' +
          'Precision hex tips prevent stripping of socket-head fasteners.\n' +
          '1/4" hex shank compatible with drills, drivers, and ratchets.\n' +
          'Ideal for machinery, automotive, bicycles, and furniture assembly.\n' +
          'Hardened S2 steel with corrosion-resistant finish.\n' +
          'Reinforced construction extends bit life under heavy loads.\n' +
          'Compact card packaging for organized storage.\n' +
          'Essential hex insert for professional, high-torque applications.\n' +
          'Reliable double-bubble bits for demanding fastening tasks.',
    rating: 4.6,
    reviews: 110,
    sold: '550+',
    tags: [
      'hex socket double bubble', 'reinforced hex bit', 'double bubble socket', 'precision hex insert', 'high torsion resistance',
      'machinery automotive bit', 'bicycle furniture hex', 's2 hardened socket', 'corrosion resistant bubble', 'compact hex card',
      'professional high torque', 'essential socket insert', 'reliable demanding bit', 'durable hex tool', 'strong fastening bit'
    ]
  },
  {
    id: 'flat-large-internal-hex-double-bulge',
    title: 'Flat Large Internal Hex Double Bulge',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://edisonmed.com/media/magefan_blog/Internal-Hex-conn.jpg',
    desc: 'Flat Large Internal Hex Double Bulge bits handle bigger socket screws.\n' +
          'Double-bulge reinforced shank provides extreme torque resistance.\n' +
          'Large hex sizes fit heavy machinery and structural socket bolts.\n' +
          '1/4" hex shank works with impact drivers and high-torque tools.\n' +
          'Precision-machined tips prevent cam-out on large fasteners.\n' +
          'Ideal for construction, heavy equipment, automotive, and industrial use.\n' +
          'Hardened S2 steel with rust-resistant coating.\n' +
          'Reinforced design significantly extends bit lifespan.\n' +
          'Essential large hex insert for demanding applications.\n' +
          'Professional-grade tool for secure, high-load fastening.',
    rating: 4.7,
    reviews: 100,
    sold: '500+',
    tags: [
      'large hex double bulge', 'internal hex reinforced large', 'double bulge bit', 'heavy machinery hex', 'high torque large insert',
      'construction structural bit', 'heavy equipment tool', 'automotive industrial hex', 's2 hardened large', 'rust resistant bulge',
      'precision large tip', 'essential heavy fastening', 'reliable high load bit', 'professional large socket', 'durable big hex tool'
    ]
  },
  {
    id: 'hanging-card-pearl-nickel-8-steel-plier',
    title: 'Hanging Card Pearl Nickel 8 Steel PLIER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71oU+SV+yaL.jpg',
    desc: 'Pearl Nickel 8-inch Steel Plier on hanging card for retail display.\n' +
          'Polished pearl nickel finish provides corrosion resistance and premium look.\n' +
          'High-leverage design for powerful gripping and cutting.\n' +
          'Induction-hardened cutting edges handle hard and soft wires.\n' +
          'Ergonomic handles with non-slip texture for comfortable use.\n' +
          'Ideal for electrical, automotive, construction, and general maintenance.\n' +
          'Chrome-vanadium steel core for long service life.\n' +
          'Attractive hanging card packaging perfect for store shelves.\n' +
          'Professional-grade plier at an accessible price point.\n' +
          'Essential 8-inch plier for everyday trade and DIY tasks.',
    rating: 4.7,
    reviews: 130,
    sold: '650+',
    tags: [
      'pearl nickel plier', '8 inch steel plier', 'hanging card plier', 'polished nickel finish', 'high leverage retail',
      'induction hardened cutter', 'ergonomic non slip plier', 'electrical automotive tool', 'construction maintenance', 'chrome vanadium core',
      'professional retail plier', 'attractive display card', 'essential trade plier', 'reliable everyday plier', 'premium look plier'
    ]
  },
  {
    id: 'hanging-card-pearl-nickel-6-rose-pliass',
    title: 'Hanging Card Pearl Nickel 6-ROSE PLIASS',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71oU+SV+yaL.jpg',
    desc: 'Pearl Nickel 6-inch Rose Pliers on hanging card for attractive display.\n' +
          'Rose (diagonal) cutting head for flush cuts on wires and nails.\n' +
          'Polished pearl nickel plating resists corrosion and looks premium.\n' +
          'Precision-ground cutting edges for clean, effortless cuts.\n' +
          'Compact 6-inch size ideal for tight spaces and detailed work.\n' +
          'Ergonomic handles with non-slip grip for comfort.\n' +
          'Perfect for electrical, jewelry, model making, and fine assembly.\n' +
          'Chrome-vanadium steel core ensures durability.\n' +
          'Retail hanging card packaging for easy merchandising.\n' +
          'Essential rose plier for precise, clean cutting tasks.',
    rating: 4.6,
    reviews: 140,
    sold: '700+',
    tags: [
      'pearl nickel rose plier', '6 inch diagonal plier', 'hanging card rose', 'flush cut plier', 'polished nickel plier',
      'precision cutting edge', 'compact fine work tool', 'electrical jewelry plier', 'model making assembly', 'non slip ergonomic',
      'chrome vanadium rose', 'professional retail plier', 'attractive display tool', 'essential clean cut', 'reliable rose plier'
    ]
  },
  {
    id: 'hanging-card-pearl-nickel-6-cutter',
    title: 'Hanging Card Pearl Nickel 6 CUTTER',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/2f0j00upgfEdwRZFoO/CRV-Carbon-Steel-Straight-Cutting-Aviation-Snip-with-Wire-Cutter.webp',
    desc: 'Pearl Nickel 6-inch Diagonal Cutter on hanging card for retail presentation.\n' +
          'Polished pearl nickel finish offers corrosion protection and premium appearance.\n' +
          'Sharp induction-hardened cutting edges for clean wire and cable cuts.\n' +
          'Compact 6-inch size perfect for tight electrical boxes and panels.\n' +
          'Ergonomic handles with non-slip texture for secure grip.\n' +
          'Ideal for electricians, telecom installers, jewelry, and hobby work.\n' +
          'Chrome-vanadium steel construction for long service life.\n' +
          'Attractive hanging card packaging ideal for store shelves.\n' +
          'Professional-grade cutter for precise, effortless trimming.\n' +
          'Essential 6-inch diagonal cutter for detailed cutting tasks.',
    rating: 4.7,
    reviews: 150,
    sold: '750+',
    tags: [
      'pearl nickel diagonal cutter', '6 inch wire cutter', 'hanging card cutter', 'induction hardened edge', 'compact electrical tool',
      'telecom jewelry cutter', 'hobby precise cut', 'non slip ergonomic cutter', 'chrome vanadium diagonal', 'professional retail cutter',
      'attractive display tool', 'essential clean trim', 'reliable small cutter', 'premium finish cutter', 'precise diagonal plier'
    ]
  }
],


   'Power Tools': [
  {
    id: 'mx103-400w-10mm-lightweight-electric-drill',
    title: 'MX103 400W 10mm Lightweight Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71YZHO5VfwL._AC_UF1000,1000_QL80_.jpg',
    desc: 'MX103 400W Lightweight Electric Drill is perfect for everyday drilling tasks.\n' +
          'Powerful 400W motor with variable speed 0–3000 rpm for precise control.\n' +
          '10mm keyless chuck allows quick bit changes without tools.\n' +
          'Compact and lightweight design reduces fatigue during extended use.\n' +
          'Suitable for drilling steel up to 10mm and wood up to 25mm.\n' +
          'Ergonomic soft-grip handle with forward/reverse switch for versatility.\n' +
          'Ideal for DIY home projects, furniture assembly, and light professional work.\n' +
          'Durable construction with heat-resistant housing for long service life.\n' +
          'Affordable entry-level corded drill with reliable performance.\n' +
          'Essential power tool for accurate, effortless drilling in various materials.',
    rating: 4.6,
    reviews: 140,
    sold: '600+',
    tags: [
      'mx103 electric drill', '400w lightweight drill', '10mm keyless chuck', 'variable speed drill', '0-3000rpm corded drill',
      'steel wood drilling', 'diy home drill', 'furniture assembly tool', 'ergonomic soft grip', 'forward reverse switch',
      'compact power drill', 'affordable corded drill', 'reliable entry level', 'essential drilling tool', 'light professional drill'
    ]
  },
  {
    id: 'foster-400w-10mm-lightweight-electric-drill',
    title: 'FOSTER 400W 10mm Lightweight Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71YZHO5VfwL._AC_UF1000,1000_QL80_.jpg',
    desc: 'FOSTER 400W Lightweight Electric Drill offers smooth, consistent drilling performance.\n' +
          '400W high-efficiency motor with variable speed trigger 0–3000 rpm.\n' +
          '10mm keyless chuck for fast, tool-free bit installation.\n' +
          'Ultra-lightweight body ideal for overhead and prolonged use.\n' +
          'Drills steel up to 10mm and wood up to 25mm effortlessly.\n' +
          'Non-slip soft-grip handle with integrated reverse switch.\n' +
          'Perfect for home improvement, hobby projects, and light trade work.\n' +
          'Heat-dissipating housing extends motor life under load.\n' +
          'Budget-friendly yet powerful corded drill for daily tasks.\n' +
          'Reliable choice for clean, accurate holes in multiple materials.',
    rating: 4.5,
    reviews: 130,
    sold: '550+',
    tags: [
      'foster electric drill', '400w compact drill', '10mm keyless drill', 'variable speed trigger', 'lightweight corded drill',
      'steel 10mm wood 25mm', 'home improvement tool', 'hobby diy drill', 'soft grip handle', 'reverse switch drill',
      'ultra light drill', 'budget power drill', 'reliable daily drill', 'essential home drill', 'smooth drilling tool'
    ]
  },
  {
    id: 'mx1022-mega-350w-10mm-electric-drill',
    title: 'MX1022 mega 350W 10mm Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71YZHO5VfwL._AC_UF1000,1000_QL80_.jpg',
    desc: 'MX1022 Mega 350W Electric Drill is compact yet powerful for precision work.\n' +
          '350W motor with smooth variable speed 0–3000 rpm control.\n' +
          '10mm keyless chuck for rapid bit swaps and secure hold.\n' +
          'Ergonomic slim body reduces strain in tight or overhead positions.\n' +
          'Drills steel up to 10mm and wood up to 25mm with ease.\n' +
          'Forward/reverse switch and soft-grip handle for user comfort.\n' +
          'Ideal for cabinetry, electronics assembly, and light renovation tasks.\n' +
          'Durable construction with ventilation for cool, long runtime.\n' +
          'Great value corded drill for accurate, controlled drilling.\n' +
          'Essential tool for clean, professional results in small projects.',
    rating: 4.7,
    reviews: 150,
    sold: '650+',
    tags: [
      'mx1022 mega drill', '350w compact drill', '10mm keyless chuck', 'variable speed compact', 'slim ergonomic drill',
      'steel wood precision', 'cabinetry assembly tool', 'electronics light drill', 'soft grip compact', 'forward reverse drill',
      'durable ventilation', 'value corded drill', 'accurate small project', 'essential precision drill', 'reliable compact tool'
    ]
  },
  {
    id: 'mx106-bolton-400w-10mm-lightweight-electric-drill',
    title: 'MX106 BOLTON 400W 10mm Lightweight Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71YZHO5VfwL._AC_UF1000,1000_QL80_.jpg',
    desc: 'MX106 BOLTON 400W Lightweight Electric Drill combines power and portability.\n' +
          '400W motor delivers consistent torque with 0–3000 rpm variable speed.\n' +
          '10mm keyless chuck for quick, secure bit changes.\n' +
          'Ultra-light design ideal for overhead, ladder, and prolonged drilling.\n' +
          'Handles steel up to 10mm and wood up to 25mm efficiently.\n' +
          'Non-slip rubberized grip with reverse switch for versatility.\n' +
          'Perfect for home DIY, installation work, and light professional jobs.\n' +
          'Robust housing with effective cooling for extended runtime.\n' +
          'Affordable high-performance corded drill for daily use.\n' +
          'Reliable tool for fast, clean, and effortless drilling.',
    rating: 4.6,
    reviews: 120,
    sold: '500+',
    tags: [
      'mx106 bolton drill', '400w portable drill', '10mm lightweight chuck', 'variable speed portable', 'ultra light drill',
      'steel wood drilling', 'diy installation tool', 'light professional drill', 'rubberized grip drill', 'reverse switch portable',
      'robust cooling drill', 'affordable performance', 'fast clean drill', 'essential portable tool', 'reliable daily drill'
    ]
  },
  {
    id: 'mx105-400w-10mm-lightweight-electric-drill',
    title: 'MX105 400W 10mm Lightweight Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71YZHO5VfwL._AC_UF1000,1000_QL80_.jpg',
    desc: 'MX105 400W Lightweight Electric Drill is built for comfort and control.\n' +
          '400W high-efficiency motor with smooth 0–3000 rpm variable trigger.\n' +
          '10mm keyless chuck for instant bit changes and firm grip.\n' +
          'Balanced lightweight body reduces arm strain on long jobs.\n' +
          'Drills steel up to 10mm and wood up to 25mm effortlessly.\n' +
          'Soft-grip handle with forward/reverse switch for easy operation.\n' +
          'Ideal for home improvement, woodworking, and light trade tasks.\n' +
          'Ventilated housing prevents overheating during continuous use.\n' +
          'Dependable corded drill for precise, fatigue-free drilling.\n' +
          'Great value tool for accurate results in everyday projects.',
    rating: 4.7,
    reviews: 160,
    sold: '700+',
    tags: [
      'mx105 electric drill', '400w comfort drill', '10mm keyless lightweight', 'variable trigger drill', 'balanced light drill',
      'steel wood control', 'home improvement tool', 'woodworking light trade', 'soft grip handle', 'ventilated housing drill',
      'dependable corded', 'great value drill', 'precise fatigue free', 'essential everyday drill', 'reliable accurate tool'
    ]
  },
  {
    id: 'mx107-400w-10mm-lightweight-electric-drill',
    title: 'MX107 400W 10mm Lightweight Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71YZHO5VfwL._AC_UF1000,1000_QL80_.jpg',
    desc: 'MX107 400W Lightweight Electric Drill offers smooth, powerful performance.\n' +
          '400W motor with full variable speed range 0–3000 rpm.\n' +
          '10mm keyless chuck ensures quick, secure bit installation.\n' +
          'Ergonomic lightweight construction for overhead and extended drilling.\n' +
          'Capable of drilling steel up to 10mm and wood up to 25mm.\n' +
          'Non-slip soft-grip handle with reverse function for versatility.\n' +
          'Perfect for DIY enthusiasts, installers, and light professional use.\n' +
          'Durable housing with efficient cooling vents for reliability.\n' +
          'High-performance corded drill at an excellent price point.\n' +
          'Trusted choice for clean, consistent drilling results.',
    rating: 4.8,
    reviews: 170,
    sold: '750+',
    tags: [
      'mx107 lightweight drill', '400w smooth drill', '10mm keyless power', 'variable speed lightweight', 'ergonomic overhead drill',
      'steel wood drilling', 'diy installer tool', 'light professional drill', 'non slip soft grip', 'cooling vent drill',
      'durable reliable drill', 'high performance corded', 'excellent value drill', 'essential clean drill', 'trusted consistent tool'
    ]
  },
  {
    id: 'mx1014-700w-13mm-high-torque-electric-drill',
    title: 'MX1014 700W 13mm High Torque Electric Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.thewirecutter.com/wp-content/media/2025/05/BEST-DRILLS-2048px-3211.jpg?auto=webp&quality=75&width=1024',
    desc: 'MX1014 700W High Torque Electric Drill tackles demanding drilling jobs.\n' +
          'Powerful 700W motor with variable speed 0–3000 rpm for full control.\n' +
          '13mm keyless chuck handles larger bits and higher torque loads.\n' +
          'High torque output ideal for thick wood, metal, and masonry.\n' +
          'Ergonomic handle with side auxiliary grip for stability.\n' +
          'Suitable for construction, woodworking, metal fabrication, and heavy DIY.\n' +
          'Robust housing with advanced cooling for prolonged heavy use.\n' +
          'Professional-grade corded drill for tough, reliable performance.\n' +
          'Essential high-power tool for larger holes and harder materials.\n' +
          'Built to deliver consistent results under load.',
    rating: 4.8,
    reviews: 180,
    sold: '800+',
    tags: [
      'mx1014 high torque drill', '700w powerful drill', '13mm keyless chuck', 'variable speed high torque', 'auxiliary grip drill',
      'construction woodworking', 'metal fabrication tool', 'heavy diy drill', 'robust cooling drill', 'professional heavy duty',
      'essential large hole', 'reliable tough material', 'consistent under load', 'high power corded', 'essential demanding drill'
    ]
  },
  {
    id: 'mx308-710w-13mm-impact-drill',
    title: 'MX308 710W 13mm Impact Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.tatoltool.com/wp-content/uploads/2022/02/900W-rotary-hammer-drill-scaled.jpg',
    desc: 'MX308 710W 13mm Impact Drill combines drilling and hammer action.\n' +
          '710W motor with variable speed 0–3000 rpm and impact function.\n' +
          '13mm keyless chuck for quick bit changes and secure hold.\n' +
          'Hammer mode drills concrete, brick, and masonry efficiently.\n' +
          'Ergonomic soft-grip handle with side handle for control.\n' +
          'Ideal for construction, renovation, installation, and heavy DIY.\n' +
          'Durable housing with ventilation for cool operation.\n' +
          'Versatile 2-mode drill for wood, metal, and concrete.\n' +
          'Professional impact drill for tough surfaces and fast progress.\n' +
          'Essential tool for multi-material drilling projects.',
    rating: 4.9,
    reviews: 140,
    sold: '600+',
    tags: [
      'mx308 impact drill', '710w hammer drill', '13mm keyless impact', 'variable speed hammer', 'concrete masonry drill',
      'construction renovation tool', 'installation heavy diy', 'soft grip side handle', 'versatile 2 mode drill', 'durable ventilated',
      'professional tough surface', 'essential multi material', 'fast progress drill', 'reliable impact tool', 'high performance hammer'
    ]
  },
  {
    id: 'mx402-vertigo-gold-850w-100mm-angle-grinder',
    title: 'MX402 VERTIGO GOLD 850W 100mm Angle Grinder',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.totoltool.com/wp-content/uploads/2023/04/125mm-electric-angle-grinder-machine.webp',
    desc: 'MX402 VERTIGO GOLD 850W 100mm Angle Grinder is compact and powerful.\n' +
          '850W high-speed motor reaches 11,000 rpm for fast material removal.\n' +
          'M10 spindle compatible with 100mm grinding and cutting discs.\n' +
          'Ergonomic slim body with soft-grip handle for comfortable control.\n' +
          'Spindle lock for quick, tool-free wheel changes.\n' +
          'Ideal for metal grinding, cutting tiles, rust removal, and sharpening.\n' +
          'Durable gear housing with ventilation for cool, long runtime.\n' +
          'Safety features include side handle and protective guard.\n' +
          'Professional-grade compact grinder for everyday trade use.\n' +
          'Essential tool for aggressive grinding and cutting tasks.',
    rating: 4.7,
    reviews: 150,
    sold: '650+',
    tags: [
      'mx402 vertigo grinder', '850w 100mm grinder', '11000rpm angle grinder', 'm10 spindle grinder', 'compact slim grinder',
      'metal grinding tool', 'tile cutting grinder', 'rust removal sharpener', 'soft grip ergonomic', 'spindle lock quick change',
      'durable gear housing', 'professional trade grinder', 'essential aggressive tool', 'reliable compact grinder', 'high speed cutting'
    ]
  },
  {
    id: 'variable-5-850w-125mm-angle-grinder',
    title: 'Variable 5" 850W 125mm Angle Grinder',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.totoltool.com/wp-content/uploads/2023/04/125mm-electric-angle-grinder-machine.webp',
    desc: 'Variable Speed 850W 125mm Angle Grinder offers adjustable performance.\n' +
          '850W motor with variable speed wheel for precise control.\n' +
          '125mm disc size with M14 spindle for grinding, cutting, polishing.\n' +
          'Ergonomic design with soft-grip handle and side auxiliary grip.\n' +
          'Spindle lock enables fast, tool-free accessory changes.\n' +
          'Ideal for metal fabrication, stone work, paint removal, and rust cleaning.\n' +
          'Ventilated housing keeps motor cool during intensive tasks.\n' +
          'Safety guard and overload protection for secure operation.\n' +
          'Professional variable grinder for versatile material removal.\n' +
          'Essential tool for controlled, high-performance grinding.',
    rating: 4.8,
    reviews: 160,
    sold: '700+',
    tags: [
      'variable speed grinder', '850w 125mm grinder', 'adjustable rpm grinder', 'm14 spindle variable', 'ergonomic side grip',
      'metal fabrication tool', 'stone work grinder', 'paint rust removal', 'ventilated overload protection', 'fast accessory change',
      'professional versatile grinder', 'essential controlled grinding', 'reliable high performance', 'safety guard grinder', 'multi material tool'
    ]
  },
  {
    id: 'mx601-1200w-180mm-polisher',
    title: 'MX601 1200W 180mm Polisher',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://ronixtools.com/img/media/products/6110/og-6110-en.webp',
    desc: 'MX601 1200W 180mm Polisher delivers professional finishing results.\n' +
          'Powerful 1200W motor with variable speed 0–3500 rpm control.\n' +
          '180mm backing pad for large surface polishing and buffing.\n' +
          'Ergonomic handle with soft grip and side handle for stability.\n' +
          'Ideal for car detailing, furniture restoration, marble, and metal polishing.\n' +
          'Constant speed electronics maintain rpm under load.\n' +
          'Durable gear housing with effective cooling vents.\n' +
          'Spindle lock for quick pad or bonnet changes.\n' +
          'Professional polisher for swirl-free, high-gloss finishes.\n' +
          'Essential tool for automotive and surface refinishing.',
    rating: 4.7,
    reviews: 110,
    sold: '450+',
    tags: [
      'mx601 polisher', '1200w variable polisher', '180mm backing pad', 'car detailing tool', 'furniture marble polish',
      'constant speed electronics', 'ergonomic side handle', 'durable cooling vents', 'spindle lock polisher', 'professional gloss finish',
      'essential surface refinishing', 'reliable high gloss tool', 'swirl free polishing', 'automotive restoration', 'powerful buffing tool'
    ]
  },
  {
    id: 'mx702-1600w-sds-max-demolition-hammer',
    title: 'MX702 1600W SDS-Max Demolition Hammer',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00YUrkojgPVIbQ/Populus-Industrial-Quality-pH65-Demolition-Breaker-High-Quality-Electric-Demolition-Hammer-Power-Tools-Jack-Hammer-Rotary-Hammer-1600W-for-Turkish-Market.webp',
    desc: 'MX702 1600W SDS-Max Demolition Hammer breaks concrete with high impact energy.\n' +
          'Powerful 1600W motor delivers heavy blows for fast material removal.\n' +
          'SDS-Max chuck for quick, secure chisel and point bit changes.\n' +
          'Vibration-dampening handles reduce user fatigue on long jobs.\n' +
          'Ideal for foundation work, road breaking, and heavy demolition.\n' +
          'Robust metal gear housing with advanced cooling system.\n' +
          'Ergonomic side handle and soft-grip main handle for control.\n' +
          'Professional-grade jackhammer for tough concrete and masonry.\n' +
          'Essential tool for construction and renovation heavy breaking.\n' +
          'Built for durability and high-performance demolition tasks.',
    rating: 4.9,
    reviews: 90,
    sold: '350+',
    tags: [
      'mx702 sds max hammer', '1600w demolition hammer', 'high impact breaker', 'sds max chuck tool', 'vibration dampening hammer',
      'foundation road breaking', 'heavy concrete demolition', 'robust metal housing', 'ergonomic side handle', 'professional jackhammer',
      'essential heavy breaking', 'reliable tough masonry', 'durable high performance', 'construction renovation tool', 'powerful breaker'
    ]
  },
  {
    id: 'mx707-1200w-demolition-hammer',
    title: 'MX707 1200W Demolition Hammer',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00YUrkojgPVIbQ/Populus-Industrial-Quality-pH65-Demolition-Breaker-High-Quality-Electric-Demolition-Hammer-Power-Tools-Jack-Hammer-Rotary-Hammer-1600W-for-Turkish-Market.webp',
    desc: 'MX707 1200W Demolition Hammer is designed for medium to heavy breaking.\n' +
          '1200W motor generates strong impact force for concrete and brick.\n' +
          'SDS-Max tool holder for fast accessory changes.\n' +
          'Anti-vibration system and soft-grip handles reduce strain.\n' +
          'Ideal for wall removal, floor breaking, and renovation projects.\n' +
          'Durable gearbox with effective heat dissipation.\n' +
          'Auxiliary side handle for better control and safety.\n' +
          'Professional demolition tool for efficient material breakup.\n' +
          'Essential hammer for construction and remodeling tasks.\n' +
          'Reliable power for consistent breaking performance.',
    rating: 4.8,
    reviews: 100,
    sold: '400+',
    tags: [
      'mx707 demolition hammer', '1200w breaker', 'sds max demolition', 'anti vibration hammer', 'concrete brick breaking',
      'wall floor removal', 'renovation demolition tool', 'durable gearbox hammer', 'auxiliary side handle', 'professional breaking',
      'essential remodeling tool', 'reliable consistent impact', 'efficient material breakup', 'construction hammer', 'powerful medium breaker'
    ]
  },
  {
    id: 'mx7011-1450w-35mm-demolition-hammer',
    title: 'MX7011 1450W 35mm Demolition Hammer',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.klium.com/images/ec7cd8fa-be1c-4e8e-a426-3a169cf48f97/makita_hm0870c_3/makita_hm0870c_3.jpg',
    desc: 'MX7011 1450W 35mm Demolition Hammer tackles the toughest breaking jobs.\n' +
          'High-power 1450W motor with massive impact energy.\n' +
          '35mm hex chuck accepts heavy-duty chisels and points.\n' +
          'Vibration-absorbing handles and soft-grip for user comfort.\n' +
          'Ideal for foundations, roadways, heavy concrete, and rock breaking.\n' +
          'Robust all-metal gearbox with superior cooling.\n' +
          'Ergonomic design with auxiliary handle for precise control.\n' +
          'Professional jackhammer for extreme demolition work.\n' +
          'Essential tool for large-scale construction and excavation.\n' +
          'Built to deliver relentless breaking power.',
    rating: 4.9,
    reviews: 85,
    sold: '320+',
    tags: [
      'mx7011 35mm hammer', '1450w heavy demolition', '35mm hex chuck', 'vibration absorbing hammer', 'foundation roadway breaking',
      'heavy concrete rock', 'robust metal gearbox', 'ergonomic auxiliary handle', 'professional extreme jackhammer', 'essential large scale',
      'relentless breaking power', 'construction excavation tool', 'superior cooling hammer', 'tough demolition tool', 'high impact breaker'
    ]
  },
  {
    id: 'mx802-900w-26mm-rotary-hammer-with-bmc-box',
    title: 'MX802 900W 26mm Rotary Hammer (with BMC box)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://www.tatoltool.com/wp-content/uploads/2022/02/900W-rotary-hammer-drill-scaled.jpg',
    desc: 'MX802 900W 26mm Rotary Hammer with BMC box offers 3-mode versatility.\n' +
          '900W motor with 0–1100 rpm and 0–4800 bpm impact rate.\n' +
          'SDS-plus chuck for quick drill, hammer, and chisel changes.\n' +
          'Drilling, hammer drilling, and chiseling functions in one tool.\n' +
          'Ergonomic soft-grip handles with side handle for stability.\n' +
          'Ideal for concrete, brick, tile, and masonry work.\n' +
          'Premium BMC carry case for secure storage and transport.\n' +
          'Durable construction with effective cooling system.\n' +
          'Professional rotary hammer for fast, precise hole making.\n' +
          'Essential 3-mode tool for construction and renovation.',
    rating: 4.8,
    reviews: 120,
    sold: '500+',
    tags: [
      'mx802 rotary hammer', '900w sds plus', '3 mode hammer drill', '26mm concrete drill', 'variable speed impact',
      'drill hammer chisel', 'ergonomic side handle', 'bmc carry case', 'masonry tile work', 'durable cooling system',
      'professional hole making', 'essential construction tool', 'fast precise hammer', 'reliable 3 mode', 'versatile rotary tool'
    ]
  },
  {
    id: 'mx802-900w-26mm-rotary-hammer-carton-only',
    title: 'MX802 900W 26mm Rotary Hammer (carton only)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://stream.ronixtools.com:8443/thumb-site/products/2723/639064845266066946.mp4/thumb-1.jpg',
    desc: 'MX802 900W 26mm Rotary Hammer (machine only in carton) for 3-mode operation.\n' +
          '900W powerful motor with variable speed and high impact rate.\n' +
          'SDS-plus system for fast bit changes in drilling and chiseling.\n' +
          'Three functions: rotary drill, hammer drill, and pure chiseling.\n' +
          'Soft-grip handles and auxiliary side grip for user comfort.\n' +
          'Perfect for concrete anchors, brickwork, tile removal, and demolition.\n' +
          'Robust build with ventilation for continuous heavy use.\n' +
          'Professional rotary hammer without accessories (carton packaging).\n' +
          'Essential tool for fast, efficient masonry and drilling.\n' +
          'High-performance machine for demanding job site work.',
    rating: 4.8,
    reviews: 110,
    sold: '450+',
    tags: [
      'mx802 rotary machine only', '900w sds plus hammer', '3 function rotary', '26mm masonry drill', 'variable impact rate',
      'concrete anchor tool', 'brick tile removal', 'soft grip auxiliary', 'robust ventilated hammer', 'professional job site',
      'essential masonry tool', 'fast efficient drill', 'reliable heavy use', 'demanding rotary hammer', 'high performance machine'
    ]
  },
  {
    id: 'mx903-1500w-125mm-marble-cutter',
    title: 'MX903 1500W 125mm Marble Cutter',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00UhKWdDkBgTpG/Populus-New-Arrival-Industrial-Quality-1500W-Heavy-Duty-High-Quality-Electric-Marble-Cutter-125mm-Marble-Tools-Table-Cutter-Motor.webp',
    desc: 'MX903 1500W 125mm Marble Cutter slices through stone with power.\n' +
          '1500W high-torque motor with 11,000 rpm no-load speed.\n' +
          '125mm blade capacity for clean cuts in marble, granite, tile.\n' +
          'Adjustable depth and angle guide for precise straight cuts.\n' +
          'Water feed system option for wet cutting to reduce dust.\n' +
          'Ergonomic handle with soft grip and side handle for control.\n' +
          'Ideal for tile installation, countertop fabrication, and stone work.\n' +
          'Durable gearbox and spindle lock for quick blade changes.\n' +
          'Professional cutter for accurate, chip-free results.\n' +
          'Essential tool for stone, ceramic, and masonry cutting.',
    rating: 4.7,
    reviews: 130,
    sold: '550+',
    tags: [
      'mx903 marble cutter', '1500w stone cutter', '125mm tile cutter', 'wet dry cutting', 'adjustable depth guide',
      'tile installation tool', 'countertop fabrication', 'ergonomic side handle', 'durable spindle lock', 'chip free cut',
      'professional stone cutter', 'essential masonry cutting', 'accurate precise tool', 'high torque cutter', 'reliable stone work'
    ]
  },
  {
    id: 'mx1101-400w-electric-blower',
    title: 'MX1101 400W Electric Blower',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/b5e33713-8090-42a0-8e33-246202213812.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    desc: 'MX1101 400W Electric Blower clears dust and debris quickly.\n' +
          '400W motor generates 16000 rpm high-velocity airflow.\n' +
          'Compact lightweight design for easy one-hand operation.\n' +
          'Variable speed control for gentle or powerful blowing.\n' +
          'Ideal for workshop cleaning, garden leaves, car detailing, and drying.\n' +
          'Ergonomic handle with soft grip reduces fatigue.\n' +
          'Durable housing with efficient cooling for long runtime.\n' +
          'Nozzle attachments included for focused or wide airflow.\n' +
          'Affordable corded blower for everyday cleanup tasks.\n' +
          'Essential tool for fast, efficient debris removal.',
    rating: 4.6,
    reviews: 160,
    sold: '800+',
    tags: [
      'mx1101 electric blower', '400w high velocity', '16000rpm blower', 'variable speed blower', 'compact lightweight blower',
      'workshop garden cleaning', 'car detailing tool', 'ergonomic soft grip', 'durable cooling blower', 'nozzle attachments',
      'affordable corded blower', 'essential debris removal', 'fast efficient cleanup', 'reliable everyday blower', 'powerful leaf blower'
    ]
  },
  {
    id: 'mx1104-850w-electric-blower',
    title: 'MX1104 850W Electric Blower',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/S/aplus-media-library-service-media/b5e33713-8090-42a0-8e33-246202213812.__CR0,0,970,600_PT0_SX970_V1___.jpg',
    desc: 'MX1104 850W Electric Blower provides strong, adjustable airflow.\n' +
          '850W powerful motor with variable speed up to 16000 rpm.\n' +
          'High-volume air output for heavy leaves, dust, and debris.\n' +
          'Ergonomic handle and lightweight body for comfortable use.\n' +
          'Ideal for large gardens, workshops, garages, and vehicle cleaning.\n' +
          'Durable construction with ventilation for extended runtime.\n' +
          'Multiple nozzle options for precise or wide-area blowing.\n' +
          'Professional-grade corded blower for demanding cleanup.\n' +
          'Essential high-power tool for fast outdoor and indoor clearing.\n' +
          'Reliable blower for efficient, powerful debris management.',
    rating: 4.7,
    reviews: 150,
    sold: '750+',
    tags: [
      'mx1104 high power blower', '850w variable blower', '16000rpm strong air', 'ergonomic lightweight blower', 'large garden tool',
      'workshop garage cleaning', 'vehicle dust removal', 'durable ventilated blower', 'multiple nozzle blower', 'professional cleanup',
      'essential high volume', 'reliable powerful blower', 'fast outdoor clearing', 'demanding debris tool', 'efficient corded blower'
    ]
  },
  {
    id: 'mx1402-1600w-car-washer-copper',
    title: 'MX1402 1600W Car Washer (Copper)',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/81oX6bEhh4L._AC_SL1500_.jpg',
    desc: 'MX1402 1600W Car Washer with copper motor delivers strong pressure cleaning.\n' +
          '1600W copper-wound motor with max 110 bar pressure output.\n' +
          'Adjustable spray nozzle for fan, jet, and mist patterns.\n' +
          '5m high-pressure hose and quick-connect fittings included.\n' +
          'Built-in detergent tank for soap application.\n' +
          'Ideal for cars, motorcycles, patios, driveways, and outdoor equipment.\n' +
          'Durable pump and housing for long service life.\n' +
          'Portable design with carry handle and wheels.\n' +
          'Professional-grade pressure washer for thorough cleaning.\n' +
          'Essential tool for efficient, powerful washing tasks.',
    rating: 4.8,
    reviews: 100,
    sold: '400+',
    tags: [
      'mx1402 car washer', '1600w copper motor', '110 bar pressure washer', 'adjustable nozzle washer', 'detergent tank washer',
      'car motorcycle cleaning', 'patio driveway tool', 'durable pump washer', 'portable wheeled washer', 'professional pressure',
      'essential powerful wash', 'reliable thorough cleaning', 'high pressure output', 'efficient outdoor washer', 'strong cleaning tool'
    ]
  },
 
  {
    id: 'mx1703-750w-electric-vibrator',
    title: 'MX1703 750W Electric Vibrator',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://image.made-in-china.com/365f3j00dlZVJsqKktrG/Populus-New-Arrival-Industrial-Quality-Small-Mini-Electric-Hand-Held-Portable-Handy-Electric-Concrete-Vibrator-Power-Tools-750W.webp',
    desc: 'MX1703 750W Electric Vibrator removes air bubbles from concrete.\n' +
          '750W motor drives 35mm poker for effective vibration.\n' +
          '1.5m flexible shaft reaches deep into forms and columns.\n' +
          'Ergonomic handle with soft grip reduces vibration fatigue.\n' +
          'Ideal for foundations, slabs, beams, and small pours.\n' +
          'Durable motor housing with cooling vents for long runs.\n' +
          'Quick-connect poker system for easy maintenance.\n' +
          'Professional tool for stronger, denser concrete finishes.\n' +
          'Essential vibrator for quality concrete placement.\n' +
          'Reliable power for smooth, void-free results.',
    rating: 4.6,
    reviews: 130,
    sold: '550+',
    tags: [
      'mx1703 concrete vibrator', '750w electric poker', '35mm flexible shaft', 'air bubble removal', 'foundation slab tool',
      'ergonomic soft grip', 'durable cooling motor', 'quick connect poker', 'professional dense concrete', 'essential quality tool',
      'reliable void free', 'smooth concrete finish', 'strong pour vibrator', 'small beam vibrator', 'efficient placement tool'
    ]
  },
  {
    id: 'mx1999-2000w-hot-air-gun',
    title: 'mx1999 2000W Hot Air Gun',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71s4aUP3XpL._AC_SL1500_.jpg',
    desc: 'MX1999 2000W Hot Air Gun provides dual-temperature heat control.\n' +
          '2000W powerful heating element with 350°C and 600°C settings.\n' +
          'Variable airflow control for precise heat application.\n' +
          'Ergonomic handle with soft grip and stable stand.\n' +
          'Ideal for paint stripping, shrink wrapping, thawing pipes, and crafts.\n' +
          'Overheat protection and thermal cut-off for safety.\n' +
          'Durable housing with cooling vents for long runtime.\n' +
          'Multiple nozzles included for focused or wide heat patterns.\n' +
          'Professional heat gun for fast, controlled heating tasks.\n' +
          'Essential tool for stripping, forming, and drying applications.',
    rating: 4.7,
    reviews: 140,
    sold: '600+',
    tags: [
      'mx1999 hot air gun', '2000w dual temperature', 'variable airflow gun', 'paint stripping tool', 'shrink wrap heat',
      'ergonomic stable stand', 'overheat protection gun', 'durable cooling vents', 'multiple nozzles gun', 'professional controlled heat',
      'essential stripping tool', 'reliable fast heating', 'crafts thawing gun', 'precise heat application', 'high power heat tool'
    ]
  },
  {
    id: 'mx-2150-12v-10mm-cordless-drill',
    title: 'mx 2150 12V 10mm Cordless Drill',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71rtqKUNKhL.jpg',
    desc: 'MX 2150 12V 10mm Cordless Drill offers portable drilling convenience.\n' +
          '12V lithium battery with 30Nm max torque for light to medium tasks.\n' +
          'Variable 2-speed gearbox 0–350 / 0–1350 rpm with 18+1 clutch settings.\n' +
          '10mm keyless chuck for quick bit changes.\n' +
          'Ergonomic soft-grip handle with built-in LED work light.\n' +
          'Ideal for furniture assembly, electronics, and home repairs.\n' +
          'Compact design fits in tight spaces and tool bags.\n' +
          'Battery and charger included for immediate use.\n' +
          'Reliable cordless drill for on-the-go fastening and drilling.\n' +
          'Essential 12V tool for DIY and light professional work.',
    rating: 4.6,
    reviews: 150,
    sold: '650+',
    tags: [
      'mx2150 12v drill', '10mm cordless drill', '30nm torque drill', 'variable 2 speed cordless', '18+1 clutch drill',
      'keyless chuck cordless', 'led light drill', 'furniture assembly tool', 'electronics home repair', 'ergonomic compact drill',
      'battery charger included', 'reliable on go drill', 'essential diy cordless', 'light professional tool', 'portable fastening drill'
    ]
  },
  {
    id: 'mx2151-21v-battery-drill-with-double-battery-bmc-box',
    title: 'mx2151 21V Battery Drill with Double Battery BMC Box',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71rtqKUNKhL.jpg',
    desc: 'MX2151 21V Cordless Drill Kit includes two batteries and BMC case.\n' +
          '21V lithium system with high torque output for demanding tasks.\n' +
          '2-speed gearbox and 18+1 torque settings for versatility.\n' +
          '10mm keyless chuck for fast bit swaps.\n' +
          'Ergonomic soft-grip handle with bright LED work light.\n' +
          'Ideal for construction, woodworking, installation, and heavy DIY.\n' +
          'Premium BMC storage case keeps everything organized.\n' +
          'Long runtime with two batteries for uninterrupted work.\n' +
          'Professional cordless drill kit for reliable performance.\n' +
          'Essential 21V set for portable power and convenience.',
    rating: 4.8,
    reviews: 130,
    sold: '550+',
    tags: [
      'mx2151 21v drill kit', 'double battery cordless', 'bmc case drill set', 'high torque 21v', '2 speed 18+1 clutch',
      '10mm keyless chuck', 'led light cordless', 'construction woodworking tool', 'installation heavy diy', 'ergonomic soft grip',
      'long runtime batteries', 'professional cordless kit', 'essential portable power', 'reliable uninterrupted drill', 'premium 21v set'
    ]
  },
  {
    id: 'mx2152-21v-large-battery-drill-with-double-battery-bmc-box',
    title: 'mx2152 21V Large Battery Drill with Double Battery BMC Box',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/71rtqKUNKhL.jpg',
    desc: 'MX2152 21V Large Battery Drill Kit with two high-capacity batteries.\n' +
          '21V system with extra-large batteries for extended runtime.\n' +
          'High-torque gearbox and 18+1 clutch for tough applications.\n' +
          '10mm keyless chuck handles larger bits with ease.\n' +
          'Soft-grip ergonomic design with integrated LED light.\n' +
          'Ideal for heavy construction, decking, fencing, and renovation.\n' +
          'Premium BMC case organizes drill, batteries, and charger.\n' +
          'Professional cordless drill for demanding, long-duration jobs.\n' +
          'Essential high-capacity kit for uninterrupted power.\n' +
          'Reliable 21V tool for serious portable drilling.',
    rating: 4.9,
    reviews: 120,
    sold: '500+',
    tags: [
      'mx2152 large battery drill', '21v high capacity kit', 'double large battery', 'bmc case large drill', 'high torque 21v large',
      '10mm keyless heavy', 'ergonomic led drill', 'heavy construction tool', 'decking fencing drill', 'renovation long runtime',
      'professional demanding kit', 'essential uninterrupted power', 'reliable serious drill', 'premium high capacity', 'durable 21v tool'
    ]
  },
  {
    id: 'mx7720-4pcs-tool-kit',
    title: 'mx7720 4pcs Tool Kit',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/81T5oDl2oSL._AC_SL1500_.jpg',
    desc: 'MX7720 4pcs Power Tool Combo Kit includes grinder, drill, wrench, hammer.\n' +
          'Four essential cordless tools with four batteries for full coverage.\n' +
          '21V system powers all tools for consistent performance.\n' +
          'Angle grinder, drill/driver, impact wrench, and rotary hammer.\n' +
          'Ergonomic design with LED lights on each tool.\n' +
          'Ideal for construction, renovation, automotive, and workshop use.\n' +
          'Complete kit in storage case for organized transport.\n' +
          'Professional combo set for versatile on-site work.\n' +
          'Essential 4-tool kit for comprehensive cordless power.\n' +
          'Reliable all-in-one solution for multiple tasks.',
    rating: 4.9,
    reviews: 100,
    sold: '400+',
    tags: [
      'mx7720 4pcs combo kit', '21v four tool set', 'angle grinder drill kit', 'impact wrench hammer', 'four battery combo',
      'construction renovation tool', 'automotive workshop kit', 'ergonomic led tools', 'storage case combo', 'professional versatile set',
      'essential cordless power', 'reliable all in one', 'comprehensive multi tool', 'durable 21v kit', 'complete on site solution'
    ]
  },
  {
    id: 'drill-with-single-battery',
    title: 'Drill with Single Battery',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn.thewirecutter.com/wp-content/media/2025/05/BEST-DRILLS-2048px-3211.jpg?auto=webp&quality=75&width=1024',
    desc: 'Cordless Drill with Single Battery offers portable drilling power.\n' +
          '21V lithium battery with strong torque for general tasks.\n' +
          '2-speed gearbox and adjustable clutch for versatility.\n' +
          '10mm keyless chuck for quick bit changes.\n' +
          'Ergonomic soft-grip handle with LED work light.\n' +
          'Ideal for home DIY, furniture assembly, and light installation.\n' +
          'Compact design fits easily in tool bags.\n' +
          'Battery and charger included for immediate use.\n' +
          'Reliable cordless drill for convenient fastening.\n' +
          'Essential single-battery tool for everyday projects.',
    rating: 4.6,
    reviews: 140,
    sold: '600+',
    tags: [
      'cordless drill single battery', '21v portable drill', '2 speed clutch drill', '10mm keyless chuck', 'ergonomic led drill',
      'home diy tool', 'furniture assembly drill', 'light installation cordless', 'compact bag drill', 'battery charger included',
      'reliable convenient drill', 'essential everyday cordless', 'versatile single battery', 'durable portable drill', 'practical fastening tool'
    ]
  },
  {
    id: 'wet-and-dry-vacuum-cleaner',
    title: 'Wet and Dry Vacuum Cleaner',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://cdn11.bigcommerce.com/s-d5fqfj6uoe/images/stencil/1280x1280/h/wetdry-cat__12442.original.jpg',
    desc: 'Wet and Dry Vacuum Cleaner handles both liquid and solid debris.\n' +
          'Powerful motor with large tank capacity for workshop use.\n' +
          'Heavy-duty construction with durable wheels and handle.\n' +
          'Multiple attachments for floors, crevices, and car interiors.\n' +
          'Blower function for clearing dust and leaves.\n' +
          'Ideal for construction sites, garages, workshops, and car detailing.\n' +
          'HEPA filtration option for fine dust control.\n' +
          'Large wheels for easy movement over rough surfaces.\n' +
          'Professional wet/dry vac for thorough cleanup.\n' +
          'Essential tool for maintaining clean work environments.',
    rating: 4.8,
    reviews: 110,
    sold: '450+',
    tags: [
      'wet dry vacuum', 'powerful workshop vac', 'large tank vacuum', 'heavy duty wheels', 'multiple attachment vac',
      'construction site cleaner', 'garage car detailing', 'blower function vac', 'hepa filtration option', 'professional cleanup tool',
      'essential work environment', 'reliable wet dry cleaner', 'thorough debris removal', 'durable vac cleaner', 'versatile workshop tool'
    ]
  },
  {
    id: 'car-air-pump',
    title: 'Car Air Pump',
    price: 'Contact for Price',
    originalPrice: null,
    image: 'https://m.media-amazon.com/images/I/61gSr552GwL._AC_UF894,1000_QL80_.jpg',
    desc: 'Portable Car Air Pump inflates tires quickly and accurately.\n' +
          'High-pressure compressor with digital gauge for precise PSI.\n' +
          '12V DC power plugs directly into car cigarette lighter.\n' +
          'Auto shut-off when target pressure is reached.\n' +
          'LED light for nighttime use and emergency visibility.\n' +
          'Ideal for car, motorcycle, bicycle tires, sports balls, and inflatables.\n' +
          'Compact design with carry handle and storage bag.\n' +
          'Durable construction for roadside and home use.\n' +
          'Essential emergency tool for maintaining tire pressure.\n' +
          'Reliable pump for safe driving and convenience.',
    rating: 4.7,
    reviews: 160,
    sold: '800+',
    tags: [
      'car air pump', 'portable tire inflator', 'digital gauge pump', '12v dc compressor', 'auto shut off pump',
      'led light inflator', 'car motorcycle bicycle', 'sports ball pump', 'compact carry handle', 'durable roadside tool',
      'essential tire pressure', 'reliable emergency pump', 'safe driving tool', 'convenient air compressor', 'accurate psi inflator'
    ]
  }
],

    'Hydraulic Tools':[

    ]


    
};
function ALL() {

 
 return (
    <></>

 )
 
}

export default ALL 