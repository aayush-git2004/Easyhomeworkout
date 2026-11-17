export type WorkoutMove = { name: string; dose: string; steps: string[]; rest: string; avoid: string };
export type Workout = {
  slug: string; title: string; level: string; duration: string; focus: string; equipment: string;
  desc: string; image: string; objective: string; warmup: string[]; safety: string;
  moves: WorkoutMove[]; cooldown: string[]; closing: string;
};
const move = (name: string, dose: string, steps: string[], rest: string, avoid: string): WorkoutMove => ({ name, dose, steps, rest, avoid });

export const workouts: Workout[] = [
  {
    slug:'starter-10', title:'10-Minute Starter Workout', level:'Beginner', duration:'10 minutes', focus:'Full body', equipment:'None (a sturdy chair is optional)',
    desc:'A gentle introduction to basic movements for people new to exercise. Build confidence, practice movement, and activate your whole body.',
    image:'photo-1518611012118-696072aa579a', objective:'Full body',
    warmup:['March gently in place for 1 minute.','Roll your shoulders, rotate your ankles, and gently move your arms for 1 minute.'],
    safety:'Start slowly, maintain your balance, and take breaks whenever needed.',
    moves:[
      move('Chair Squats','2 rounds of 8 reps',['Stand in front of a sturdy chair with feet shoulder-width apart.','Extend arms forward for balance.','Bend knees slowly and push hips backward.','Lower until you gently touch the chair.','Push through your feet and stand upright again.'],'30 seconds between rounds','Dropping onto the chair, bending knees inward, or lifting heels.'),
      move('Wall Push-Ups','2 rounds of 8 reps',['Stand facing a wall about one arm’s length away.','Place palms on the wall at chest height.','Bend elbows and bring chest toward the wall slowly.','Push away until arms are straight.','Repeat.'],'30 seconds between rounds','Bending hips, moving head forward, or rushing.'),
      move('Standing March','2 rounds of 30 seconds',['Stand upright with feet hip-width apart.','Lift right knee toward waist, then lower it.','Lift left knee and continue alternating.','Move arms naturally while marching.'],'20 seconds between rounds','Leaning backward, lifting knees too quickly, or losing balance.'),
      move('Glute Bridges','2 rounds of 8 reps',['Lie on your back with knees bent and feet flat.','Keep arms beside your body.','Push through heels and lift hips slowly.','Squeeze glutes gently at the top.','Lower hips slowly to the floor.'],'30 seconds between rounds','Arching the lower back or lifting hips too high.')
    ],
    cooldown:['Walk slowly in place for 30 seconds.','Gently stretch arms and legs for 30 seconds.'],
    closing:'Workout complete! You introduced your body to four basic exercises for your chest, arms, legs, glutes, and core.'
  },
  {
    slug:'full-body-15', title:'15-Minute Full Body Workout', level:'Beginner', duration:'15 minutes', focus:'Full body', equipment:'None',
    desc:'A simple full-body routine for major muscle groups that helps beginners practice basic strength, coordination, and stamina.',
    image:'photo-1517836357463-d25dfeac3438', objective:'Full body strength and endurance',
    warmup:['March in place for 45 seconds.','Perform arm circles for 30 seconds.','Perform gentle bodyweight squats for 45 seconds.'],
    safety:'Keep movements controlled and focus on technique rather than speed.',
    moves:[
      move('Bodyweight Squats','2 rounds of 12 reps',['Stand with feet shoulder-width apart.','Keep chest upright and arms extended forward.','Push hips back and bend knees.','Lower to a comfortable depth, ideally near parallel.','Push through feet and return to standing.'],'30 seconds between rounds','Allowing knees to collapse inward or lifting heels.'),
      move('Incline Push-Ups','2 rounds of 10 reps',['Place hands on a stable elevated surface, such as a countertop.','Set hands slightly wider than shoulder-width.','Extend legs back and keep body straight.','Bend elbows and bring chest toward the surface.','Push back to the starting position.'],'30 seconds between rounds','Using an unstable surface, dropping hips, or bending neck.'),
      move('Reverse Lunges','2 rounds of 8 reps per leg',['Stand upright with feet hip-width apart.','Step right leg backward.','Bend both knees and lower comfortably.','Push through front foot to return to standing.','Repeat with the left leg.'],'30 seconds between rounds','Losing balance, front knee collapsing inward, or stepping too far back.'),
      move('Bird Dog','2 rounds of 8 reps per side',['Get on hands and knees with hands below shoulders and knees below hips.','Extend right arm forward and left leg backward.','Hold for 2 seconds.','Return to start and switch sides.'],'30 seconds between rounds','Rotating hips, arching back, or raising leg too high.'),
      move('Standing Calf Raises','2 rounds of 15 reps',['Stand with feet hip-width apart.','Hold a wall or chair for balance if needed.','Raise heels slowly to stand on the balls of your feet.','Hold for 1 second.','Lower heels slowly.'],'20 seconds between rounds','Bouncing, leaning forward, or moving too quickly.')
    ],
    cooldown:['Walk slowly for 30 seconds.','Stretch quadriceps for 30 seconds.','Stretch chest and shoulders for 30 seconds.','Stretch hamstrings for 30 seconds.'],
    closing:'Workout complete! This short routine works your chest, arms, back, core, legs, and calves.'
  },
  {
    slug:'low-impact-cardio', title:'Low-Impact Cardio Workout', level:'Beginner', duration:'15 minutes', focus:'Cardio · Full body', equipment:'None',
    desc:'A gentle cardio routine to practice stamina and endurance without jumping. A lower-impact option for people who prefer gentler movement.',
    image:'photo-1571019613454-1cb2f99b2d8b', objective:'Cardiovascular fitness and endurance',
    warmup:['March slowly in place for 1 minute.','Perform gentle arm circles for 1 minute.','Step side to side for 1 minute.'],
    safety:'Keep a comfortable pace. You should be able to speak short sentences while exercising.',
    moves:[
      move('March in Place','2 rounds of 45 seconds',['Stand upright with feet hip-width apart.','Lift right knee toward waist, then lower it.','Lift left knee and alternate legs.','Swing arms naturally to maintain rhythm.'],'20 seconds between rounds','Stomping, leaning backward, or moving too quickly.'),
      move('Step Touches','2 rounds of 45 seconds',['Stand with feet together.','Step right foot sideways.','Bring left foot toward right foot.','Step left foot in the opposite direction.','Continue alternating sides.'],'20 seconds between rounds','Taking excessively wide steps or dragging feet.'),
      move('Standing Knee Raises','2 rounds of 30 seconds',['Stand straight with feet shoulder-width apart.','Raise right knee toward chest.','Lower right foot slowly.','Raise left knee and continue alternating.','Keep core engaged.'],'20 seconds between rounds','Leaning backward or pulling knees up with your hands.'),
      move('Standing Side Leg Raises','2 rounds of 10 reps per leg',['Stand beside a wall or sturdy chair and hold it for balance.','Lift right leg slowly to the side.','Keep upper body straight.','Lower leg slowly and repeat.','Switch legs.'],'20 seconds between rounds','Leaning sideways, swinging legs, or turning toes excessively outward.'),
      move('Standing Punches','2 rounds of 45 seconds',['Stand with feet shoulder-width apart.','Bend elbows and hold fists near chest.','Extend right arm forward in a controlled punch.','Bring it back and extend left arm.','Continue alternating.'],'20 seconds between rounds','Locking elbows, twisting excessively, or holding your breath.')
    ],
    cooldown:['Walk slowly in place for 1 minute.','Perform gentle shoulder, calf, and thigh stretches for 1 minute.'],
    closing:'Workout complete! You finished a low-impact cardio session without jumping or running.'
  },
  {
    slug:'upper-body-basics', title:'Upper Body Basics', level:'Intermediate', duration:'25 minutes', focus:'Chest · Back · Shoulders · Arms', equipment:'None or a backpack filled with lightweight items',
    desc:'A strength-focused session for the chest, back, shoulders, biceps, and triceps, using bodyweight and an optional backpack for resistance.',
    image:'photo-1581009146145-b5ef050c2e1e', objective:'Upper body strength',
    warmup:['Arm circles for 1 minute.','Shoulder rolls for 30 seconds.','Wall push-ups for 1 minute.','Gentle arm swings and wrist rotations for 1 minute 30 seconds.'],
    safety:'Choose a manageable level of difficulty and focus on controlled movements. Check the backpack and its contents before lifting.',
    moves:[
      move('Standard Push-Ups','3 rounds of 10 reps',['Place hands slightly wider than shoulder-width.','Extend legs behind you and balance on hands and toes.','Keep body straight from head to heels.','Bend elbows and lower chest slowly.','Push until arms are straight again.'],'45–60 seconds between rounds','Dropping or raising hips too high, or flaring elbows excessively.'),
      move('Backpack Bent-Over Rows','3 rounds of 12 reps',['Hold a securely packed backpack with both hands.','Stand feet shoulder-width apart.','Bend knees slightly and push hips back.','Lean forward with back straight.','Pull backpack toward stomach.','Lower it slowly.'],'60 seconds between rounds','Rounding back, using momentum, or pulling with excessive force.'),
      move('Pike Push-Ups','3 rounds of 8 reps',['Start in a push-up position.','Raise hips to form an inverted V.','Keep hands shoulder-width apart.','Bend elbows and lower head toward floor, slightly in front of hands.','Push back to start.'],'60 seconds between rounds','Letting hips drop, bending back excessively, or forcing shoulder range.'),
      move('Backpack Biceps Curls','3 rounds of 12 reps',['Stand upright with feet shoulder-width apart.','Hold backpack securely with both hands.','Keep elbows close to body.','Bend elbows and lift backpack toward chest.','Lower it to start slowly.'],'45 seconds between rounds','Swinging body, moving elbows forward, or using a backpack that is too heavy.'),
      move('Close-Grip Push-Ups','3 rounds of 8 reps',['Start in a standard push-up position.','Place hands slightly closer than shoulder-width.','Keep body straight.','Bend elbows and lower chest toward floor.','Push up with elbows relatively close to body.'],'60 seconds between rounds','Hands uncomfortably close, dropping hips, or flaring elbows.'),
      move('Plank Shoulder Taps','2 rounds of 12 reps per side',['Start in a high plank with hands below shoulders.','Keep legs extended and body straight.','Lift right hand and touch left shoulder.','Return hand to floor.','Repeat with left hand and alternate.'],'45 seconds between rounds','Rotating hips excessively, dropping lower back, or rushing.')
    ],
    cooldown:['Stretch chest against a wall for 30 seconds.','Cross-body shoulder stretch for 30 seconds on each arm.','Stretch triceps for 30 seconds on each arm.','Gentle arm circles for 30 seconds.'],
    closing:'Workout complete! You trained the major upper-body muscle groups: chest, back, shoulders, biceps, and triceps.'
  },
  {
    slug:'lower-body-strength', title:'Lower Body Strength', level:'Intermediate', duration:'25–30 minutes', focus:'Legs · Glutes', equipment:'None (a sturdy chair or wall is optional)',
    desc:'A lower-body routine for leg strength, balance, and glute development, covering quadriceps, hamstrings, calves, and glutes.',
    image:'photo-1518611012118-696072aa579a', objective:'Lower-body strength and stability',
    warmup:['March in place for 1 minute.','Perform 10 slow bodyweight squats.','Perform 10 alternating leg swings.','Rotate ankles and gently move hips for 1 minute.'],
    safety:'Make sure your knees and ankles feel comfortable before starting. Use a stable chair and wall support where appropriate.',
    moves:[
      move('Bodyweight Squats','3 rounds of 15 reps',['Stand with feet shoulder-width apart and toes slightly outward.','Push hips back and bend knees.','Lower while keeping chest upright.','Push through heels and return to standing.'],'60 seconds between rounds','Knees collapsing inward, lifting heels, or rounding back.'),
      move('Reverse Lunges','3 rounds of 10 reps per leg',['Stand upright with feet hip-width apart.','Step right foot backward.','Bend both knees and lower body.','Keep front knee aligned with foot.','Push through front heel to return.','Repeat on the other leg.'],'60 seconds between rounds','Losing balance, short steps, or front knee collapsing inward.'),
      move('Glute Bridges','3 rounds of 15 reps',['Lie on your back with knees bent and feet flat.','Keep arms beside your body.','Push through heels and lift hips.','Squeeze glutes at the top.','Lower hips slowly.'],'45 seconds between rounds','Arching lower back or pushing through toes.'),
      move('Bulgarian Split Squats','2 rounds of 8 reps per leg',['Stand about one step in front of a sturdy chair.','Place top of right foot on chair behind you.','Keep left foot firmly on floor.','Bend front knee and lower slowly.','Push through front foot to stand.','Complete reps and switch legs.'],'60–90 seconds between rounds','Using an unstable chair, leaning too far forward, or front knee collapsing inward.'),
      move('Standing Calf Raises','3 rounds of 20 reps',['Stand upright with feet hip-width apart.','Hold a wall for balance if needed.','Raise heels slowly.','Hold for 1 second.','Lower heels until feet are flat.'],'45 seconds between rounds','Bouncing, using momentum, or shortening the movement.'),
      move('Wall Sit','2 rounds of 40 seconds',['Stand with back against a wall and feet slightly forward.','Slide back down slowly.','Bend knees to about 90 degrees or a comfortable angle.','Hold while breathing normally.','Push through feet and stand.'],'60 seconds between rounds','Knees falling inward, holding breath, or sliding too low if uncomfortable.')
    ],
    cooldown:['Standing quadriceps stretch for 30 seconds per leg.','Hamstring stretch for 30 seconds per leg.','Standing calf stretch for 30 seconds per leg.'],
    closing:'Workout complete! You worked your lower body, including legs, glutes, and calves.',
  },
  {
    slug:'strength-and-endurance', title:'Strength and Endurance', level:'Advanced', duration:'35–40 minutes', focus:'Full body · Strength · Cardio', equipment:'None or a weighted backpack',
    desc:'A challenging full-body workout for people with an established fitness foundation, combining strength and endurance movements.',
    image:'photo-1583454110551-21f2fa2afe61', objective:'Full-body strength, muscular endurance, and cardiovascular fitness',
    warmup:['March or jog in place for 1 minute.','Arm circles for 30 seconds.','Perform 10 bodyweight squats.','Perform 10 alternating reverse lunges.','Perform 10 easy or incline push-ups.','Finish with gentle hip and shoulder movements.'],
    safety:'This advanced session requires controlled technique and stamina. Warm up fully; scale or stop if you cannot maintain good form.',
    moves:[
      move('Push-Ups','4 rounds of 15 reps',['Place hands slightly wider than shoulder-width.','Extend legs behind you.','Keep body straight and core engaged.','Bend elbows and lower chest toward floor.','Push back up until arms extend.','Repeat with steady form.'],'60 seconds between rounds','Dropping hips, rushing, or flaring elbows excessively.'),
      move('Jump Squats','3 rounds of 12 reps',['Stand with feet shoulder-width apart.','Lower into a squat.','Push through feet and jump vertically.','Land softly with knees slightly bent.','Repeat only while form stays controlled.'],'60–90 seconds between rounds','Landing with straight knees, knees collapsing inward, or jumping without control.'),
      move('Backpack Bent-Over Rows','3 rounds of 15 reps',['Hold a securely packed backpack with both hands.','Stand shoulder-width apart and hinge hips back with knees slightly bent.','Keep back straight and arms hanging.','Pull backpack toward stomach.','Lower slowly.'],'60 seconds between rounds','Rounding back, swinging backpack, or using excessive weight.'),
      move('Bulgarian Split Squats','3 rounds of 12 reps per leg',['Stand in front of a stable chair.','Place one foot behind you on the chair.','Keep front foot firmly on floor.','Bend front knee and lower slowly.','Push through front foot to return.','Complete reps and switch legs.'],'60–90 seconds between rounds','Unstable surface, losing balance, or front knee collapsing inward.'),
      move('Mountain Climbers','3 rounds of 40 seconds',['Start in high plank with hands below shoulders.','Bring right knee toward chest, then extend it back.','Bring left knee toward chest.','Alternate at a steady pace.'],'45–60 seconds between rounds','Hips too high, lower back sagging, or shoulders behind hands.'),
      move('Pike Push-Ups','3 rounds of 10 reps',['Start in a push-up position and raise hips toward ceiling.','Keep hands shoulder-width apart.','Bend elbows and lower head toward floor.','Push back to the starting position.'],'60–90 seconds between rounds','Dropping hips, forcing head toward floor, or losing shoulder control.'),
      move('Burpees','3 rounds of 10 reps',['Stand with feet shoulder-width apart.','Squat and place hands on floor.','Jump feet back into plank.','Perform a push-up only if form stays controlled.','Jump feet toward hands.','Stand and jump vertically.','Repeat.'],'90 seconds between rounds','Lower back sagging, stiff-knee landings, or rushing.'),
      move('Forearm Plank','3 rounds of 45 seconds',['Lie face down and place forearms on floor, elbows below shoulders.','Extend legs behind you.','Lift body onto forearms and toes.','Tighten abdomen and glutes gently.','Hold a straight body position while breathing.'],'45–60 seconds between rounds','Dropping hips, lifting hips too high, or holding breath.')
    ],
    cooldown:['Walk slowly for 1 minute.','Stretch chest and shoulders for 1 minute.','Stretch quadriceps and hamstrings for 1 minute.','Ease into child’s pose and breathe deeply for 1 minute.'],
    closing:'Workout complete! This demanding session combines resistance, explosive, and cardiovascular movements.'
  }
];
