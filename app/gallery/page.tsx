'use client';

import { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { supabase } from '@/lib/supabase';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image as ImageIcon } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  image_url: string;
  category: string | null;
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  }

  const categories = ['all', ...Array.from(new Set(images.map(img => img.category).filter(Boolean)))] as string[];
  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter(img => img.category === selectedCategory);

  const placeholderImages = [
    { title: 'Modern Clinic Reception', category: 'clinic', url: 'https://images.pexels.com/photos/6627374/pexels-photo-6627374.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Dental Treatment Room', category: 'clinic', url: 'https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Advanced Dental Equipment', category: 'equipment', url: 'https://images.pexels.com/photos/3845622/pexels-photo-3845622.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Smile Transformation', category: 'results', url: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Professional Dental Care', category: 'treatment', url: 'https://images.pexels.com/photos/6627613/pexels-photo-6627613.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Patient Consultation', category: 'treatment', url: 'https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Teeth Whitening Results', category: 'results', url: 'https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Orthodontic Treatment', category: 'treatment', url: 'https://images.pexels.com/photos/6502307/pexels-photo-6502307.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { title: 'Dental Implant Procedure', category: 'treatment', url: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  const displayImages = images.length > 0 ? filteredImages : placeholderImages;

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our state-of-the-art facility, advanced equipment, and beautiful smile transformations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {images.length > 0 ? (
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="w-full justify-start mb-8 flex-wrap h-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-0">
                {loading ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Loading gallery...</p>
                  </div>
                ) : displayImages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayImages.map((image, index) => (
                      <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                        <div className="aspect-video relative overflow-hidden bg-gray-100">
                          <img
                            src={'image_url' in image ? image.image_url : image.url}
                            alt={image.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900">{image.title}</h3>
                          {'category' in image && image.category && (
                            <p className="text-sm text-gray-500 capitalize mt-1">{image.category}</p>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <ImageIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No images in this category yet.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {placeholderImages.map((image, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                  <div className="aspect-video relative overflow-hidden bg-gray-100">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900">{image.title}</h3>
                    <p className="text-sm text-gray-500 capitalize mt-1">{image.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied patients who trust us with their dental care
          </p>
        </div>
      </section>
    </div>
  );
}
