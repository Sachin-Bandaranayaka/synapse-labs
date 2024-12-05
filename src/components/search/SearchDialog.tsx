'use client'

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InstantSearchNext } from 'react-instantsearch-nextjs'
import { SearchBox, Hits } from 'react-instantsearch-hooks-web'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'
import Link from 'next/link'
import Image from 'next/image'

const searchClient = instantMeiliSearch(
  process.env.NEXT_PUBLIC_MEILISEARCH_HOST!,
  process.env.NEXT_PUBLIC_MEILISEARCH_SEARCH_KEY!
)

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: 'blog' | 'project'
  image?: string
}

function SearchHit({ hit }: { hit: SearchResult }) {
  return (
    <Link href={hit.url} className="block">
      <div className="group flex items-center gap-4 p-4 hover:bg-black/20 rounded-lg transition-colors">
        {hit.image && (
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={hit.image}
              alt={hit.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
            {hit.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">{hit.description}</p>
          <span className="text-xs text-accent mt-1 inline-block">
            {hit.type === 'blog' ? 'Blog Post' : 'Project'}
          </span>
        </div>
      </div>
    </Link>
  )
}

interface SearchDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchDialog({ isOpen, onClose }: SearchDialogProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-secondary p-6 shadow-xl transition-all">
                <InstantSearchNext searchClient={searchClient} indexName="content">
                  <SearchBox
                    placeholder="Search blog posts and projects..."
                    classNames={{
                      root: 'mb-6',
                      form: 'relative',
                      input:
                        'w-full bg-black/20 border border-gray-700 rounded-lg px-4 py-3 pl-10 focus:outline-none focus:border-accent text-white',
                      submit: 'absolute left-3 top-1/2 -translate-y-1/2',
                      submitIcon: 'w-4 h-4 fill-current text-gray-400',
                      reset: 'absolute right-3 top-1/2 -translate-y-1/2',
                      resetIcon: 'w-4 h-4 fill-current text-gray-400',
                    }}
                  />
                  <div className="mt-8 max-h-[60vh] overflow-y-auto">
                    <Hits
                      hitComponent={SearchHit}
                      classNames={{
                        list: 'space-y-2',
                      }}
                    />
                  </div>
                </InstantSearchNext>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
