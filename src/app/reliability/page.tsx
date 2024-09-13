import Hero from '@/components/hero';
import reabilityImg from 'public/reliability.jpg'

export default function ReliabilityPage() {
  return (
    <Hero 
      imgData={reabilityImg} 
      imgAlt='welding' 
      title='Super high reliability hosting' 
    />
  );
}
