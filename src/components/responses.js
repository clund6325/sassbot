const predefinedResponses = {
    "what do you know about cameron lund?": "Cameron Lund is a Software Engineer with experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team. Cameron is passionate about creating high-quality, scalable software that meets user needs and delivers business value.",
    "what do you know about cameron lund": "Cameron Lund is a Software Engineer with experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team. Cameron is passionate about creating high-quality, scalable software that meets user needs and delivers business value.",
    "tell me about cameron lund": "Cameron Lund is a Software Engineer with experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team. Cameron is passionate about creating high-quality, scalable software that meets user needs and delivers business value.",
    "who is cameron lund?": "Cameron Lund is a Software Engineer with experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team. Cameron is passionate about creating high-quality, scalable software that meets user needs and delivers business value.",
    "who is cameron lund": "Cameron Lund is a Software Engineer with experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team. Cameron is passionate about creating high-quality, scalable software that meets user needs and delivers business value.",
    "what is cameron lund's background?": "Cameron Lund has two years experience working in Software Asset Management(SAM) Services. He specializes in delivering code to meet customer's needs and automation of manual processes to decrease time spent on repetitive tasks. Cameron has a strong background in React, JavaScript, TypeScript, C#, Ruby, and more.",
    "what is cameron lund's background": "Cameron Lund has two years experience working in Software Asset Management(SAM) Services. He specializes in delivering code to meet customer's needs and automation of manual processes to decrease time spent on repetitive tasks. Cameron has a strong background in React, JavaScript, TypeScript, C#, Ruby, and more.",
    "what is cameron lund's experience?": "Cameron Lund has two years experience working in Software Asset Management(SAM) Services. He specializes in delivering code to meet customer's needs and automation of manual processes to decrease time spent on repetitive tasks. Cameron has a strong background in React, JavaScript, TypeScript, C#, Ruby, and more.",
    "what is cameron lund's experience": "Cameron Lund has two years experience working in Software Asset Management(SAM) Services. He specializes in delivering code to meet customer's needs and automation of manual processes to decrease time spent on repetitive tasks. Cameron has a strong background in React, JavaScript, TypeScript, C#, Ruby, and more.",
    "what are cameron lund's skills?": "Cameron Lund has experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team.",
    "what are cameron lund's skills": "Cameron Lund has experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team.",
    "what technologies does cameron lund know?": "Cameron Lund has experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team.",
    "what technologies does cameron lund know": "Cameron Lund has experience in React, JavaScript, TypeScript, C#, Ruby, and more. He is valued for his ability to learn quickly and adapt to new technologies, as well as his strong communication skills and ability to work well in a team.",
    "what is cameron lund's job experience?": "Cameron Lund has two years experience working in Software Asset Management(SAM) Services. He specializes in delivering code to meet customer's needs and automation of manual processes to decrease time spent on repetitive tasks. Cameron has a strong background in React, JavaScript, TypeScript, C#, Ruby, and more.",
    "what is cameron lund's job experience": "Cameron Lund has two years experience working in Software Asset Management(SAM) Services. He specializes in delivering code to meet customer's needs and automation of manual processes to decrease time spent on repetitive tasks. Cameron has a strong background in React, JavaScript, TypeScript, C#, Ruby, and more.",
    "what does cameron lund do for fun?": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what does cameron lund do for fun": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what are cameron lund's hobbies?": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what are cameron lund's hobbies": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what are cameron lund's interests?": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what are cameron lund's interests": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what are cameron lund's favorite hobbies?": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what are cameron lund's favorite hobbies": "Cameron Lund enjoys spending time with his family, playing video games, developing video games, and working on personal coding projects. He is passionate about technology, problem-solving, and learning new things in his free time.",
    "what gets cameron lund excited?": "Cameron Lund gets excited about new technologies, video games, coding projects, and spending time with his family. He is passionate about learning new things, solving problems, and creating high-quality software that meets user needs.",
    "what gets cameron lund excited": "Cameron Lund gets excited about new technologies, video games, coding projects, and spending time with his family. He is passionate about learning new things, solving problems, and creating high-quality software that meets user needs.",
    "what motivates cameron lund?": "Cameron Lund is motivated by challenges, problem-solving, learning new things, and creating high-quality software that meets user needs. He is passionate about technology, coding, and working on projects that have a positive impact.",
    "what motivates cameron lund": "Cameron Lund is motivated by challenges, problem-solving, learning new things, and creating high-quality software that meets user needs. He is passionate about technology, coding, and working on projects that have a positive impact.",
    "what inspires cameron lund?": "Cameron Lund is inspired by innovative technologies, creative projects, and opportunities to learn and grow. He is passionate about creating high-quality software that meets user needs and delivers business value.",
    "what inspires cameron lund": "Cameron Lund is inspired by innovative technologies, creative projects, and opportunities to learn and grow. He is passionate about creating high-quality software that meets user needs and delivers business value.",
    "what are cameron lund's goals?": "Cameron Lund's goals are to continue learning and growing as a Software Engineer, to work on challenging and innovative projects, and to learn at least one new thing a day.",
    "what are cameron und's goals": "Cameron Lund's goals are to continue learning and growing as a Software Engineer, to work on challenging and innovative projects, and to learn at least one new thing a day.",
    "what are cameron lund's aspirations?": "Cameron Lund's aspirations are to become a Senior Software Engineer, to work on exciting and innovative projects, and to make a positive impact through his work. One day, Cameron would like to own his own company and create software that changes the world.",
    "what are cameron lund's aspirations": "Cameron Lund's aspirations are to become a Senior Software Engineer, to work on exciting and innovative projects, and to make a positive impact through his work. One day, Cameron would like to own his own company and create software that changes the world.",
    "what projects has cameron lund worked on?": "Cameron Lund has worked on a variety of projects. He recently created a meal planning app called 'What's For Dinner?'. Cameron uses this weekly with his wife to plan for meals so they no longer have to think about what they're going to be making. He's made numerous websites for friends and family to help lauch their new businesses. And he creates fun mobile games with his son using Unity and Unreal Engine 5.",
    "what projects has cameron lund worked on": "Cameron Lund has worked on a variety of projects. He recently created a meal planning app called 'What's For Dinner?'. Cameron uses this weekly with his wife to plan for meals so they no longer have to think about what they're going to be making. He's made numerous websites for friends and family to help lauch their new businesses. And he creates fun mobile games with his son using Unity and Unreal Engine 5.",
    "what are the most important things for me to know about cameron lund?": "Cameron Lund prides himself on his ability to learn quickly and adapt to new technologies. He believes in working hard and carrying his weight on a team. He's quick to volunteer for any task or project that is being underserved. Cameron is fiercely loyal to his team and will do whatever it takes to make sure they succeed.",
    "what are the most important things for me to know about cameron lund": "Cameron Lund prides himself on his ability to learn quickly and adapt to new technologies. He believes in working hard and carrying his weight on a team. He's quick to volunteer for any task or project that is being underserved. Cameron is fiercely loyal to his team and will do whatever it takes to make sure they succeed.",
    "what are cameron lund's values?": "Cameron Lund values hard work, loyalty, integrity, adaptability, and being a team player. He believes in doing whatever it takes to get the job done and supporting his team members including working overtime and weekends, if necessary. Cameron values honesty, transparency, and open communication in all aspects of his work.",
    "what are cameron lund's values": "Cameron Lund values hard work, loyalty, integrity, adaptability, and being a team player. He believes in doing whatever it takes to get the job done and supporting his team members including working overtime and weekends, if necessary. Cameron values honesty, transparency, and open communication in all aspects of his work.",
    "what are cameron lund's strengths?": "Cameron Lund's strengths include his ability to learn quickly, adapt to new technologies, communicate effectively, work well in a team, and deliver high-quality, scalable software that meets user needs. He is valued for his problem-solving skills, attention to detail, and commitment to excellence.",
    "what are cameron lund's strengths": "Cameron Lund's strengths include his ability to learn quickly, adapt to new technologies, communicate effectively, work well in a team, and deliver high-quality, scalable software that meets user needs. He is valued for his problem-solving skills, attention to detail, and commitment to excellence.",
    "what are cameron lund's weaknesses?": "Cameron Lund's weaknesses include his tendency to take on too much work, his perfectionism, and his difficulty saying no to new projects or tasks. He is working on setting better boundaries, prioritizing tasks, and delegating work to others when necessary.",
    "what are cameron lund's weaknesses": "Cameron Lund's weaknesses include his tendency to take on too much work, his perfectionism, and his difficulty saying no to new projects or tasks. He is working on setting better boundaries, prioritizing tasks, and delegating work to others when necessary.",
    "what are some fun facts about cameron lund?": <ol>
        <li>Cameron Lund is a huge nerd:
            <ul>
                <li>He reads manga and watches anime (often with his kids)</li>
                <li>He is learning conversational Japanese so he can travel to Japan one day</li>
                <li>He is super into Dungeons and Dragons. He has an active campaign going with some of his team members from his old job</li>
                <li>He loves creating characters for D&D and will get asked by his friends to create them characters because he's so damn good at it</li>
                <li>He's into all sorts of trading card games, Pokemon being the one that he spends the most money on</li>
            </ul>
        </li>
        <li>Cameron Lund used to be a competitve ballroom dancer, placing first just one time</li>
        <li>Cameron Lund enjoys fitness activities such as: 
            <ul>
                <li>Weightlifting</li>
                <li>Running</li>
                <li>Hiking</li>
                <li>Trail Running</li>
                <li>Mixed Martial Arts (MMA)</li>
            </ul>
        </li>
        <li>Cameron Lund has a passion for video games and has been playing them since he was 3 years old</li>
        <li>Cameron Lund loves music and plays a few instruments such as: 
            <ul>
                <li>Guitar</li>
                <li>Piano</li>
                <li>Ukulele</li>
            </ul>
        </li>
        <li>Cameron Lund has played in multiple bands with a wide range of genres including: 
            <ul>
                <li>Rock</li>
                <li>Alternative</li>
                <li>Pop</li>
                <li>Electronic</li>
                <li>Techno</li>
                <li>Rap</li>
            </ul>
        </li>
        <li>Cameron Lund secretly aspires to be an author and is writing a novel in his free time</li>
    </ol>,
    "what are some fun facts about cameron lund": <ol>
        <li>Cameron Lund is a huge nerd:
            <ul>
                <li>He reads manga and watches anime (often with his kids)</li>
                <li>He is learning conversational Japanese so he can travel to Japan one day</li>
                <li>He is super into Dungeons and Dragons. He has an active campaign going with some of his team members from his old job</li>
                <li>He loves creating characters for D&D and will get asked by his friends to create them characters because he's so damn good at it</li>
                <li>He's into all sorts of trading card games, Pokemon being the one that he spends the most money on</li>
            </ul>
        </li>
        <li>Cameron Lund used to be a competitve ballroom dancer, placing first just one time</li>
        <li>Cameron Lund enjoys fitness activities such as: 
            <ul>
                <li>Weightlifting</li>
                <li>Running</li>
                <li>Hiking</li>
                <li>Trail Running</li>
                <li>Mixed Martial Arts (MMA)</li>
            </ul>
        </li>
        <li>Cameron Lund has a passion for video games and has been playing them since he was 3 years old</li>
        <li>Cameron Lund loves music and plays a few instruments such as: 
            <ul>
                <li>Guitar</li>
                <li>Piano</li>
                <li>Ukulele</li>
            </ul>
        </li>
        <li>Cameron Lund has played in multiple bands with a wide range of genres including: 
            <ul>
                <li>Rock</li>
                <li>Alternative</li>
                <li>Pop</li>
                <li>Electronic</li>
                <li>Techno</li>
                <li>Rap</li>
            </ul>
        </li>
        <li>Cameron Lund secretly aspires to be an author and is writing a novel in his free time</li>
    </ol>,
};

export default predefinedResponses;