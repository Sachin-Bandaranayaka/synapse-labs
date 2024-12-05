import { motion } from 'framer-motion';
import { AnimatedCounter } from './AnimatedCounter';

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    { label: 'Projects Completed', value: 50 },
    { label: 'Happy Clients', value: 30 },
    { label: 'Countries Reached', value: 15 },
    { label: 'Team Members', value: 20 },
  ].map((stat) => (
    <motion.div
      key={stat.label}
      className="text-center"
    >
      <div className="text-3xl font-bold text-synapse-cyan mb-2">
        <AnimatedCounter end={stat.value} suffix="+" />
      </div>
      <div className="text-gray-400">{stat.label}</div>
    </motion.div>
  ))}
</div> 